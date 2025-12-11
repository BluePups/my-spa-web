'use client';

import React, { useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function SafeImage({ src, alt, className, style }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const placeholder = 'https://placehold.co/600x400?text=Image+Missing';

  function handleError() {
    setCurrentSrc(placeholder);
  }

  return (
    // Using a regular img inside a Client Component to handle onError safely
    // MUI components could be applied by wrapping but plain img is fine here.
    // Keep attributes minimal and use style/className from props.
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={currentSrc} alt={alt} className={className} style={style} onError={handleError} />
  );
}
