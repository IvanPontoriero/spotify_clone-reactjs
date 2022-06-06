import { loginURL } from './auth'
import {Container, LoginBlock, LoginBtn, Nav} from './Login.elements'
import Banner from '../../assets/logo-banner.png'

const Login = () => {
    return(
        <Container>
            <Nav>
                <img src={Banner} alt="spotify logo" width="10%"/>
            </Nav>
            <LoginBlock>
                <a href={ loginURL }>
                    <LoginBtn>LOGIN WITH SPOTIFY</LoginBtn>
                </a>
            </LoginBlock>
        </Container>
    )
}

export default Login;