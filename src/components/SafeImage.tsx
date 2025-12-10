'use client'

import React, { useState } from 'react'

type SafeImageProps = {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
}

export default function SafeImage({ src, alt = '', className, style }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src)
  const [errored, setErrored] = useState(false)
  const placeholder = 'https://placehold.co/600x400?text=Image+Missing'

  const handleError = () => {
    if (!errored) {
      setCurrentSrc(placeholder)
      setErrored(true)
      console.warn(`SafeImage: Failed to load ${src}, switching to placeholder.`)
    }
  }

  return (
    // use native <img> but with client-side onError handler (allowed because this is Client Component)
    // Note: Next/Image is not used to keep behavior simple and consistent with requirement to use SafeImage
    // and to avoid remote domain config for placeholder.
    // The component accepts style/className from parent.
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  )
}
