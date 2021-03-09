import React from 'react';
import useModal from './useModal'
import Modals from './Modals'
import axiosInstance from "../Services/axiosApi"


const LearnedComponent = (props) => {
	const {isShowing, toggle} = useModal()

	const onChangeLearned = (e) => {
		const learn = true
		const check = JSON.parse(localStorage.getItem("access_token"));
		const header = { headers: {"Authorization" : `JWT ${check}`} }
		const body = {
			learned: learn,
			user: props.trick.user,
			name: props.trick.name,
			cats: props.trick.cats,
			video: props.trick.video
		}
		axiosInstance.put('tricks/' + `${props.trick.id}/`, body, header)
		.then(
			window.location.reload()			
		)		
		.catch((error) => {
			console.log(error.message)
		})	
	};



	if(props.trick.learned){
		return (
			<div className="">
				<button className="bg-blue-500 text-white font-bold py-1 px-3 rounded opacity-50 cursor-not-allowed">
  					COMPLETED! 
				</button>	
			</div>				
		)		
	} else {
		return (
			<div className="">
				<button 
					onClick={toggle} 
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
				>
  					COMPLETED?
				</button>
				<Modals 
					isShowing={isShowing}
					hide={toggle}
					onChangeLearned={onChangeLearned}
				/>
			</div>					
		)
	}
}

export default LearnedComponent;