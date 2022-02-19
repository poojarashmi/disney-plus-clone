import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {
    // const { id } = useParams();
    // console.log(id);
    // const [ movie, setMovie ] = useState();

    // useEffect(() => {
    //     //grab the movie information from the database
    //     db.collection("movies")
    //     .doc(id)
    //     .get()
    //     .then((doc) => {
    //         //save the movie data
    //         if(doc.exists){
    //             setMovie(doc.data());
    //         }
    //         else{
    //             //redirect to home page
    //         }
    //     })
    // }, [])
    // // empty bracket means call the functionality whenever you load the component

    // console.log("Movie is ", movie);

  return <Container>
      <Background>
          <img src='https://i.imgur.com/RKWXhBW.jpg'/>
      </Background>

      <ImgTitle>
            <img src='/images/Disney Logo.png'/>  
        </ImgTitle>

      <Controls>
        <PlayButton>
            <img src='/images/play-icon-black.png' alt='Play Button' />
            <span>Play</span>
        </PlayButton>

        <TrailorButton>
            <img src='/images/play-icon-white.png' alt='Play Button' />
            <span>Trailor</span>
        </TrailorButton>

        <AddButton>
            <span>+</span>
        </AddButton>

        <GroupWatchButton>
            <img src='/images/group-icon.png' alt='Play Button' />
        </GroupWatchButton>
      </Controls>

        <SubTitle>
            2018 - 7m - Family, Fantasy, Kids, Animation
        </SubTitle>

        <Description>
            A Chinese mom who is sad when her grown son leaves home gets another chance at motherhood when one of her dumplings spings to life. But she finds that nothings stays cute and small forever.
        </Description>
  </Container>;
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
    margin-top: 70px;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImgTitle = styled.div`
    padding-top: 40px;
    margin-bottom: 20px;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailorButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0, 0, 0, 1);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size : 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 14px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;
    width: 70%;
`