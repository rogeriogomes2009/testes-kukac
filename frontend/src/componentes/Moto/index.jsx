import React, { useState, useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import api from '../../services/api';
import './style.scss';
import Swal from 'sweetalert2';

const Motocyle = () => {
  const [motocyclesList, setMotocyclesList] = useState([]);

  const handleInput = (value) => {
    value.target.value = value.target.value.replace(/[^0-9]/g, '');
  };


  const cleanTable = () => {
    const motocycle = document.querySelector('[data-js="motocycle"]');
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
            `;
    }
  };



  const firstRender = async () => {
    try {
      const response = await api.get(`/motocycle`);
      setMotocyclesList(response.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Não foi possível carregar os dados das motos',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleSubmit = async ({ modelInfo, yearInfo, brandInfo, passengersInfo }) => {
    try {
      const response = await api.post(`/motocycle`, {
        model: modelInfo,
        year: +yearInfo,
        brand: brandInfo,
        passenger: +passengersInfo
      });
      setMotocyclesList(response.data);
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
      <div className="modal" id="motocycleModal" tabindex="-1" aria-labelledby="motocycleModal" aria-hidden="true" style={{ height: '100vh' }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content background-container">
            <div className="modal-header">
              <h5 className="modal-title" id="motocycleModal">Moto</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Formik onSubmit={handleSubmit} initialValues={{ modelInfo: '', yearInfo: '', brandInfo: '', passengersInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label className='col-4' htmlFor="modelInfo">Modelo</label>
                    <Field
                      className='values col-4 p-3'
                      name='modelInfo'
                      required-type='text'
                      id='modelInfo'
                      autoComplete='off'
                    />
                    <label htmlFor="yearInfo" className='col-4'>Ano de fabricação</label>
                    <Field
                      className='values col-4 p-3'
                      name='yearInfo'
                      required-type='number'
                      id='yearInfo'
                      autoComplete='off'
                      onInput={(e) => handleInput(e)}
                    />

                    <label htmlFor="brandInfo" className='col-4'>Marca</label>
                    <Field
                      className='values p-3 col-4'
                      name='brandInfo'
                      required-type='text'
                      id='brandInfo'
                      autoComplete='off'
                    />

                    <label htmlFor="passengersInfo" className='col-4'>Nº de Passageiros(1-2)</label>
                    <Field
                      className='values p-3 col-4'
                      name='passengersInfo'
                      required-type='number'
                      id='passengersInfo'
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
                      {!!motocyclesList && motocyclesList.map(({ model, year, brand, passenger, wheels }, idx) => {
                        return (
                          <tbody>
                            <tr key={idx}>
                              <th>{model}</th>
                              <th>{year}</th>
                              <th>{brand}</th>
                              <th>{passenger}</th>
                              <th>{wheels}</th>
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

export default Motocyle;
