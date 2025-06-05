import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div className="nav-container" style={{height: '80px', backgroundColor: '#371A0D'}}>
            <div className="col-12 col-auto justify-content-center form-footer">
                <div className="col-lg-3" style={{maxWidth: '100px', marginLeft: '20px'}}>
                    <img src={`/media/img/logo.png`} alt="" className=""/>
                </div>
                <Navbar bg="dark" data-bs-theme="dark" style={{backgroundColor: '#371A0D'}}>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/" style={{color: 'white'}}>Thực đơn</Nav.Link>
                            <Nav.Link href="pricing" style={{color: 'white'}}>Liên hệ chúng tôi</Nav.Link>
                            <button className="btn btn-light-primary btn-sm" id="find-btn">Đặt bàn</button>
                            <button type="button" className="btn btn-warning btn-sm" id="find-btn">Xem Thực đơn & Đặt món</button>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;