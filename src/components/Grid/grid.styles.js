import styled from 'styled-components';
const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 60px);
	gap: 0.4rem;
	padding: 5rem 0;
	justify-content: center;

	span {
		height: 60px;
		width: 60px;
		border: 2px solid rgb(255 255 255 / 0.2);
	}
`;

const StyledLetter = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	border: 1px solid aliceblue;
	text-transform: uppercase;

	&.correct {
		background-color: rgb(106, 170, 100);
	}

	&.incorrect {
		background-color: #3a3a3c;
	}

	&.exist {
		background-color: rgb(201, 180, 88);
	}
`;

export { StyledGrid, StyledLetter };
