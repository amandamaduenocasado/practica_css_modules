import Card from "./components/card/Card";
import Container from "./components/Container/Container";
import { CARDS_INFO } from './constants/cards-info';

const App = () => {
	return (
		<Container>
			{
				CARDS_INFO.map(card => (
					< Card key = {card.id} {...card} /> // No olvidar esta propt de key y el card.id. React lo necesita internamente.
		))}
		</Container>
	);
};

export default App;