function Noticia1 (props) {
    return (
        <div className="col-md-12 well">
			<div className="col-md-9">
				<h3 className="text-center" style={{fontWeight: "bold"}}>{props.titulo}</h3>
				<p>{props.mensaje}</p>
		</div>
		<div className="col-md-3">
			<img src={props.imagen} style={{maxWidth: "100%"}}></img>
		</div>
		</div>
    )
}

function Noticia2 (props) {
    return (
        <div className="col-md-12 well">
			<div className="col-md-4">
				<h3 className="text-center" style={{fontWeight: "bold"}}>{props.titulo}</h3>
				<p>{props.mensaje}</p>
		</div>
		<div className="col-md-8">
			<img src={props.imagen} style={{maxWidth: "100%"}}></img>
		</div>
		</div>
    )
}

function Noticia3 (props) {
    return (
        <div className="col-md-6 well">
            <h3 className="text-center" style={{fontWeight: "bold"}}>{props.titulo}</h3>
            <div className="text-center">
			    <img src={props.imagen} style={{maxWidth: "50%", maxHeight: "14rem"}}></img>
		    </div>
            <br/>
			<p>{props.mensaje}</p>
		</div>
    )
}

export default Noticia1;
export {Noticia2,Noticia3};