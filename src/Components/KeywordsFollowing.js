import React from 'react';


const Card = ({ followKeyWord,user }) => {
	return (
		<div className = 'tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5'>
		  {user.following.map((_id) => {
				return(
					<div>
						 {followKeyWord}
					</div>
				);

          })
        }
		</div>
	);
}

export default Card;
