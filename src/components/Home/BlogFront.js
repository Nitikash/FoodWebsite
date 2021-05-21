import React from 'react'
import {Link} from "gatsby"
import Title from "../Globals/Title";
import VEGM from "../../images/VEGM.jpg";
import blog3 from "../../images/blog3.jpg";
import Indo from "../../images/Indo.jpg";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function BlogFront() {
    return (
        <section className="py-5">
            
        <div className="container">
        <Title title="Amazing recipies at your fingretips!!!!! " />
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
                                     
                <p>Some simple incredients can be changed into a delicious dishes with the help of good recipes.</p>
            
                </p>
            </div>
            
           <Container>
                <Row>
                    <Col md={4}>
                <Card className="mb-12">
            <div class="card bg-dark text-black">
            <Image src={VEGM} alt="Vegetable Masala Oats" fluid />
            <div class="card-img-overlay">
            <h1 class="card-title"><b>Vegetable Masala Oats</b></h1>
            
            
            </div>
            </div>
            </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-12">
            <div class="card bg-dark text-white">
            <Image src={blog3} alt="Breakfast Stuffed Portobellos" fluid />
            <div class="card-img-overlay">
            <h2 class="card-title"><b>Breakfast Stuffed Portobellos</b></h2>
            
            
            </div>
            </div>
            </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-12">
            <div class="card bg-dark text-Black">
            <Image src={Indo} alt="Indonesian Coconut Pancake" fluid />
            <div class="card-img-overlay">
            <h2 class="card-title"><b>Indonesian Coconut Pancake</b></h2>
            
            
            </div>
            </div>
            </Card>
            </Col>
            </Row>
            </Container>
            <div>
                <p>

                    
                </p>
            </div>

             <div className="col-10 col-sm-8 mx-auto text-center">   
            <Link to="/blog/">    
            <button className="btn text-uppercase btn-yellow">
                Go To Blog
            </button>
      
            </Link>
            </div>
            </div>
        </div>
        </section>
    )}