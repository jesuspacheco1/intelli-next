import React from 'react'
import styled,{keyframes} from 'styled-components';
import useToggle from '../../Hooks/useToggle';

const LineMove = keyframes`
    0%{
        margin-left: -1em;
    }

    50%{
        margin-left: 1em;
    }

    100%{
        margin-left: -1em;
    }
`

const LineMoveInverse = keyframes`
    0%{
        margin-left: 1em;
    }

    50%{
        margin-left: -1em;
    }

    100%{
        margin-left: 1em;
    }
`

const Container = styled.div`
    width: 15em;
    height: 25em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    margin-right: 4em;
    margin-bottom: 4em;

    @media screen and (max-width:680px) {
        margin-right: 0em;
    }
    
    &:hover {
        transform: scale(1.05);
        box-shadow: ${props => props.theme.LightDropShadow};
    }
`

const ContainerBackShapes = styled.div`
    width: calc(100% + 0.8em);
    height: calc(100% + 0.8em);
    z-index: 0;
    position: absolute;
`


const BackShapeAA = styled.div`
    width: 3em;
    height:.4em;
    clip-path: polygon(0 0, 90% 1%, 100% 100%, 0 100%);
    background: #69AEFB;
    position: absolute;
    left: 0;
    top: 0;
`

const BackShapeAB = styled.div`
    width:.4em;
    height:5em;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
    background: #69AEFB;
    position: absolute;
    left: 0;
    top: 0;
`

const BackShapeAC = styled.div`
    width: 0.4em;
    height: 9em;
    clip-path: polygon(0 10%,100% 0,100% 100%,0 90%);
    background: #69AEFB;
    position: absolute;
    left: 0;
    top: 6.5em;
` 

const BackShapeBA = styled.div`
    width: 3.5em;
    height:.4em;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
    background: #69AEFB;
    position: absolute;
    right: 0;
    top: 0;
`

const BackShapeBB = styled.div`
    width:.4em;
    height:8em;
    clip-path: polygon(0 0,100% 0,100% 90%,0 100%);
    background: #69AEFB;
    position: absolute;
    right: 0;
    top: 0;
`

const BackShapeBC = styled.div`
    width: 0.4em;
    height: 4.5em;
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
    background: #69AEFB;
    position: absolute;
    right: 0;
    top: 12.5em;
`

const Card = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #6aacf942;
    background:#1B3045;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all .3s ease;
    overflow: hidden;
    z-index: 1;


`

const Dot = styled.div`
    width: 0.3em;
    height: 0.3em;
    background:#6aacf9;
    border-radius: 50%;
    position: absolute;
    ${props => props.TopLeft && "left: .3em; top: .3em;"}
    ${props => props.TopRight && "right: .3em; top: .3em;"}
    ${props => props.BottomLeft && "left: .3em; bottom: .3em;"}
    ${props => props.BottomRight && "right: .3em; bottom: .3em;"}
`

const ContainerSVG = styled.svg`
    width: 9.375em;
    margin: 2em 0 1em 0;
`

const LineSVG = styled.line``

const RectSVG = styled.rect``

const ContainerImage = styled.div`
    width: 100%;
    height: 18.5em;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
`

const ContainerName = styled.div`
    width: 100%;
    height: 3.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &:before{
        content: "";
        background: #1B3045;
        clip-path: polygon(0 75%, 75% 75%, 100% 100%, 0 100%);
        position: absolute;
        width: 3em;
        height: 2em;
        left: 0;
        top: -1.95em;
    }

    &:after{
        content: "";
        background: #1B3045;
        clip-path: polygon(25% 75%, 100% 75%, 100% 100%, 0 100%);
        position: absolute;
        width: 3em;
        height: 2em;
        right: 0;
        top: -1.95em;
    }
`
const Line = styled.div`
    width: 2em;
    height: 1px;
    background: #6aacf9;
    margin: .25em 0;
    transition: all .3s ease;
    animation:${props => props.Hover && (props.Inverse ? LineMoveInverse : LineMove)} ease 1.3s infinite;
`

const Name = styled.span`
    color:#f7f7f7;
    user-select: none;
    font-weight: bold;
    text-transform: uppercase;

`

const SuperHeroCard = ({Id, SuperHeroPhoto, SuperHeroName, SelectSuperHero}) => {

    const [Hover, setHover] = useToggle();

    return (
        <Container onMouseEnter={() => setHover()} onMouseLeave={() => setHover()} onClick={() => SelectSuperHero(Id)}>
            <ContainerBackShapes>
                <BackShapeAA/>
                <BackShapeAB/>
                <BackShapeAC/>
                <BackShapeBA/>
                <BackShapeBB/>
                <BackShapeBC/>
            </ContainerBackShapes>
            <Card>
                <Dot TopLeft/>
                <Dot TopRight/>
                <ContainerSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361 7" fill="none">
                    <LineSVG x1={1} y1={3} x2={149} y2={3} stroke="#69AEFB" strokeWidth={2} strokeLinecap="round" />
                    <RectSVG x={170} width="21.8062" height={7} rx="3.5" fill="white" />
                    <LineSVG x1={212} y1={3} x2={360} y2={3} stroke="#69AEFB" strokeWidth={2} strokeLinecap="round" />
                </ContainerSVG>
                <ContainerImage>
                    <Image src={SuperHeroPhoto} alt=""/>
                </ContainerImage>
                <ContainerName>
                    <Line Hover={Hover}/>
                    <Name>{SuperHeroName}</Name>
                    <Line Hover={Hover} Inverse/>
                </ContainerName>
                <Dot BottomLeft/>
                <Dot BottomRight/>
            </Card>
        </Container>
    );
}

export default SuperHeroCard;