import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'

export default function HomePage() {
    return (
        <div>
            <HomePageStyled>
                <div className="particle-con">
                    <Particle />
                </div>
                <div className="typography">
                    <h1>I Am <span>Gaurav singh</span></h1>
                    <p>lorem20 jhfdf jfddhdkjhiufh hdfjkdffhiushf dfgh ghf lkjfh isdf fbhjdfh gf jdfhb jgfj hf jdgfjdsgf sd iojgfdgj hgfdkjhgf iuhg fdhgfkjd </p>
                    <div className="icons">
                        <a href="https://google.com" className="icon i-facebook"><FacebookIcon /></a>
                        <a href="https://google.com" className="icon i-github"><GithubIcon /></a>
                        <a href="https://google.com" className="icon i-youtube"><YoutubeIcon /></a>
                    </div>
                </div>
            </HomePageStyled>
        </div>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;
