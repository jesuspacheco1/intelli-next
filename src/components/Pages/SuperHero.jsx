import React,{useState, useEffect, Children, Suspense, lazy} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSuperHeroes } from '../../Redux/Components/SuperHeroes/SuperHeroAction';
import useToggle from '../Hooks/useToggle';
import SuperHeroDetails from '../Organisms/SuperHero/SuperHeroDetails';
import SuperHeroSearchField from '../Molecules/SuperHero/SuperHeroSearchField';
import SpinnerLoader from '../Atoms/SpinnerLoader';

const SuperHeroCard = lazy(() => import('../Organisms/SuperHero/SuperHeroCard'))


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`


const BackContainerImage = styled.div`
    position: absolute;
    top: -50%; 
    left: -50%; 
    width: 200%; 
    height: 200%;
    background: radial-gradient(50% 50% at 50% 50%, #002C4C 0%, #001638 100%);
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
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 20em;

    @media screen and (max-width:680px) {
        height: 15em 
    }
    

`

const ContainerImage = styled.div`
    
    ${props => props.Responsive ? "width: 75%; align-items: center; justify-content: center; display: none; @media screen and (max-width:680px) { display: flex; }" : "width: 37em; @media screen and (max-width:680px) { display: none; }"}
`

const Image = styled.img`
    width: 100%;
`

const Content = styled.div`
    width: 100%;
    padding: 11em 6em 2em 6em;
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
    cursor: pointer;
    display: none;
    width: 4em;
    height: 4em;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, .1);
    right: 0;
    border-bottom-left-radius: 37px;
    transition: .3s;

    @media screen and (max-width:680px) {
        display: flex;

        &:hover {
            background: rgba(255, 255, 255, .2);
        }
    }
`

const Icon = styled.i`
    color: #f7f7f7;
    font-size: 1.5rem;
