import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  overflow: auto;

  width: 280px;
  padding: ${p => p.theme.spacing(6)};

  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.normal};
  border-radius: ${p => p.theme.radii.md};

  h2 {
    margin: auto;
    margin-bottom: 15px;
    color: ${p => p.theme.colors.header};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: ${p => p.theme.spacing(3)};
    color: ${p => p.theme.colors.label};
  }

  input {
    margin-top: ${p => p.theme.spacing(1)};

    display: inline-block;
    width: 270px;
    height: ${p => p.theme.spacing(4.5)};
    padding: ${p => p.theme.spacing(1)};
    line-height: ${p => p.theme.lineHeights.body};

    color: #efefef;
    background-color: #202223;

    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};

    transition: border linear 0.2s, box-shadow linear 0.2s;
  }

  input:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderAccent};
    outline: none;
    box-shadow: ${p => p.theme.shadows.input};
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.spacing(8)};

  font-size: ${p => p.theme.fontSizes.sm};
  text-align: center;
  min-width: 90px;

  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(4)};
  padding-top: ${p => p.theme.spacing(1)};
  padding-bottom: ${p => p.theme.spacing(1)};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.header};
  background-color: ${p => p.theme.colors.backgroundLight};

  transition: background-color ${p => p.theme.transitions.normal};

  box-shadow: ${p => p.theme.shadows.normal}, ${p => p.theme.shadows.button};
  cursor: pointer;

  :hover,
  :focus {
    color: white;
  }
`;
