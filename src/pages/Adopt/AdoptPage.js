import React, { Component } from "react";
import Card from '../../components/Card/AnimalCards';
import API from '../../utils/API';

class AllAnimals extends Component {

    state = {
        Animals: []
    };

    componentDidMount() {
        this.loadAnimals();
    }

    loadAnimals = () => {
        API.getAnimals()
        .then(res => this.setState({ Animals: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Card />
            </div>
        )
    }
}

export default AllAnimals;
