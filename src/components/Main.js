import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Confetti from 'react-confetti';
import yay from '../img/yeah.wav';
import Rockets from './Rockets';

export default function Main({ showTotalModal, setShowTotalModal }) {

    const [launches, setLaunches] = React.useState(0);
    const [launchProgress, setLaunchProgress] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [confetti, setConfetti] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);

    const howl = new Audio(yay);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleTotalClose = () => setShowTotalModal(false);

    const THRESHOLD = 245166.0;

    const add_score = (e) => {
        e.preventDefault();

        if (launchProgress + parseFloat(score) >= THRESHOLD) {
            handleShow();
            triggerConfetti(launches);
            let num_launches_to_add = Math.floor((launchProgress + parseFloat(score)) / THRESHOLD);
            setLaunches(launches + num_launches_to_add);
            setLaunchProgress(launchProgress + parseFloat(score) - THRESHOLD * num_launches_to_add);
        } else {
            setLaunchProgress(launchProgress + parseFloat(score));
        }
        setScore(0);
    }

    const triggerConfetti = (launches) => {
        howl.play();
        setConfetti([...confetti, <Confetti run={true} recycle={false} key={launches} />]);
        if (confetti.length > 2) {
            setConfetti(confetti.slice(1));
        }
    }


    return (
        <Container className='mt-5 d-grid'>
            {confetti}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rocket Launch</Modal.Title>
                </Modal.Header>
                <Modal.Body>Rocket Launched! You win a prize!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showTotalModal} onHide={handleTotalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rocket Launch</Modal.Title>
                </Modal.Header>
                <Modal.Body>Total newtons lifted so far: {launchProgress + launches * THRESHOLD}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleTotalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Rockets launches={launches} launchProgress={launchProgress} threshold={THRESHOLD} className="mt-5" />
            <Form className='d-grid gap-2 mt-5' onSubmit={add_score}>
                <Form.Control type='number' step='any' placeholder='Enter Score' value={score} onChange={(e) => setScore(e.target.value)} />
                <Button onClick={add_score}>Add progress</Button>
            </Form>
        </Container>
    )
}
