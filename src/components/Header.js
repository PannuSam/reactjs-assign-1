import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";

const headerStyle = makeStyles(() => ({
    header: {
        backgroundColor: "#000000",
        border: "2px solid yellow",
        paddingRight: "82px",
        paddingLeft: "98px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 700,
        color: "#FFFFFF",
        textAlign: "left",
    },
    menuStyle: {
        display: "flex",
        justifyContent: "space-between",
    },
    menu: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 800,
        size: "20px",
        marginLeft: "50px",
    },
    Toolbar: {

    }
}));

const menuList = [{
        label: "Explore",
    },
    {
        label: "Missions",
    },
    {
        label: "News & Events",
    },
    {
        label: "More",
    },
];

function Header() {
    const { header, logo, menu, menuStyle } = headerStyle();


    const spaceLogo = ( <
        Typography variant = "h5"
        component = "h1"
        className = { logo } >
        Space Travel <
        /Typography>
    );

    const getMenuList = () => {
        return menuList.map(({ label }) => {
            return ( <
                Button {... {
                        key: label,
                        color: "inherit",
                        className: menu
                    }
                } > { label } <
                /Button>
            );
        });
    };

    const display = () => {
        return <Toolbar className = { menuStyle } > { spaceLogo } < div > { getMenuList() } < /div>< /Toolbar > ;
    };

    return ( <
        header >
        <
        AppBar className = { header } > { display() } < /AppBar>< /
        header >
    )
}

export default Header;