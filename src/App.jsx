import { useState } from 'react';
import Grid from './components/Grid/Grid';
import { randomNumber } from './utils/randomNumber';

const WORDS = ['ovulo'];

const secretWord = WORDS[randomNumber(0, WORDS.length - 1)];

const App = () => {
	const [userWord, setUserWord] = useState('');
	return (
		<>
			<Grid secretWord={secretWord} userWord={userWord} />
			<form
				onSubmit={e => {
					e.preventDefault();
					setUserWord(e.target.word.value);
				}}
			>
				<input type='text' name='word' />
				<input type='submit' />
			</form>
		</>
	);
};

export default App;
