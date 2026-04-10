import ImageSlider from "./components/ImageSlider";

// Import images
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/image5.jpg";

function App() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Image Slider</h1>

      <ImageSlider
        images={images}
        autoplay={true}
        slidesPerView={1}
        loop={true}
      />
    </div>
  );
}

export default App;