import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { setMovies } from '../features/movie/movieSlice';

function Home() {
    const dispatch = useDispatch();

    useEffect(()=>{
        onSnapshot(collection(db, "movies"), (snapshot) => {
            // console.log(snapshot);
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            console.log(tempMovies);

            dispatch(setMovies(tempMovies));
        })
    }, [])    

  return <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
  </Container>
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

    &:before{
        background-image: url('/images/home-background.png');
        /* starting position of the image */
        background-position: center center; 
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`