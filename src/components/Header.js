import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../img/microage_logo.png";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand >
                    <Image src={logo} alt="MicroAge Logo" style={{ height: "2rem", marginRight: "1rem" }} className='d-inline-block align-top mr-3' />
                    MicroAge Rocket Launch
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}