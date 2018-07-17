import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	NavLink,
	BrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import User from './pages/User';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			thatData: null,
			initialUserData: null,
			userData: null,
			visible: 5,
			isLoading: false,
			error: null
		}
		this.loadMore = this.loadMore.bind(this);
		this.getThatData = this.getThatData.bind(this);
		this.getUserData = this.getUserData.bind(this);
		this.showError = this.showError.bind(this);
	}

	loadMore() {
		this.setState({
			visible: this.state.visible + 10
		});
	}

	showError(error) {
		this.setState({
			error,
			isLoading: false
		})
	}

	getThatData(e, item) {
		this.setState({
			thatData: [{...item}]
		})
	}

	getUserData() {
		let allUsers = this.state.initialUserData;
		let randomUser = [];
		
		if(allUsers) {
			randomUser.push(allUsers[Math.floor(Math.random() * allUsers.length)]);
		}
		this.setState({
			userData: randomUser
		})			
	}

	componentDidMount() {
		this.setState({ isLoading: true });

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Something went wrong...');
				}
			})
			.then(json => this.setState({data: json, isLoading: false}))
			.catch(error => this.showError(error));

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Something went wrong...');
				}
			})
			.then(json => this.setState({initialUserData: json}))
			.catch(error => this.showError(error));	
	}

	render() {
		const { data, 
				  thatData, 
				  userData, 
				  isLoading, 
				  error, 
				  visible } = this.state;
			
		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			return <p className="loading">Loading...</p>;
		}

		if (!data) {
			return null;
		}

		return (
			<BrowserRouter>
				<div className="app">
					<h2>Fake-API-Output</h2>
					<ul className="header">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/details">Details</NavLink></li>
						<li><NavLink to="/user">User</NavLink></li>
					</ul>
					<div className="content">
						<Route exact path="/"
							render={(props) => <Home data={data} thatData={thatData} getData={this.getThatData} visible={visible} more={this.loadMore} />}
						/>
						<Route path="/details"
							render={(props) => <Details data={data} thatData={thatData} getUserData={this.getUserData} />}
						/>
						<Route path="/user"
							render={(props) => <User userData={userData} />}
						/>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
	module.hot.accept()
}
