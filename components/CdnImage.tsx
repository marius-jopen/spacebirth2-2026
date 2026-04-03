import Image, { ImageProps } from "next/image";
import { cdnImage } from "@/lib/cdn";

type CdnImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export default function CdnImage({ src, ...props }: CdnImageProps) {
  return <Image src={cdnImage(src)} {...props} />;
}
