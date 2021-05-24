import React, { createContext, useState, useContext } from 'react'

export const StopMotionContext = createContext<{
  chosenImageId: number
  updateChosenImageId: (id: number) => void
}>({
  chosenImageId: 13,
  updateChosenImageId() {},
})

const StopMotionProvider: React.FC = ({ children }) => {
  const [chosenImageId, setChosenImageId] = useState(13) // á hvaða mynd á að byrja?

  const updateChosenImageId = (id: number) => setChosenImageId(id)

  return (
    <StopMotionContext.Provider value={{ chosenImageId, updateChosenImageId }}>
      {children}
    </StopMotionContext.Provider>
  )
}

const useStopMotion = () => useContext(StopMotionContext)

export { StopMotionProvider, useStopMotion }
