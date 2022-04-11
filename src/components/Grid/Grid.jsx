import { useEffect, useState } from 'react';
import { StyledGrid, StyledLetter } from './grid.styles';

const Grid = ({ secretWord, userWord }) => {
	const [board, setBoard] = useState(initialState);
	const [currentRow, setCurrentRow] = useState(0);

	useEffect(() => {
		if (userWord.length === 5) {
			writeWordInBoard(userWord, currentRow, board, setBoard);
			setCurrentRow(currentRow + 1);
		}
	}, [userWord]);
	return (
		<>
			<StyledGrid secretWord={secretWord} userWord={userWord}>
				{board.map(row =>
					row.map((letter, index) => (
						<StyledLetter
							key={Math.random() * 10}
							className={checkLetters(letter, secretWord, index)}
						>
							{letter}
						</StyledLetter>
					))
				)}
			</StyledGrid>
		</>
	);
};

const initialState = Array(6)
	.fill(null)
	.map(() => new Array(5).fill(null));

const writeWordInBoard = (userWord, currentRow, board, setBoard) => {
	const newBoard = initialState;
	for (let i = 0; i < board.length; i++) {
		for (let m = 0; m < board[i].length; m++) {
			if (board[i][m] !== null) {
				newBoard[i][m] = board[i][m];
			}
		}
	}
	userWord.split('').forEach((letter, index) => {
		newBoard[currentRow][index] = letter;
	});

	setBoard(newBoard);
};

const checkLetters = (letter, secretWord, index) => {
	if (!letter) return null;

	if (letter === secretWord[index]) {
		return 'correct';
	} else if (secretWord.includes(letter)) {
		return 'exist';
	} else {
		return 'incorrect';
	}
};

export default Grid;
