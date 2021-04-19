import React from 'react';
import ReactDOM from 'react-dom';
import DrumMachine from './components/DrumMachine';

class MyApp extends React.Component{

	render(){
		return(
			<div id="myApp">
				<DrumMachine />
			</div>
		);
	}
}

ReactDOM.render(<MyApp />,document.getElementById("root"));
