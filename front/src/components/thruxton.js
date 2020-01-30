import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// https://neptunian.github.io/react-photo-gallery/

const photos = [
  {
    src: require("../photos/Thruxton/IMG_2446.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2448.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2450.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2451.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2452.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2453.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2454.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2456.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2457.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2463.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2464.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2467.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2468.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2469.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2471.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2473.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2474.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2476.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2478.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2479.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2480.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2484.jpg"),
    width: 867,
    height: 1300
  },
  {
    src: require("../photos/Thruxton/IMG_2489.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/Thruxton/IMG_2492.jpg"),
    width: 867,
    height: 1300
  },
];

export default function Thruxton() {
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