import React from 'react';
import {
	NavLink,
	Route
} from 'react-router-dom';
import Details from './Details';
import './home/Home.css';

function Home(props) {
	
	console.log(props.data);
	return (
		<div className="home">
			{props.data.slice(0, props.visible).map(item =>
				<div key={item.id} className="post">
					<div className="post__title">
						<span className="post__title_header">UserId:</span> {item.id}
					</div>
					<div className="post__link">
						<NavLink to="/details" 
									className="post__link_details" 
									onClick={(e) => props.getData(e, item)}
						>
							See details...
						</NavLink>
					</div>
				</div>
			)}
			<button onClick={props.more} type="button" className="more">Load more</button>

			<Route path="/details" component={Details} />
		</div>
	);
};

export default Home;
