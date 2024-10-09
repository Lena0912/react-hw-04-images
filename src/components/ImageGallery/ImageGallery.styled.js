import styled from "styled-components";

export const ImageGalleryBox = styled.ul`
    display: flex;
  flex-wrap: wrap;
  gap: 16px;
justify-content: center;
`;

export const ImageContainer = styled.li`
  flex: 1 1 calc(25% - 16px);
  max-width: calc(25%) - 16px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

