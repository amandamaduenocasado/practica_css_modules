import Box from "./components/box/Box";
import Container from "./components/Container/Container";

const App = () => {
	return (
		<Container>
			<Box color='yellow' title='SEDANS' text = 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'	/>
			<Box color='blue' title='SUVS' text = 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' />
			<Box color='green' title='LUXURY' text = 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ' />
		</Container>
	);
};

export default App;