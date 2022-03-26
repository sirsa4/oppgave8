
import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  img {
    width: 300px;
    height: 300px;
  }
  article {
  background-color: salmon;
  padding: 1rem;
  text-align: center;
  a {
    background-color: black;
    color: white;
    padding: 0 1rem;
    border-radius: 10%;
  }
  }
`;

export default StyledMain;