function Todo(props){
	function deleteHandler(){
		alert(props.title + " is Clicked!")
	}
	return(
		<div className='card'>
			<h2>{props.title}</h2>
			<div className='actions'>
				<button onClick={deleteHandler}>Delete</button>
			</div>
		</div>
	);
}

export default Todo;