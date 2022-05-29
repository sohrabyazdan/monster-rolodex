import styled from "styled-components";

export const GridStyle = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  text-align: center;
  margin-bottom: 3rem;
`;
