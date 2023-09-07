export default () => {
	return (
		<>
		<main className="container mt-4">
				<section>
					<h2>Calculations Disclaimer</h2>
					<p>
						Our carbon emissions calculator estimates the amount of carbon dioxide (CO2) emissions based on your travel data and predefined emission factors. It is essential to understand that these calculations are approximate and serve as a general guideline. Several factors can affect real-world emissions, such as vehicle efficiency, fuel type, and driving conditions.
					</p>
					<p>
						The emission factors used in this calculator are based on typical values for various modes of transportation. Here's a breakdown:
					</p>
					<ul>
						<li>Planes: 400 grams of CO2 per mile</li>
						<li>Cars: 404 grams of CO2 per mile</li>
						<li>Boats: 635 grams of CO2 per mile</li>
					</ul>
					<p>
						The thresholds used to classify emissions into "good," "warning," and "danger" zones are as follows:
					</p>
					<ul>
						<li>Good (Green Zone): 1 - 99,999 grams of CO2</li>
						<li>Warning (Yellow Zone): 100,000 - 249,999 grams of CO2</li>
						<li>Danger (Red Zone): 250,000+ grams of CO2</li>
					</ul>
					<p>
						Please keep in mind that reducing carbon emissions is a complex challenge, and these calculations are a simplified representation. We encourage you to take steps to reduce your carbon footprint, such as using public transportation, carpooling, or choosing eco-friendly travel options.
					</p>
				</section>
			</main>
		</>
	)
}