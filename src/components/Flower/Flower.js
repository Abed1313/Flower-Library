import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModal from '../UpdateModal/UpdateModal';
import { useState } from 'react';
import './Flower.css'

function Flower(props) {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [isFullTextShown, setIsFullTextShown] = useState(false);

    const addToFav = async (item) => {
        const serverURL = `http://localhost:3001/favFlower`;

        const obj = {
            name: item.name,
            info: item.info,
            photo: item.photo
        }
        await axios.post(serverURL, obj);
    }

    const deleteFlower = async (id) => {
        const serverURL = `http://localhost:3001/favFlower/${id}`;
        const res = await axios.delete(serverURL);
    }

    const openUpdateForm = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const toggleText = () => {
        setIsFullTextShown(!isFullTextShown);
    }

    const truncateText = (text, limit) => {
        if (text.length <= limit) return text;
        return `${text.substring(0, limit)}...`;
    }

    const textToShow = isFullTextShown ? props.flowerInfo.info : truncateText(props.flowerInfo.info, 100);

    return (
        <div className="card-container">
            <Card style={{ width: '18rem' }} className='ZZ'>
                <Card.Img variant="top" src={props.flowerInfo.photo} className='XX'/>
                <Card.Body className='CC'>
                    <Card.Title className='VV'>{props.flowerInfo.name}</Card.Title>
                    <Card.Text className='BB'>
                        {textToShow}
                    </Card.Text>
                    <Button variant="link" onClick={toggleText}>
                        {isFullTextShown ? "Show Less" : "Show More"}
                    </Button>
                    {props.parentComp === "Home" ?
                        <Button variant="primary" className='NN' onClick={() => addToFav(props.flowerInfo)}>Add To Favourite</Button>
                        : <>
                            <Button variant="primary" className='MM' onClick={() => openUpdateForm(props.flowerInfo)}>Update</Button>
                            <Button variant="danger" className='PP' onClick={() => deleteFlower(props.flowerInfo.id)}>Delete</Button>
                        </>}
                </Card.Body>
            </Card>
            <UpdateModal show={showModal} handleClose={handleClose} item={selectedItem}/>
        </div>
    );
}

export default Flower;
