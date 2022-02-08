import React from 'react';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.status = { title: "EXPLORE" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setStatus({ title: "Travel across UNIVERSE" })
        }, 3000)
    }
    render() {
        return ( < body > <
            article >
            <
            h1 > { this.status.title } < /h1>

            <
            /article></body >
        )
    }
}

export default Main