import React from 'react'
import styled,{keyframes} from 'styled-components';
import useToggle from '../../Hooks/useToggle';
import SuperHeroDetailsStats from './SuperHeroDetailsStats';
import SuperHeroDetailsInfo from './SuperHeroDetailsInfo';

const active = keyframes`
    from {
        margin-bottom: -200vh;
    }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1005;
    left: 0;
    top: 0;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
`

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0,0,0,.7);
`

const Content = styled.div`
    position: relative;
    background: #1b3045cc;
    border-radius: 15px;    
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    width: 60em;
    height: 34em;
    display:flex;
    align-items: center;
    justify-content: space-between;
    transition: .3s ;
    padding: 0 3em;
    color:#f7f7f7;
    animation:${active} .6s normal 1 forwards;
    box-shadow: ${props => props.theme.DropShadow};

    &::before{
        content: '';
        width: 15em;
        height: 3.04em;
        background: #1b3045cc;
        position: absolute;
        left: 0;
        top: -3em;
        border-top-left-radius: 15px;
        border-top-right-radius: 50px;
        clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
        transition: .3s;
    }

    &::after{
        content: '';
        width: 15em;
        height: 3.04em;
        background: #1b3045cc;
        position: absolute;
        right: 0;
        top: -3em;
        border-top-right-radius: 15px;
        border-top-left-radius: 50px;
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        transition: .3s;
    }
    
    @media screen and (max-width:960px) {
        width: 100%;
    }

    @media screen and (max-width:860px) {
        justify-content: center;
    }
    
    @media screen and (max-width:680px) {

        &::before{
            width: 7em !important;
        }

        &::after{
            width: 7em !important;
        }
    }
`

const Header = styled.div`
    width: 100%;
    position: absolute;
    top: -3em;
    left: 0;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    color: #f7f7f7;
    user-select: none;
    text-transform: uppercase;
`

const ContainerImage = styled.div`
    border-radius: 15px;
    width: 16em;
    height: 21em;
    border: 1px solid rgba(255, 255, 255, .4);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:860px) {
        display: none;
    }
`

const ContentImage = styled.div`
    position: relative;
    width: 98%;
    height: 98%;
    border-radius: 15px;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
    }
`

const Image = styled.img`
    width: 100%;
`

const Button = styled.div`
    position: absolute;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 16em;
    height: 3em;
    bottom: 0;
    left: calc(50% - 8em);
    border-top-right-radius: 43px;
    border-top-left-radius: 43px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background: rgb(255, 255, 255,.09);
    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);

    &::after {
        content: '';
        width: 3em;
        position: absolute;
        height: 0.1em;
        top: 8px;
        background: rgba(247, 247, 247, 0.4);
    }

    &:hover{
        background: rgba(255, 255, 255, .15);
    }
`

const ButtonText = styled.span`
    user-select: none;
    font-size: 1.2rem;

`

const SuperHeroDetails = ({Data,HandlerClose}) => {

    const [activeStats, setActiveStats] = useToggle();

    return (
        <Container>
            <Overlay onClick={HandlerClose}/>
            <Content>
                <Header>
                    <Title>{Data.name}</Title>
                </Header>
                <ContainerImage>
                    <ContentImage>
                        <Image src={Data.image.url} alt=""/>
                    </ContentImage>
                </ContainerImage>
                {activeStats  ? <SuperHeroDetailsStats Data={Data}/> : <SuperHeroDetailsInfo  Data={Data}/>}
                <Button onClick={setActiveStats}>
                    <ButtonText>Stats</ButtonText>
                </Button>
            </Content>
        </Container>
    );
}
 
export default SuperHeroDetails;