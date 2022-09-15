import styled from "styled-components";

export const Llista = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  border: 3px solid black;
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  line-height: 1.5;
  text-align: center;

  table {
    margin-top: 10px;
    font-size: 12px;
    cursor: pointer;
    font-family: arial;

    td {
      padding: 2px 8px 2px 8px;
      border-bottom: 1px solid #ddd;
      border-right: 0px;
      border-left: 0px;
    }

    tr:hover {
      background-color: #ddd;
    }
  }
`;
