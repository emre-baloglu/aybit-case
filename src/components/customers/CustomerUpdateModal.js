import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { CustomerContext } from "../context/Context";
import posed from 'react-pose';
import Select from 'react-select';


const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  }
});

const CustomerUpdateModal = () => {

  const {
    currentCustomer,
    setCurrentCustomer,
    showModal,
    setShowModal,
    options,
    selectedOption,
    setSelectedOption,
    isVisible,
    setIsVisible,
    updateCustomer,
    currentCategory
  } = useContext(CustomerContext);

  console.log(currentCustomer)

  const changeVisibility = () => {
    setIsVisible(isVisible => !isVisible)
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setCurrentCustomer({ ...currentCustomer, [name]: value });
    console.log("changeHandler")
  }

  const selectHandler = (event) => {
    console.log(event.value)
    setSelectedOption(event.value)

  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    updateCustomer(currentCustomer)
    setShowModal(showModal => ! showModal)
  }

  return (
    <div className='cold-md-8 mb-4'>

      <button onClick={changeVisibility} className='btn btn-dark btn-block mb-2'>{isVisible ? "Hide Form" : "Show Form"}</button>
      <Animation pose={isVisible ? "visible" : "hidden"}>
        <div className='customer'>
          <div className='customer-header'>
            {/* <h4>Müşteri Bilgilerini Güncelleme Formu</h4> */}
          </div>
          <div className='customer-body'>
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
                  placeholder="Email Adresi Girin"
                  className="form-control"
                  value={currentCustomer.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='customerPhone'>Telefon</label>
                <input
                  onChange={(event) => setCurrentCustomer({
                    ...currentCustomer, customerPhone: event.target.value
                  })}
                  type="text"
                  name="customerPhone"
                  id="customerPhone"
                  placeholder="Telefon"
                  className="form-control"
                  value={currentCustomer.customerPhone}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='cityName'>İl</label>
                <input
                  onChange={(event) => setCurrentCustomer({
                    ...currentCustomer, cityName: event.target.value
                  })}
                  type="text"
                  name="cityName"
                  id="cityName"
                  placeholder="İl Adı Girin"
                  className="form-control"
                  value={currentCustomer.cityName}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='districtName'>İlçe</label>
                <input
                  onChange={(event) => setCurrentCustomer({
                    ...currentCustomer, districtName: event.target.value
                  })}
                  type="text"
                  name="districtName"
                  id="districtName"
                  placeholder="İlçe Adı Girin"
                  className="form-control"
                  value={currentCustomer.districtName}
                />
              </div>
              <div className='form-group'>
                <button
                  className="form-control btn btn-outline-success btn-block" type="submit"
                >
                  Müşteri Bilgilerini Güncelle</button>
              </div>
            </form>
          </div>
        </div>
      </Animation>
    </div>
  )


}

export default CustomerUpdateModal;