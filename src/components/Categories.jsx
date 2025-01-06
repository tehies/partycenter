import React from 'react';
import '../css/categories.css';

export default function Categories() {
  const items = [
    { id: 1, image: "assets/category-images/disney-coustumes.webp", heading: "Disney Costumes", collectionId: "141" },
    { id: 2, image: "assets/category-images/girls-party.webp", heading: "Girls Party Costumes", collectionId: "142" },
    { id: 3, image: "assets/category-images/boys-party.webp", heading: "Boys Party Costumes", collectionId: "143" },
    { id: 4, image: "assets/category-images/toddler.webp", heading: "Toddler Costumes", collectionId: "144" },
    { id: 5, image: "assets/category-images/girls-birthday.webp", heading: "Star Wars", collectionId: "145" },
    { id: 6, image: "assets/category-images/boys-birthday.webp", heading: "Candles Accessories", collectionId: "146" },
    { id: 8, image: "assets/category-images/1st-birthday.webp", heading: "Girl Birthday party", collectionId: "147" },
    { id: 9, image: "assets/category-images/party-ballons.webp", heading: "Boy Birthday Party", collectionId: "148" },
    { id: 10, image: "assets/category-images/candles-acesories.webp", heading: "Baby Shark", collectionId: "149" },
    { id: 11, image: "assets/category-images/graduations.webp", heading: "Graduation Tableware", collectionId: "150" },
    { id: 12, image: "assets/category-images/party-decoration.webp", heading: "Boys Birthday Themes", collectionId: "152" },
    { id: 13, image: "assets/category-images/party-favours.webp", heading: "Girls Birthday Themes", collectionId: "151" },
  ];

  return (
    <div className="custom-categoreis">
      <h2>Shop By Category</h2>
      <div className="categories-grid-container">
        {items.map((item) => (
          <div key={item.id} className="categories-grid-item">
            <a href={`/collection/${item.collectionId}`}>
              <img src={item.image} alt={item.heading} className="categories-image" />
              <h3 className="categories-heading">{item.heading}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
