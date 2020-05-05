import React, { createContext, useState, ReactChild } from 'react'
import { StopMotionContextProps } from "~/types"

export const MorphingManContext = createContext({} as StopMotionContextProps)

const Provider: React.FC<ReactChild> = ({ children }) => {
  const [chosenImageId, setChosenImageId] = useState(1)
  return (
    <MorphingManContext.Provider value={{ chosenImageId, setChosenImageId }}>
      {children}
    </MorphingManContext.Provider>
  )
}

export default Provider
