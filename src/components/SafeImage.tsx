'use client';

import React, { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

const PLACEHOLDER = 'https://placehold.co/600x400?text=Image+Missing';

export default function SafeImage({ src, alt, className, style }: Props) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => {
        if (imgSrc !== PLACEHOLDER) {
          setImgSrc(PLACEHOLDER);
        }
      }}
    />
  );
}
