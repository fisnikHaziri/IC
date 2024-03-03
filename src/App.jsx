import { useState } from 'react'

import Header from './components/Header'
import Results from './components/Results'
import UserInput from './components/UserInput'

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	})

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			}
		})
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleChange} userInput={userInput} />
			{userInput.duration > 0 ? (
				<Results input={userInput} />
			) : (
				<p id="durationError">Duration must be greater than 0</p>
			)}
		</>
	)
}

export default App
