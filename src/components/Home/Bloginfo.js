import React from 'react'
import { graphql} from "gatsby";
import Title from "../Globals/Title";
import Noodles from "../../images/Noodles.jpg";
import Ice from "../../images/Ice.jpg";
import blog1 from "../../images/blog1.jpg";
import VEGM from "../../images/VEGM.jpg";
import Indo from "../../images/Indo.jpg";
import ragi from "../../images/ragi.jpg";
import cauli from "../../images/cauli.png";
import blog3 from "../../images/blog3.jpg";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { IconBase } from 'react-icons/lib';
export default function Bloginfo() {
    return (
        
    <section className="features-section">
    <div className="container py-5">
      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h1 className="heading font-weight-bold">
            Vegetable Masala Oats
          </h1>
          <p>
            Vegetable Masala Oats Recipe, a very healthy and fiber rich porridge 
            with the richness of veggies and oats along with mild Indian spices. 
            A perfect meal to start the day with!.</p>
            
            
            <p><h2>17 ingredients</h2>

                <li>1 tsp Coriander, Powder</li>
                <li>1 tbsp Coriander, Leaves</li>
                <li>2 Green chili</li>
                <li>1/4 cup Green peas</li>
                <li>1 Nos carrot</li>
                <li>1 Nos onion</li>
                <li>1 Nos tomato</li>
                <li>1 tbsp Ginger garlic paste</li>
                <li>1 cup Oats</li>
                <li>1/2 tsp Garam masala</li>
                <li>1 tsp Cumin seeds</li>
                <li>1 tsp Red chili powder and 1 tsp Salt</li>
                <li>1 Pinch Turmeric, Powder and 1 tbsp Oil</li>


            </p>

        
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image src={VEGM} alt="Vegetable Masala Oats" fluid />
        </div>
      </div>

      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7 order-md-2" data-aos="fade-up">
          
    <h1>	Indonesian Coconut Pancake.</h1>
      <p>When regular pancakes need a makeover, they turn into these soft and sweet delicacies</p>   
        
          <p>
            <h2>11 ingredients</h2></p>
            <p>
            <li>1/2 cup coconut (grated)</li>
            <li>150 grams of brown sugar</li>
            <li>100 milliliters water</li>
            <li>2 pandan leaves</li>
            <li>Butter</li>
            <li>250 grams flour</li>
            <li>4 eggs</li>
            <li>Enough salt</li>
            <li>350 milliliters thin coconut milk (add up to 250 milliliters if not watery enough)</li>
            <li>1/2 teaspoon pandan extract (adjust to the desired color)</li>
            <li>Margarine</li>

          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
        <Image src={Indo} alt="Indonesian Coconut Pancake" fluid />
        </div>
      </div>

      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h1 className="heading font-weight-bold ">
            Spicy Peanut Potatoes.
          </h1>
          <p>
            Vegan Gluten free · Spicy Peanut Potatoes is a no onion no garlic recipe. Spicy Peanut Potatoes can be used as a fasting recipe too. Spicy Peanut Potatoes is a very quick and tasty curry with minimum ingredients. Adding roasted peanuts to the curry is a great way to add a bit of crunch to the curry.
          </p>
          <p>
            <h2>12 ingredients</h2></p>
            <p>
            <li>1/4 cup Coriander, Leaves</li>
            <li>1 inch Ginger</li>
            <li>3 Green chilies</li>
            <li>1/4 cup Peanuts, Roasted</li>
            <li>2 cup Potatoes</li>
            <li>1 Lemon juice</li>
            <li>1 tsp Sugar</li>
            <li>Enough salt</li>
            <li>1/2 tsp Turmeric, Powder</li>
            <li>2 tbsp Oil</li>
            <li>1 tsp Cumin seeds</li>
            <li>5 Curry, Leaves</li>

          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
        <Image src={blog1} alt="Spicy Peanut Potatoes" fluid />
        
        </div>
        
        
                
            
<div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7 order-md-2" data-aos="fade-up">
          
    <h1>	Ragi dosa </h1>
      <p>Ragi dosa, an instant dosa made using ragi which does not require fermentation and is quick to make as a morning breakfast recipe which is a healthy one</p>   
        
          <p>
            <h2>11 ingredients</h2></p>
            <p>
            <li>1/2 tsp Chillies, green</li>
            <li>1 tsp Coriander, leaves</li>
            <li>2 tbsp Onions</li>
            <li>2 tbsp Yogurt/curd</li>
            <li>3/4 cup Ragi flour/ finger millet flour</li>
            <li>2 tbsp Rice flour</li>
            <li>1 Salt</li>
            <li>3 tbsp Oil to smear on the dosas</li>
            <li>1/2 tsp Cumin seeds/ jeera</li>
            <li>1 tsp Curry, leaves</li>
            <li>2 1/2 cup Water</li>

          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
        <Image src={ragi} alt="Ragi Dosa" fluid />
        </div>
      </div>



      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h1 className="heading font-weight-bold ">
            	Cauliflower Tortillas
          </h1>
          <p>
            No flour, no corn, no problem.
          </p>
          <p>
            <h2>7 ingredients</h2></p>
            <p>
            <li>1 head of cauliflower, broken into florets</li>
            <li>2 eggs</li>
            <li>2 tablespoon fresh cilantro, chopped</li>
            <li>1/2 teaspoon lime zest</li>
            <li>1/2 teaspoon paprika</li>
            <li>1/4 teaspoon sea salt</li>
            <li>•	1/8 teaspoon ground black pepper</li>
            </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
        <Image src={cauli} alt="Cauliflower Tortillas" fluid />
        
        </div>
        </div>
      
      
      
      
      
      
      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7 order-md-2" data-aos="fade-up">
          
    <h1>Breakfast Stuffed Portobellos</h1>
      <p>Vegetarian Gluten free · Serves 4 · Move aside bagels! Portobello mushrooms are our newest breakfast fave.</p>   
        
          <p>
            <h2>11 ingredients</h2></p>
            <p>
            <li>4 cup Baby spinach</li>
            <li>1 cup Cherry tomatoes</li>
            <li>2 cloves Garlic</li>
            <li>1 Parsley</li>
            <li>4 Portobellos</li>
            <li>4 Eggs, large</li>
            <li>1 Black pepper, Freshly ground</li>
            <li>1 Kosher salt</li>
            <li>1 Pinch Red pepper flakes</li>
            <li>1 tbsp Olive oil, extra-virgin</li>
            <li>1 cup Cheddar, white</li>

          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
        <Image src={blog3} alt="Breakfast Stuffed Portobellos" fluid />
        </div>
      </div>

      </div>
    </div>
  </section>
    )
}
export const query = graphql`
{
    img: file(relativePath: { eq: "blog-background.jpg" }) {
    childImageSharp {
        fluid {
        ...GatsbyImageSharpFluid_tracedSVG
        }
    }
    }
}
`