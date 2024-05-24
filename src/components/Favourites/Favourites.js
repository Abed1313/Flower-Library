import axios from "axios";
import { useEffect, useState } from "react"
import Flower from "../Flower/Flower";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Favourites.css'


function Favourites (){
    const [favList, setFavList] = useState([]);
     
    const getFavFlaowers = async ()=>{
        const serverURL = `http://localhost:3001/allFavFlowers`;
      const res=  await axios.get(serverURL)
        setFavList(res.data)
    }

    useEffect(()=>{
        getFavFlaowers();
    },[favList]) // to update or re render the fav list if anything happend
    return(
        <div className="abbed">
        <Row  className="Abd">
        {favList.map((item)=>{
            return(
                <Col className="abed">
                <Flower flowerInfo = {item}/>
                </Col>
            )
        })}
         </Row>
         </div>
    )
}
export default Favourites;