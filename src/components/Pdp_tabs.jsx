import React, { useState } from 'react';
import '../css/pdp_tabs.css'
import { useTranslation } from "react-i18next";
export default function Pdp_tabs() { 
   const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
      const tabsContent = [
        [
          { description: t("descriptionpdp"),
             
          },
        ],
        [
          { 
             ratings: '', 
          },
        ],
        [
          { 
            shipping: t("shiping")
           },
          
        ],
      ];
    
      return (
        
        <div className="pdp-tabs-container" >
          <div className="pdp-tabs-buttons">
            {[t('Description'), t('Ratings'), t('Shipping & Returns')].map((label, i) => (
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
