import React, { useContext, useState } from 'react';
import { CustomerContext } from '../context/Context';
import { Table } from "reactstrap";
import { Modal, Button } from 'react-bootstrap';
import CustomerUpdateModal from './CustomerUpdateModal';
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'


const CustomerList = () => {
    let navigate = useNavigate();
    const {
        customers,
        updateCustomer,
        deleteCustomer,
        currentCustomer,
        setCurrentCustomer,
        showModal,
        setShowModal
    } = useContext(CustomerContext);
    console.log("--inRL")
    

    const onDeleteCustomer = (customer) => {
        confirmAlert({
            title: `${customer.firstName} ${customer.lastName} Silinecek`,
            message: 'İşlemi onaylıyor musunuz ?',
            buttons: [
                {
                    label: 'Evet',

                    onClick: () => deleteCustomer(customer.id)
                },
                {
                    label: 'Hayır'
                }
            ]
        });
        
    }
    const onEditCustomer = (customer, event) => {

        setCurrentCustomer(customer)
        console.log(customer)
        setShowModal(showModal => !showModal)
        // navigate("/update")

    }
    
    return (
        <div className='col-lg-* col-md-* mb-*'>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map(customer => (

                        <tr key={customer.id}>
                            <th scope="row">{ }</th>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>
                                <Button
                                    variant='outline-danger'
                                    onClick={() => onDeleteCustomer(customer)}
                                >
                                    Sil
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant='outline-warning'
                                    onClick={() => onEditCustomer(customer)}
                                >
                                    Düzenle
                                </Button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </Table>
            <Modal className='main' show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Kullanıcı Güncelle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustomerUpdateModal currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-danger' onClick={() => setShowModal(!showModal)}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CustomerList;