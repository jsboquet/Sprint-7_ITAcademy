import styled from "styled-components";

export const Popup = styled.div`
  .contenidor {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: none;
    flew-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .popUp {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 400px;
    line-height: 1.4;
    border: 3px solid black;
    border-radius: 15px;
    padding: 0px 20px 0px 20px;
    background-color: white;
    color: black;
  }

  .infoDetalls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4px;
    height: 4px;
    padding: 6px;
    border-radius: 50%;
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    cursor: help;
    background-color: gray;
  }
`;
