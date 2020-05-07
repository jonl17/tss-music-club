import styled, { css } from "styled-components"

type EiningStyleProps = {
  background: string;
}

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
export const EiningContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background: ${(props: EiningStyleProps) => props.background}; */
`