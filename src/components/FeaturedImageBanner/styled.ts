import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: var(--smallMargin);
  pointer-events: none;
  p {
    margin: 0;
    color: gray;
  }
`