import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.css';
import blackPlayIcon from "../images/play-icon-black.png";
import whitePlayIcon from '../images/play-icon-white.png';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';
import db from '../firebase';

function Detail(props) {

    const {id} = useParams();
    const [detailData,setdetailData] = useState({});

    useEffect(()=>{
        db.collection('movies').doc(id).get().then((doc)=>{
            if(doc.exists){
                setdetailData(doc.data());
            }else{
                console.log('no such element is present in firebase');
            }
        })
        .catch((error)=>{
            console.log("Error getting document :",error);
        });
        
    },[id]);

    return (
        <Container>
           <Background>
                <img
                    src={detailData.backgroundImg}
                    alt={detailData.title}/>
           </Background>
           <ImageTitle>
                    <img
                    alt={detailData.title}
                    src={detailData.titleImg}
                    />
           </ImageTitle>
           <ContentMeta>
               <Controls>
                   <Player>
                       <img src={blackPlayIcon}/>
                       <span>PLAY</span>
                   </Player>
                   <Trailer>
                   <img src={whitePlayIcon}/>
                       <span>TRAILER</span>
                   </Trailer>
                   <AddList>
                       <AddIcon/>
                   </AddList>
                   <AddList>
                       <GroupIcon/>
                   </AddList>
               </Controls>
               <SubTitle>
                    {detailData.subTitle}
               </SubTitle>
               <Description>
                    {detailData.description}
               </Description>
           </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
            position:relative;
            min-height:calc(100vh-250px);
            overflow-x:hidden;
            display:block;
            top:11vh;
            padding : 0 calc(3.5vw+5px);
`;

const Background = styled.div`

    left:0px;
    right:0px;
    top:0px;
    z-index:-1;
    opacity:0.8;
    position:fixed;

    img{
        width:100vw;
        height:100vh;


        @media (max-width:768px){
            width:initial;
        }
    }

`;

const ImageTitle = styled.div`
      
       height:30vw;
       min-height:170px;
       width:100%;
       margin-left:5vh;
       margin-top:20vh;
       display:flex;
       justify-content:flex-start;
       align-items:flex-end;
       padding-bottom:24px;
       overflow:hidden;

       img{
           object-fit:contain;
           width:35vw;
           min-width:200px;
           max-width:600px;
       }
      
`;

const ContentMeta = styled.div`
       max-width:874px;
       margin-left:5vh;
`;

const Controls = styled.div`
      align-items:center;
      margin-bottom:20px;
      min-height:56px;
      display:flex;
      flex-flow:row norap;
`;

const Player = styled.div`
       border:none;
       background:white;
       color:black;
       display:flex;
       align-items:center;
       justify-content:center;
       height:56px;
       font-size:15px;
       margin:0 22px 0 0;
       padding:0 24px;
       border-radius:4px;
       cursor:pointer;
       text-transform:uppercase;
       letter-spacing:1.8px;
       text-align:center;

       img{
           width:32px;
       }

       &:hover{
           background:rgb(198,198,198);
       }

       @media (max-width:768px){
           height:45px;
           padding:0 12px;
           font-size:12px;
           margin:0 10px 0 0;
           img{
               width:25px;
           }
       }

`;

const Trailer = styled(Player)`
       background : rgba(0,0,0,0.3);
       color:white;
       border:1px solid rgb(249,249,249);

`;

const AddList = styled.div`
       border:2px solid white;
       margin-right:16px;
       height:44px;
       width:44px;
       display:flex;
       align-items:center;
       justify-content:center;
       background-color:rgba(0,0,0,0.6);
       border-radius:50%;
       cursor:pointer;

`;

const SubTitle = styled.div`
       color:rgb(249,249,249);
       font-size:15px;
       min-height:20px;
       margin-left:
       
       @media (max-width:768px){
           font-size:12px;
       }
`;

const Description = styled.div`
       line-height:1.8;
       font-size:20px;
       padding:16px 0px;
       color:rgb(249,249,249);

       @media (max-width:768px){
           font-size:14px;
       }
`;


export default Detail
