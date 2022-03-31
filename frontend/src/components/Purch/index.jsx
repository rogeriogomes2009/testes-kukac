import React from 'react'
import api from '../../services/api'
import { Field, Formik, Form } from 'formik'
import Swal from 'sweetalert2'

import './styles.scss'

export const Purchase = () => {

  const handleInput = (value) => {
    value.target.value = value.target.value.replace(/[^0-9]/, '')
  }

  const handleSubmmit = async ({ purchaseValue, payment }) => {


    if (purchaseValue === '' || payment === '') {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: `Favor Preencher todos os campos`,
        confirmButtonText: 'Ok'
      })
      return
    }

    try {
      const { data } = await api.get(`/purchase?purchaseValue=${+purchaseValue}&payment=${+payment}`)
      const total = document.querySelector('[data-js="purchase"]')

      if (!!total.textContent) {
        total.textContent = ''
      }
      total.innerHTML = `
        <tr >
            <th>Troco</th>
            <th>Quantidade de notas de $100</th>
            <th>Quantidade de notas de $10</th>
            <th>Quantidade de notas de $1</th>
        </tr>
        <tr >
            <th>$ ${data.change}</th>
            <th>${data["notas de 100"]}</th>
            <th>${data["notas de 10"]}</th>
            <th>${data["notas de 1"]}</th>
        </tr>
        `

    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: `${response.data.error}`,
        confirmButtonText: 'Ok'
      })

    }
  }

  const handleClean = () => {
    const purchase = document.querySelector('[data-js="purchase"]')
    purchase.innerHTML = ''
  }

  return (
    <>
      <div className="container background-container mt-5" >
        <h5 className="text-center">Troco Devido</h5>
        <div>
          <Formik onSubmit={handleSubmmit} initialValues={{ purchaseValue: '', payment: '' }} >
            <Form className="container d-flex flex-column align-items-center gap-3">
              <p>Favor informar preço do produto comprado. Logo após o app informará o valor do troco
                e quantas e quais notas serão devolvidas ao comprador.
              </p>
              <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                <div className='d-flex gap-3 align-items-center justify-content-space-between flex-wrap'>
                  <label className="" htmlFor="purchaseValue">Total da Compra</label>
                  <Field
                    className='values p-3 '
                    name='purchaseValue'
                    required-type='number'
                    id='purchaseValue'
                    autoComplete='off'
                    onInput={(e) => handleInput(e)}
                  />
                </div>
                <div className='d-flex gap-3 align-items-center justify-content-space-between flex-wrap'>
                  <label className="" htmlFor="payment">Valor do Pagamento</label>
                  <Field
                    className='values p-3 '
                    name='payment'
                    required-type='number'
                    id='payment'
                    autoComplete='off'
                    onInput={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <h5 className='mt-4'>Seu troco e suas notas</h5>
              <div className="box-numbers p-3">
                <table data-js='purchase' className="numbers purchase-table container d-flex justify-content-center align-items-center">

                </table>
              </div>
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className='button-primary' type="submit">Submeter</button>
                <button className='button-primary' onClick={handleClean} type="reset"> Limpar Campo </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Purchase
