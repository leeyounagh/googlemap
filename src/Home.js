import React, { useMemo } from 'react';
import axios from 'axios';
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api';

const Home = () => {

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

const location = [
    {lat:Number(33.488663),lng:Number(126.48927)},
    {lat:Number(33.2540922),lng:Number(126.5601945)},
    {lat:Number(33.24957),lng:Number(126.56415)},

]
   


function Map(){

   axios.get('http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr')
   .then(response=>console.log(response.data)
  
    )

    const center =useMemo(()=>({lat:33.37212380975274,lng:126.53518867943278}),[]) 
    return(
        <div >
             <GoogleMap zoom={9} center={center}
    mapContainerClassName='map-container'>
        <Marker position={{lat:Number(33.2540922),lng:Number(126.5601945)}}></Marker>
    </GoogleMap>
        </div>
    )
    
   
}

export default Home;