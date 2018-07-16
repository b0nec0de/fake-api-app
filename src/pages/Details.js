import React from 'react';
import {
	NavLink,
	Route
} from 'react-router-dom';
import User from './User';

function Details(props) {
	return (
		<div>
			{	props.thatData &&
				props.thatData.map (detail =>
					<div key={detail.id} className="post">
						<div className="post__title">
							<span className="post__title_header">Title:</span> 
								{detail.title}
						</div>
						<div className="post__body">
							<span className="post__body_header">Body:</span>
								{detail.body}
						</div>
						<div className="post__link">
						<NavLink to="/user" className="post__link_user" onClick={(e) => props.getUserData(e, {detail})}>User details...</NavLink>
						</div>
					</div>
				)}

			<Route path="/user" component={User} />
		</div>
	);
};

export default Details;
