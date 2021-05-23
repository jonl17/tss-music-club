import React from 'react'

import { Container, Xpanel, XYpanel } from './styled'
import Eining from './Eining'
import { SensorType } from '@src/types'

interface Props {
  count: number
  type: SensorType
}

const renderEiningar = (count: number) => {
  let einingarList: JSX.Element[] = []
  for (let i = 1; i < count + 1; i++) {
    einingarList.push(<Eining identifier={i} key={i}></Eining>)
  }
  return einingarList
}

const Stika: React.FC<Props> = ({ count, type }) => {
  return (
    <>
      <Container>
        {type === 'xy' ? (
          <XYpanel>{renderEiningar(count)}</XYpanel>
        ) : (
          <Xpanel>{renderEiningar(count)}</Xpanel>
        )}
      </Container>
    </>
  )
}

export default Stika
