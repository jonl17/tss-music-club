import styled from "styled-components"

export const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  .logo-wrap {
    height: 125px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }
  .btn-wrap {
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
  }
`
export const BtnWrap = styled.div`
  height: 100%;
  width: 125px;
  z-index: 2;
  position: relative;
  &&:hover {
    cursor: pointer;
  }
  div {
    position: absolute !important;
    height: 100%;
    width: 100%;
    transition: opacity .1s;
    overflow: hidden;

  }
`