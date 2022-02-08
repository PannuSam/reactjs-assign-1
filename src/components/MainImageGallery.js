import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import GalleryList from '@material-ui/core/GridList';
import GalleryListTile from '@material-ui/core/GridListTile';
import GalleryListTileBar from '@material-ui/core/GridListTileBar';
import GalleryListSubheader from '@material-ui/core/ListSubheader';

const galleryData = [{
        title: 'Moon',
        img: require('../img/Moon.jpg'),
    },
    {
        title: 'Mars',
        img: require('../img/Mars.jpg'),
    },
    {
        title: 'Kepler-12b',
        img: require('../img/Kepler-12b.jpg'),
    },
    {
        title: 'Kepler-145b',
        img: require('../img/Kepler-145b.jpg'),
    },
];
const galleryStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'space-around',
    },
    galleryList: {
        width: 900,
        height: 900,
    },
});

class MainImageGallery extends React.Component {
    render() {
        const { classes } = this.props;
        return ( < div className = { classes.root } >
            <
            GalleryList cellHeight = { 350 }
            spacing = { 40 }
            className = { classes.galleryList } >
            <
            GalleryListTile key = "Subheader"
            cols = { 2 }
            style = {
                { height: 'auto' }
            } >
            <
            GalleryListSubheader component = "div" > < /GalleryListSubheader> < /
            GalleryListTile > {
                galleryData.map((data) => ( <
                    GalleryListTile key = { data.img } >
                    <
                    img src = { data.img }
                    alt = { data.title }
                    /> <
                    GalleryListTileBar title = { data.title }

                    /> < /
                    GalleryListTile >
                ))
            } <
            /GalleryList> < /
            div >
        )
    }
}

export default withStyles(galleryStyles, { withTheme: true })(MainImageGallery);