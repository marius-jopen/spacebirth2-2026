import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Production",
};

const CDN = "https://www.spacebirth2.com/wp-content/uploads/2024/10";

interface Section {
  number: string;
  title: string;
  description?: string;
  items: GalleryItem[];
}

function img(name: string): GalleryItem {
  return { type: "img", src: `/images/production/${name}` };
}
function vid(name: string): GalleryItem {
  return { type: "video", src: `${CDN}/${name}` };
}

const sections: Section[] = [
  {
    number: "I",
    title: "Building the set in Koepenicker Chaussee",
    description:
      "Our first studio was in a small studio in the east of Berlin. This is where we prepared all the props for the TURBO police TV show.",
    items: [
      img("MG_2163.jpg"), img("MG_2169.jpg"), img("4e773093-72e1-48be-95a8-cbe27991e517.jpg"),
      img("IMG_0468.jpg"), img("MG_2179.jpg"), img("MG_2201.jpg"),
      img("MG_2234.jpg"), img("MG_2242.jpg"), img("MG_2277.jpg"),
      img("IMG_0293.jpg"), img("MG_2382.jpg"), img("MG_2162.jpg"),
      img("MG_2319-2.jpg"), img("MG_2331.jpg"), img("MG_2351.jpg"),
      img("MG_2385.jpg"), img("MG_2374.jpg"), img("MG_2377.jpg"),
      img("7BB217D6-F50B-47A9-95E9-D0D1A6F1DF4F.jpg"),
      img("A5F6A164-208D-404D-B42F-746CC474B534.jpg"),
      img("D62CD833-D476-46AC-ACBA-77A23ACF3F94.jpg"),
      img("IMG_0467.jpg"), img("IMG_2364-2.jpg"), img("IMG_2366-2.jpg"),
    ],
  },
  {
    number: "II",
    title: "Shooting at vattenfall",
    description:
      "We shot the TUBRO police TV show at Vattenfall. They gave us the permission to shoot there for free in exchange of three carrot cakes.",
    items: [
      img("bca84068-c3d6-4d6b-bbc9-5dcea8f3e358.jpg"),
      img("IMG_0472.jpg"), img("IMG_0477.jpg"), img("IMG_0482.jpg"),
      img("IMG_0493.jpg"), img("IMG_0494.jpg"), img("IMG_0495.jpg"),
      vid("turbo.mp4"),
      img("IMG_0501.jpg"), img("IMG_0505.jpg"), img("IMG_0507.jpg"),
      img("IMG_0510.jpg"), img("IMG_0513.jpg"), img("IMG_0518.jpg"),
      img("IMG_0520.jpg"), img("IMG_0521.jpg"), img("IMG_0539.jpg"),
      img("IMG_0540.jpg"), img("IMG_0543.jpg"), img("IMG_0548.jpg"),
      img("IMG_0549.jpg"), img("IMG_0557.jpg"),
    ],
  },
  {
    number: "III",
    title: "The spaceship",
    description:
      "We built the inside of the spaceship from cardboard above an industrial bakery in Berlin. We are making a movie!",
    items: [
      img("MG_0484.jpg"), img("MG_0916.jpg"),
      img("8B35DD03-6215-4D93-8D14-34BAC32F0123.jpg"),
      img("6A18C9A4-63D9-4DAF-9D59-DD67D5AAD171.jpg"),
      img("53AEF3B0-AF4F-4AFA-AA2A-567D75230FDD.jpg"),
      img("70F6A1FC-A8D7-4B1E-8352-56C7EBA98A9B.jpg"),
      vid("IMG_5544.mp4"),
      img("71BF2E0F-2A99-4B13-90D0-4A9DC7B5A6FA.jpg"),
      img("90C05303-C85C-4FC5-A4F0-264101462330.jpg"),
      img("908a3f09-9ddd-404f-b39c-40a84b8cb60a.jpg"),
      img("Bildschirmfoto-2019-10-08-um-18.58.08.jpg"),
      vid("IMG_5608.mp4"),
      img("Bildschirmfoto-2019-10-08-um-18.58.29.jpg"),
      img("Bildschirmfoto-2019-10-08-um-19.00.21-2.jpg"),
      img("Bildschirmfoto-2019-10-08-um-19.00.30-2.jpg"),
      img("Bildschirmfoto-2019-10-08-um-19.00.37-2.jpg"),
      img("DSC08180-3.jpg"), img("DSC08251-2.jpg"),
      img("DSC08252-2.jpg"), img("DSC08263-2.jpg"),
      vid("IMG_5347.mp4"),
      img("DSC08284-2.jpg"), img("DSC08292-2.jpg"),
      img("DSC08293-2.jpg"), img("DSC08295-2.jpg"),
      img("DSC08300-2.jpg"), img("IMG_0399-2.jpg"),
      img("IMG_0405-2.jpg"), img("IMG_0406-2.jpg"),
      vid("IMG_5533.mp4"),
      img("IMG_0413.jpg"), img("IMG_0414-2.jpg"),
      img("IMG_0459.jpg"), img("IMG_0478.jpg"),
      img("IMG_0496.jpg"), img("IMG_0690.jpg"),
      img("IMG_0693.jpg"), img("IMG_0698.jpg"),
      img("IMG_0718.jpg"), img("IMG_0728-2.jpg"),
      img("IMG_0757.jpg"),
      vid("IMG_5593.m4v"),
      img("IMG_0762.jpg"), img("IMG_0772.jpg"),
      img("IMG_0777.jpg"), img("IMG_0791.jpg"),
      vid("IMG_5496.mp4"),
      img("IMG_0825.jpg"), img("IMG_0826.jpg"),
      img("IMG_0827.jpg"), img("IMG_0885.jpg"),
      img("IMG_0902.jpg"), img("IMG_0952-2.jpg"),
      img("IMG_5469.jpg"), img("IMG_5490.jpg"),
      img("IMG_5491.jpg"), img("IMG_5611.jpg"),
      img("R1-03213-0023.jpg"),
      vid("IMG_5397.mp4"),
      img("R1-03213-0027.jpg"), img("rough-cut.jpg"),
      img("UNADJUSTEDNONRAW_thumb_1e6.jpg"), img("UNADJUSTEDNONRAW_thumb_1e7.jpg"),
      img("UNADJUSTEDNONRAW_thumb_1fc.jpg"),
      vid("IMG_5512.mp4"),
      img("UNADJUSTEDNONRAW_thumb_4e.jpg"), img("UNADJUSTEDNONRAW_thumb_11f.jpg"),
      img("UNADJUSTEDNONRAW_thumb_21c.jpg"), img("UNADJUSTEDNONRAW_thumb_36.jpg"),
      img("UNADJUSTEDNONRAW_thumb_139.jpg"),
      vid("IMG_5318.mp4"),
      img("UNADJUSTEDNONRAW_thumb_141.jpg"), img("UNADJUSTEDNONRAW_thumb_144.jpg"),
      img("UNADJUSTEDNONRAW_thumb_149.jpg"), img("UNADJUSTEDNONRAW_thumb_167.jpg"),
      img("UNADJUSTEDNONRAW_thumb_171.jpg"), img("UNADJUSTEDNONRAW_thumb_207.jpg"),
    ],
  },
  {
    number: "IV",
    title: "Cape Town",
    description:
      "We shot the scenes of the database in a bathtub in Capetown.",
    items: [
      vid("WhatsApp-Video-2021-01-14-at-12.07.36-PM.mp4"),
      img("f8669b8c-70f8-4184-be10-61cf798c4964.jpg"),
      vid("WhatsApp-Video-2021-01-14-at-12.07.20-PM.mp4"),
      img("01419190-eecc-4a87-a62f-9dfcd98b6203.jpg"),
      img("8d987b4c-e7e1-4e9e-98f1-2c478fe8b436.jpg"),
      vid("WhatsApp-Video-2021-01-14-at-12.06.55-PM.mp4"),
    ],
  },
  {
    number: "V",
    title: "Post Production",
    description:
      "We thought post-production will be easy. But it took us a whole year to wrap everything up. We even had to reshoot a couple of scenes.",
    items: [
      img("DSC4494-2.jpg"), img("DSC4500-2.jpg"),
      img("DSC_0196.jpg"), img("DSC_0209.jpg"),
      img("DSC_0216.jpg"), img("DSC_0220.jpg"),
      img("DSC_0248.jpg"), img("IMG_20191215_152850.jpg"),
      img("DSC_0252.jpg"), img("DSC_0255.jpg"),
      img("DSC_0262.jpg"), img("DSC_0264.jpg"),
      img("DSC_0299.jpg"), img("DSC_0301.jpg"),
      img("DSC_0437.jpg"), img("DSC_0453.jpg"),
      img("DSC_0458.jpg"), img("DSC_0463.jpg"),
      img("DSC_0473.jpg"), img("DSC_0527.jpg"),
      img("DSC_0539.jpg"), img("DSC_0540.jpg"),
      img("DSC_0541.jpg"), img("DSC_0544.jpg"),
      vid("VID_20191119_015938.mp4"),
      img("MVIMG_20191118_002712.jpg"), img("IMG_20191118_214835.jpg"),
      img("IMG_20191118_002720.jpg"), img("IMG_20191211_143506.jpg"),
      img("IMG_20191213_042451.jpg"), img("IMG_20191111_153039.jpg"),
      img("IMG_20191215_152855.jpg"), img("IMG_20191219_155852.jpg"),
      img("MVIMG_20191121_010137.jpg"), img("IMG_20191118_002826.jpg"),
      vid("VID_20191119_012650.mp4"),
      img("MVIMG_20191109_002002.jpg"), img("MVIMG_20191118_223040.jpg"),
      img("MVIMG_20191118_002712-1.jpg"), img("MVIMG_20191112_194830.jpg"),
      img("MVIMG_20191111_224148.jpg"), img("MVIMG_20191109_002002-1.jpg"),
      img("IMG_20191118_002826-1.jpg"), img("IMG_20191118_002720-1.jpg"),
      img("IMG_20191114_190708.jpg"), img("IMG_20191112_194809.jpg"),
      img("IMG_20191111_153039-1.jpg"),
      img("DSC_0520.jpg"), img("DSC_0518.jpg"),
      img("DSC_0509.jpg"), img("DSC_0486.jpg"),
      vid("VID_20191119_001420.mp4"),
      img("DSC_0485.jpg"), img("DSC_0467.jpg"),
      img("DSC_0423.jpg"), img("DSC_0403.jpg"),
      img("DSC_0356.jpg"), img("DSC_0355.jpg"),
      img("DSC_0347.jpg"), img("DSC_0343.jpg"),
      img("DSC_0340.jpg"), img("DSC_0329.jpg"),
      img("DSC_0324.jpg"), img("DSC_0323.jpg"),
      vid("VID_20191107_225450.mp4"),
      img("DSC_0312.jpg"), img("DSC_0302.jpg"),
      img("DSC_0291.jpg"), img("DSC_0276.jpg"),
      img("DSC_0274.jpg"), img("DSC_0273.jpg"),
      img("DSC_0235.jpg"),
    ],
  },
];

export default function ProductionPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      {/* Page Title */}
      <section className="page-container mb-[7%]">
        <h1 className="text-page-title">Production</h1>
      </section>

      {sections.map((section) => (
        <section key={section.number} className="page-container mb-[10%]">
          {/* Section Header */}
          <div className="mb-[5%] text-center">
            <h2 className="text-h1 mb-2">{section.number}</h2>
            <h3 className="text-h1 mb-4">{section.title}</h3>
            {section.description && (
              <p className="text-body mx-auto max-w-[800px]">
                {section.description}
              </p>
            )}
          </div>

          {/* Masonry grid with interleaved images and videos */}
          <ImageGallery items={section.items} />
        </section>
      ))}
    </div>
  );
}
