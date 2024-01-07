import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

export const ReactPage = () => {
    return (<>
        <Navbar>
            <h1>React is Great.</h1>
        </Navbar>
        <ProgressBarContainer>
            <ProgressBar />
        </ProgressBarContainer>
        <Container>
            <Header>
                <h1>Reactってすごいよね。</h1>
            </Header>
            <Main>
                <p>{"Reactはすごいよね。".repeat(1000)}</p>
            </Main>
        </Container>
    </>)
}

const Navbar = styled.nav`
    background-color: blue;
    color: white;
    font-size: 1rem;
    padding-inline: 1rem;
    padding-block: 1rem;
    @media (min-width: 768px) {
        font-size: 1.5rem;
        padding-inline: 3rem;
        padding-block: 1.5rem;        
    }
    @media (min-width: 1100px) {
        font-size: 2rem;
        padding-inline: 5rem;
        padding-block: 2rem;        
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
    @media (min-width: 768px) {
        font-size: 1.5rem;
        margin-inline: 3rem;
    }
    @media (min-width: 1100px) {
        font-size: 2rem;
        margin-inline: 5rem;
    }
`

const progress = keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
`

const ProgressBarContainer = styled.div`
    position: sticky;
    top: 10px;
    left: 0px;
    width: 100%;
    border-radius: 5px;
    height: 10px;
    background-color: #eee;
`

const ProgressBar = styled.div`
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: blue;
    animation: linear ${progress};
    animation-duration: auto;
    animation-timeline: scroll();
`

const Header = styled.header`
    display: block;
    font-size: 1rem;
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
    @media (min-width: 1100px) {
        font-size: 1.5rem;
    }
`

const Main = styled.main`
    display: block;
    font-size: 1rem;
`