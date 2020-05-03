import React from "react"
import Provider from "./src/context/MorphingMan"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}