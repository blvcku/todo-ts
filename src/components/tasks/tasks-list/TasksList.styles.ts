import styled from "styled-components";

export const TasksListContainer = styled.ul`
    margin-top:2rem;
    list-style:none;
    display:grid;
    gap:1rem;
    &:empty{
        text-align:center;
        &::before{
            content:'There are no tasks yet. Create one!';
        }
    }  
`;