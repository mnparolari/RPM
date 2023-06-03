import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './payment.css';
import usePaymentFees from '../Hooks/usePaymentFees';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Form from '../Form/Form';
import { completedForm } from '../../helpers/index';

const Payment = (props) => {

    const { feeCount, setFeeCount, interestRate, totalWithInterest, feeAmount } = usePaymentFees(props);
    const { removeList, totalAmount, postData, cartList, orderNumber } = props;

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    });

    const [showCreditCard, setShowCreditCard] = useState(false);
    const dataReceived = (data) => {
        setShowCreditCard(data)
    }

    const { number, name, expiry, cvc } = state;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        });
    };

    const alert = () => {
        if (completedForm([number, name, expiry, cvc])) {
            const MySwalThree = withReactContent(Swal)
            MySwalThree.fire({
                icon: 'error',
                title: '¡Oops... Hay datos sin completar!',
                text: 'Debés completarlos para finalizar el pago',
            });
        } else if ((number.length < 16) || (expiry.length < 4) || (cvc.length < 3)) {
            const MySwalFour = withReactContent(Swal)
            MySwalFour.fire({
                icon: 'error',
                title: '¡Oops... Hay datos incorrectos!',
                text: 'Revisá estar ingresando los dieciséis (16) números de tu tarjeta, los cuatro (4) dígitos para la fecha de vencimiento y/o que tu código de seguridad sea de tres (3) o cuatro (4) dígitos.',
            });
        } else {
            const MySwalOne = withReactContent(Swal)
            let timerInterval
            MySwalOne.fire({
                title: 'Procesando pago...',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            });
            setTimeout(() => {
                const MySwalTwo = withReactContent(Swal)
                MySwalTwo.fire({
                    title: <strong>Pago confirmado</strong>,
                    html: `¡Muchas gracias por elegir RPM, La casa del vinilo!`,
                    position: 'center',
                    icon: 'success',
                    showConfirmButton: true,
                    timer: 2000
                });
                removeList();
            }, 2500);
            setTimeout(() => {
                const MySwalFive = withReactContent(Swal)
                MySwalFive.fire({
                    title: <strong>Tu número de órden:</strong>,
                    html: `${orderNumber}`,
                    position: 'center',
                    icon: 'success',
                    showConfirmButton: true,
                    timer: 3000
                });
                removeList();
            }, 4500);
        };
    };

    const feesArray = [
        {
            "value": 1,
            "quantityfees": 1,
        },
        {
            "value": 3,
            "quantityfees": 3,
        },
        {
            "value": 6,
            "quantityfees": 6,
        },
        {
            "value": 12,
            "quantityfees": 12,
        }
    ];

    return (
        <div className="payment">
            <div className="credit-card">
                <h5 style={{ fontWeight: "bold", paddingBottom: "20px", color: "#2F7864ff" }}>COMPLETÁ TUS DATOS</h5>
                <Form postData={postData} totalAmount={totalAmount} cartList={cartList} dataReceived={dataReceived} />
                {showCreditCard &&
                    <>
                        <Cards number={state.number} name={state.name} expiry={state.expiry} cvc={state.cvc} focused={state.focus} />
                        <form className="form-pay">
                            <div className="form-group">
                                <label htmlFor="number" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem" }}>Número de tarjeta:</label>
                                <input type="text" name="number" id="number" maxLength={16} className="form-control" onChange={handleInputChange} onFocus={handleFocusChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem", marginTop: "5px" }}>Nombre del titular:<br /><small>(como figura en la tarjeta)</small></label>
                                <input type="text" name="name" id="name" className="form-control" onChange={handleInputChange} onFocus={handleFocusChange} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="expiry" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem" }} placeholder='Fecha de expiración:'>Fecha de expiración:</label>
                                    <input type="text" name="expiry" id="expiry" maxLength={4} className="form-control" placeholder='MMAA' onChange={handleInputChange} onFocus={handleFocusChange} />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="cvc" style={{ color: "#000", fontWeight: "bold", fontSize: "0.9rem" }}>CVC:</label>
                                    <input type="text" name="cvc" id="cvc" maxLength={4} className="form-control" onChange={handleInputChange} onFocus={handleFocusChange} />
                                </div>
                            </div>
                            <div className="detail-credit">
                                <div className="detail-fees">
                                    <p style={{ fontWeight: "bold", fontSize: "1.3rem", padding: "5px" }}>Total a pagar: ${totalWithInterest.toLocaleString()}</p>
                                    <div>
                                        <label htmlFor="feeCount" style={{ color: "#000", fontWeight: "bold", fontSize: "0.8rem" }}>Cuotas</label>
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" id="feeCount" value={feeCount} onChange={(e) => setFeeCount(parseInt(e.target.value))} required>
                                            {feesArray.map(result => (
                                                <option key={result.value} value={result.value}>{result.quantityfees} cuota/s</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div style={{ border: "2px solid", borderRadius: "3%", marginTop: "15px", padding: "5px" }}>
                                        <p style={{ marginTop: "15px", color: "#000", fontWeight: "bold", fontSize: "1rem" }}>Tasa de interés: {interestRate * 100}%</p>
                                        <p style={{ color: "#000", fontWeight: "bold", fontSize: "1rem" }}>Interés en pesos: ${(totalWithInterest - totalAmount).toLocaleString()}</p>
                                        <p style={{ color: "#000", fontWeight: "bold", fontSize: "1rem" }}>Tus cuotas serán de ${feeAmount.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                            <Link onClick={alert} className="waves-effect waves-light btn-small" id="btn-payment">Finalizar pago</Link>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}

export default Payment