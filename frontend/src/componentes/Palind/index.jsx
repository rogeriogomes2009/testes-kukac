import React from 'react'
import api from '../../servicos/api'
import { Field, Formik, Form } from 'formik'
import Swal from 'sweetalert2'


export const Palind = () => {

  const submitManual = async ({ valorInicial, valorFinal }) => {

    try {
      const response = await api.get(`/palind?valorInicial=${+valorInicial}&valorFinal=${+valorFinal}`)
      const palind = document.querySelector('[data-js="palind"]')
      if (!!palind.textContent) {
        palind.textContent = ''
      }
      response.data.map((number, idx) => {
        if (idx + 1 === response.data.length) {
          return palind.innerHTML += `
                  ${number}
              `
        }
        return palind.innerHTML += `
                  ${number} -
              `
      })
    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: `${response.data.error}`,
        confirmButtonText: 'Ok'
      })

    }
  }
  const limpManual = () => {
    const palind = document.querySelector('[data-js="palind"]')
    palind.textContent = ''
  }


  return (
    <>
      <div className="container background-container mt-5" >
        <h5 className='text-center mb-5'>Números Palíndromos</h5>
        <div>
          <Formik onSubmit={submitManual} initialValues={{ valorInicial: '', valorFinal: '' }} >
            <Form className="container d-flex flex-column align-items-center gap-3">
              <p>Digite os valores INICIAL e FINAL para que o app verifique se há números palíndromos!</p>
              <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                <label className="" htmlFor="valorInicial">Valor Inicial</label>
                <Field
                  className='values p-3'
                  name='valorInicial'
                  required-type='number'
                  id='valorInicial'
                  autoComplete='off'
                />
                <label className="" htmlFor="valorFinal">Valor Final</label>
                <Field
                  className='values p-3'
                  name='valorFinal'
                  required-type='number'
                  id='valorFinal'
                  autoComplete='off'
                />
              </div>
              <h5>Lista de números:</h5>
              <div className="box-numbers  p-3">
                <table data-js='palind' className="numbers">

                </table>
              </div>
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className='button-primary' type="submit">Submeter</button>
                <input className='button-primary-outline' type='reset' onClick={limpManual} value="Limpar" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Palind
