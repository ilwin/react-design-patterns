import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({name}) => {
	return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
}

const RightHandComponent = ({name}) => {
	return <p style={{ backgroundColor: 'red' }}>{name}</p>;
}

function App() {
	return (
		<SplitScreen
			leftWeight={4}
			rightWeight={1} 
			allBackground={'20px'} >
				<LeftHandComponent name={'Left!'} />
				<RightHandComponent name={'Right!!!'}/>
		</SplitScreen>
	);
}

export default App;
