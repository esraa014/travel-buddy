import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./Carousel";
import Header from "./Header";
const images = [
  {
    src: "imgs/slide1.jpg",
    alt: "Venice",
    caption: {
      title: "Venice",
      text: "Romantic canals and historic architecture in Venice.",
    },
  },
  {
    src: "imgs/slide2.jpg",
    alt: "Rome",
    caption: {
      title: "Rome",
      text: "Ancient ruins and vibrant culture in Rome.",
    },
  },
  {
    src: "imgs/slide3.jpg",
    alt: "Portorosso",
    caption: {
      title: "Portorosso",
      text: 'Colorful seaside town inspired by Portofino in "Luca".',
    },
  },
  {
    src: "imgs/slide4.jpg",
    alt: "Lake Como",
    caption: {
      title: "Lake Como",
      text: "Scenic lake surrounded by mountains in northern Italy.",
    },
  },
  {
    src: "imgs/slide5.jpg",
    alt: "Milan",
    caption: {
      title: "Milan",
      text: "Fashion capital known for its art, fashion, and design.",
    },
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <ImageCarousel images={images} />
    </div>
  );
}
