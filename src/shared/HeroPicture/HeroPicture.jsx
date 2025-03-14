export const HeroPicture = ({ item, priority, hidden, imgClassName = '', ...rest }) => (
  <picture
    {...rest}
  >
    <source
      srcSet={`${item.mobile.webp} 375w, ${item.mobile.webp_2x} 750w`}
      media="(max-width: 767px)"
      sizes="(max-width: 767px) 375px, 100%"
      type="image/webp"
    />
    <source
      srcSet={`${item.tablet.webp} 768w, ${item.tablet.webp_2x} 1536w`}
      media="(min-width: 768px) and (max-width: 1439px)"
      sizes="(min-width: 768px) and (max-width: 1439px) 768px, 100%"
      type="image/webp"
    />
    <source
      srcSet={`${item.desktop.webp} 1440w, ${item.desktop.webp_2x} 2880w`}
      media="(min-width: 1440px)"
      sizes="(min-width: 1440px) 1440px, 100%"
      type="image/webp"
    />
    <img
      fetchpriority={priority ? 'high' : 'low'}
      loading={priority ? 'eager' : 'lazy'}
      className={`hero-img ${imgClassName}`}
      style={{ display: hidden ? 'none' : undefined }}
      src={item.desktop.png}
      alt={item.alt}
    />
  </picture>
);


export const HeroPreload = ({ item }) => (
  <>
    <link
      fetchpriority="high"
      rel="preload"
      as="image"
      imageSrcSet={`${item.mobile.webp} 375w, ${item.mobile.webp_2x} 750w`}
      media="(max-width: 767px)"
      imageSizes="(max-width: 767px) 375px, 100%"
    />
    <link
      fetchpriority="high"
      rel="preload"
      as="image"
      imageSrcSet={`${item.tablet.webp} 768w, ${item.tablet.webp_2x} 1536w`}
      media="(min-width: 768px) and (max-width: 1439px)"
      imageSizes="(min-width: 768px) and (max-width: 1439px) 768px, 100%"
    />
    <link
      fetchpriority="high"
      rel="preload"
      as="image"
      imageSrcSet={`${item.desktop.webp} 1440w, ${item.desktop.webp_2x} 2880w`}
      media="(min-width: 1440px)"
      imageSizes="(min-width: 1440px) 1440px, 100%"
    />
  </>
);
