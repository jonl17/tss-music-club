import styled from "styled-components"

export const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  align-items: center;
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
    p {
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
        a {
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          color: gray;
        }
      }
    }
  }
`