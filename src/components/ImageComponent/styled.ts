import styled from "styled-components"

type GridItemProps = {
  opacity: string;
}
export const Grid = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  pointer-events: none;
`
export const GridItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15rem;
  margin-left: -15rem;
  height: 30rem;
  width: 30rem;
  opacity: ${(props: GridItemProps) => props.opacity};
`