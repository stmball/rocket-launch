import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>MicroAge Rocket Launch</Navbar.Brand>
            </Container>
        </Navbar>
    )
}