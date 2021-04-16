function Contacto () {
    return (
    <div className="col-md-12 well">
        <h4 className="text-center">Formulario de contacto</h4>
        <form action="#" method="GET">
            <div className="form-group">
                <label>Nombre<span style={{color:"red"}}>*</span></label>
                <input type="text" name="nombre" className="form-control" value="" required/>
            </div>
            <div className="form-group">
                <label>Correo electrónico<span style={{color:"red"}}>*</span></label>
                <input type="email" name="nombre" className="form-control" value="" required/>
            </div>
            <div className="form-group">
                <label>Mensaje<span style={{color:"red"}}>*</span></label>
                <textarea className="form-control" required></textarea>
            </div>
            <div style={{textAlign: "right"}}>
                <button className="btn btn-success">Enviar solicitud de contacto</button>
            </div>
        </form>
    </div>
    )
}

export default Contacto;