import React from "react";
import Navbar from "./Navbar.jsx"; 
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const cardPropi = [{ title: "First Title", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, omnis quibusdam! Modi excepturi officiis pariatur eum perspiciatis earum, eligendi alias facere! Autem nam ipsa magni? Magni facere optio blanditiis repellendus.", image: "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg" },
					   { title: "Second Title", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, omnis quibusdam! Modi excepturi officiis pariatur eum perspiciatis earum, eligendi alias facere! Autem nam ipsa magni? Magni facere optio blanditiis repellendus.", image: "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg" }, 
					   { title: "Third Title", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, omnis quibusdam! Modi excepturi officiis pariatur eum perspiciatis earum, eligendi alias facere! Autem nam ipsa magni? Magni facere optio blanditiis repellendus.", image: "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg" },
					   { title: "First Title", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, omnis quibusdam! Modi excepturi officiis pariatur eum perspiciatis earum, eligendi alias facere! Autem nam ipsa magni? Magni facere optio blanditiis repellendus.", image: "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg" }]
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className= "d-flex justify-content-center w-100 mt-5">
				{cardPropi.map((card,index)=>{
					return(
						<Card image={card.image} title={card.title} paragraph={card.paragraph} key={index}/>
					)
				}
				)}
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
