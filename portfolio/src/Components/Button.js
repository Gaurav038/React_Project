import React from 'react'
import styled from 'styled-components'

export default function Button({filter, button}) {
    return (
        <ButtStyled>
            {
                button.map((but, index)=>{
                    return <ButtonStyled key={index} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }  
        </ButtStyled>
    )
}

const ButtonStyled = styled.button`
    outline : none;
    border : none;
    background-color : var(--background-light-color-2);
    padding : .8rem 2rem;
    font-size : inherit;
    color : var(--white-color);
    curser: pointer;
    transition : all .4s ease-in-out;
    &:active, &:focus{
        background-color : var(--primary-color);
    }
    &:hover{
        background-color : var(--primary-color);
    }
    &:not(:last-child){
        margin-right : .6rem;
    }
`;

const ButtStyled = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-wrap : wrap;
    width : 70%;
    margin : 2.4rem auto;
`;
