import React from 'react';

// import './item-status-filter.css';


const ItemStatusFilter = ({ ftype, onFilterType }) => {

	const labels = [
		{ label: "All", ftype: "all" },
		{ label: "Active", ftype: "active" },
		{ label: "Done", ftype: "done" },
	]

	const buttons = labels.map(row => {

		let active_class = row.ftype === ftype ? "btn-secondary" : "btn-outline-secondary"

		return (
			<button type="button" className={`btn ${active_class}`} key={row.ftype}
				onClick={() => onFilterType(row.ftype)}
			>{row.label}</button>
		)
	})

	return (


		<div className="btn-group">
			{buttons}
			{/* <button type="button" className="btn btn-info"
				onClick={() => onFilterType("all")}
			>All</button>
			<button type="button" className="btn btn-outline-secondary"
				onClick={() => onFilterType("active")}
			>Active</button>
			<button type="button" className="btn btn-outline-secondary"
				onClick={() => onFilterType("done")}
			>Done</button> */}
		</div >
	);

}


// const ItemStatusFilterFunc = () => {
//   return (
//     <div className="btn-group">
//       <button type="button"
//               className="btn btn-info">All</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Active</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Done</button>
//     </div>
//   );
// };

export default ItemStatusFilter;
