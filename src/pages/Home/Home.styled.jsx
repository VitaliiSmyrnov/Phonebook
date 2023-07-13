import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  color: #37393c;

  h2 {
    font-weight: 600;
  }
 
  span {
    display: inline-block;
    font-weight: 400;
    padding: 0px 5px 3px;

    color: #43d7ff;
    background-color: #37393c;
    border-radius: 4px;

    box-shadow: ${p => p.theme.shadows.normal};
  }
`;
