import Noticia1, {Noticia2, Noticia3} from './noticias';
import Comentarios from './comentarios';
import {Fragment} from 'react';

function Home(props) {
    return (
        <Fragment>
            <Noticia1 
              titulo="Fuertes brisas en Barranquilla"
              mensaje="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              imagen="https://www.eltiempo.com/files/image_640_428/uploads/2021/02/25/60379528d6809.png"></Noticia1>
              <Noticia2
              titulo="Segunda noticia"
              mensaje="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              imagen="https://as01.epimg.net/meristation/imagenes/2020/07/01/betech/1593639982_675493_1593640090_noticia_normal.jpg"></Noticia2>
              <Noticia3
              titulo="Tercera noticia"
              mensaje="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              imagen="https://www.elheraldo.co/sites/default/files/styles/414x310/public/articulo/2020/06/15/centro1.jpg?itok=blKLIBvT"></Noticia3>
              <Noticia3
              titulo="Cuarta noticia"
              mensaje="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              imagen="https://www.elheraldo.co/sites/default/files/styles/860x484/public/foto/2020/04/05/entrega_de_ayudas_en_villa_cordialidad_5.jpeg?itok=upQh-ySL"></Noticia3>
              <Comentarios comentarios={props.comentarios}></Comentarios>
        </Fragment>
    )
}

export default Home;