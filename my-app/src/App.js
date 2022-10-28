
import { useState } from 'react';
import './App.css';
import {Banner} from './componentes/Banner';
import Time from './componentes/Time';
import Formulario from './Formulario';

function App() {

  const times = [


    {
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
  },

  {
    nome: 'Front-end',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },

  {
    nome: 'Data-Science',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },

  {
    nome: 'Desing',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },

  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },

  {
    nome: 'Inovação e gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  },

  {
    nome: 'SAP',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },

  {
    nome: 'ADM',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
  },

  {
    nome: 'Funcional',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
]

const [colaboradores, setColaboradores] = useState([])
const aoNovoColaboradorAdicionado = (colaborador) => {

setColaboradores([...colaboradores, colaborador])
}
  return (
      <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    {times.map(time => <Time 
    key={time.nome} 
    nome ={time.nome} 
    corPrimaria={time.corPrimaria} 
    corSecundaria={time.corSecundaria}
    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
    />)}
   
      </>
  );
}

export default App;

