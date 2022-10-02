import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  const handleOnAdd = () =>{
    console.log('Se agrego un producto al carrito')
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting={'Bienvenidos...'}/>
      <Counter onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
