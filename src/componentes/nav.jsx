import {
    Link
} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Inicio</Link>
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						</button>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="#">Noticias <span className="badge">5 Nuevas</span></Link></li>
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
				</div>
			</nav>
    )
}

export default Nav;