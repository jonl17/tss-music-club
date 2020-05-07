import React from 'react'

import { Container, Xpanel, XYpanel } from "./styled"
import Eining from "./Eining"
import { StopMotionContextProps, SensorType } from '~/types'

interface Props {
  count: number;
  stopMotionContext: React.Context<StopMotionContextProps>;
  type: SensorType;
}

const renderEiningar = (count: number, context: React.Context<StopMotionContextProps>) => {
  let einingarList: JSX.Element[] = []
  for (let i = 1; i < count + 1; i++) {
    einingarList.push(<Eining stopMotionContext={context} identifier={i} key={i}></Eining>)
  }
  return einingarList
}

const Stika: React.FC<Props> = ({ count, stopMotionContext, type }) => {

  return (
    <>
      <Container>
        {type === "xy" ?
          <XYpanel>
            {renderEiningar(count, stopMotionContext)}
          </XYpanel> :
          <Xpanel>
            {renderEiningar(count, stopMotionContext)}
          </Xpanel>}

      </Container>
    </>
  )
}

export default Stika
