/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf --transform
Author: Lassi Kaukonen (https://sketchfab.com/thesidekick)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/unused-blue-vans-shoe-96baa4684df7415ba8ba87d39bd1c2ee
Title: Unused Blue Vans Shoe
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Shoe(props) {
  const { nodes, materials } = useGLTF('/shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Blue_Vans_Shoe} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/shoe-transformed.glb')