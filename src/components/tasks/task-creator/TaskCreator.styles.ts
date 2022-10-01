import styled from "styled-components";

export const TaskCreatorContainer = styled.form`
    display:flex;
    flex-direction:column;
    h2{
        text-align:center;
        font-size:2rem;
    }
    button{
        width:max-content;
        margin-inline:auto;
        padding:.7rem 2rem;
        margin-top:1rem;
        border:none;
        background:black;
        color:white;
        cursor:pointer;
        border-radius:15px;
    }
    input, textarea{
        width:100%;
        margin-inline:auto;
        margin-top:1.5rem;
        padding:.7rem .9rem;
        border-radius:15px;
        border:none;
        outline:none;
    }
    textarea{
        resize:none;
        margin-top:1rem;
        min-height:7rem;
    }
`;