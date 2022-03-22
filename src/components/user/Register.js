import React, { useContext, useState } from 'react'
import CustomerContext from '../context/Context';
// import {
//     FormControlLabel, FormGroup, Checkbox,
//     TextField, Box, FormControl, InputLabel,
//     OutlinedInput, InputAdornment, IconButton, Button
// } from '@mui/material';

// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';

const Register = () => {

    const registerUrl = "https://localhost:7207/api/Auth/register";
    const {
        currentCustomer,
        setCurrentCustomer
    } = useContext(CustomerContext);
    // const [showPassword, setShowPassword] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: registerUrl,
            data: currentCustomer,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8",
            }
        })
            .then(response => console.log(response))
    }

    return (
        <div>
            <div className='cold-md-8 mb-4'>
                <div className='user-auth'>
                    <div className='user-header'>
                        {/* <h4>Müşteri Ekleme Formu</h4> */}
                    </div>
                    <div className='user-body'>
                        <form onSubmit={onSubmitHandler}>
                            <div className='form-group'>
                                <label htmlFor='firstName'>Ad</label>
                                <input
                                    onChange={(event) => setCurrentCustomer({
                                        ...currentCustomer, firstName: event.target.value
                                    })}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Adınızı Girin"
                                    className="form-control"
                                    value={currentCustomer.firstName}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Soyad</label>
                                <input
                                    onChange={(event) => setCurrentCustomer({
                                        ...currentCustomer, lastName: event.target.value
                                    })}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Soyadınızı Girin"
                                    className="form-control"
                                    value={currentCustomer.lastName}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    onChange={(event) => setCurrentCustomer({
                                        ...currentCustomer, email: event.target.value
                                    })}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email Adresinizi Girin"
                                    className="form-control"
                                    value={currentCustomer.email}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Parola</label>
                                <input
                                    onChange={(event) => setCurrentCustomer({
                                        ...currentCustomer, password: event.target.value
                                    })}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Parolanızı Girin"
                                    className="form-control"
                                    value={currentCustomer.password}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    onChange={(event) => setCurrentCustomer({
                                        ...currentCustomer, checkbox: event.target.value
                                    })}
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    className='form-group'
                                    color='success'
                                    // value={currentCustomer.checkbox}
                                />
                                <label htmlFor='checkbox'>Hizmet şartlarını ve gizlilik politikasını kabul ediyorum.</label>
                            </div>
                            <div className='form-group'>
                                <button className=" form-control btn btn-outline-success btn-block" type="submit">Kayıt Ol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register