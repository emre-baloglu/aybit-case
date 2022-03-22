import React, { useContext, useState, useEffect } from 'react'
import CustomerContext from '../context/Context';
import axios from 'axios';



const Login = () => {
    const loginUrl = "https://localhost:7207/api/Auth/login";
    const {
        currentCustomer,
        setCurrentCustomer
    } = useContext(CustomerContext);

    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: loginUrl,
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
                                <label htmlFor='email'>Email</label>
                                <input
                                    onChange={(event) => setUser({
                                        ...user, email: event.target.value
                                    })}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email Adresi Girin"
                                    className="form-control"
                                    value={user.email}
                                    variant="outlined"
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Parola</label>
                                <input
                                    onChange={(event) => setUser({
                                        ...user, password: event.target.value
                                    })}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Parolanızı Girin"
                                    className="form-control"
                                    value={user.password}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    onChange={(event) => setUser({
                                        ...user, rememberMe: event.target.value
                                    })}
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    className='form-group'
                                    color='success'
                                    // value={currentCustomer.checkbox}
                                />
                                <label htmlFor='checkbox'>Beni hatırla</label>
                            </div>
                            <div className='form-group'>
                                <button className=" form-control btn btn-outline-success btn-block" type="submit">Giriş Yap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login