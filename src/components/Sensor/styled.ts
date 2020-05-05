import styled from "styled-components"

type EiningStyleProps = {
  background: string;
}

export const Container = styled.div`
  top: 0;
  left: 0%;
  position: fixed;
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Panel = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
`
export const EiningContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background: ${(props: EiningStyleProps) => props.background}; */
`