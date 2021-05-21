import React, {useState} from "react";

export default function Clicker() {
    const [state, setState] = useState(0);

    return (
		<button onClick={() => setState((v) => v + 1)}>
				Clicked: {state}
		</button>
	)
}