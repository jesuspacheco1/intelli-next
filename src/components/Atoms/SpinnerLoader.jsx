import React from 'react';
import styled,{keyframes} from 'styled-components';

const Spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
`

const Spinner = styled.div`
    position:absolute;
    border:4px solid rgba(0,0,0,0.1);
    width:1.5em;
    height:1.5em;
    border-radius:50%;
    border-left-color:#f7f7f7;
    animation:${Spin} 1s ease infinite;
`

const SpinnerLoader = () => 
{
    return (  
        <Container>
            <Spinner/>
        </Container>
    );
}
 
export default SpinnerLoader;