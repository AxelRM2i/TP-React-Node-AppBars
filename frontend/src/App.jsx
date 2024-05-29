import express from 'express';
import { useState } from 'react';
import HeadAndThumb from './components/HeadAndThumb';
import Manager from './components/Manager';
import barsList from './pages/barsList';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <HeadAndThumb />
      <Manager />
    </Router>
    </>
  );
}

export default App
