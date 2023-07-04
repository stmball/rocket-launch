import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./Rockets.css";

export default function Rockets({ launches, launchProgress }) {

    const rockets = [];

    for (let i = 0; i < launches; i++) {
        let z_index = i + 2;
        let rocket_speed = (Math.random() * 5 + 10).toFixed(2) + 's';
        rockets.push(<img src='./rocket.png' alt='rocket' class="mx-auto d-block rocket_in_orbit" style={{ zIndex: `${z_index}`, animationDuration: `${rocket_speed}` }} />)
    }

    const launch_y = 300 - launchProgress;


    return (
        <Container>
            <Row style={{ marginTop: "5rem" }}>
                <Col md={10}>
                    <div className='rocket_container'>
                        {rockets}
                        <img src='./earth.png' alt='earth' class="rounded d-block earth" />
                    </div>

                </Col>
                <Col>
                    <img src='./rocket.png' alt='rocket' class="rocket_to_launch mx-auto d-block" style={{ top: `${launch_y}px` }} />
                </Col>
            </Row>
            <Row style={{ marginTop: "5rem" }}>
                <Col md={10}>
                    <h5 class="text-center">Number of rockets in orbit: {launches}</h5>
                </Col>
                <Col>
                    <h5 class="text-center">Current progress to launch {launchProgress}%</h5>
                </Col>

            </Row>
        </Container>
    )
}
