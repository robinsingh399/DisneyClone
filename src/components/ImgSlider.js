import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './ImgSlider.css';
import styled from 'styled-components';
import pic1 from '../images/slider-badag.jpg';
import pic2 from '../images/slider-badging.jpg';
import pic3 from '../images/slider-scale.jpg';
import pic4 from '../images/slider-scales.jpg';
function ImgSlider() {

    let settings={
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
    };

    return (
            <Carousel {...settings}  className="slider">
                <Wrap>
                    <a>
                        <img src={pic1}/>
                    </a>
                </Wrap>
                <Wrap>
                <a>
                        <img src={pic2} />
                    </a>
                </Wrap>
                <Wrap>
                <a>
                        <img src={pic3}/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src={pic4} />
                    </a>
                </Wrap>
            </Carousel>
    )
}

const Carousel = styled(Slider)`

    & > button{
        opacity : 0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition : opacity 0.2s ease 0s;
        }
    }


    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow : initial;
    }

`;

const Wrap = styled.div`
    border-radius : 4px;
    cursor : pointer;
    position : relative;

    a{
        padding : 4px;
        display : block;
        border-radius : 4px;
        box-shadow : rgb(0 0 0 /69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    
        img{
            height:100%;
            width:100%;
        }
    }

    &:hover{
        padding:0;
        border : 4px solid rgba(249, 249,249,0.8);
        transition-duration : 300ms;
    }

`;


export default ImgSlider;
