import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import useToggle from '../Hooks/useToggle';

const Active = keyframes` 
    from{
        top: -55px;
        opacity:0;
    }
`
const Container = styled.div`
    position: absolute;
    display:flex;
    align-items: center;
    ${props => props.Disabled ? "top:-55px; opacity:1;" : "top:1em; opacity:1;"}
    left: calc(50% - 10.5em);
    background:rgba(0, 0, 0, 0.35);
    height: 3.3em;
    width: 21em;
    border-radius: 10px;
    padding: 0 1.2em;
    transition:.3s;
    animation: ${Active} .3s normal 1 backwards;
    z-index:20000;

    &::before{
        content: '';
        position: absolute;
        width: 5px;
        height: 2.2em;
        background: ${props => props.Error ? props.theme.RedColor : props.theme.GreenColor};
        border-radius: 15px;
        left: 8px;
    }
`;

const Icon = styled.div`
    width: 1.8em;
    height: 1.8em;
    background: ${props => props.Error ? props.theme.RedColor : props.theme.GreenColor};
    border-radius: 20px;
    justify-content: center;
    display: flex;
    position: relative;
    align-items: center;

    ${props => props.Error ? " &::before{content: '';  background: #c4c4c4; height: 50%; width: 2px; transform: rotate(-45deg); } &::after{ content: ''; position: absolute; background: #c4c4c4; height: 50%; width: 2px; transform: rotate(45deg); }" : "&::after{content: ''; border: 3px solid #c4c4c4; border-left: none;  border-top: none; transform: rotate(45deg); height: .7em; width: 0.2em;}"}
    
`

const Text = styled.span`
    color:#f7f7f7;
    font-size: .9rem;
    padding: 1em;
    max-width: 16em;

`;

const Close = styled.div`
    width: .8em;
    height: .8em;
    position: absolute;
    right: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5em;
    cursor:pointer;

    &::before{
        content: '';
        background: #c4c4c4;
        height: 100%;
        width: 1px;
        transform: rotate(-45deg);
    }
    &::after{
        content: '';
        position: absolute;
        background: #c4c4c4;
        height: 100%;
        width: 1px;
        transform: rotate(45deg);
    }
    
`;


const Alert = ({Error, Msg, CloseHandler}) => {

    const [Disabled, setDisabled] = useToggle(false);

    const HanderDisabled = () => {
        setDisabled(true)

        setTimeout(() => {
            CloseHandler()
        }, 350);
    }

    useEffect(() => {
        setTimeout(() => {
            HanderDisabled()
        }, 10000);
    }, [])

    return (
        <Container Error={Error} Disabled={Disabled} >
            <Icon Error={Error}/>
            <Text>{Msg}</Text>
            <Close onClick={HanderDisabled}/>
        </Container>
    );
}
 
export default Alert;