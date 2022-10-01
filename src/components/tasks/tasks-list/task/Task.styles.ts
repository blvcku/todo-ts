import styled from "styled-components";

export const TaskContainer = styled.li`
    background:mediumblue;
    border-radius:15px;
    padding:1rem;
    color:white;
    display:grid;
    grid-template-columns:1fr auto;
    gap:1rem;
    h3{
        font-size:1.5rem;
    }
    p{
        margin-top:.5rem;
    }
    button{
        padding:.3rem 1rem;
        border-radius:15px;
        background:red;
        color:white;
        cursor:pointer;
        border:none;
    }
`;