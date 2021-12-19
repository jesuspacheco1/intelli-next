import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    backface-visibility: hidden;
    width: 16em;
    max-width: 100%;
    box-sizing: inherit;
    margin-right: 2em;
    margin-bottom: 2em;

    @media screen and (max-width:680px) {
        margin-right: 0em;
    }
`

const CardInner = styled.div`
    transform-style: preserve-3d;
    perspective: 1000px;
    box-sizing: inherit;

    &:hover > div:nth-child(1){
        transform: rotateY(-180deg);
        transform-style: preserve-3d;
    }

    &:hover > div:nth-child(2){
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }
`

const CardFace = styled.div`
    background: #f7f7f7;
    border-radius: 8px;
    height: 100%;
    display: flex;
    min-height: 23em;
    position: relative;
    transition: transform 0.7s cubic-bezier(.4,.2,.2,1);
    backface-visibility: hidden;
    ${props => props.Front ? "transform: rotateY(0deg); transform-style: preserve-3d;" : "position: absolute; top: 0; left: 0; width: 100%; transform: rotateY(180deg); transform-style: preserve-3d;"}
    box-sizing: inherit;

`

const CardFaceInner = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    outline: 1px solid transparent;
    perspective: inherit;
    z-index: 2;
    transform: translateY(-50%) translateZ(60px) scale(.94);
    box-sizing: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Model = styled.span`
    color:${props => props.theme.PrimaryColor};
    user-select: none;
    text-align: center;
    font-size: 1.2rem;
    max-width: 10em;
    font-weight: bold;
    margin-bottom: .2em;
`

const Name = styled.span`
    user-select: none;
    text-align: center;
    margin-bottom: 1.5em;
    font-size: .7rem;
    max-width: 12em;
    color: #7c7c7c;
`

const ContainerImage = styled.div`
    display: flex;
    overflow: hidden;
    width: 12em;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    height: 13em;
    align-items: center;
    background: #fafafa;
`

const Image = styled.img`
    width: 100%;
`

const SerialTitle = styled.h3`
    color:${props => props.theme.PrimaryColor};
    margin-bottom: .4em;
    font-size: 1.6em;
    user-select: none;
`

const SerialText = styled.span`
    color: #7c7c7c;
    max-width: 11em;
    text-align: center;
    line-break: anywhere;
`

const DevicesCard = ({DevicePhoto,DeviceName, DeviceModel, DeviceSerial}) => {
    return ( 
        <Card>
            <CardInner>
                <CardFace Front>
                    <CardFaceInner>
                        <Model>{DeviceModel}</Model>
                        <Name>{DeviceName}</Name>
                        <ContainerImage>
                            <Image src={DevicePhoto === null ? "/Assets/Images/default_product.png" : DevicePhoto} alt=""/>
                        </ContainerImage>
                        
                    </CardFaceInner>
                </CardFace>
                <CardFace>
                    <CardFaceInner>
                        <SerialTitle>Serial</SerialTitle>
                        <SerialText>{DeviceSerial}</SerialText>
                    </CardFaceInner>
                </CardFace>
            </CardInner>
        </Card>

    );
}

export default DevicesCard;