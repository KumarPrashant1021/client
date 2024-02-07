import React from "react"
import {useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function ImageDetails(){
    const location = useLocation();
    return (
        <Container style={{marginTop:10}}>
            <Row>
                <Col>
                    <Image style={{width:'50rem',height:'50rem'}} src={location.state.url}></Image>
                </Col>
                <Col>
                    <br/><br/>
                    <h2>{location.state.title}</h2><br/>
                    <h3>Description</h3><br/>
                    <h4>{location.state.description}</h4>
                </Col>
            </Row>
        </Container>
    )
}  