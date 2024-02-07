import { useState,useRef  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

export default function UploadImgPopUp({saveImageData}) {
  const [show, setShow] = useState(false);
  const urlRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = ()=>{
    if(urlRef.current.value === ''){
      handleClose()
      return;
    }
    saveImageData({url:urlRef.current.value,title:titleRef.current.value,description:descriptionRef.current.value});
    handleClose()
  }

  return (
    <>
      <Nav.Link onClick={handleShow}>Upload Images</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://example.jgp"
                autoFocus
                ref={urlRef}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Image Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nature Image"
                autoFocus
                ref={titleRef}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>Image Description</Form.Label>
              <Form.Control as="textarea" rows={3} ref={descriptionRef} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}