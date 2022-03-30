import React, { useState, useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import api from '../../services/api';
import './style.scss';
import Swal from 'sweetalert2';

const Car = () => {
  const [carsList, setCarsList] = useState([]);

  const handleInput = (value) => {
    value.target.value = value.target.value.replace(/[^0-9]/g, '');
  };

  const cleanTable = () => {
    const car = document.querySelector('[data-js="car"]');
    if (!!car.innerHTML) {
      car.innerHTML =
        `
        <thead>
            <tr>
               <th>Modelo</th>
               <th>Ano de Fabricação</th>
               <th>Marca</th>
               <th>Quantidade de Portas</th>
            </tr>
        </thead>
            `;
    }
  };

  const firstRender = async () => {
    try {
      const response = await api.get(`/car`);
      setCarsList(response.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Não foi possível carregar os dados dos carros',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleSubmit = async ({ modelInfo, yearInfo, brandInfo, doorsInfo }) => {


    try {
      const response = await api.post(`/car`, {
        model: modelInfo,
        year: +yearInfo,
        brand: brandInfo,
        doors: +doorsInfo
      });
      setCarsList(response.data);
    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
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
              <Formik onSubmit={handleSubmit} initialValues={{ modelInfo: '', yearInfo: '', brandInfo: '', doorsInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                  <div className=" d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label className='col-4' htmlFor="modelInfo">Modelo</label>
                    <Field
                      className='values p-3 col-4'
                      name='modelInfo'
                      required-type='text'
                      id='modelInfo'
                      autoComplete='off'
                    />
                    <label htmlFor="yearInfo" className='col-4'>Ano de fabricação</label>
                    <Field
                      className='values col-4 p-3'
                      name='yearInfo'
                      required-type='text'
                      id='yearInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />
                    <label htmlFor="brandInfo" className='col-4'>Marca</label>
                    <Field
                      className='values col-4 p-3'
                      name='brandInfo'
                      required-type='text'
                      id='brandInfo'
                      autoComplete='off'
                    />
                    <label htmlFor="doorsInfo" className='col-4'>Quantidade de portas(2-4)</label>
                    <Field
                      className='values p-3 col-4'
                      name='doorsInfo'
                      required-type='number'
                      id='doorsInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <h5 className='mt-2'>Carros cadastrados:</h5>
                  <div className="box-numbers container d-flex flex-column justify-content-center align-items-center p-3">
                    <table data-js='car' className="numbers align-items-center justify-content-center">
                      <tr >
                        <th>Modelo</th>
                        <th>Ano de Fabricação</th>
                        <th>Marca</th>
                        <th>Qntd de Portas</th>
                      </tr>
                      {!!carsList && carsList.map((car, idx) => {
                        return (
                          <tbody>
                            <tr key={idx}>
                              <th>{car.model}</th>
                              <th>{car.year}</th>
                              <th>{car.brand}</th>
                              <th>{car.doors}</th>
                            </tr>

                          </tbody>
                        );
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
  );
};

export default Car;
