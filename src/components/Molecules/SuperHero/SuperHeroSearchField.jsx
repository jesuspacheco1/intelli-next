import React from 'react'
import styled from 'styled-components'
import useToggle from '../../Hooks/useToggle';

const Container = styled.form`
    background: #f7f7f7;
    width: 27em;
    height: 4em;
    position: absolute;
    bottom: -6em;
    border-radius: 15px;
    display: flex;
    align-items: center;
    box-shadow:${props => props.theme.DropShadow};
    transition:.3s;

    @media screen and (max-width:680px) {
        width:100%;
        top:${props => props.Active ? "0" : "-4em"};
        border-radius: 0px;
        z-index:2;
        padding-left: 1em;
    }
`

const ContainerIcon = styled.div`
    width: 4em;
    display: flex;
    justify-content: center;

    @media screen and (max-width:680px) {
        display: none;
        
    }
`

const Icon = styled.i`
    font-size: 1.4em;
    color: ${props => props.Active ? "#4e4e4e" : "#9e9ea7"};
    transition: .3s;
`

const Input = styled.input`
    background: none;
    outline: none;
    font-size: 1.3rem;
    border: none;
    width: calc(100% - 4em);

    &::placeholder {
        color: #9e9ea7; 
    }
`

const Close = styled.div`
    position: relative;
    width: 4em;
    height: 1.3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: none;
    
    @media screen and (max-width:680px) {
        display: flex;
    }

    &::before{
        content:'';
        width: 3px;
        height:100%;
        background:${props => props.Active ? "#4e4e4e" : "#9e9ea7"};
        border-radius: 10px;
        transform: rotate(45deg);
        transition: .3s;
    }

    &::after{
        content:'';
        position: absolute;
        width: 3px;
        height: 100%;
        background:${props => props.Active ? "#4e4e4e" : "#9e9ea7"};
        border-radius: 10px;
        transform: rotate(-45deg);
        transition: .3s;
    }
    
`

const SuperHeroSearchField = ({Name, Value, Title, Handler, HandlerClose, Active, SubmitSearch}) => {

    const [focus, setFocus] = useToggle();

    return (
        <Container Active={Active} onSubmit={SubmitSearch}>
            <ContainerIcon>
                <Icon className="fas fa-search" Active={focus}/>
            </ContainerIcon>
            <Input
                type="text"
                name={Name}
                value={Value}
                placeholder={Title}
                onChange={Handler}
                onFocus={setFocus}
                onBlur={setFocus}
            />
            <Close  Active={focus} onClick={HandlerClose}/>
        </Container>
    );
}
 
export default SuperHeroSearchField;