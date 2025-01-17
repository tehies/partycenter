import React, { useState } from 'react';
import '../css/tabs.css';
import { useTranslation } from "react-i18next";
const Tabs = () => {
   const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const tabsContent = [
    [
      { src: 'assets/tabs-images/big-ballons.jpeg', link: '#', heading: t("BIG BALLOONS") },
      { src: '/assets/tabs-images/baquet.jpeg', link: '#', heading: t("BOUQUET BALLOONS") },
      { src: 'assets/tabs-images/birthday-ballons.webp', link: '#', heading: t('BIRTHDAY BALLOONS') }
    ],
    [
      { src: 'assets/tabs-images/graduatins-1.jpg', link: '#', heading: t('GRADUATION') },
      { src: 'assets/tabs-images/occassion-birthday.webp', link: '#', heading: t('BIRTHDAY') },
      { src: 'assets/tabs-images/baby-shower.webp', link: '#', heading: t('BABY SHOWER') },
    ],
    [
      { src: 'assets/tabs-images/tobblers-1.webp', link: '#', heading: t('TODDLERS') },
      { src: 'assets/tabs-images/boys-1.webp', link: '#', heading: t('BOYS') },
      { src: 'assets/tabs-images/girls-1.webp', link: '#', heading: t('GIRLS') },
      
    ],
  ];

  return (
    
    <div className="tabs-container" >
        <h2 className='heading'>{t("Shop For")}</h2>
      <div className="tabs-buttons">
        {[t('BALLOONS'), t('OCCASIONS'), t('COSTUMES')].map((label, i) => (
          <button key={i} className={activeTab === i ? 'active' : ''} onClick={() => setActiveTab(i)}>{label}</button>
        ))}
      </div>
      <div className="tabs-content">
        {tabsContent[activeTab].map((img, i) => (
          <a key={i} href={img.link}>
            <div className='imagecard'><img src={img.src} alt="" /></div>
            <h3>{img.heading}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tabs;