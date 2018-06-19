import React from 'react';
import { render } from 'react-dom';
import data from '../api.json';
import Home from '../pages/containers/home';

// console.log('Hola Mundo');

const homeContainer = document.getElementById('home-container');

// const holaMundo = <h1>Hola Estudiante!</h1>
// ReactDOM.render(que voy a renderizar, donde lo haré);

render(<Home data={data} />, homeContainer);