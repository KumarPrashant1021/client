import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";

export default function ActionAreaCard({imageInfo}) {
  const navigate = useNavigate();
  return (
    <Card className="img-card" onClick={()=>navigate('/details',{state:imageInfo})}>
        <Card.Img variant="top"style={{height:'18rem'}} src={imageInfo.url}/>
        <Card.Body>
        <Card.Title>{imageInfo.title}</Card.Title>
        </Card.Body>
  </Card>
  );
}