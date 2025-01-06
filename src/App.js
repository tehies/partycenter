import './App.css';
import './css/global.css';
import BannerSlider from './components/BannerSlider';
import Categories from './components/Categories';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Collectionslider from './components/Collectionslider';
import Banner from './components/Banner';
import Widgets from './components/Widgets';
import Footer from './components/Footer';
import ProductSlider from './components/ProductSlider';
import CollectionPage from './components/CollectionPage'; // Component for collection API integration
import ProductPage from './components/ProductPage'; // Component for Product API integration

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollectionNav from './components/CollectionNav';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <BannerSlider />
              <Categories />
              <Widgets />
              <Collectionslider />
              <Banner
                imageUrl_desktop="assets/banner-images/banner-1.jpeg"
                imageUrl_mobile="assets/banner-images/banner-1-mobile.jpeg"
                altText="Sample Banner"
              />
              <ProductSlider />
              <Tabs />
              <Banner
                imageUrl_desktop="assets/banner-images/banner-image-2-dsk.jpeg"
                imageUrl_mobile="assets/banner-images/final_mobile_size_11zon.jpeg"
                altText="Sample Banner"
              />
            </>
          } />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/Disney" element={<CollectionNav id={142} />} />
          <Route path="/Birthdays" element={<CollectionNav id={151} />} />
          <Route path="/Balloons" element={<CollectionNav id={143} />} />
          <Route path="/Costumes" element={<CollectionNav id={144} />} />
          <Route path="/Decorations" element={<CollectionNav id={145} />} />
          <Route path="/Party_Favours" element={<CollectionNav id={146} />} />
          <Route path="/Theme_Parties" element={<CollectionNav id={147} />} />
          <Route path="/Baby_Events" element={<CollectionNav id={148} />} />
          <Route path="/Special_Occasions" element={<CollectionNav id={149} />} />
          <Route path="/Holiday_Seasons" element={<CollectionNav id={150} />} />


          {/* collection routes */}
          <Route path="/collection/:collectionId" element={<CollectionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
