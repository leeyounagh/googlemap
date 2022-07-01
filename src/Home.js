import React, { useEffect, useMemo } from 'react';
import axios from 'axios';
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const Home = () => {
    useEffect(()=>{
        <GoogleMap></GoogleMap>;

<Map></Map>
    },[])

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:'AIzaSyBGRsNeYWBKmbw5-YWDwHVL8EOnXx-KTRc'
    })
    if(!isLoaded) return <div>Loading...</div>
    return (
        <div>
            <Map></Map>
        </div>
    );


};


   


function Map(){
    // const Marker = () =>{
    //     <div>
    //         <FaMapMarkerAlt width='60px'></FaMapMarkerAlt>
    //     </div>
    // }
    const location = [
        {id:0,lat:Number(33.488663),lng:Number(126.48927)},
        {id:1,lat:Number(33.2540922),lng:Number(126.5601945)},
        {id:2,lat:Number(33.24957),lng:Number(126.56415)},
    
    ]

//    axios.get('http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr')
//    .then(response=>console.log(response.data)
  
//     )

    const center =useMemo(()=>({lat:33.37212380975274,lng:126.53518867943278}),[]) 
    return(
        <div >
             <GoogleMap zoom={10} center={center}
    mapContainerClassName='map-container'>
        {
            location.map((item)=>(
                <div key={item.id}>
  <Marker position={{lat:item.lat,lng:item.lng}} id={item.id}></Marker>
                </div>
              
            ))
        }
     
    </GoogleMap>
        </div>
    )
    
   
}

export default Home;