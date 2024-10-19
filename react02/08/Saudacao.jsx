import React from 'react';

function Saudacao() {
  const isDayTime = true; 

  return (
    <div>
      {isDayTime ? <h1>Bom dia</h1> : <h1>Boa noite</h1>}
    </div>
  );
}

export default Saudacao;