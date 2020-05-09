import styled from "styled-components"

export const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
  display: grid;
  
  justify-content: space-between;
  align-items: center;

  grid-template-columns: 1fr 0.3fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 0.5fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: space-around;
  }

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
    display: flex;
    justify-content: space-between;

    padding: 0 var(--largeMargin) 0 var(--smallMargin);
    @media (max-width: 1200px) {
      padding: 0 var(--mediumMargin) 0 var(--smallMargin);
    }
    @media (max-width: 900px) {
      padding: 0 var(--smallMargin) 0 var(--smallMargin);
    }
    @media (max-width: 600px) {
      padding: 0 var(--mediumMargin) 0 var(--mediumMargin);
    }
    
      svg {
        height: 100%;
        width: 30px;
        transition: .2s;
      }
      svg:hover {
        transform: scale(1.05);
      }
      a {
        z-index: 2;
      }
    }
  
`