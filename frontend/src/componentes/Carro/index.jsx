import React, { useState, useEffect } from 'react'
import { Field, Formik, Form } from 'formik'
import api from '../../servicos/api'
import './styles.scss'
import Swal from 'sweetalert2'

const Carro = () => {
  const [listaCarros, setListCarros] = useState([])

  const handleInput = (valor) => {
    valor.target.valor = valor.target.valor.replace(/[^0-9]/g, '')
  }

  const cleanTable = () => {
    const carro = document.querySelector('[data-js="carro"]')
    if (!!carro.innerHTML) {
      carro.innerHTML =
        `
        <thead>
            <tr>
               <th>Modelo</th>
               <th>Ano de Fabricação</th>
               <th>Marca</th>
               <th>Quantidade de Portas</th>
            </tr>
        </thead>
            `
    }
  }

  const firstRender = async () => {
    try {
      const response = await api.get(`/carro`);
      setListCarros(response.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: 'Impossível carregar dados dos carros sem as informações necessárias',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleSubmit = async ({ modeloInfo, anoInfo, marcaInfo, portasInfo }) => {


    try {
      const response = await api.post(`/carro`, {
        modelo: modeloInfo,
        ano: +anoInfo,
        marca: marcaInfo,
        portas: +portasInfo
      });
      setListCarros(response.data);
    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Falha...',
        text: `${response.data.error}`,
        confirmButtonText: 'Ok'
      });
    }
  };

  useEffect(() => {
    cleanTable();
    firstRender();
  }, []);

  return (
    <>
      <div className="modal" id="carModal" tabIndex="-1" aria-labelledby="carModal" aria-hidden="true" style={{ height: '100vh' }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content background-container">
            <div className="modal-header">
              <h4 className="modal-title" id="carModal">Carro</h4>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Formik onSubmit={handleSubmit} initialValues={{ modeloInfo: '', anoInfo: '', marcaInfo: '', portasInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                  <div className=" d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label className='col-4' htmlFor="modeloInfo">Modelo</label>
                    <Field
                      className='values p-3 col-4'
                      name='modeloInfo'
                      required-type='text'
                      id='modeloInfo'
                      autoComplete='off'
                    />
                    <label htmlFor="anoInfo" className='col-4'>Ano de fabricação</label>
                    <Field
                      className='values col-4 p-3'
                      name='anoInfo'
                      required-type='text'
                      id='anoInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />
                    <label htmlFor="marcaInfo" className='col-4'>Marca</label>
                    <Field
                      className='values col-4 p-3'
                      name='marcaInfo'
                      required-type='text'
                      id='marcaInfo'
                      autoComplete='off'
                    />
                    <label htmlFor="portasInfo" className='col-4'>Quantidade de portas(2-4)</label>
                    <Field
                      className='values p-3 col-4'
                      name='portasInfo'
                      required-type='number'
                      id='portasInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <h5 className='mt-2'>Carros cadastrados:</h5>
                  <div className="box-numbers container d-flex flex-column justify-content-center align-items-center p-3">
                    <table data-js='carro' className="numbers align-items-center justify-content-center">
                      <tr >
                        <th>Modelo</th>
                        <th>Ano de Fabricação</th>
                        <th>Marca</th>
                        <th>Qntd de Portas</th>
                      </tr>
                      {!!listaCarros && listaCarros.map((carro, idx) => {
                        return (
                          <tbody>
                            <tr key={idx}>
                              <th>{carro.modelo}</th>
                              <th>{carro.ano}</th>
                              <th>{carro.marca}</th>
                              <th>{carro.portas}</th>
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

export default Carro
