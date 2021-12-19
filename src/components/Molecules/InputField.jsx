import React from 'react'
import styled from 'styled-components';
import useToggle from '../Hooks/useToggle';

const ContainerInput = styled.div`
    position: relative;
    height: 3em;
    margin-bottom: 1rem;
    width: 100%;
`

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;  
    font-size: 1rem;
    border: 1.5px solid ${props => props.Error ? props.theme.RedColor : "#adadad"};
    color: #adadad;
    border-radius: .5rem;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;

    &:focus{
        border: 1.5px solid ${props => props.Error ? props.theme.RedColor : props.theme.PrimaryColor}};
        color:${props => props.theme.PrimaryColor};
    }

    &:focus + label{
        color: ${props => props.Error ? props.theme.RedColor : props.theme.PrimaryColor};
        top: -.5rem;
        left: .8rem;
        font-size: .75rem;
        font-weight: 500;
        z-index: 10;
    }

    &:not(:placeholder-shown)&:not(:focus) + label{
        top: -.5rem;
        left: .8rem;
        font-size: .75rem;
        font-weight: 500;
        z-index: 10;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px var(--secondary-meet-color) inset !important;
    -webkit-text-fill-color: rgba(255,255,255);
    }
`

const Label = styled.label`
    position: absolute;
    left: 1rem;
    top: 0.95rem;
    padding: 0 .25rem;
    background: ${props => props.theme.SecondaryColor};
    font-size: 1rem;
    transition: .3s;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 90%;
`

const InputField = ({Name, Type, Value, Error, Handler, Title}) => {
    
    const [focus, setFocus] = useToggle();

    return (
        <ContainerInput Focus={focus}>
            <Input
                id={Name}
                name={Name}
                type={Type}
                value={Value}
                Error={Error}
                onChange={Handler}
                placeholder=" "
                onFocus={setFocus}
                onBlur={setFocus}
                autoComplete="off"
            />
            <Label htmlFor={Name}>{Title}</Label>
        </ContainerInput>
    );
}

export default InputField;