import React from 'react';
import GlobalStyle from './GlobalStyle';
import Tasks from './components/tasks/Tasks';

const App:React.FC = () => {
	return(
		<>
			<main>
				<Tasks />	
			</main>
			<GlobalStyle />
		</>
	)
}

export default App;
