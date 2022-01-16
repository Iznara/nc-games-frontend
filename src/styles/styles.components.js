import styled from "styled-components";

export const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

export const NavBarStyles = styled.nav`

  display: flex;
  padding: 5px;
  width: 100%;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  font-size: calc(5px + 2vmin);
  color: white;
`;

export const CardContainer = styled.div`
display: flex;
background-color: darkcyan;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
  
  export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  `;

export const CustomGreenButton = styled.button`
  background-color: #c2fbd7;
  border-radius: 10px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
  rgba(44, 187, 99, .15) 0 1px 2px,
  rgba(44, 187, 99, .15) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  padding: 7px 20px;
  margin: 5px;
  text-align: center;
  border: 0;
  font-size: 16px;

  :disabled{
 background-color : #ccc;
 color: #9c9c9c;
}

:hover {
  box-shadow: rgba(44, 187, 99,.35) 0 -25px 18px -14px inset,
  rgba(44, 187, 99,.25) 0 1px 2px,
  rgba(44, 187, 99,.25) 0 2px 4px,
  rgba(44, 187, 99,.25) 0 4px 8px,
  rgba(44, 187, 99,.25) 0 8px 16px,
  rgba(44, 187, 99,.25) 0 16px 32px;
}
`;

export const CustomRedButton = styled.button`
  background-color: #f04f4f;
  border-radius: 10px;
  box-shadow: rgba(240, 79, 79, .2) 0 -25px 18px -14px inset,
  rgba(240, 79, 79, .15) 0 1px 2px,
  rgba(240, 79, 79, .15) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  padding: 7px 20px;
  margin: 5px;
  text-align: center;
  border: 0;
  font-size: 16px;

  :disabled{
 background-color : #ccc;
 color: #9c9c9c;
}

:hover {
  box-shadow: rgba(240, 79, 79,.35) 0 -25px 18px -14px inset,
  rgba(240, 79, 79,.25) 0 1px 2px,
  rgba(240, 79, 79,.25) 0 2px 4px,
  rgba(240, 79, 79,.25) 0 4px 8px,
  rgba(240, 79, 79,.25) 0 8px 16px,
  rgba(240, 79, 79,.25) 0 16px 32px;
}
`;

export const CustomBlueButton = styled.button`
  background-color: #98d8e3;
  border-radius: 10px;
  box-shadow: rgba(152, 216, 227, .2) 0 -25px 18px -14px inset,
  rgba(152, 216, 227, .15) 0 1px 2px,
  rgba(152, 216, 227, .15) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  padding: 7px 20px;
  margin: 5px;
  text-align: center;
  border: 0;
  font-size: 16px;

  :disabled{
 background-color : #ccc;
 color: #9c9c9c;
}

:hover {
  box-shadow: rgba(152, 216, 227,.35) 0 -25px 18px -14px inset,
  rgba(152, 216, 227,.25) 0 1px 2px,
  rgba(152, 216, 227,.25) 0 2px 4px,
  rgba(152, 216, 227,.25) 0 4px 8px,
  rgba(152, 216, 227,.25) 0 8px 16px,
  rgba(152, 216, 227,.25) 0 16px 32px;
}
`;

export const CustomSelect = styled.select`
  background-color: #98d8e3;
  border-radius: 10px;
  box-shadow: rgba(152, 216, 227, .2) 0 -25px 18px -14px inset,
  rgba(152, 216, 227, .15) 0 1px 2px,
  rgba(152, 216, 227, .15) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  padding: 7px 10px;
  margin: 5px;
  text-align: left;
  border: 0;
  font-size: 16px;
`;


export const CustomNavButton = styled.button`
  background-color: #446879d2;
  border-radius: 10px;
  box-shadow: 
  rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
  rgba(44, 187, 99, .15) 0 1px 2px,
  rgba(44, 187, 99, .15) 0 2px 4px,
  rgba(44, 187, 99, .15) 0 4px 8px,
  rgba(44, 187, 99, .15) 0 8px 16px,
  rgba(44, 187, 99, .15) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  padding: 7px 20px;
  margin: 5px;
  text-align: center;
  border: 0;
  font-size: calc(2px + 2vmin);

  :disabled{
 background-color : #ccc;
 color: #9c9c9c;
}

:hover {
  box-shadow: rgba(44, 187, 99,.35) 0 -25px 18px -14px inset,
  rgba(44, 187, 99,.25) 0 1px 2px,
  rgba(44, 187, 99,.25) 0 2px 4px,
  rgba(44, 187, 99,.25) 0 4px 8px,
  rgba(44, 187, 99,.25) 0 8px 16px,
  rgba(44, 187, 99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-3deg);
}
`;
