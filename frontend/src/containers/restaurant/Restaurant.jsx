import React from 'react';
import './restaurant.css';
import { Row, Col } from "reactstrap";
import img from '../../assets/restaurant.jpg'

const Restaurant = () => {
    return (
        <div>
            <Row noGutters className="text-center big-img-container">
                <Col>
                    <img src={img} alt="extra fine cuisine" className="big-img center"/>
                </Col>
            </Row>
        </div>
    )
}

export default Restaurant

