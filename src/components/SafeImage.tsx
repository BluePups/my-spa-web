'use client'

import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SafeImage({ src, alt, className, style, ...rest }: Props) {
  const [imgSrc, setImgSrc] = useState(src);
  const placeholder = 'https://placehold.co/1200x800?text=Image+Missing';

  return (
    // intentionally using native img for performance; onError handled here (client component)
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => {
        if (imgSrc !== placeholder) setImgSrc(placeholder);
      }}
      {...rest}
    />
  );
}
