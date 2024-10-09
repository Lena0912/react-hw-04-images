import styled from "styled-components";

export const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
gap: 16px;
`;

export const ListItem = styled.li`
flex-basis: calc((100% - 8px) /3 );
`;