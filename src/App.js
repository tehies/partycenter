import logo from './logo.svg';
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

function App() {
  return (
    <div>
      <Header/>
      <BannerSlider/>
      <Categories/>
      <Widgets/>
      <Collectionslider/>
    

      <Banner 
        imageUrl_desktop="assets/banner-images/banner-1.jpeg" 
        imageUrl_mobile="assets/banner-images/banner-1-mobile.jpeg" 
        altText="Sample Banner" 
      />

        <Tabs/>

        <Banner 
        imageUrl_desktop="assets/banner-images/banner-image-2-dsk.jpeg" 
        imageUrl_mobile="assets/banner-images/final_mobile_size_11zon.jpeg" 
        altText="Sample Banner" 
      />
      <Footer/>
     
    </div>
  );
}

export default App;
