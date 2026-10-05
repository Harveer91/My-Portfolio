import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

function Row({ title, children }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-body">
        <button type="button" className="row-arrow row-arrow--left" aria-label="Scroll left" onClick={() => scroll(-1)}>
          <FaChevronLeft />
        </button>
        <div className="row-track" ref={trackRef}>
          {children}
        </div>
        <button type="button" className="row-arrow row-arrow--right" aria-label="Scroll right" onClick={() => scroll(1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Row;
