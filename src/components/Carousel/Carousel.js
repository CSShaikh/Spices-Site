import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows
      showStatus={false}
      showThumbs={false}
      emulateTouch
      swipeable
      infiniteLoop
      selectedItem={0}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            &#8249;
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            &#8250;
          </button>
        )
      }
      style={{ width: '100%', height: '20vh', margin: '0 auto' }}
    >
      <div>
        <img
          src="https://cdn11.bigcommerce.com/s-45hj43/images/stencil/1280w/products/2690/4534/SB_511_-_3__90537.1480344049.jpg?c=2"
          alt="Image 1"
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.uu5wxOfpe0QDsT8PtPOLSwHaC5?pid=ImgDet&rs=1"
          alt="Image 2"
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <img
          src="https://www.blue-farmers.com/wp-content/uploads/2017/08/spices-banner.jpg"
          alt="Image 3"
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
