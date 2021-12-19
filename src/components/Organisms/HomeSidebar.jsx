import React,{useEffect, useState, Children} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import useToggle from '../Hooks/useToggle';
import {isMobile} from "react-device-detect";

const ButtonBurguer = styled.div`
    flex: 0 0 auto;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 33px;
    height: 22px;
    transition: 0.6s ease;
    z-index:11;
    position: relative;
`

const InputBurger = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    
    &:checked ~ span {
        transform: rotate(-45deg) translate(0, -1px);
        background:${props => props.theme.Secondary};
    }

    &:checked ~ span:nth-last-child(2) {
        opacity:0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }
    &:checked ~ span:nth-last-child(3) {
        transform: rotate(45deg) translate(0, -1px);
    }
`

const LineBurguer = styled.span`
    display:block;
    width:34px;
    height:4px;
    position:relative;
    background:${props => props.theme.SecondaryColor};
    border-radius:${props => props.theme.GeneralRadius};
    z-index:1;
    transform-origin:4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:first-child{
        transform-origin:0% 0%;
    }
    &:nth-last-child(2){
        transform-origin:0% 100%;
    }

`

const Header = styled.div`
    width: 100%;
    height: 3.5em;
    background: ${props => props.theme.TertiaryColor};
    box-shadow:${props => props.theme.DropShadow};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1em;
    z-index: 101;
`

const HeaderText = styled.h2`
    color:#f7f7f7;
    margin-left:1em;
    user-select: none;
`

const SidebarContainer = styled.div`
    position: fixed;
    left: ${props => props.Active ? `0` : `-20`}em;
    top: 3.5em;
    height: 100%;
    width: 18.75em;
    background: ${props => props.theme.TertiaryColor};
    z-index: 100;
    transition: all .6s ease;
    box-shadow:${props => props.theme.DropShadow};
`

const SidebarInner = styled.ul`
    list-style-type: none;
    height: 100%;
    padding: 1em 0;
    overflow-y:auto;
    overflow-x: hidden;

`

const SidebarMenuItem = styled.li`
    position: relative;
    list-style: none;
`

const SidebarMenuItemInner = styled.div`
    transition: all 0.3s;
    display: flex;

    & > a{
        width: 100%;
        display: flex;
        align-items: center;
        cursor:pointer;
    }

    &:hover{
        background: #ffffff24;
    }   
`

const SidebarMenuItemInnerInput = styled.input`
    display: block;
    width: 1em;
    height: 1em;
    right: 1.8em;
    top: 1.5em;
    position: absolute;
    opacity: 0;
    z-index: 2;
    cursor: pointer;


    &:checked ~ div:last-child {
        height: 100%;
    }
`


const SidebarMenuItemIcon = styled.i`
    height: 50px;
    min-width: 72px;text-align: center;
    line-height: 50px;
    color: #f7f7f7;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    ${props => !props.Active && "margin-left: -7.5px;"}
`

const MenuItemText = styled.span`
    font-size: 18px;
    font-weight: 400;
    color: #f7f7f7;
    transition: all 0.4s ease;
`

const ContainerArrow = styled.div`
    width: 4em;
    min-width: 2.5em;
    height: 2.8em;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #f7f7f7;

`

const Arrow = styled.i`
    cursor: pointer;
`

const SidebarMenuItemDropdownMenu = styled.div`
    display: flex;
    width: 100%;
    padding-left: 1em;
    max-height: fit-content;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
    height:0;
    

`

const SidebarMenuItemDropdownMenuItem = styled.li`
    position: relative;
    list-style: none;
`

const SidebarMenuItemDropdownMenuItemInner = styled.div`
    transition: all 0.3s;
    display: flex;

    & > a{
        width: 100%;
        display: flex;
        align-items: center;
        cursor:pointer;
    }

    &:hover{
        background: #ffffff24;
    }   
`

const SidebarMenuItemDropdownSubMenu = styled.div`
    display: flex;
    width: 100%;
    padding-left: 2em;
    max-height: fit-content;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
    height:0;

`

const SidebarMenuItemDropdownSubMenuItem = styled.div`
    display: flex;
    width: 100%;

    &:hover{
        background: #ffffff24;
    }   

    & > a{
        width: 100%;
        display: flex;
        align-items: center;
        cursor:pointer;
    }
