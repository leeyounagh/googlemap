import React, { useEffect, useRef, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
const containerStyle = {
  width: '400px',
  height: '400px'
};



function MyComponent() {
  const TLat = useRef(33.37212380975274)
  const TLng = useRef(126.53518867943278)

  const [newdata,setNewData] =useState([])
  const center = {
    "lat":TLat.current,
    "lng": TLng.current
  };
  useEffect(()=>{
    Axios()
    setNewData();
    <GoogleMap></GoogleMap>
   
  },[])
  
  const Axios = () =>{
    axios.get(`http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr`)
    .then(response =>{
     
          console.log(response.data)
          setNewData(response.data.items)

         
          
     return response.data}).catch((error)=>{
         console.log('error',error)
     })
  }
  console.log('newdata',newdata)

  const PositionHandler =() =>{


    TLat.current =newdata[0].latitude
    TLng.current =newdata[0].longitude
   console.log(  TLng.current)
  
  }
  return (
    <div>
          <LoadScript
      googleMapsApiKey="AIzaSyBGRsNeYWBKmbw5-YWDwHVL8EOnXx-KTRc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onPositionChanged={PositionHandler}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
   <button onClick={PositionHandler}>테스트</button>
    </div>

  )
}

export default React.memo(MyComponent)