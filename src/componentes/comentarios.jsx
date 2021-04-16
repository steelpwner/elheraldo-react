import {Fragment} from 'react';
import {
    Link
} from 'react-router-dom';

function Comentario(props) {
    var estrellas = Array(props.estrellas).fill(null).map((_, i) => i);
    return (
        <Fragment>
            <div className="media">
                <div className="media-left"><img src={props.avatar} alt="" style={{width:"60px"}}/></div>
                <div className="media-body">
                    <h4 className="media-heading">{props.nombre}</h4>
                    <p>{props.comentario}</p>
                </div>
                <div className="media-right">
                    <div style={{display: "flex"}}>
                        {estrellas.map((estrella) => {
                            return (
                                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr/>
        </Fragment>
    )
}

function CargaComentarios(props) {
    return (
        <div class="progress">
				<div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
		    	aria-valuenow={props.valor} aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
				Cargando más comentarios...
			</div>
		</div>
    )
}

function Paginacion(props) {
    return (
        <div className="text-center inline">
			<ul className="pager">
				<li><Link to="#">Página anterior</Link></li>
				<ul className="pagination" style={{verticalAlign: "middle"}}>
					<li><Link to="#">1</Link></li>
					<li><Link to="#">2</Link></li>
					<li><Link to="#">3</Link></li>
					<li><Link to="#">4</Link></li>
					<li><Link to="#">5</Link></li>
				</ul>
			    <li><Link to="#">Página siguiente</Link></li>
			</ul>
		</div>
    )
}

function Comentarios(props) {
    return (
        <Fragment>
            <h4 className="text-center">Comentarios de nuestros clientes</h4>
            { props.comentarios.map((comentario) => {
                return (
                    <Comentario avatar={comentario.avatar} nombre={comentario.nombre} comentario={comentario.texto} estrellas={comentario.estrellas}></Comentario>
                )
            })}
            <CargaComentarios valor="70"></CargaComentarios>
            <Paginacion></Paginacion>
        </Fragment>
        
    )
}

export default Comentarios;
export {Comentario, CargaComentarios, Paginacion};