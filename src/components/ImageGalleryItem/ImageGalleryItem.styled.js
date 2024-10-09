import styled from 'styled-components';

export const StyledImageItem = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
transition: transform 0.3s ease;

&:hover {
    transform: scale(1.05);
}
`;