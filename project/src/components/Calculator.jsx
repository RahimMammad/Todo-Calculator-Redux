
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bolme, Cix, Topla, Vurma, value1, value2, Ortalama } from '../redux/features/CalculatorReducer';

const Calculator = () => {
  const { inp1, inp2, value } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleTopla = () => {
    dispatch(Topla());
  };

  const handleCixma = () => {
    dispatch(Cix());
  };

  const handleVurma = () => {
    dispatch(Vurma());
  };

  const handleBolme = () => {
    dispatch(Bolme());
  };

  const handleOrtalama = () => {
    dispatch(Ortalama())
    console.log(dispatch(Ortalama()));
  }

  const handleInp1Change = (e) => {
    dispatch(value1(e.target.value));
  };

  const handleInp2Change = (e) => {
    dispatch(value2(e.target.value));
  };

  return (
    <>
    <h1>{value}</h1>
      <input type="text" value={inp1} onChange={handleInp1Change} />
      <input type="text" value={inp2} onChange={handleInp2Change} />
      <button onClick={handleTopla}>+</button>
      <button onClick={handleCixma}>-</button>
      <button onClick={handleVurma}>*</button>
      <button onClick={handleBolme}>/</button>
      <button onClick={handleOrtalama}>Ortalama</button>
    </>
  );
};

export default Calculator;