import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Press",
};

export default function PressPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      {/* Page Title */}
      <section className="page-container-narrow mb-[5%]">
        <h1 className="text-page-title">Press</h1>
      </section>

      {/* Amazing Stoner Movie Festival */}
      <section className="page-container-narrow mb-[3%]">
        <div className="rounded-[30px] border border-[#575757] bg-[#1e1e1e] p-[30px]">
          <h2 className="text-body text-white mb-3">
            Amazing Stoner Movie Festival# Bangkok 2022
          </h2>
          <h3 className="text-body text-white mb-4">
            Award for the most shocking movie
          </h3>
          <p className="text-body">
            We won the award for the most shocking movie at the Bangkok Amazing
            Stoner Movie Festival 2024. Incredible friendly people. Big, big
            thank you!
          </p>
        </div>
      </section>

      {/* Festival images */}
      <section className="page-container-narrow mb-[3%]">
        <CdnImage
          src="/images/press/Stoner_logo_with_word-07_512.jpg"
          alt="Stoner Movie Festival logo"
          width={1024}
          height={816}
          className="w-full h-auto mb-[15px]"
        />
        <CdnImage
          src="/images/press/oasis.jpg"
          alt="Oasis venue"
          width={1920}
          height={1920}
          className="w-full h-auto mb-[15px]"
        />
        <CdnImage
          src="/images/press/315472309_458984976341539_633079337342069829_n.jpg"
          alt="Festival photo"
          width={1080}
          height={1440}
          className="w-full h-auto mb-[15px]"
        />
        <CdnImage
          src="/images/press/315422687_458984203008283_8301423464304757707_n.jpg"
          alt="Festival photo"
          width={2048}
          height={1152}
          className="w-full h-auto"
        />
      </section>

      {/* Seed & Spark */}
      <section className="page-container-narrow mb-[3%]">
        <div className="rounded-[30px] border border-[#575757] bg-[#1e1e1e] p-[30px]">
          <h2 className="text-body text-white mb-4">Seed &amp; Spark</h2>
          <p className="text-body mb-4">
            We successfully crowd-funded 15.000&euro; on Seed &amp; Spark to
            finish the special effects. Thank you for everyone who supported us!
          </p>
          <p className="text-body">
            <a
              href="http://seedandspark.com/fund/spacebirth-2#story"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to see the campaign.
            </a>
          </p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="page-container-narrow mb-[3%]">
        <CdnImage
          src="/images/press/Screenshot-2024-10-12-at-21.14.17.png"
          alt="Seed & Spark campaign"
          width={1920}
          height={1354}
          className="w-full h-auto"
        />
      </section>

      {/* YouTube Video */}
      <section className="page-container-narrow mb-[3%]">
        <div className="video-embed-outline">
          <VideoEmbed type="youtube" videoId="1H6OfKVPDQY" />
        </div>
      </section>

      {/* Babylon Berlin */}
      <section className="page-container-narrow mb-[3%]">
        <div className="rounded-[30px] border border-[#575757] bg-[#1e1e1e] p-[30px]">
          <h2 className="text-body text-white mb-4">Babylon Berlin</h2>
          <p className="text-body">
            World Premiere in one of the most famous cinemas in Berlin
          </p>
        </div>
      </section>

      {/* Premiere photo */}
      <section className="page-container-narrow mb-[3%]">
        <CdnImage
          src="/images/press/IMG_0722-1.jpg"
          alt="Premiere"
          width={2560}
          height={1707}
          className="w-full h-auto"
        />
      </section>

      {/* Two photos side by side */}
      <section className="page-container-narrow mb-[3%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
          <CdnImage
            src="/images/press/IMG_20191220_175619.jpg"
            alt="Babylon Berlin premiere"
            width={1920}
            height={2560}
            className="w-full h-auto"
          />
          <CdnImage
            src="/images/press/IMG_20191217_182038.jpg"
            alt="Babylon Berlin premiere"
            width={1920}
            height={2560}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Full width photo */}
      <section className="page-container-narrow mb-[3%]">
        <CdnImage
          src="/images/press/DSC4981.jpg"
          alt="Babylon Berlin premiere"
          width={4096}
          height={2731}
          className="w-full h-auto"
        />
      </section>
    </div>
  );
}
