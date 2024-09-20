import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background-color: ${props => props.bg === "black" ? "black" : "blue"}`;