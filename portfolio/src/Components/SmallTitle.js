import React from 'react'
import styled from 'styled-components'

export default function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h>{title}</h>
        </SmallTitleStyled>
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
    }
`;