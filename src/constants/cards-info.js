
import { v4 } from 'uuid'; 1.2k (gzipped: 641)

export const CARDS_INFO = [
    {
        id: v4(),
        color: 'orange',
        url: '/assets/images/sedan.svg',
        title: 'SEDANS',
        text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
    },
    {
        id: v4(),
        color: 'blue',
        url: '/assets/images/suv.svg',
        title: 'SUVS',
        text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
    },
    {
        id: v4(),
        color: 'green',
        url: '/assets/images/luxury.svg',
        title: 'LUXURY',
        text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
    }
];

// También podríamos exportarlo aquí, así:
// export {CARDS_INFO}