import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Main from './components/Main'
import MainImageGallery from './components/MainImageGallery'
import Footer from './components/Footer'
import "./css/style.css"
import { BrowserRouter as RouterDom } from "react-router-dom";

ReactDOM.render( <
    React.StrictMode > < RouterDom >
    <
    Header / >
    <
    Main / >
    <
    MainImageGallery / >
    <
    Footer / >
    <
    /RouterDom> < /
    React.StrictMode > ,
    document.getElementById('root')
);