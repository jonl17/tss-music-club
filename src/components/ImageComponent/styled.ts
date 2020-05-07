import styled from "styled-components"

type GridItemProps = {
  opacity: string;
  padding: string;
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
  height: 100%;
  width: 100%;
  opacity: ${(props: GridItemProps) => props.opacity};
  box-sizing: border-box;
  padding: 2rem ${(props: GridItemProps) => props.padding};
`