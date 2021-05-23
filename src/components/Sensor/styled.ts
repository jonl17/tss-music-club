import styled, { css } from 'styled-components'

const BasicPanelStyles = css`
  height: 100%;
  width: 100%;
  margin: 0 auto;
`

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
export const Xpanel = styled.div`
  ${BasicPanelStyles};
  display: flex;
`
export const XYpanel = styled.div`
  ${BasicPanelStyles};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
