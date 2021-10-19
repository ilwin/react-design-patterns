import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	backgroundColor: red;
	padding: 10px;
	border: ${props => props.bgcolor} solid green;
	height: 300px;
`;

const Pane = styled.div`
	flex: ${props => props.weight};
`;

export const SplitScreen = ({
	children,
	leftWeight: leftWeight,
	rightWeight: rightWeight,
	allBackground: allBackground
}) => {
	const [left, right] = children;
	return (
		<Container bgcolor={allBackground}>
			<Pane weight={leftWeight}>
				{left}
			</Pane>
			<Pane weight={rightWeight}>
				{right}
			</Pane>
		</Container>
	);
}