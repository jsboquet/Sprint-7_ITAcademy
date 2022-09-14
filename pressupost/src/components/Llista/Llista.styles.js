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
    font-size: 14px;
    cursor: pointer;

    td {
      margin: 8px;
      border-bottom: 1px solid #ddd;
    }

    tr:hover {
      background-color: #ddd;
    }
  }
`;
