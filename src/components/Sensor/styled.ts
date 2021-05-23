import styled, { css } from 'styled-components'

export const Container = styled.div`
  top: 0;
  left: 0%;
  position: fixed;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5em 0 5em;
  @media (max-width: 900px) {
    padding: 0;
  }
`
