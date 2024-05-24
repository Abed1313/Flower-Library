import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './UpdateModal.css'


function UpdateModal(props) {

    const updateFrowerHandeler = async (event) => {
        event.preventDefault();
        const obj = {
            name: event.target.name.value,
            info: event.target.info.value,
            photo: event.target.photo.value
        }
        const serverURL = `http://localhost:3001/favFlower/${props.item.id}`;
        const res = await axios.put(serverURL,obj);
        props.handleClose();

    }

    return (
        <>
            <Modal className='SS' show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='AA'>Update Flower :{props.item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='DD'>
                    <Form onSubmit={updateFrowerHandeler} className='FF'>

                        <Form.Group controlId="validationCustom01">
                            <Form.Label className='GG'>Name :</Form.Label>
                            <Form.Control className='HH'
                                required
                                type="text"
                                name='name'
                                placeholder="Flower name"
                                defaultValue={props.item.name}

                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label className='GG'>Info :</Form.Label>
                            <Form.Control className='HH'
                                required
                                type="text"
                                name='info'
                                placeholder="Flower Info"
                                defaultValue={props.item.info}
                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label className='GG'>photo :</Form.Label>
                            <Form.Control className='HH'
                                required
                                type="text"
                                name='photo'
                                placeholder="Flower Photo"
                                defaultValue={props.item.photo}
                            />
                        </Form.Group>

                        <Button type="submit" className='JJ'>Update</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer className='KK'>
                    <Button className='LL' variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default UpdateModal;