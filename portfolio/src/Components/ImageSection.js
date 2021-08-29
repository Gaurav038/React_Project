import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume" />
            </div>
            <div className="right-content">
                <h4>I am <span>Gaurav singh</span></h4>
                <p className="paragraph">
                    fkjvhndkjv jdfbhf ufqwuieh kj p[pqfehiu efh nmcxvb g dfb vclkjhkdjfbiuffbh ifh ifuherfbdnfiuud uf u fh djbf dfui fuuif fkdjbnf]
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>FullName</p>
                        <p>Age</p>
                        <p>nationality</p>
                        <p>Languages</p>
                        <p>services</p>
                    </div>
                    <div className="info">
                        <p>: gaurav singh</p>
                        <p>: 24</p>
                        <p>: india</p>
                        <p>: hndi anglish</p>
                        <p>: Freelancer, inerpreneur</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
margin-top: 5rem;
display: flex;
@media screen and (max-width:1000px){
    flex-direction: column;
    .left-content{
        margin-bottom: 2rem;
    }
}
.left-content{
    width: 100%;
    img{
        width: 95%;
        object-fit: cover;
    }
}
.right-content{
    width: 100%;
    h4{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
        }
    }
    .paragraph{
        padding: 1rem 0;
    }
    .about-info{
        display: flex;
        padding-bottom: 1.4rem;
        .info-title{
            padding-right: 3rem;
            p{
                font-weight: 600;
            }
        }
        .info-title, .info{
            p{
                padding: .3rem 0;
            }
        }
    }
}
`;

export default ImageSection;
