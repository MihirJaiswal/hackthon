import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Figure } from './figure'

const Model = () => {
  return (
    <div className='h-[100vh] w-[100vh]'>
        <Canvas>
        <mesh>
            <boxGeometry/>
            <Figure/>
        </mesh> 
        </Canvas>
    </div>
  )
}

export default  Model