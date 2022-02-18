import {Component} from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component  {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){ // This method the firs time the component is render
    fetch('https://jsonplaceholder.typicode.com/users') // Fetch data from API
    .then(response => response.json()) // Returns data as js object (JSON)
    .then(users => this.setState({monsters: users})) // Changes state, replaces the empty array 'monsters' with data fetched from the API
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField} = this.state // pull properties of state into a variable (constant)
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder="Search monsters"
        handleChange={this.handleChange}
        />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;


