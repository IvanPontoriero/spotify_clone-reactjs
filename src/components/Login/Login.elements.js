import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-item: center;
    background: #000000;
`;

export const Nav = styled.nav`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1em;
`;

export const LoginBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


export const LoginBtn = styled.button`
    cursor: pointer;
    padding: 1em;
    background-color: #1ed760;
    color: #FFFFFF;
    text-decoration: none;
    letter-spacing: .1em;
    border-radius: 3em;
`;