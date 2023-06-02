import React, { useState } from 'react';
import './form.css';
import { serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { completedForm } from '../../helpers/index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Form = (props) => {

    const { totalAmount, cartList, postData, dataReceived } = props;

    const [validation, setValidation] = useState(false);

    const [personalData, setPersonalData] = useState({
        buyer: {
            name: "",
            phone: "",
            email: ""
        },
        items: cartList,
        date: serverTimestamp(),
        totalAmount
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalData({
            ...personalData,
            buyer: {
                ...personalData.buyer,
                [name]: value
            }
        });
    };

    const { buyer: { email, name, phone }, } = personalData;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (completedForm([name, phone, email])) {
            const MySwalThree = withReactContent(Swal)
            MySwalThree.fire({
                icon: 'error',
                title: 'Oops... ¡Hay datos sin completar!',
                text: 'Debes completarlos para finalizar el pago',
            });
        } else {
            postData({ data: personalData });
            setTimeout(() => {
                setValidation(true);
                dataReceived(true);
            }, 1000);
        };
    };

    return (
        <div className="form">
            <form className="form-buyer">
                <div className="form-group">
                    <label htmlFor="name" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem", marginTop: "5px" }}>NOMBRE COMPLETO:</label>
                    <input type="text" name="name" id="name" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem", marginTop: "5px" }}>TELÉFONO: </label>
                    <input type="text" name="phone" id="phone" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem", marginTop: "5px" }}>E-MAIL:</label>
                    <input type="text" name="email" id="email" className="form-control" onChange={handleChange} />
                </div>
            </form>
            <Link onClick={handleSubmit} type= "submit" className="waves-effect waves-light btn-small" id="btn-autentification">Validar datos<i className="small material-icons">verified_user</i></Link>
            {validation &&
                <h6 style={{ color: "green", marginBottom: "30px"}}>Datos validados correctamente<i className="x-small material-icons">check</i></h6>
            }
        </div>
    )
}

export default Form