import React from 'react'
import styled from 'styled-components';
import disneyImage from '../images/viewers-disney.png';
import {useSelector} from 'react-redux';
import {selectnewDisney} from '../features/movies/movieSlice';
import {Link} from 'react-router-dom';
function NewDisney() {

    const newDisneyMovie = useSelector(selectnewDisney);

    return (
        <Container>
            <h4>New Disney</h4>
            <Content>
            {newDisneyMovie && newDisneyMovie.map((movie,key)=>(
                <Wrap key={key}>
                    {movie.id}
                    <Link to={`/detail/`+movie.id}>
                        <img src={movie.cardImg} alt={movie.title} />
                    </Link>
                </Wrap>
            ))}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding : 0 0 26px;
`;

const Content = styled.div`
    display : grid;
    grid-template-columns : repeat(4,minmax(0,1fr));
    grid-gap:25px;
    gap:25px;

    @media (max-width:768px){
        grid-template-columns : repeat(2,minmax(0,1fr));
    }

`;

const Wrap = styled.div`
    padding-top : 1.25%;
    border:1px solid white;
    overflow:hidden;
    object-fit:cover;
    height:150px;
    border-radius :10px;
    box-shadow : rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor:pointer;
    position : relative;
    transition : all 250ms ease-out;
    border : 3px solid rgba(249,249,249,0.1);

    img{
        object-fit:cover;
        height:100%;
        display:block;
        position:absolute;
        inset:0px;
        z-index:1;
        top:0;
        transition:opacity 500ms ease-in-out 0s;
        width:100%;
    }

    &:hover{
        transform : scale(1.05);
        border-color : rgba(249,249,249,0.8);
        border : 3px solid rgba(249,249,249,0.8);
    }
`;
export default NewDisney
