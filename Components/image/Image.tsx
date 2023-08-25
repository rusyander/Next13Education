import React from "react";
import NextImage from "next/image";
import { Variants, motion } from "framer-motion";

export default function Image() {
  return <div>Image</div>;
}

const MImage = motion(NextImage);
export { MImage as Image };
