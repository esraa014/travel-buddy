import { Carousel } from "react-bootstrap";

export default function ImageCarousel({ images }) {
  return (
    <Carousel fade className="cc ">
      {images.map((image, index) => (
        <Carousel.Item key={index} className="c-item">
          <img
            className="d-block w-100 c-img "
            src={image.src}
            alt={image.alt || `Slide ${index + 1}`}
          />
          {image.caption && (
            <Carousel.Caption className="c-caption">
              <h1 className="text-white-100 text-center  text-uppercase ">
                {image.caption.title}
              </h1>
              <p>{image.caption.text}</p>
              <a class="btn rounded-pill main-btn text-uppercase" href="#">
                Start Exploration
              </a>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
