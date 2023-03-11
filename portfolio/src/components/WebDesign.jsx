import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from "styled-components"
import React from 'react'
import Tablet from './Tablet'
const Desc = styled.div`
width:200px;
height:70px;
padding:20px;
background-color : white;
border-radius: 10px;
position:absolute;
top:50px;
right:100px;
@media only screen and (max-width:768px){
 top:0;
 bottom:0;
 left:0;
 right:0;
 margin:auto;
}

`
const WebDesign = () => {
  return (
    <>
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Tablet/>

        </Stage>
     
        <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
   <Desc>
    We design products with a strong focus on world class design.
   </Desc>
    </>
    
  )
}

export default WebDesign
