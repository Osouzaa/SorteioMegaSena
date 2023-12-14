import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;

const Title = styled.h1`
  color: #eef0e5;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    @media (max-width: 390px) {
      margin: 2em 0em 3em 0em;
      width: 50%;
      height: 35px;
      border: none;
      border-radius: 15px;
      padding-left: 1em;
      font-size: 15px;
      background-color: #b6c4b6;
      font-size: 15px;
      font-weight: 700;
      color: #000000;
      cursor: pointer;

      &:hover {
        background-color: #163020;
        color: #eef0e5;
      }
    }
    margin: 2em 0em 3em 0em;
    width: 15%;
    height: 35px;
    border: none;
    border-radius: 15px;
    padding-left: 1em;
    font-size: 15px;
    background-color: #b6c4b6;
    font-size: 15px;
    font-weight: 700;
    color: #000000;
    cursor: pointer;

    &:hover {
      background-color: #163020;
      color: #eef0e5;
    }
  }
`;
const Clabel = styled.label`
  @media (max-width: 390px) {
    width: 100%;
  }

  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  gap: 1em;

  font-size: 20px;
  font-weight: 500;
  color: #eef0e5;
  input {
    width: 80%;
    height: 35px;
    border: none;
    border-radius: 15px;
    padding-left: 1em;
    font-size: 15px;
    outline: none;
  }
`;

const Table = styled.table`
  border-collapse: collapse;

  th {
    border: 1px solid #eef0e5;
    text-align: center;
    padding: 8px;
    font-size: 18px;
  }
  td {
    border: 1px solid #eef0e5;
    text-align: center;
    padding: 8px;
    font-size: 18px;
    color: #eef0e5;
  }

  th {
    background-color: #eef0e5;
  }
`;

const SubTitle = styled.div`
  margin-top: 2em;

  h2 {
    text-align: center;
    color: #eef0e5;
  }

  p {
    font-size: 18px;
    margin-bottom: 2em;
    text-align: center;
    color: #eef0e5;
  }
`;

export { Container, Clabel, Content, Title, Table, SubTitle };
