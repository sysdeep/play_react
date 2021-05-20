import React from 'react';

import "./TodoListItem.css";



class TodoListItem extends React.Component {

	// constructor() {
	// 	super();

	// 	// this.state = {
	// 	// 	done: false,
	// 	// 	important: false,
	// 	// }
	// }

	// onLabelClick() {
	// 	// console.log(`Done ${this.props.label}`)
	// 	// this.setState((state) => {
	// 	// 	return {
	// 	// 		done: !state.done
	// 	// 	}
	// 	// })
	// }


	// onMarkImportant() {
	// 	// this.setState((state) => {
	// 	// 	return {
	// 	// 		important: !state.important
	// 	// 	}
	// 	// })
	// }


	render() {

		const { label, done, important } = this.props;
		// const { done, important } = this.state;


		let classNames = "todo-list-item";
		if (done) {
			classNames += " done";
		}

		if (important) {
			classNames += " important";
		}

		// const style = {
		// 	color: important ? 'steelblue' : 'black',
		// 	fontWeight: important ? 'bold' : 'normal'
		// };

		return (
			<span className={classNames}>

				<span
					className="todo-list-item-label"
					onClick={() => this.props.onToggleDone()}
					>
					{label}
					{done}
				</span>

				<button type="button"
					className="btn btn-outline-success btn-sm float-end"
					onClick={() => this.props.onToggleImportant()}
					>
					<i className="zmdi zmdi-run"></i>
				</button>

				<button type="button"
					className="btn btn-outline-danger btn-sm float-end"
					onClick={() => this.props.onDeleted()}
					>
					<i className="zmdi zmdi-delete"></i>
				</button>

			</span>
		);
	}
}


// const TodoListItemFunc = ({ label, important = false }) => {


//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };

//     return (
//         <span className="todo-list-item">
//             <span
//                 className="todo-list-item-label"
//                 style={style}>
//                 {label}
//             </span>

//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-end">
//                 {/* <i className="fa fa-exclamation" /> */}
//                 {/* <i className="bi-check"></i> */}
//                 <i class="zmdi zmdi-check"></i>
//             </button>

//             <button type="button"
//                 className="btn btn-outline-danger btn-sm float-end">
//                 {/* <i className="fa fa-trash-o" /> */}
//                 {/* <i className="bi-trash" /> */}
//                 <i class="zmdi zmdi-delete"></i>
//             </button>

//         </span>
//     );
// }


export default TodoListItem;
