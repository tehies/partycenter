import React from 'react'
import '../css/categories.css';

export default function Categories() {

    const items = [
        { id: 1, image: "assets/category-images/disney-coustumes.webp", heading: "Disney Costumes" },
        { id: 2, image: "assets/category-images/girls-party.webp", heading: "Girls Party Costumes" },
        { id: 3, image: "assets/category-images/boys-party.webp", heading: "Boys Party Costumes" },
        { id: 4, image: "assets/category-images/toddler.webp", heading: "Toddler Costumes" },
        { id: 5, image: "assets/category-images/girls-birthday.webp", heading: "Girls Birthday Themes" },
        { id: 6, image: "assets/category-images/boys-birthday.webp", heading: "Boys Birthday Themes" },
        { id: 7, image: "assets/category-images/1st-birthday.webp", heading: "1st Birthday" },
        { id: 7, image: "assets/category-images/party-ballons.webp", heading: "Party Balloons" },
        { id: 7, image: "assets/category-images/candles-acesories.webp", heading: "Candles Accessories" },
        { id: 7, image: "assets/category-images/graduations.webp", heading: "Graduation" },
        { id: 7, image: "assets/category-images/party-decoration.webp", heading: "Party Decorations" },
        { id: 7, image: "assets/category-images/party-favours.webp", heading: "Party Favours" },
      ];

  return (
    <div className="custom-categoreis">
      <h2>Shop By Category</h2>
    <div className="categories-grid-container">
      {items.map((item) => (
        
        <div key={item.id} className="categories-grid-item">
          <a href="">
          <img src={item.image} alt={item.heading} className="categories-image" />
          <h3 className="categories-heading">{item.heading}</h3>
          </a>
        </div>
      ))}
    </div>
    </div>
  )
}
