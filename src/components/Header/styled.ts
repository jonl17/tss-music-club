import styled from "styled-components"

export const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  .logo-wrap {
    width: 100%;
    box-sizing: border-box;
    padding: var(--smallMargin) 0 0 var(--smallMargin);
  }
  .btn-wrap {
    height: 100%;
    width: 100%;
    max-width: 45rem;
    box-sizing: border-box;
    padding: 0 var(--largeMargin) 0 var(--smallMargin);
    display: flex;
    justify-content: space-between;
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