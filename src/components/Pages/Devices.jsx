import React,{useState, useEffect, Children, Suspense, lazy} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getDevices } from '../../Redux/Components/Devices/DeviceAction';
import useToggle from '../Hooks/useToggle';
import HomeSidebar from '../Organisms/HomeSidebar';
import DevicesSearchField from '../Molecules/Devices/DevicesSearchField';
import SpinnerLoader from '../Atoms/SpinnerLoader';
const DevicesCard = lazy(() => import('../Organisms/Devices/DevicesCard'))

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    ::-webkit-scrollbar {
        background: transparent;
        height: 8px;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border: none;
        box-shadow: none;
        background: #dadce0;
        border-radius: 4px;
        min-height: 40px;
    }
    
    ::-webkit-scrollbar-track {
        background: #2658A5;
    }
`

const BackContainerImage = styled.div`
    position: absolute;
    top: -50%; 
    left: -50%; 
    width: 200%; 
    height: 200%;
    background:${props => props.theme.PrimaryColor};
`

const BackImage = styled.img`
    opacity: .1;
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin: auto; 
    min-width: 50%;
    min-height: 50%;
    overflow-x: hidden;
`

const Header = styled.div`
    width: 100%;
    height: 16em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    @media screen and (max-width:680px) {
        height: 5em;
    }

`

const Title = styled.h2`
    color:#f7f7f7;
    user-select: none;
    font-size: 3.5rem;

    @media screen and (max-width:680px) {
        font-size: 2.5em;
    }
`

const Content = styled.div`
    width: 100%;
    padding: 6em 6em 2em 6em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width:680px) {
        padding: 3em;
        flex-direction: column;
        align-items: center;
    }
`

const ContainerIcon = styled.div`
    position: absolute;
    right: 2em;
    cursor: pointer;
    display: none;
    
    @media screen and (max-width:680px) {
        display: block;
    }
`

const Icon = styled.i`
    color: #f7f7f7;
    font-size: 1.5rem;
`

const Button = styled.div`
    overflow: hidden;
    height: 3.1em;
    padding: 0 1.8em;
    font-size: 1rem;
    user-select: none;
    border-radius: ${props => props.theme.GeneralRadius};
    background:#f7f7f7;
    box-shadow: ${props => props.theme.DropShadow};
    transition: ease .3s;
    opacity:.8;
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 4em;
    cursor: pointer;

    & > a {
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content:center;
    }

    &:hover{
        opacity:1;
    }
`

const ButtonText = styled.span`
    color:#000;
    user-select: none;
`

const Devices = ({getDevices, AuthReducer, DeviceReducer}) => {

    const [searchData, setSearchData] = useState({
        text:'',
        limit:10,
        offset:0,
    })

    const [activeSearch, setActiveSearch] = useToggle();
    const [devices, setDevices] = useState({
        data:[],
        count:''
    })

    const handlerSearchText = (e) => {
        setSearchData({
            ...searchData,
            text: e.target.value
        })
    }

    useEffect(() => {
    
        getDevices(AuthReducer.Token)
    }, [])

    useEffect(() => {

        setDevices({
            data: DeviceReducer.Devices,
            count: DeviceReducer.Count,
        })
        
    }, [DeviceReducer.Devices, DeviceReducer.Count])
    
    const submitSearch = (e) => {
        e.preventDefault();

        if (searchData.text) {
            getDevices(AuthReducer.Token, searchData.limit, searchData.offset, searchData.text)

        }
    }

    const updateOffset = () => {
        setSearchData({
            ...searchData,
            offset: searchData.offset + searchData.limit
        })
        getDevices(AuthReducer.Token, searchData.limit, searchData.offset, searchData.text, true)
    }
    

    return (
        <Container>
            <BackContainerImage>
                <BackImage src="/Assets/Images/geometric_boxes.png"/>
            </BackContainerImage>
            <HomeSidebar/> 
            <Header>
                <Title>Devices</Title>
                    <DevicesSearchField
                        Name="search"
                        Value={searchData.text}
                        Title="Search..."
                        Handler={handlerSearchText}
                        HandlerClose={setActiveSearch}
                        Active={activeSearch}
                        SubmitSearch={submitSearch}
                    />
                <ContainerIcon>
                    <Icon className="fas fa-search" onClick={setActiveSearch}/>
                </ContainerIcon>
            </Header>
            <Content>
                <Suspense fallback={<SpinnerLoader />}>
                    {Children.toArray(devices.data.map((e) => (
                        <DevicesCard
                            DevicePhoto={e.photo}
                            DeviceName={e.device_name} 
                            DeviceModel={e.device_model} 
                            DeviceSerial={e.settings_device.serial}
                        />
                    )))}
                </Suspense>
            </Content>
            {(devices.data.length > 0 && DeviceReducer.StopMore === false) &&
                DeviceReducer.Loading 
                ?
                    <SpinnerLoader />
                :
                <Button onClick={updateOffset}>
                    <ButtonText>Cargar más</ButtonText>
                </Button>

            }
        </Container>
    );
}

const StateProps = state => ({
    DeviceReducer: state.DeviceReducer,
    AuthReducer: state.AuthReducer
})

export default connect(StateProps, {getDevices})(Devices);
