import {
    Link
} from 'react-router-dom';

function Alerta (props) {
    return (
        <div className="col-md-12 alert alert-warning">
            {props.mensaje}, Puede consultarlo mejor <Link to={props.link}>Aquí</Link>
        </div>
    )
}

export default Alerta;