import React  from 'react'
import './Message.css';




function Message({ author, text }) {	
		return(
			<div className='message-class'>
			<h1 className='text-class-name'>{author}</h1>
			<p className='text-class'>{text}</p>
			</div>
		)
	}


export default  Message