`

const SuperHero = ({getSuperHeroes, SuperHeroReducer}) => {

    const [activeSearch, setActiveSearch] = useToggle();
    const [activeDetails, setActiveDetails] = useToggle();

    const [searchText, setSearchText] = useState('')
    
    const [superHeroes, setSuperHeroes] = useState([])

    const [selectedSuperHero, setSelectedSuperHero] = useState([])


    useEffect(() => {
        if(SuperHeroReducer.SuperHeroes){
            setSuperHeroes(SuperHeroReducer.SuperHeroes)
        }
        
    }, [SuperHeroReducer.SuperHeroes])

    const handlerSearch = (e) => {
        setSearchText(e.target.value)
    }

    const selectSuperHero = (id) => {
        setActiveDetails()
        const superHero = superHeroes.find(superHero => superHero.id === id)
        setSelectedSuperHero(superHero)
    }

    const CloseDetails = () => {
        setActiveDetails()
        setSelectedSuperHero([])
    }

    const submitSearch = (e) => {
        e.preventDefault();

        if (searchText) {
            getSuperHeroes(searchText);
            setSearchText('');
        }
    }

    // const herotest = [
    //       {
    //         "id": "69",
    //         "name": "Batman",
    //         "powerstats": {
    //           "intelligence": "81",
    //           "strength": "40",
    //           "speed": "29",
    //           "durability": "55",
    //           "power": "63",
    //           "combat": "90"
    //         },
    //         "biography": {
    //           "full-name": "Terry McGinnis",
    //           "alter-egos": "No alter egos found.",
    //           "aliases": [
    //             "Batman II",
    //             "The Tomorrow Knight",
    //             "The second Dark Knight",
    //             "The Dark Knight of Tomorrow",
    //             "Batman Beyond"
    //           ],
    //           "place-of-birth": "Gotham City, 25th Century",
    //           "first-appearance": "Batman Beyond #1",
    //           "publisher": "DC Comics",
    //           "alignment": "good"
    //         },
    //         "appearance": {
    //           "gender": "Male",
    //           "race": "Human",
    //           "height": [
    //             "5'10",
    //             "178 cm"
    //           ],
    //           "weight": [
    //             "170 lb",
    //             "77 kg"
    //           ],
    //           "eye-color": "Blue",
    //           "hair-color": "Black"
    //         },
    //         "work": {
    //           "occupation": "-",
    //           "base": "21st Century Gotham City"
    //         },
    //         "connections": {
    //           "group-affiliation": "Batman Family, Justice League Unlimited",
    //           "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
    //         },
    //         "image": {
    //           "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
    //         }
    //       },
    //       {
    //         "id": "70",
    //         "name": "Batman",
    //         "powerstats": {
    //           "intelligence": "100",
    //           "strength": "26",
    //           "speed": "27",
    //           "durability": "50",
    //           "power": "47",
    //           "combat": "100"
    //         },
    //         "biography": {
    //           "full-name": "Bruce Wayne",
    //           "alter-egos": "No alter egos found.",
    //           "aliases": [
    //             "Insider",
    //             "Matches Malone"
    //           ],
    //           "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
    //           "first-appearance": "Detective Comics #27",
    //           "publisher": "DC Comics",
    //           "alignment": "good"
    //         },
    //         "appearance": {
    //           "gender": "Male",
    //           "race": "Human",
    //           "height": [
    //             "6'2",
    //             "188 cm"
    //           ],
    //           "weight": [
    //             "210 lb",
    //             "95 kg"
    //           ],
    //           "eye-color": "blue",
    //           "hair-color": "black"
    //         },
    //         "work": {
    //           "occupation": "Businessman",
    //           "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
    //         },
    //         "connections": {
    //           "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
    //           "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
    //         },
    //         "image": {
    //           "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    //         }
    //       },
    //       {
    //         "id": "71",
    //         "name": "Batman II",
    //         "powerstats": {
    //           "intelligence": "88",
    //           "strength": "11",
    //           "speed": "33",
    //           "durability": "28",
    //           "power": "36",
    //           "combat": "100"
    //         },
    //         "biography": {
    //           "full-name": "Dick Grayson",
    //           "alter-egos": "Nightwing, Robin",
    //           "aliases": [
    //             "Dick Grayson"
    //           ],
    //           "place-of-birth": "-",
    //           "first-appearance": "-",
    //           "publisher": "Nightwing",
    //           "alignment": "good"
    //         },
    //         "appearance": {
    //           "gender": "Male",
    //           "race": "Human",
    //           "height": [
    //             "5'10",
    //             "178 cm"
    //           ],
    //           "weight": [
    //             "175 lb",
    //             "79 kg"
    //           ],
    //           "eye-color": "Blue",
    //           "hair-color": "Black"
    //         },
    //         "work": {
    //           "occupation": "-",
    //           "base": "Gotham City; formerly Bludhaven, New York City"
    //         },
    //         "connections": {
    //           "group-affiliation": "Justice League Of America, Batman Family",
    //           "relatives": "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
    //         },
    //         "image": {
    //           "url": "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
    //         }
    //       }
    //     ]

    

    return ( 
        <>
        {activeDetails && <SuperHeroDetails HandlerClose={CloseDetails} Data={selectedSuperHero}/> }
        <Container>
            <BackContainerImage>
                <BackImage src="/Assets/Images/comics_poster.jpg"/>
            </BackContainerImage>  
            <Header>
                <ContainerImage>
                    <Image src="/Assets/Images/super_heroes_banner.png" alt=""/>
                </ContainerImage>
                <ContainerImage Responsive>
                    <Image Responsive src="/Assets/Images/super_heroes_without_banner.png" alt=""/>
                </ContainerImage>
                <SuperHeroSearchField
                    Name="search"
                    Value={searchText}
                    Title="Search..."
                    Handler={handlerSearch}
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
                    {Children.toArray(superHeroes.map((e) => (
                        <SuperHeroCard
                            SelectSuperHero={selectSuperHero}
                            Id={e.id}
                            SuperHeroPhoto={e.image.url}
                            SuperHeroName={e.name}
                        />
                    )))}


                </Suspense>
            </Content>
        </Container>
        </>
    );
}

const StateProps = state => ({
    SuperHeroReducer: state.DeviceReducer
})

export default connect(StateProps, {getSuperHeroes})(SuperHero);