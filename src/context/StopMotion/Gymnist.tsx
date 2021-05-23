import React, { createContext, useState, useContext } from 'react'

export const GymnistContext = createContext<{
  chosenImageId: number
  updateChosenImageId: (id: number) => void
}>({
  chosenImageId: 13,
  updateChosenImageId() {},
})

const GymnistProvider: React.FC = ({ children }) => {
  const [chosenImageId, setChosenImageId] = useState(13) // á hvaða mynd á að byrja?

  const updateChosenImageId = (id: number) => setChosenImageId(id)

  return (
    <GymnistContext.Provider value={{ chosenImageId, updateChosenImageId }}>
      {children}
    </GymnistContext.Provider>
  )
}

const useGymnist = () => useContext(GymnistContext)

export { GymnistProvider, useGymnist }
