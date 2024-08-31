
import './App.css';
import'./component/catousel'
import Carousel from './component/catousel';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/images4.jpg';

function App() {
  const images = [
    image1,image2,image3
    // Add more images as needed
  ];

  

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} fallbackImage={image4}/>
      
    </div>
  );
}

export default App;
