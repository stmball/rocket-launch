import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import earth from "../img/earth.png";
import rocket from "../img/rocket.png";
import "./Rockets.css";

export default function Rockets({ launches, launchProgress }) {

    const [rockets, setRockets] = React.useState([]);
    const ref = React.useRef(null);
    const prevRockets = React.useRef(0);

    let max_height = 400;

    React.useEffect(() => {
        max_height = ref.current.clientHeight
    }, [])

    React.useEffect(() => {
        let z_index_start = rockets.length + 2;
        let num_rockets_to_add = launches - prevRockets.current;
        let rockets_to_add = [];
        for (let i = 0; i < num_rockets_to_add; i++) {
            let rocket_speed = (Math.random() * 5 + 10).toFixed(2) + 's';
            rockets_to_add.push(<img src={rocket} alt='rocket' className="mx-auto d-block rocket_in_orbit" style={{ zIndex: `${z_index_start + i}`, animationDuration: `${rocket_speed}` }} key={z_index_start + i} />)
        }
        setRockets([...rockets, ...rockets_to_add])
        prevRockets.current = launches;
    }, [launches])

    const launch_y = max_height - (launchProgress / 245166) * max_height;


    return (
        <Container>
            <Row style={{ marginTop: "5rem" }}>
                <Col sm={10}>
                    <div className='rocket_container'>
                        {rockets}
                        <img src={earth} alt='earth' className="rounded d-block earth" />
                    </div>

                </Col>
                <Col ref={ref}>
                    <img src={rocket} alt='rocket' className="rocket_to_launch mx-auto d-block" style={{ top: `${launch_y}px` }} />
                </Col>
            </Row>
            <Row style={{ marginTop: "5rem" }}>
                <Col md={10}>
                    <h5 className="text-center">Number of rockets in orbit: {launches}</h5>
                </Col>
                <Col>
                    <h5 className="text-center">Current progress to launch {(launchProgress / 245166).toFixed(2)}%</h5>
                </Col>

            </Row>
        </Container>
    )
}
