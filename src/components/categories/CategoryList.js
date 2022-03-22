import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

import CustomerContext from '../context/Context';
import * as actionTypes from "../../actions/actionTypes";
import axios from 'axios';

const CategoryList = () => {
  const {
    dispatch,
    customersUrl,
    customers,
    categories,
    currentCategory,
    isUserAuth,
    setIsUserAuth
  } = useContext(CustomerContext);

  const selectCategory = (category, event) => {
    // console.log(category, event)
    dispatch({type: actionTypes.CHANGE_CATEGORY, payload: category})
    console.log("--inSCF")
    console.log(currentCategory)
    getCustomers(category.id);
  };

  

  const getCustomers = async (categoryId) => {
    let url = customersUrl;
    if (categoryId !== null || undefined) {
      url = url + "/?categoryId=" + categoryId;
    };

    const response = await axios.get(url)
      .then(response => {
        dispatch({ type: actionTypes.GET_CUSTOMERS_SUCCESS, payload: response.data })
      });
      console.log("--inGRF")
      console.log(currentCategory)
      console.log("")
  };

  console.log(`${categories?.map(category => category)} in the CL`)
  return (
    <div className='col-lg-* col-md-* col-sm-*'>
      <h3>
        <Badge color="warning"># Kategorileri</Badge>
      </h3>
      <ListGroup layout="horizontal-md ">
        {categories?.map(category => (
          <ListGroupItem
            className="d-flex justify-content-between align-items-start"
            active={currentCategory.id === category.id}
            onClick={() => selectCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )

}

export default CategoryList;