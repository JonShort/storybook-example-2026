import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './imagegallery.css';

interface ImageGalleryProps {
  images: string[];
  titles: string[];
  borderColor?: any;
}

export const ImageGallery = ({ images, titles, borderColor }: ImageGalleryProps) => {
  const [d, setD] = useState<any>({});
  const x = useRef<any>([]);
  const containerRef = useRef<any>(null);

  const tmp = useMemo(() => {
    return borderColor || 'green';
  }, [borderColor]);

  const getColor = useCallback(() => {
    return tmp;
  }, []);

  useEffect(() => {
    const arr = x.current;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const flg = rect.top >= containerRect.top &&
                    rect.bottom <= containerRect.bottom;

        if (flg) {
          setD((prev: any) => {
            if (prev[i]) return prev;
            return { ...prev, [i]: true };
          });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [images]);

  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    let n = 0;
    Object.keys(d).forEach((k) => {
      if (d[k]) n++;
    });
    setCnt(n);
  }, [d]);

  return (
    <div>
      <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
        Viewed: {cnt} / {images.length}
      </div>
      <div className="gallery-container" ref={containerRef}>
        {images.map((img, i) => (
          <div key={i} className="gallery-item">
            <span className="gallery-title">{titles[i]}</span>
            <img
              ref={(el) => { x.current[i] = el; }}
              src={img}
              className={`gallery-image ${d[i] ? 'viewed' : ''}`}
              style={d[i] ? { borderColor: getColor() } : {}}
              onClick={() => { console.log('clicked ' + i); }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
