import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';

export default function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={"About Me"} span={'About me'} />
                <ImageSection />
                <ServicesSection />
            </AboutStyled>
        </MainLayout>  
    )
}
const AboutStyled = styled.section`

`;


