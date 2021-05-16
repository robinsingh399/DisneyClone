import React from 'react'
import styled from 'styled-components';
import disneyImage from '../images/viewers-disney.png';
import marvelImage from '../images/viewers-marvel.png';
import nationalImage from '../images/viewers-national.png';
import pixarImage from '../images/viewers-pixar.png';
import starWarsImage from '../images/viewers-starwars.png';
import disneyVideo from '../videos/1564674844-disney.mp4';
import marvelVideo from '../videos/1564676115-marvel.mp4';
import nationalVideo from '../videos/1564676296-national-geographic.mp4';
import pixarVideo from '../videos/1564676714-pixar.mp4';
import starWarsVideo from '../videos/1608229455-star-wars.mp4';
function Viewers(props) {
    return (
        <Container>
            <Wrap>
                <a>
                        <img src={disneyImage}/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                      <source src={disneyVideo} type="video/mp4"/>
                      </video> 
                </a>
                </Wrap>  
                <Wrap>
                <a>
                        <img src={marvelImage}/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                      <source src={marvelVideo} type="video/mp4"/>
                      </video>   
                </a>
                </Wrap>
                <Wrap>
                <a>
                        <img src={nationalImage}/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                      <source src={nationalVideo} type="video/mp4"/>
                      </video>
                </a>
                </Wrap>
                <Wrap>
                <a>
                        <img src={pixarImage}/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                      <source src={pixarVideo} type="video/mp4"/>
                      </video>
                </a>
                </Wrap>
                <Wrap>
                <a>
                        <img src={starWarsImage}/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                      <source src={starWarsVideo} type="video/mp4"/>
                      </video>
                </a>
                </Wrap> 
                
                            
        </Container>
    )
}

const Container  = styled.div`
    margin-top : 30px;
    display : grid;
    padding : 30px 0px 26px;
    grid-template-columns : repeat(5,minmax(0,1fr));
    grid-gap:25px;
    gap:25px;

    @media (max-width : 768px){
        grid-template-columns : repeat(1,minmax(0,1fr));
    }

`;

const Wrap = styled.div`
    padding-top : 6.25%;
    border : 3px solid rgba(249,249,249,0.1);
    box-shadow : rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor : pointer;
    overflow : hidden;
     height : 150px;
    position : relative;
    transition : all 250ms ease-out;


    img{
        object-fit : cover;
        display : block;
        inset : 0px;
        height : 100%;
        width : 100%;
        opacity : 1;
        transition : opacity 500ms ease-in-out 0s;
        z-index:1;
        position:absolute;
        top:0;
    }

    video{
        position:absolute;
        heigth:100%;
        width:100%;
        top:0;
        opacity:0;
        object-fit : cover;
        bottom:0;
    }


    &:hover{
        transform : scale(1.05);
        border-color : rgba(249,249,249,0.8);

        video{
            opacity:1;
        }
    }

`;


export default Viewers
