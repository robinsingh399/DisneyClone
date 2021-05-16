import React from 'react'
import './Header.css';
import HeaderLogo from '../images/logo.svg';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import {auth, provider} from '../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {selectUserName , selectUserEmail , selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/user/userSlice';

function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const handleAuth = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
                dispatch(setUserLoginDetails({
                    name : result.user.displayName,
                    email : result.user.email,
                    photo : result.user.photoURL,
                }));
                history.push('/home');
        }).catch((err)=>{
            alert(err.message);
        });
        
    };

    const signOut=()=>{
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push('/');
            })
            .catch((err)=>alert(err.message));
    }

    return (
        <div className="header">
                <a><img className="header_logo" src={HeaderLogo} alt=""/></a>
                {!username?<a className="header_login" onClick={handleAuth}>LOGIN</a> : 
                <><nav className="header_options">
                <a href="/home"><HomeOutlinedIcon/><span>HOME</span></a>
                <a href="/search"><SearchOutlinedIcon/><span>SEARCH</span></a>
                <a href="/watchlist"><AddOutlinedIcon/><span>WATCHLIST</span></a>
                <a href="/originals"><StarOutlinedIcon/><span>ORIGINALS</span></a>
                <a href="/movies"><TheatersOutlinedIcon/><span>MOVIES</span></a>
                <a href="/series"><LiveTvOutlinedIcon/><span>SERIES</span></a>
                </nav>
                <a className="header_dpdetails"><Avatar className="header_dp" alt={username} src={userPhoto}></Avatar>
                <a className="header_signOut" onClick={signOut}><span>SIGN OUT</span></a>
                </a></>}
                
        </div>
    ) 
}

export default Header;
