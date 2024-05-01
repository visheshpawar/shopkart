import React from 'react'
import { createContext, useContext } from 'react'

const cari =  createContext({})

export default function Cari() {
  return useContext(cari)
}


export function Carip({children})
{}
