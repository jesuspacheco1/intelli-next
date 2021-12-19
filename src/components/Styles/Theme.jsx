import React from 'react';
import { ThemeProvider } from 'styled-components';

export function Theme(props){

    const themeconfig = {

        PrimaryColor:"#2658A5",
        SecondaryColor:"#f7f7f7",
        TertiaryColor:"#213d69",
        GreenColor:"#21A67B",
        RedColor:"#bc1212",
        DropShadow: "0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        LightDropShadow:"0px 24px 32px rgba(255, 255, 255, 0.04), 0px 16px 24px rgba(255, 255, 255, 0.04), 0px 4px 8px rgba(255, 255, 255, 0.04), 0px 0px 1px rgba(255, 255, 255, 0.04)",
        GeneralRadius: "10px"
    };

    return <ThemeProvider theme={themeconfig}>{props.children}</ThemeProvider>
}
