import React from 'react'
import './Home.css';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Viewers from './Viewers';
import Trending from './Trending';
import {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import db from '../firebase';
import {setMovies} from '../features/movies/movieSlice';
import {selectUserName} from '../features/user/userSlice';
function Home() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends=[];
    let newDisneys=[];
    let originals=[];
    let trendings=[];

    useEffect(()=>{
        db.collection('movies').get().then((querySnapShot)=>{
                querySnapShot.forEach((doc)=>{
                    switch(doc.data().type){
                        case 'recommend':
                            recommends = [...recommends,{id:doc.id,...doc.data()}];
                            break;
                        case 'new':
                            newDisneys = [...newDisneys,{id:doc.id,...doc.data()}];
                            break;
                        case 'original':
                            originals = [...originals,{id:doc.id,...doc.data()}];
                            break;
                        case 'trending':
                            trendings = [...trendings,{id:doc.id,...doc.data()}];
                            break;
                    }
                    
                });
                dispatch(setMovies({
                    recommend : recommends,
                    newDisney : newDisneys,
                    original : originals,
                    trending : trendings,
                })); 
        }); 
         
    },[userName]);

    return (
        <div className="container">
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </div>
    )
}

export default Home;
