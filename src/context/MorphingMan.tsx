import React, { createContext, useState, ReactChild } from 'react'

interface ContextProps {
  chosenImageId: number;
  setChosenImageId: (id: number) => void
}

export const MorphingManContext = createContext({} as ContextProps)

const Provider: React.FC<ReactChild> = ({ children }) => {
  const [chosenImageId, setChosenImageId] = useState(1)
  return (
    <MorphingManContext.Provider value={{ chosenImageId, setChosenImageId }}>
      {children}
    </MorphingManContext.Provider>
  )
}

export default Provider
