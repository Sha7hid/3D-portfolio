/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 tablet.gltf --transform
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/galaxy-tab-s8-ultra-58228e3dc88743abb977d34717bb291e
Title: Galaxy Tab S8 Ultra
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tablet(props) {
  const { nodes, materials } = useGLTF('/tablet-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Body_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Body_Bezel_0.geometry} material={materials.Bezel} />
          <mesh geometry={nodes.Body_Body2_0.geometry} material={materials.Body2} />
          <mesh geometry={nodes.Body_LensGray_0.geometry} material={materials.LensGray} />
          <mesh geometry={nodes.Body_Antenna_0.geometry} material={materials.Antenna} />
          <mesh geometry={nodes.Body_Body3_0.geometry} material={materials.Body3} />
          <mesh geometry={nodes.Body_CamGlass_0.geometry} material={materials.CamGlass} />
          <mesh geometry={nodes.CameraModule_CamFrame_0.geometry} material={materials.CamFrame} />
          <mesh geometry={nodes.CameraModule_CamFrame2_0.geometry} material={materials.CamFrame2} />
          <mesh geometry={nodes.CameraModule_CamBackground_0.geometry} material={materials.CamBackground} />
          <mesh geometry={nodes.CameraModule_CamGlass_0.geometry} material={materials.CamGlass} />
          <mesh geometry={nodes.Camera_LensFrame_0.geometry} material={materials.LensFrame} />
          <mesh geometry={nodes.Camera_LensBlack_0.geometry} material={materials.LensBlack} />
          <mesh geometry={nodes.Camera_LensGray_0.geometry} material={materials.LensGray} />
          <mesh geometry={nodes.MicFlash_MicFlashBody_0.geometry} material={materials.MicFlashBody} />
          <mesh geometry={nodes.MicFlash_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.MicFlash_Flash_0.geometry} material={materials.Flash} />
          <mesh geometry={nodes.Lens1_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Lens2_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.PenCharge_Stripe_0.geometry} material={materials.Stripe} />
          <mesh geometry={nodes.Screen_Wallpaper_0.geometry} material={materials.Wallpaper} />
          <mesh geometry={nodes.Lens3_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Lens4_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Button_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.PenBody_PenBody_0.geometry} material={materials.PenBody} />
          <mesh geometry={nodes.PenBody_PenTip_0.geometry} material={materials.PenTip} />
          <mesh geometry={nodes.SamsungLogo_Text_0.geometry} material={materials.Text} />
          <mesh geometry={nodes.akg_Text_0.geometry} material={materials.Text} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tablet-transformed.glb')
