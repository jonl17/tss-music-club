import styled from "styled-components"

export const Grid = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  .center-the-images {
    position: absolute;
    width: 40em;
    height: 40em;
    left: 50%;
    margin-left: -20em;
    top: 50%;
    margin-top: -20em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`