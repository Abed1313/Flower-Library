import axios from "axios"
import { useEffect, useState } from "react"
import Flower from "../Flower/Flower";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Home.css';


function Home (){
const [flowerArr, setFlowerArr] = useState([]);

    const getAllFlower = async () =>{
        const serverURL = `http://localhost:3001/allFlowers`
        const res = await axios.get(serverURL)
        setFlowerArr(res.data)
 
    }

    useEffect(()=>{
        getAllFlower();
    },[])

    return(
        <div className="TT">
        <h1 className="WW">Flowers Collection</h1>
        <Row xs={1} md={4} className="g-4">
        {flowerArr.map((item)=>{
            return(
                <Col className="EE">
                <Flower flowerInfo = {item} parentComp ="Home"/>
                </Col>
            )
        })}
         </Row>
         </div>
    )
}
export default Home;