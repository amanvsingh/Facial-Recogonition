import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if(isSignedIn){
			return(
					<nav style={{display:'flex',justifyContent:'flex-end', padding:'10px'}}>
						<p onClick = {() => onRouteChange('signin')}
						className='f3 link dim black underline pa3 pointer'>Sign Out</p>
					</nav>
					);
		}
		else {
			return(
					<nav style={{display:'flex',justifyContent:'flex-end', padding:'10px'}}>
						<p onClick = {() => onRouteChange('signin')}
						className='f3 link dim black underline pa3 pointer'>Sign In</p>
						<p onClick = {() => onRouteChange('register')}
						className='f3 link dim black underline pa3 pointer'>Register</p>
					</nav>
					);
			}
}

export default Navigation;