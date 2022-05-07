import React, {useState} from 'react';
import About from './components/About';
import Nav from "./components/Nav";
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

	
	// Define categories
	const [categories] = useState([
		{
			name: "commercial",
			description: "Photos of grocery stores, food trucks, and other commercial projects"
		},
		{ name: 'portraits', description: 'Portraits of people in my life' },
    	{ name: 'food', description: 'Delicious delicacies' },
    	{ name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
	]);

	// Define a useState hook to select or deselect the contact form
	const [contactSelected, setContactSelected] = useState(false);

	// useState hook for displaying to app
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	
	return (
		<div>
		<Nav
			categories={categories}
			setCurrentCategory={setCurrentCategory}
			currentCategory={currentCategory}
			contactSelected={contactSelected}
			setContactSelected={setContactSelected}
			>
		</Nav>
		<main>
			{/* Conditionally render contact form with ternary operator */}
			{!contactSelected ? (
				<>
					<Gallery currentCategory={currentCategory}></Gallery>
					<About></About>
				</>
			) :  (
				<ContactForm></ContactForm>
			)}
		</main>
	</div>
  );
}

export default App;