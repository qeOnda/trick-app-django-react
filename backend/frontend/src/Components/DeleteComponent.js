import React from 'react';
import useModal from './useModal'
import DeleteModal from './DeleteModal'
import axiosInstance from "../Services/axiosApi"


const DeleteComponent = (props) => {
	const {isShowing, toggle} = useModal()

	const onChangeDelete = (e) => {
		const learn = true
		const check = JSON.parse(localStorage.getItem("access_token"));
		const header = { headers: {"Authorization" : `JWT ${check}`} }		
		axiosInstance.delete('tricks/' + `${props.trick.id}/`, header)
		.then(
			window.location.reload()			
		)		
		.catch((error) => {
			console.log(error.message)
		})	
	};


	return (
		<div className="">
			<button 
				onClick={toggle} 
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
			>
					DELETE
			</button>
			<DeleteModal 
				isShowing={isShowing}
				hide={toggle}
				onChangeDelete={onChangeDelete}
			/>
		</div>					
	)
}

export default DeleteComponent;