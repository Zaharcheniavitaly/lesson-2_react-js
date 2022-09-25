import React  from 'react'
import './Message.css';




function Message(props) {	
		return(
			<div className='message-class'>
			<h1 className='text-class-name'>{props.author}</h1>
			<p className='text-class'>{props.text}</p>
			</div>
		)
	}


export default  Message

