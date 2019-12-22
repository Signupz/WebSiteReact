import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// https://neptunian.github.io/react-photo-gallery/

const photos = [
  {
    src: require("../photos/R1_2016/IMG_4408.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4411.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4413.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4415.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4417.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4418.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4419.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4423.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4424.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4426.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4427.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4432.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4433.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4434.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4435.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4436.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4437.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4438.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4439.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4440.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4442.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4444.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4445.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4446.jpg"),
    width: 1067,
    height: 1600
  },
  {
    src: require("../photos/R1_2016/IMG_4447.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/R1_2016/IMG_4448.jpg"),
    width: 800,
    height: 533
  },
];

export default function DDMT() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}