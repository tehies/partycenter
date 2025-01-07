import React, { useState } from 'react';
import '../css/pdp_tabs.css'

export default function Pdp_tabs() { 
  
    const [activeTab, setActiveTab] = useState(0);
      const tabsContent = [
        [
          { description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .',
             
          },
        ],
        [
          { 
             ratings: '', 
          },
        ],
        [
          { 
            shipping: 'Returns & Refunds: At partycentre.sa (a brand of Bluepath International in Saudi Arabia) we strive to provide a completely hassle free return policy to all our customers. If you are not completely satisfied with your order, simply return the item(s) to us within 14 days from the date of purchase. Know more details about returns and refunds here'
           },
          
        ],
      ];
    
      return (
        
        <div className="pdp-tabs-container" >
          <div className="pdp-tabs-buttons">
            {['Description', 'Ratings', 'Shipping & Returns'].map((label, i) => (
              <button key={i} className={activeTab === i ? 'active' : ''} onClick={() => setActiveTab(i)}>{label}</button>
            ))}
          </div>
          <div className="pdp-tabs-content">
            {tabsContent[activeTab].map((data, i) => (
         
                <div className='pdp-card'>
                      <p>{data.description}</p>
                      <p>{data.ratings}</p>
                      <p>{data.shipping}</p>
                </div>
                
            
            ))}
          </div>
        </div>
      );
  
}
