import React from 'react';
import styled from 'styled-components';

function Login() {
  return <Container>
    <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />

        <SignUp>
            Get all there
        </SignUp>

        <Description>
            Get Premiere access to Raya and the latest dragon for an additional fee with a Disney+ subscription. As of 3/24/21, the price of disney+ and the disney bundle will increase by $1.
        </Description>

        <CTALogoTwo src='/images/cta-logo-two.png' />
    </CTA>

  </Container>;
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;

    &:before{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.8;
    }
`
const CTA = styled.div`
    max-width: 650px;
    width: 60%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    margin-top: 20px;
`

const SignUp = styled.button`
    text-transform: uppercase;
    text-align: center;
    padding: 17px 0;
    background-color: #0063e5;
    border: none;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    transition: all 250ms;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.div`
    text-align: center;
    font-size: 11px;
    letter-spacing: 1.5px; 
    line-height: 1.5;
    margin-bottom: 20px;
`

const CTALogoTwo = styled.img`
`