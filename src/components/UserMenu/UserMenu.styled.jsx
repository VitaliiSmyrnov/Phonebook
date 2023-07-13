import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-weight: 700;
  }

  button {
    display: inline-flex;
    align-items: center;

    padding: 10px;
    margin-bottom: 1px;

    gap: 4px;
    
    border: 1px solid #2a363b;
    border-radius: 10px;

    &:hover,
    &:focus {
      color: #43d7ff;
      background-color: #37393c;

      box-shadow: ${p => p.theme.shadows.normal};
    }
  }
`;
