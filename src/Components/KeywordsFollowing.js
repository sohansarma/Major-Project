import React from 'react';



const Card = ({ followKeyWord,user }) => {
	return (
		<div className="flex items-center">
			<div className = 'tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w-10'>
			  <p>Maths</p>
			</div>
			<div className = 'tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w-10'> 
			  <p>English</p>
			</div>
			<div className = 'tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w-10'>
			  <p>Hindi</p>
			</div>
			<div className = 'tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w-10'> 
			  <p>Science</p>
			</div>
			<div className = 'tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w-10'>
			  <p>Material Science</p>
			</div>
		</div>
	);
}

export default Card;
