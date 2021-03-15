import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots : [],
            searchField : '',        
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({robots : users })
            });
    }

    onSearchChange = (event) => {
        this.setState({
            searchField : event.target.value
        });
    }

    render() {
        const { robots,searchField } = this.state; 
        const filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(!robots.length) {
            return <h1>Loading</h1>;
        }
        return (
        <div className='tc'>
            <h1>roboFriend</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
        )
    }
}

export default App;