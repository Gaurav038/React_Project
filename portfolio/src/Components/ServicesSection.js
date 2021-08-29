import React from 'react'
import { InnerLayout } from '../styles/Layouts'
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import intelligence from '../img/intelligence.svg';
import design from '../img/design.svg';
import gamedev from '../img/gamedev.svg'

export default function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'Web design'}
                        para={'loremfvjf vhfvhn fdv auhewih mvmxc vb u hfuvnviuf wieuf hvnvn fui'}
                    />
                    <ServiceCard
                        image={intelligence}
                        title={'Artifiial Intelligance'}
                        para={'loremfvjf vhfvhn fdv auhewih mvmxc vb u hfuvnviuf wieuf hvnvn fui'}
                    />
                    <ServiceCard
                        image={gamedev}
                        title={'Development'}
                        para={'loremfvjf vhfvhn fdv auhewih mvmxc vb u hfuvnviuf wieuf hvnvn fui'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;
