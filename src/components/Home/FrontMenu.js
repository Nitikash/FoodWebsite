import React from 'react'
import {Link} from "gatsby"
import Title from "../Globals/Title";
import Noodles from "../../images/Noodles.jpg";
import Manchurian from "../../images/Manchurian.png";
import friedrice from "../../images/friedrice.jpg";
import Chillipaneer from "../../images/Chillipaneer.jpg";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function FrontMenu() {
    return (
        <section className="py-5">
            
        <div className="container">
        <Title title="Today's Special" />
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
                <p>I'm not  drooling you are!!!!!!!   </p>                     
                <p>So what are you waiting from dig in and explore various cusines of your choice.</p>
            
                </p>
            </div>
            <Container>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Noodles} alt="Veg Noodles" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Veg Noodles</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.80</p>
                            </Card.Text>
                            
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Manchurian} alt="Manchurian" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Manchurian</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.100</p>
                            </Card.Text>
                           
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={friedrice} alt="Fried Rice" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Fried Rice</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.100</p>
                            </Card.Text>
                            
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Chillipaneer} alt="Paneer Chilli" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Paneer Chilli</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.120</p>
                            </Card.Text>
                            
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                      </Container>
             <div className="col-10 col-sm-8 mx-auto text-center">   
            <Link to="/menu/">    
            <button className="btn text-uppercase btn-yellow">
                Go To Menu
            </button>
      
            </Link>
            </div>
            </div>
        </div>
        </section>
    )}