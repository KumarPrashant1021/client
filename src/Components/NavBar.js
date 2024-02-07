
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UploadImgPopUp from "./UploadImgPopUp";
import {Link} from "react-router-dom";

export default function NavBar({saveImageData}) {
 
  return (
    <Navbar bg="light" data-bs-theme="light" className='nav-bar'>
        <Navbar.Brand>Browse Images</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav-link"><Link to="/" style={{textDecoration:'inherit',color:'inherit', cursor: 'pointer'}}>Home</Link></Nav.Link>
          <UploadImgPopUp saveImageData={saveImageData}/> 
        </Nav>
    </Navbar>
  );
}