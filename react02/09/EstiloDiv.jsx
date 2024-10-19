import React from 'react';

function EstiloDiv() {
  const estilo = {
    backgroundColor: 'purple', 
    color: 'white',              
    padding: '20px',             
    margin: '20px',             
    borderRadius: '5px',         
    textAlign: 'center'          
  };

  return (
    <div style={estilo}>
      <h1>Isso aqui está em line</h1>
          </div>
  );
}

export default EstiloDiv;
