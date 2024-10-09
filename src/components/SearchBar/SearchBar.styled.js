import styled from 'styled-components';


export const SearchBarContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const SearchBarInput = styled.form`
  display: flex;
  align-items: center;  
  border-radius: ${({theme}) => theme.radii.sm};
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.bgInput};
  gap: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radii.sm};;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textColor};
  width: 250px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonAccent};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 8px 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;