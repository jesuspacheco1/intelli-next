import React from 'react'
import styled,{keyframes} from 'styled-components';
import TypewriterText from '../../Atoms/TypewriterText';

const ActiveLine = keyframes`
    from{
        width: 0em;
    }
`

const Container = styled.div`
    width: 25em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 0;


`

const Title = styled.h3`
    font-size: 1.2rem;
    margin: 1em 0;
    user-select: none;
    position: relative;

    &::after {
        width: 5em;
        height: 2px;
        background: #6b7884;
        position: absolute;
        bottom: -0.5em;
        content: '';
        left: 0;
        animation:${ActiveLine} ease-in-out .6s .3s backwards;
    }
`

const Content = styled.div`
    padding: 0 2em;
    display: flex;
    width: 100%;
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: .9em;
    ${props => props.Left && "min-width: 11em;"}
`

const Item = styled.div`
    display: flex;
    margin-bottom: 0;
    height: 2em;
    display: flex;
    align-items: center;
`

const ItemTitle = styled.span`
    font-weight: bold;
    color: rgba(247, 247, 247, 0.4);
    user-select: none;
`


const SuperHeroDetailsInfo = ({Data}) => {

    return (
        <Container>
            <Title>BIOGRAPHY</Title>
            <Content>
                <Inner Left>
                    <Item>
                        <ItemTitle>FULL NAME</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>ALIASES</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>PACE OF BIRTH</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>UNIVERSE</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>OCUPATION</ItemTitle>
                    </Item>
                </Inner>
                <Inner>
                    <Item>
                        <TypewriterText Text={Data.biography['full-name']}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.biography.aliases && Data.biography.aliases[0]}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.biography['place-of-birth']}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.biography.publisher}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.work.occupation}/>
                    </Item>
                </Inner>
            </Content>
            <Title>APPEARANCE</Title>
            <Content>
                <Inner Left>
                    <Item>
                        <ItemTitle>GENDER</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>RACE</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>HEIGHT</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>WEIGHT</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>EYES</ItemTitle>
                    </Item>
                    <Item>
                        <ItemTitle>HAIR</ItemTitle>
                    </Item>
                </Inner>
                <Inner>
                    <Item>
                        <TypewriterText Text={Data.appearance.gender}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.appearance.race}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.appearance.height[0] + " (" + Data.appearance.height[1] + ")"}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.appearance.weight[0] + " (" + Data.appearance.weight[1] + ")"}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.appearance['eye-color']}/>
                    </Item>
                    <Item>
                        <TypewriterText Text={Data.appearance['hair-color']}/>
                    </Item>
                </Inner>
            </Content>
        </Container>
    );
}

export default SuperHeroDetailsInfo;