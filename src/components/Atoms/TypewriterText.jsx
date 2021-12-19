import React,{useEffect, useState} from 'react'
import styled from 'styled-components';

const ContainerText = styled.span`
    color:#f7f7f7;
    user-select: none;
    text-align: left;
`;

const TypewriterText = ({Text=""}) => {

    const [typeProps, setTypeProps] = useState({
        text: '',
        loopNum: 0,
    })

    const {loopNum, text} = typeProps;

    let nt = Text.split('');

    const TypingText = () => {
        if(loopNum < nt.length){
            setTypeProps({ ...typeProps, text: [...text, nt[loopNum]], loopNum: loopNum + 1 })
        }
        
    }

    useEffect(() => {
        

        if(loopNum === 0){
            setTimeout(() => {
                TypingText()
            }, 500);
        }else{
            setTimeout(() => {
                TypingText()
            }, 150);
        }

        return () => {
            setTypeProps({
                ...typeProps,
                loopNum:nt.length
            })
        };

    }, [loopNum])

    return (
        <ContainerText>{typeProps.text}</ContainerText>
    );
}

export default TypewriterText;