`

const HomeSidebar = ({AuthReducer}) => {

    const [activeSidebar, setActiveSidebar] = useToggle();

    const [modules, setModules] = useState(['']);


    useEffect(() => {

        setModules(AuthReducer.Modules)

    }, [AuthReducer.Modules])
    
    const verMenu = (text) => {
        if(text === "HEADER" ||  text === "CONFIGURACION-MENU" || text === "SIDEBAR-DOWN"){
            return true;
        }else{
            return false
        }
    }

    return (
        <>
            <Header>
                <ButtonBurguer ActiveSidebar={activeSidebar}>
                    <InputBurger type="checkbox" onClick={setActiveSidebar}/>
                    <LineBurguer/>
                    <LineBurguer/>
                    <LineBurguer/>
                </ButtonBurguer>
                {modules.map((e) => (
                    e.id_module === 1 && <HeaderText>{e.module}</HeaderText>
                ))}
                
            </Header>
            <SidebarContainer Active={activeSidebar}>
                <SidebarInner>
                    <SidebarMenuItem>
                        <SidebarMenuItemInner>
                            <Link to="/superheroes">
                                <SidebarMenuItemIcon className="fas fa-angle-right"/>
                                <MenuItemText>API EXTERNA</MenuItemText>
                            </Link>
                        </SidebarMenuItemInner>
                    </SidebarMenuItem>
                    {isMobile
                        ?
                            (Children.toArray(modules.sort( (a, b) => a.path.replace(/\d+/g, n => +n+100000 ).localeCompare(b.path.replace(/\d+/g, n => +n+100000 )) ).map((e) => (
                                
                                    (e.is_render === 1 && e.is_render_mobile === 1) && (
                                        <SidebarMenuItem>
                                            {(e.path.length <= 4)  && (
                                                (e.operations === undefined && verMenu(e.setting_module_config.position) === true) ? (
                                                    <>  
                                                        <SidebarMenuItemInnerInput
                                                            type="checkbox"
                                                        />
                                                        <SidebarMenuItemInner>
                                                            <Link to={e.setting_module_config.route}>
                                                                <SidebarMenuItemIcon className={e.setting_module_config.icon}/>
                                                                <MenuItemText>{(e.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                            </Link>
                                                            <ContainerArrow>
                                                                <Arrow className="fas fa-angle-down"/>
                                                            </ContainerArrow>
                                                        </SidebarMenuItemInner>
                                                        <SidebarMenuItemDropdownMenu>
                                                        {modules.sort( (a, b) => a.path.replace(/\d+/g, n => +n+100000 ).localeCompare(b.path.replace(/\d+/g, n => +n+100000 )) ).map((menue) => (
                                                            ((menue.path.includes(e.path) && menue.path !== e.path && e.path.slice(0, 2) === menue.path.slice(0, 2)) && menue.path.length <= 6) && (
                                                                
                                                                    (menue.operations === undefined && verMenu(menue.setting_module_config.position) === true) ? (
                                                                        
                                                                            <SidebarMenuItemDropdownMenuItem>
                                                                                <SidebarMenuItemInnerInput
                                                                                    type="checkbox"
                                                                                />
                                                                                <SidebarMenuItemDropdownMenuItemInner>
                                                                                    <Link to={menue.setting_module_config.route}>
                                                                                        <SidebarMenuItemIcon className={menue.setting_module_config.icon}/>
                                                                                        <MenuItemText>{(menue.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                                                    </Link>
                                                                                    <ContainerArrow>
                                                                                        <Arrow className="fas fa-angle-down"/>
                                                                                    </ContainerArrow>
                                                                                </SidebarMenuItemDropdownMenuItemInner>    
                                                                                <SidebarMenuItemDropdownSubMenu>
                                                                                    {modules.sort( (a, b) => a.path.replace(/\d+/g, n => +n+100000 ).localeCompare(b.path.replace(/\d+/g, n => +n+100000 )) ).map((submenue) => (
                                                                                        (submenue.path.includes(menue.path) && submenue.path !== menue.path && submenue.path !== e.path && menue.path.slice(0, 2) === submenue.path.slice(0, 2)) && (
                                                                                            <SidebarMenuItemDropdownSubMenuItem>
                                                                                                <Link  to={submenue.setting_module_config.route ? submenue.setting_module_config.route : "/"}>
                                                                                                    <SidebarMenuItemIcon className={submenue.setting_module_config.icon}/>
                                                                                                    <MenuItemText>{(submenue.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                                                                </Link>
                                                                                            </SidebarMenuItemDropdownSubMenuItem>
                                                                                        ))
                                                                                    )}
                                                                                </SidebarMenuItemDropdownSubMenu>
                                                                            </SidebarMenuItemDropdownMenuItem>
                                                                        
                                                                    ) : (
                                                                        <SidebarMenuItemInner>
                                                                            <Link  to={menue.setting_module_config.route}>
                                                                                <SidebarMenuItemIcon className={menue.setting_module_config.icon}/>
                                                                                <MenuItemText>{(menue.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                                            </Link>
                                                                        </SidebarMenuItemInner>
                                                                    )
                                                                )
                                                                )
                                                            )}
                                                        </SidebarMenuItemDropdownMenu>
                                                    </>
                                                ) : (
                                                    <SidebarMenuItemInner>
                                                        <Link to={e.setting_module_config.route}>
                                                            <SidebarMenuItemIcon className={e.setting_module_config.icon}/>
                                                            <MenuItemText>{(e.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                        </Link>
                                                    </SidebarMenuItemInner>
                                                )
                                            )}
                                        </SidebarMenuItem>
                                    )
                            ))))                            
                        :

                            Children.toArray((modules.sort( (a, b) => (a.path.replace(/\d+/g, n => +n+100000).localeCompare(b.path.replace(/\d+/g, n => +n+100000 ))) ).map((e) => (
                                
                                    (e.is_render === 1) && (
                                        <SidebarMenuItem>
                                            {(e.path.length <= 4)  && (
                                                (e.operations === undefined && verMenu(e.setting_module_config.position) === true) ? (
                                                    <>  
                                                        <SidebarMenuItemInnerInput
                                                            type="checkbox"
                                                        />
                                                        <SidebarMenuItemInner>
                                                            <Link to={e.setting_module_config.route}>
                                                                <SidebarMenuItemIcon className={e.setting_module_config.icon}/>
                                                                <MenuItemText>{(e.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                            </Link>
                                                            <ContainerArrow>
                                                                <Arrow className="fas fa-angle-down"/>
                                                            </ContainerArrow>
                                                        </SidebarMenuItemInner>
                                                        <SidebarMenuItemDropdownMenu>
                                                        {modules.sort( (a, b) => a.path.replace(/\d+/g, n => +n+100000 ).localeCompare(b.path.replace(/\d+/g, n => +n+100000 )) ).map((menue) => (
                                                            ((menue.path.includes(e.path) && menue.path !== e.path && e.path.slice(0, 2) === menue.path.slice(0, 2)) && menue.path.length <= 6) && (
                                                                
                                                                    (menue.operations === undefined && verMenu(menue.setting_module_config.position) === true) ? (
                                                                        
                                                                            <SidebarMenuItemDropdownMenuItem>
                                                                                <SidebarMenuItemInnerInput
                                                                                    type="checkbox"
                                                                                />
                                                                                <SidebarMenuItemDropdownMenuItemInner>
                                                                                    <Link to={menue.setting_module_config.route}>
                                                                                        <SidebarMenuItemIcon className={menue.setting_module_config.icon}/>
                                                                                        <MenuItemText>{(menue.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                                                    </Link>
                                                                                    <ContainerArrow>
                                                                                        <Arrow className="fas fa-angle-down"/>
                                                                                    </ContainerArrow>
                                                                                </SidebarMenuItemDropdownMenuItemInner>    
                                                                                <SidebarMenuItemDropdownSubMenu>
                                                                                    {modules.sort( (a, b) => a.path.replace(/\d+/g, n => +n+100000 ).localeCompare(b.path.replace(/\d+/g, n => +n+100000 )) ).map((submenue) => (
                                                                                        (submenue.path.includes(menue.path) && submenue.path !== menue.path && submenue.path !== e.path && menue.path.slice(0, 2) === submenue.path.slice(0, 2)) && (
                                                                                            <SidebarMenuItemDropdownSubMenuItem>
                                                                                                <Link  to={submenue.setting_module_config.route ? submenue.setting_module_config.route : "/"}>
                                                                                                    <SidebarMenuItemIcon className={submenue.setting_module_config.icon}/>
                                                                                                    <MenuItemText>{(submenue.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                                                                </Link>
                                                                                            </SidebarMenuItemDropdownSubMenuItem>
                                                                                        ))
                                                                                    )}
                                                                                </SidebarMenuItemDropdownSubMenu>
                                                                            </SidebarMenuItemDropdownMenuItem>
                                                                        
                                                                    ) : (
                                                                        <SidebarMenuItemInner>
                                                                            <Link  to={menue.setting_module_config.route}>
                                                                                <SidebarMenuItemIcon className={menue.setting_module_config.icon}/>
                                                                                <MenuItemText>{(menue.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                                            </Link>
                                                                        </SidebarMenuItemInner>
                                                                    )
                                                                )
                                                                )
                                                            )}
                                                        </SidebarMenuItemDropdownMenu>
                                                    </>
                                                ) : (
                                                    <SidebarMenuItemInner>
                                                        <Link to={e.setting_module_config.route}>
                                                            <SidebarMenuItemIcon className={e.setting_module_config.icon}/>
                                                            <MenuItemText>{(e.module.replace(/_/g, ' ')).trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</MenuItemText>
                                                        </Link>
                                                    </SidebarMenuItemInner>
                                                )
                                            )}
                                        </SidebarMenuItem>
                                    )
                                
                            ))))
                    }
                </SidebarInner>
            </SidebarContainer>
        </>
    );
}

const StateProps = state => ({
    AuthReducer: state.AuthReducer
})

export default connect(StateProps)(HomeSidebar);