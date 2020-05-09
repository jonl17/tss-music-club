import React, { useState, useEffect, useContext } from 'react'
import { EiningContainer } from "./styled"
import { StopMotionContextProps } from '~/types'

interface Props {
  identifier: number;
  stopMotionContext: React.Context<StopMotionContextProps>;
}

const Eining: React.FC<Props> = ({ identifier, stopMotionContext }) => {
  const [active, setActive] = useState(false)
  const { setChosenImageId } = useContext(stopMotionContext)
  useEffect(() => {
    if (active) {
      setChosenImageId(identifier)
    }
  }, [active])
  return (
    <EiningContainer background={active ? "lightgray" : "white"} onMouseLeave={() => setActive(false)} onTouchEnd={() => setActive(false)} onMouseMove={() => setActive(true)} onTouchMove={() => setActive(true)}>
    </EiningContainer>
  )
}

export default Eining
