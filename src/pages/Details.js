import React from 'react';
import {
	NavLink,
	Route
} from 'react-router-dom';
import User from './User';

function Details(props) {

	return (
		<div>
			{props.thatData &&
				props.thatData.map(item =>
					<div key={item.id} className="post">
						<div className="post__title">
							<span className="post__title_header">Title:</span>
							{item.title}
						</div>
						<div className="post__body">
							<span className="post__body_header">Body:</span>
							{item.body}
						</div>
						<div className="post__link">
							<NavLink to="/user" className="post__link_user"
								onClick={() => props.getUserData()}
							>
								User details...
						</NavLink>
						</div>
					</div>
				)
			}

			<Route path="/user" component={User} />
		</div>
	);
};

export default Details;
