import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 31em;
    min-height: 21em;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width:560px) {
        justify-content: center;
    }
`

const Item = styled.div`
    width: 14em;
    height: 3.4em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.5em;
    margin-left: .5em;

    @media screen and (max-width:500px) {
        transform: scale(.9);
    }
`

const ItemTitle = styled.span`
    color: #f7f7f7;
    font-size: 1.3em;
    margin-bottom: 0.5em;
`

const ItemNumStats = styled.span`
    color:#818B96;
`

const ItemContainerBar = styled.div`
    width: 100%;
    height: 1.1em;
`

const ItemBar = styled.div`
    width:${props => props.Data}%;
    height:100%;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.29) 0%, rgba(255, 255, 255, 0) 100%);
    position: relative;
    transition: all .6s ease-in-out;

    &:after{
        content: '';
        position: absolute;
        width: 2px;
        height: 1.4em;
        background: white;
        right: 0;
        bottom: 0;
    }
`

const SuperHeroDetailsStats = ({Data}) => {

    const [stats, setStats] = useState({
        combat:0,
        durability:0,
        power:0,
        speed:0,
        strength:0,
        intelligence:0
    })

    useEffect(() => {
        setStats({
            combat:Data.powerstats.combat,
            durability:Data.powerstats.durability,
            power:Data.powerstats.power,
            speed:Data.powerstats.speed,
            strength:Data.powerstats.strength,
            intelligence:Data.powerstats.intelligence
        })
    }, [Data])

    return (
        <Container>
            <Item>
                <ItemTitle>Combat<ItemNumStats> ({stats.combat})</ItemNumStats></ItemTitle>
                <ItemContainerBar>
                    <ItemBar Data={stats.combat}/>
                </ItemContainerBar>
            </Item>
            <Item>
                <ItemTitle>Durability<ItemNumStats> ({stats.durability})</ItemNumStats></ItemTitle>
                <ItemContainerBar>
                    <ItemBar Data={stats.durability}/>
                </ItemContainerBar>
            </Item>
            <Item>
                <ItemTitle>Power<ItemNumStats> ({stats.power})</ItemNumStats></ItemTitle>
                <ItemContainerBar>
                    <ItemBar Data={stats.power}/>
                </ItemContainerBar>
            </Item>
            <Item>
                <ItemTitle>Speed<ItemNumStats> ({stats.speed})</ItemNumStats></ItemTitle>
                <ItemContainerBar>
                    <ItemBar Data={stats.speed}/>
                </ItemContainerBar>
            </Item>
            <Item>
                <ItemTitle>Strength<ItemNumStats> ({stats.strength})</ItemNumStats></ItemTitle>
                <ItemContainerBar>
                    <ItemBar Data={stats.strength}/>
                </ItemContainerBar>
            </Item>
            <Item>
                <ItemTitle>Intelligence<ItemNumStats> ({stats.intelligence})</ItemNumStats></ItemTitle>
                <ItemContainerBar>
                    <ItemBar Data={stats.intelligence}/>
                </ItemContainerBar>
            </Item>
        </Container>
    );
}

export default SuperHeroDetailsStats;