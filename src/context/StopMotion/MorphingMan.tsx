import React, { createContext, useState } from 'react'
import { StopMotionContextProps } from '@src/types'

export const MorphingManContext = createContext({} as StopMotionContextProps)

const MorphingManProvider: React.FC<any> = ({ children }) => {
  const [chosenImageId, setChosenImageId] = useState(1)
  return (
    <MorphingManContext.Provider value={{ chosenImageId, setChosenImageId }}>
      {children}
    </MorphingManContext.Provider>
  )
}

export default MorphingManProvider
