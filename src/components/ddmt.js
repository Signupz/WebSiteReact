import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// https://neptunian.github.io/react-photo-gallery/

const photos = [
  {
    src: require("../photos/ddmt/_MG_3232.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3235.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3238.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3239.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3241.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3242.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3247.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3248.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3254.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3258.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3262.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3273.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3285.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3286.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3287.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3296.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3303.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3309.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3310.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3322.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3323.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3327.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3329.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3334.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3336.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3350.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3353.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3358.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3360.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3361.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3363.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3366.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/ddmt/_MG_3367.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3369.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3379.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../photos/ddmt/_MG_3381.jpg"),
    width: 3,
    height: 4
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