import React from 'react'

import { Container, Panel } from "./styled"
import Eining from "./Eining"

interface Props {
  count: number
}

const renderEiningar = (count: number) => {
  let einingarList: JSX.Element[] = []
  for (let i = 1; i < count + 1; i++) {
    einingarList.push(<Eining identifier={i} key={i}></Eining>)
  }
  return einingarList
}

const Stika: React.FC<Props> = ({ count }) => {

  return (
    <>
      <Container>
        <Panel>
          {renderEiningar(count)}
        </Panel>
      </Container>
    </>
  )
}

export default Stika
