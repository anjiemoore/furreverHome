import React, { Component } from "react";
import Card from '../../components/Card/AnimalCards';
import API from '../../utils/API';

class AllAnimals extends Component {

    state = {
        animals: []
    };

    componentDidMount() {
        this.loadAnimals();
    }

    loadAnimals = () => {
        API.getAnimals()
        .then(res => this.setState({ animals: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
            {this.state.animals.map(animal => (
                <Card
                    id={animal.id}
                    key={animal.id}
                    name={animal.name}
                    image={animal.image}
                    date={animal.date}
                />
            ))}
            </div>
        )
    }
}

export default AllAnimals;
