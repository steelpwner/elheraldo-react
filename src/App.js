import React, { Fragment } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import Alerta from './componentes/alerta';
import Home from './componentes/home';
import Contacto from './componentes/formulario';

const comentarios = [{"avatar":"https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2018/06/shutterstock_126920099.jpg","nombre":"Anónimo 1","texto":"Geniales noticias!","estrellas":5},
{"avatar":"https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2018/06/shutterstock_126920099.jpg","nombre":"Anónimo 2","texto":"Muy buenas promociones!","estrellas":4},
{"avatar":"https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2018/06/shutterstock_126920099.jpg","nombre":"Anónimo 3","texto":"El mejor periódico!","estrellas":3}];

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container well">
          <div className="text-center">
            <img src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/el-heraldo-logo.svg" className="logo"/>
          </div>
          <Nav></Nav>
          <Alerta mensaje="¡ESTIMADO USUARIO! Queremos comunicarle que actualmente disponemos de una promoción del 20% en la suscripción anual a nuestros servicios" link="#"></Alerta>
          <Switch>
            <Route exact path="/">
              <Home comentarios={comentarios}></Home>
            </Route>
            <Route exact path="/contact">
                <Contacto></Contacto>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
