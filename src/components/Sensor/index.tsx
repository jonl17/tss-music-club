import React from 'react'

import { Container, Panel } from "./styled"
import Eining from "./Eining"
import { StopMotionContextProps } from '~/types'

interface Props {
  count: number;
  stopMotionContext: React.Context<StopMotionContextProps>;
}

const renderEiningar = (count: number, context: React.Context<StopMotionContextProps>) => {
  let einingarList: JSX.Element[] = []
  for (let i = 1; i < count + 1; i++) {
    einingarList.push(<Eining stopMotionContext={context} identifier={i} key={i}></Eining>)
  }
  return einingarList
}

const Stika: React.FC<Props> = ({ count, stopMotionContext }) => {

  return (
    <>
      <Container>
        <Panel>
          {renderEiningar(count, stopMotionContext)}
        </Panel>
      </Container>
    </>
  )
}

export default Stika
