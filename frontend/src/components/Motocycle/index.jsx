import React, { useState, useEffect } from 'react'
import { Field, Formik, Form } from 'formik'
import api from '../../services/api'
import './styles.scss'
import Swal from 'sweetalert2'

const Motocycle = () => {
  const [motocyclesList, setMotocycleList] = useState([])

  const handleInput = (value) => {
    value.target.value = value.target.value.replace(/[^0-9]/g, '')
  }


  const tableClean = () => {
    const motocycle = document.querySelector('[data-js="motocycle"]')
    if (!!motocycle.innerHTML) {
      motocycle.innerHTML = `
           <thead>
              <tr>
                <th>Modelo</th>
                <th>Ano de Fabricação</th>
                <th>Marca</th>
                <th>Nº de Passageiros</th>
                <th>Quantidade de Rodas</th>
              </tr>
            </thead>
            `
    }
  }



  const initialRender = async () => {
    try {
      const response = await api.get(`/moto`)
      setMotocycleList(response.data)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: 'Não foi possível carregar os dados das motos',
        confirmButtonText: 'Ok'
      })
    }
  }

  const handleSubmmit = async ({ modeloInfo, anoInfo, marcaInfo, passageirosInfo }) => {
    try {
      const response = await api.post(`/moto`, {
        modelo: modeloInfo,
        ano: +anoInfo,
        marca: marcaInfo,
        passageiros: +passageirosInfo
      });
      setMotocycleList(response.data)
    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: `${response.data.error}`,
        confirmButtonText: 'Ok'
      })
    }
  }

  useEffect(() => {
    tableClean();
    initialRender();
  }, []);

  return (
    <>
      <div className="modal" id="motocycleModal" tabindex="-1" aria-labelledby="motocycleModal" aria-hidden="true" style={{ height: '100vh' }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content background-container">
            <div className="modal-header">
              <h5 className="modal-title" id="motocycleModal">Moto</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <Formik onSubmit={handleSubmmit} initialValues={{ modeloInfo: '', anoInfo: '', marcaInfo: '', passageirosInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label className='col-4' htmlFor="modeloInfo">Modelo</label>
                    <Field
                      className='values col-4 p-3'
                      name='modeloInfo'
                      required-type='text'
                      id='modeloInfo'
                      autoComplete='off'
                    />
                    <label htmlFor="anoInfo" className='col-4'>Ano de fabricação</label>
                    <Field
                      className='values col-4 p-3'
                      name='anoInfo'
                      required-type='number'
                      id='anoInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />

                    <label htmlFor="marcaInfo" className='col-4'>Marca</label>
                    <Field
                      className='values p-3 col-4'
                      name='marcaInfo'
                      required-type='text'
                      id='marcaInfo'
                      autoComplete='off'
                    />

                    <label htmlFor="passageirosInfo" className='col-4'>Nº de Passageiros(1-2)</label>
                    <Field
                      className='values p-3 col-4'
                      name='passageirosInfo'
                      required-type='number'
                      id='passageirosInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <h5>Motocicletas cadastradas:</h5>
                  <div className="box-numbers container d-flex flex-column justify-content-center align-items-center p-3">
                    <table data-js='motocycle' className="numbers align-items-center justify-content-center">
                      <tr >
                        <th>Modelo</th>
                        <th>Ano de Fabricação</th>
                        <th>Marca</th>
                        <th>Nº de Passageiros</th>
                        <th>Qntd de Rodas</th>
                      </tr>
                      {!!motocyclesList && motocyclesList.map(({ modelo, ano, marca, passageiros, rodas }, idx) => {
                        return (
                          <tbody>
                            <tr key={idx}>
                              <th>{modelo}</th>
                              <th>{ano}</th>
                              <th>{marca}</th>
                              <th>{passageiros}</th>
                              <th>{rodas}</th>
                            </tr>
                          </tbody>
                        )
                      })}

                    </table>
                  </div>
                  <div className="container d-flex justify-content-center align-items-center gap-3">
                    <button className='button-primary' type="submit">Cadastrar</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Motocycle
