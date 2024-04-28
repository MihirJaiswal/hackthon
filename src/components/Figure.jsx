'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Figure(props) {
  const { nodes, materials } = useGLTF('/robotic_operating_buddy_r.o.b.photogrammetry.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.model_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.model_Material_u1_v1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/robotic_operating_buddy_r.o.b.photogrammetry.glb')
