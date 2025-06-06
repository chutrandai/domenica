import React from 'react'
import aboutPizza1 from "../assets/about-pizza1.webp"
import aboutPizza3 from "../assets/about-pizza3.webp"

const About = () => {
  return (
    <div className='aboutdiv'>
      <h1 className='about-title'>About Us</h1>
      <div className='about-container'>
        <div className='about-infos'>
          <h3 className='about-info'>Welcome to the Ready Pizza family!</h3>
          <p>At Ready Pizza, our mission is to bring you the most delicious pizzas. Our pizzas, prepared with fresh ingredients, are crafted with expertly blended recipes and delivered straight to your table. We want you to discover the magical world of pizza in every slice.</p>
          <h3 className='about-info'>Why Ready Pizza?</h3>
          <ul>
            <li> Fresh and Quality Ingredients: We always use the freshest vegetables, the highest quality meats, and the most delicious cheeses. Our ingredients are selected daily, and our pizzas are made to order.</li>
            <li> Expertise and Experience: Our experienced pizza makers prepare our pizzas with years of experience and love. Every pizza is cooked with precision and perfection.</li>
            <li> Fast and Reliable Service: As our name suggests, Ready Pizza! Your orders are prepared as quickly as possible and delivered hot to your door. Customer satisfaction is our top priority.</li>
            <li> Rich Menu: We offer a wide range of pizzas from classics to gourmet delights. With vegan and gluten-free options, we cater to everyone's taste buds.</li>
          </ul>
          <h3 className='about-info'>Who We Are?</h3>
          <p>Ready Pizza started as a small family business and quickly grew into a large family. This journey, which began with the founders' passion for pizza, continues to grow today with many branches and a wide customer base. Our goal is not only to sell pizza but also to provide a warm and friendly experience for our customers.</p>
          <p className='about-info'> Join the world of Ready Pizza and discover happiness in every bite!</p>

        </div>
        <div className='about-img-container'>
          <img className='about-img1' src={aboutPizza1} alt="" />
          <img className='about-img3' src={aboutPizza3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About