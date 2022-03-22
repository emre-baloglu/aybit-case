import React from 'react';
import {Row,Col} from "reactstrap";
import CategoryList from "../categories/CategoryList";
import CustomerList from "../customers/CustomerList";

const  Dashboard = () => {
        return (
            <div>
                <Row>
                <Col xs="3">
                    <CategoryList />
                </Col>
                <Col xs="9">
                    <CustomerList />
                </Col>
                </Row>
            </div>
        )
}
export default Dashboard;