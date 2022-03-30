import React from 'react';

const Cep = ({ cep, uf, cidade, logradouro, bairro, idModal }) => {

  return (
    <>
      <button type="button" class="button-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
        Endereço - {cep}
      </button>

      <div class="modal fade" id={idModal} tabIndex="-1" aria-labelledby={idModal} aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content background-container">
            <div class="modal-header">
              <h5 class="modal-title" id={idModal}>Endereço - {cep}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>uf: {!!uf ? uf : 'UF não encontrada'}</p>
              <p>cidade: {!!cidade ? cidade : 'Cidade não encontrada'}</p>
              <p>logradouro: {!!logradouro ? logradouro : 'Logradouro não encontrado'}</p>
              <p>bairro: {!!bairro ? bairro : 'Bairro não encontrado'}</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Cep;
