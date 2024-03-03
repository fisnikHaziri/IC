import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ input }) {
	const resultData = calculateInvestmentResults(input)
	const initialInvesment =
		resultData[0].valueEndOfYear -
		resultData[0].annualInvestment -
		resultData[0].interest

	var content = <p>Duration must be more than 0</p>

	return (
		<table id="result">
			<thead>
				<th>Year</th>
				<th>Invesment Value</th>
				<th>Interest (Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</thead>
			<tbody>
				{resultData.map((yearData) => {
					const totalInterst =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvesment

					const totalAmountInvested = yearData.valueEndOfYear - totalInterst

					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterst)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
