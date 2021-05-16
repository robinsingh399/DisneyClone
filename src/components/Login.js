import React from 'react'
import styled from 'styled-components';
import './Login.css';
import Logo from '../images/cta-logo-one.svg';
import LogoTwo from '../images/cta-logo-two.png';

function Login() {
    return (
    <Container>
        <Content>
            <div className="BgImage">
            </div>
            <CTA>
                <img className="CTALogoOne" src={Logo} alt=""/>
                <a className="SignUp">Get All There</a>
                <p className="Description">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21 , the price of Disney+ and The Disney Bundle will increase by $1.</p>
                <img className="CTALogoOne" src={LogoTwo} alt=""/>
            </CTA>
        </Content>
    </Container>
    )
}

const Container = styled.section`
    overflow : hidden;
    display : flex;
    flex-direction : column;
    text-align : center;
    height : 100vh;
`

const Content = styled.div`
    margin-bottom : 10vw;
    width : 100%;
    position :relative;
    min-height : 100vh;
    box-sizing : border-box;
    align-items : center;
    justify-content : center;
    display : flex;
    flex-direction : column;
    padding : 80px 40px;
    height : 100%;
`;

const CTA = styled.div`
    display : flex;
    flex-direction : column;
    max-width : 650px;
    width : 100%
`;


export default Login
