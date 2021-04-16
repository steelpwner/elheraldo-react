import {
    Link
} from 'react-router-dom';


function Footer () {
    return (
    <footer className="well">
        <div className="row">
            <div className="col-md-3">
                <h3 className="text-center">Links</h3>
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="#">Noticias<span className="badge">5 Nuevas</span></Link></li>
                    <li><Link to="#">Judiciales</Link></li>
                    <li><Link to="#">Deportes</Link></li>
                    <li><Link to="#">Clasificados</Link></li>
                    <li><Link to="#">Política</Link></li>
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Más <span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="#">Acerca de nosotros</Link></li>
                            <li><Link to="/contact">Contáctanos</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3 className="text-center">Contacto</h3>
                <p>Dirección sede Bogotá: Calle 88 # 13 A - 07</p>
                <p>Teléfono: (1)2185733</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">El heraldo</h3>
                    <p>El Heraldo es un periódico colombiano con sede en Barranquilla, fundado el 28 de octubre de 1933 por Alberto Pumarejo, Juan B. Fernández Ortega y Luis Eduardo Manotas Llinás. Es en la actualidad el diario de mayor circulación en la Región Caribe colombiana y quinto más leído a nivel nacional.</p>
                    <p className="text-center"><Link to="https://elheraldo.co">Ir a la página principal</Link></p>
                </div>
                <div className="col-md-2 text-center">
                    <h3 className="text-center">Redes sociales</h3>
                    <button className="btn btn-primary" style={{marginBottom: 1.25 + "rem"}}>Facebook</button>
                    <button className="btn btn-danger" style={{marginBottom: 1.25 + "rem"}}>Youtube</button>
                    <button className="btn btn-warning" style={{marginBottom: 1.25 + "rem"}}>Instagram</button>
                </div>
            </div>
        </footer>
        )
}

export default Footer;