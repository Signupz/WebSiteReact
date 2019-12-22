import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// https://neptunian.github.io/react-photo-gallery/

const photos = [
  {
    src: require("../photos/urban/_MG_4418.jpg"),
    width: 1300,
    height: 867
  },
  {
    src: require("../photos/urban/_MG_7797-3.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6136449955_f5635fe9cb_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8361-2.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8375.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8810-2.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8812-2.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8818-2.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8822.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8866.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/_MG_8871.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-02-18_04.25.56_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-02-24_03.35.16_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-05-16_12.30.11_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-05-25_07.54.30_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-05-29_03.08.45_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-05-31_01.54.10_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-06-02_12.45.00_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-06-07_04.07.12_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-07-12_06.37.43_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-07-12_06.37.46_2.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-07-12_06.37.49_1.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/2016-08-15_11.49.43_3.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6273560025_a582ffe156_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6274084560_87a6ddb15e_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6312704626_ce140a2d98_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6312912296_7a041e5f44_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6312912790_cf7cb5fc77_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6362994809_6d5cb32187_b.jpg"),
    width: 800,
    height: 533
  },
  {
    src: require("../photos/urban/6793350800_45762fd4ff_b.jpg"),
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