import React, { useState, useEffect, useContext } from 'react'
import { EiningContainer } from "./styled"
import { MorphingManContext } from '~/context/MorphingMan'

interface Props {
  identifier: number;
}

const Eining: React.FC<Props> = ({ identifier }) => {
  const [active, setActive] = useState(false)
  const { setChosenImageId } = useContext(MorphingManContext)
  useEffect(() => {
    if (active) {
      setChosenImageId(identifier)
    }
  }, [active])
  return (
    <EiningContainer background={active ? "lightgray" : "white"} onMouseLeave={() => setActive(false)} onMouseMove={() => setActive(true)}>
    </EiningContainer>
  )
}

export default Eining
