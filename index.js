import React from 'react';
import { render } from 'react-dom';
import playlist from './src/playlist/components/playlist';
import data from './src/api.json';
import Playlist from './src/playlist/components/playlist';

// console.log('Hola Mundo');

const container = document.getElementById('app');

// const holaMundo = <h1>Hola Estudiante!</h1>
// ReactDOM.render(que voy a renderizar, donde lo haré);

render(<Playlist data={data} />, app);