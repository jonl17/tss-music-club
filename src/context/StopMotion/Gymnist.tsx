import React, { createContext, useState } from 'react'
import { StopMotionContextProps } from "~/types"

export const GymnistContext = createContext({} as StopMotionContextProps)

const GymnistProvider: React.FC<any> = ({ children }) => {
  const [chosenImageId, setChosenImageId] = useState(1)
  return (
    <GymnistContext.Provider value={{ chosenImageId, setChosenImageId }}>
      {children}
    </GymnistContext.Provider>
  )
}

export default GymnistProvider
