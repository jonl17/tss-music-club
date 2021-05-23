import { useGymnist } from '@src/context/StopMotion/Gymnist'
import React from 'react'

type Props = {
  identifier: number
}

const Eining = ({ identifier }: Props) => {
  const { updateChosenImageId } = useGymnist()

  return <div onMouseEnter={() => updateChosenImageId(identifier + 1)} />
}

export default Eining
