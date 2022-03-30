import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Cep from './Cep';
import api from '../../services/api';
import Swal from 'sweetalert2';

const Ceps = () => {
  const [cepsList, setCepsList] = useState([]);

  const cepsId = ['primeirocep', 'segundocep', 'terceirocep', 'quartocep', 'quintocep'];

  const handleInput = (value) => {
    value.target.value = value.target.value.replace(/[^0-9]/g, '');
  };

  const handleSubmit = async ({ cep_1, cep_2, cep_3, cep_4, cep_5 }) => {
    const ceps = [cep_1, cep_2, cep_3, cep_4, cep_5];

    if (ceps.includes('', "", null, undefined)) {
      Swal.fire({
        title: 'Oops...',
        text: 'Você precisa informar 5 CEPs',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }


    if (!ceps.filter(cep => cep.length !== 8)) {
      Swal.fire({
        title: 'CEP inválido',
        text: 'Os CEPs devem conter 8 números',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    try {
      const { data } = await api.post(`/ceps`, {
        ceps: [
          +cep_1,
          +cep_2,
          +cep_3,
          +cep_4,
          +cep_5
        ]
      });

      setCepsList(data);
    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${response.data.error}`,
        confirmButtonText: 'Ok'
      });
    }
  };
  return (
    <>
      <div className="container background-container mt-5" >
        <h5 className='text-center mb-5'>Busca de CEPs</h5>
        <div>
          <Formik onSubmit={handleSubmit} initialValues={{ cep_1: '', cep_2: '', cep_3: '', cep_4: '', cep_5: '' }}>
            <Form className="container d-flex flex-column align-items-center gap-3">
              <h5>Digite os CEPs:</h5>
              <p>Informe os cinco CEPs que deverão ser consultados e aguarde aparecer o botão informativo ao lado direito da coluna.</p>
              <div className='container d-flex'>
                <div className=" container d-flex flex-column align-items-center justify-content-center gap-3">
                  <div className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                    <label >Endereço 1:</label>
                    <Field
                      className='values p-3 '
                      placeholder='CEP'
                      name='cep_1'
                      required-type='number'
                      id='cep_1'
                      autoComplete='off'
                      minLength='8'
                      maxLength='8'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <div className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                    <label >Endereço 2:</label>
                    <Field
                      className='values p-3 '
                      placeholder='CEP'
                      name='cep_2'
                      required-type='number'
                      id='cep_2'
                      autoComplete='off'
                      minLength='8'
                      maxLength='8'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <div className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                    <label>Endereço 3:</label>
                    <Field
                      className='values p-3'
                      placeholder='CEP'
                      name='cep_3'
                      required-type='number'
                      id='cep_3'
                      autoComplete='off'
                      minLength='8'
                      maxLength='8'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <div className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                    <label>Endereço 4:</label>
                    <Field
                      className='values p-3'
                      placeholder='CEP'
                      name='cep_4'
                      required-type='number'
                      id='cep_4'
                      autoComplete='off'
                      minLength='8'
                      maxLength='8'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <div className='container d-flex flex-wrap justify-content-center align-items-center gap-1'>
                    <label>Endereço 5:</label>
                    <Field
                      className='values p-3'
                      placeholder='CEP'
                      name='cep_5'
                      required-type='number'
                      id='cep_5'
                      autoComplete='off'
                      minLength='8'
                      maxLength='8'
                      onInput={(e) => handleInput(e)}
                    />
                  </div>
                  <div className="container d-flex justify-content-center align-items-center gap-3">
                    <button className='button-primary p-2 mt-2' type="submit">Procurar</button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
          <div className='container'>
            <div className="box-numbers p-3">
              <div data-js='ceps' className="numbers container d-flex flex-wrap gap-3 justify-content-center align-items-center col-12 my-4">
                {!!cepsList && cepsList?.map(({ uf, logradouro, bairro, localidade }, idx) => {
                  return (
                    <Cep
                      key={idx}
                      uf={uf}
                      cep={idx + 1}
                      logradouro={logradouro}
                      bairro={bairro}
                      cidade={localidade}
                      idModal={cepsId[idx]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ceps;
