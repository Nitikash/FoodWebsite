import React from 'react'
import {Link} from "gatsby"
import Title from "../Globals/Title";
import Noodles from "../../images/Noodles.jpg";
import Manchurian from "../../images/Manchurian.png";
import friedrice from "../../images/friedrice.jpg";
import Chillipaneer from "../../images/Chillipaneer.jpg";
import Gpizza from "../../images/Gpizza.jpg";
import Wpasta from "../../images/Wpasta.jpg";
import Cpizza from "../../images/Cpizza.jpg";
import Rpasta from "../../images/Rpasta.jpg";
import PavBhaji from "../../images/PavBhaji.jpg";
import GrilledSandwich from "../../images/GrilledSandwich.jpg";
import CholeBhature from "../../images/CholeBhature.jpg";
import Roll from "../../images/Roll.jpg";
import Dosa from "../../images/Dosa.jpg";
import Utt from "../../images/Utt.jpg";
import MDosa from "../../images/MDosa.jpg";
import Idli from "../../images/Idli.jpg";
import KP from "../../images/KP.jpg";
import MVEG from "../../images/MVEG.jpg";
import Bhin from "../../images/Bhin.jpg";
import Dfry from "../../images/Dfry.jpg";
import Naan from "../../images/Naan.jpg";
import R from "../../images/R.jpg";
import Gnaan from "../../images/Gnaan.jpg";
import Troti from "../../images/Troti.jpeg";
import Pizza from "../../images/Pizza.jpg";
import PAP from "../../images/PAP.jpg"; 
import Pan from "../../images/Pan.jpg";
import Gol from "../../images/Gol.jpg";
import Sam from "../../images/Sam.jpg";
import Gulab from "../../images/Gulab.jpg";
import Ras from "../../images/Ras.jpg";
import Jal from "../../images/Jal.jpg";
import Ice from "../../images/Ice.jpg";
import Las from "../../images/Las.jpg";
import Mo from "../../images/Mo.jpg";
import Man from "../../images/Man.jpg";
import Cof from "../../images/Cof.jpg";




import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function MenuElements() {
    return (
        <section className="py-5">
        <div className="container">
        
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
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
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
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
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
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
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
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Roll} alt="stuff paneer roll" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Stuff Panner Roll</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.90</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={PavBhaji} alt="Pav Bhaji" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Pav Bhaji</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.120</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={GrilledSandwich} alt="Grilled Sandwich" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Grilled Sandwich</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.110</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={CholeBhature} alt="Chole Bhature" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Chole Bhature</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.50</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row><Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={MDosa} alt="Masala Dosa" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Masala Dosa</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.80</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Idli} alt="Idli Sambar" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Idli Sambar</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.70</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Utt} alt="Uttampam" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Uttampam</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.85</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Dosa} alt="Paper Dosa" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Paper Dosa</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.75</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Wpasta} alt="White Sauce Pasta" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>White Sauce Pasta</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.150</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Rpasta} alt="Arrabiata Pasta (Red Sauce)" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Arrabiata Pasta (Red Sauce)</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.150</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Gpizza} alt="Grilled Margherita Pizza" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Grilled Margherita Pizza</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.180</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Cpizza} alt="Capsicum Veg Cheese Pizza" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Capsicum Veg Cheese Pizza</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.200</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Dfry} alt="Dal Fry" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Dal Fry</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.60</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={KP} alt="Kadai Paneer" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Kadai Paneer</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.120</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={MVEG} alt="Mix Veg" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Mix Veg</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.90</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Bhin} alt="Masala Bhindi" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Masala Bhindi</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.70</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                  <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={R} alt="Tava Roti" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Tava Roti</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.10</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Troti} alt="Tandoori Roti" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Tandoori Roti</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.15</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Naan} alt="Naan" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Butter Naan</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.20</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Gnaan} alt="Garlic Naan" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Garlic Naan</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.30</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Sam} alt="Samosa" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Samosa</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.30</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Pan} alt="Paneer Tikka" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Paneer Tikka</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.180</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={PAP} alt="Papdi Chat" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Papdi Chat</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.65</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Gol} alt="Gol Gappe" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Gol Gappe</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.60</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Gulab} alt="Gulab Jamun" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Gulab Jamun</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.50</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Ras} alt="Rasgulla" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Rasgulla</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.60</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Jal} alt="Rabdi Jalebi" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Rabdi Jalebi</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.80</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Ice} alt="Ice Cream" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Ice Cream</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.80</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Las} alt="Lassi" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Lassi</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.60</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Mo} alt="Mohito" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Mohito</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.85</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Man} alt="Mango Shake" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Mango Shake</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.100</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                             <Image src={Cof} alt="Expresso Coffee" fluid />
                            <Card.Body>
                            <div className="col-10 col-sm-8 mx-auto text-center">
                            <Card.Title>Expresso Coffee</Card.Title>
                            
                            <Card.Text>
                                <p>Rs.45</p>
                            </Card.Text>
                            <Link to="/menu/">    
                            <button className="btn text-uppercase btn-yellow">
                            Add to cart
                            </button>
                            </Link>
                            </div>
                             </Card.Body>
                            
                        </Card>
                    </Col>
                    

                </Row>
            </Container>
             <div className="col-10 col-sm-8 mx-auto text-center">   
            <Link to="/menu/">    
            <button className="btn text-uppercase btn-yellow">
                submit
            </button>
      
            </Link>
            </div>
            </div>
        </div>
        </section>
    )}



