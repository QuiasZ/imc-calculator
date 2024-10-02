import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularImc = () => {
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Magreza');
    } else if (imcCalculado < 25) {
      setClassificacao('Normal');
    } else if (imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 35) {
      setClassificacao('Obesidade Grau I');
    } else if (imcCalculado < 40) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form>
        <label>
          Altura (em metros):
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
        <br />
        <label>
          Peso (em quilogramas):
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={calcularImc}>
          Calcular IMC
        </button>
      </form>
      <p>IMC: {imc}</p>
      <p>Classificação: {classificacao}</p>
    </div>
  );
}

export default App;