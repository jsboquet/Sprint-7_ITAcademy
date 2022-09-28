import styled from "styled-components";

export const Pressupost = styled.div`
  .contanier {
    border: 3px solid black;
    padding: 10px 25px 10px 25px;
    border-radius: 15px;
    line-height: 1.5;
  }

  .textInputContanier {
    display: flex;
    justify-content: space-between;
    align-content: center;

    input {
      margin-left: 20px;
      margin-bottom: 5px;
      width: 120px;
      height: 18px;
    }
  }

  .saveContainer {
    margin-bottom: 10px;
    text-align: center;
  }

  .saveButton {
    font-size: 14px;
  }
`;
