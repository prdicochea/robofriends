import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


//Para el manejo de Estado se utilizan Clases.
//Un componente que utiliza Estado es un considerado un componente inteligente
class App extends React.Component {
//El control de estado tiene 3 pasos:

//1.- El constructor: Se define dentro del componente.    
    constructor(){
        super(); //inicializa el uso del estado
        this.state = {
            robots: [],
            searchfield: ''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then(users => {this.setState({ robots: users })})
        
        
    }

//2.- El actualizador: actualiza el valor del estado
    onSearchChange = (event) => {        
        this.setState ({ searchfield: event.target.value })
    }

//3.- Renderizador: vuelve a renderizar para mostrar los resultados en el DOM    
    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return !robots.length?
            <h1>Loading...</h1>:
        (
            <>
                <div className='sega pa5'>RoboFriends</div>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots = { filteredRobots } />
                </Scroll>
            </>            
        )
    }
}

export default App