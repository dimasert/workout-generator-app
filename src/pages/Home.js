import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

import './Home.css';

const Home = () => {
    return(
        <div>
        <Jumbotron className="jumboPic d-flex align-items-center min-vh-100">
            <Container className="text-center">
            <h1 style={{fontSize: "6.2em" , color:"White"}}className="HeaderClass">WorkoutGenerator</h1>
            <br/>
            <ButtonGroup>
                <Button variant="light" href="/about">About</Button>{' '}
                <Button variant="light" href="/generator">Workouts</Button>
            </ButtonGroup>
            
            </Container>
        </Jumbotron>
        </div>
    )
}
export default Home