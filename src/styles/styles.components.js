import styled from "styled-components";

export const NavBarStyles = styled.nav`
  background-color: blueviolet;
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

// export const DataContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   justify-content: space-between;
// `;
