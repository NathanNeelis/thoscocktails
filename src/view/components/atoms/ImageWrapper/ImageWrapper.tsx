import Image, { ImageProps } from "next/image";
import React from "react";

function ImageWrapper(props: ImageProps) {
  const { children } = props;
  return <Image {...props}>{children}</Image>;
}

export default ImageWrapper;
