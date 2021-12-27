
import React, { useState } from 'react';
import s from './App.module.css';
import { Container } from './components/content/container';



export const App: React.FC<IContentProps> = () => {

  return (
    <Container />
  )
}

export default App;

interface IContentProps {

}
