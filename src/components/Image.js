import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src, width, quality}) => {
  return src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}