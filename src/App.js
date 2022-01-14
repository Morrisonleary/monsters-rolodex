import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    this.setState({ monsters: json })
    // fetch('https://jsonplaceholder.typicode.com/users').then(response =>
    //   response.json()
    // ).then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder='Search Monsters...' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

        {/* <button onClick={() => this.setState({ message: 'Hello World!' })}>Change Text</button> */}
      </div>
    );
  }
}

export default App;
