import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

const projectLinks = [
  { href: "/media", title: "Media", image: "/images/shared/watch.jpg", w: 4096, h: 2731 },
  { href: "/production", title: "Production", image: "/images/shared/IMG_0722.jpg", w: 4096, h: 2731 },
  { href: "/press", title: "Press", image: "/images/shared/IMG_0722-1.jpg", w: 2560, h: 1707 },
  { href: "/people", title: "People", image: "/images/shared/peopole.jpg", w: 4096, h: 2731 },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section — pt-[50px] on mobile for navbar clearance */}
      <div className="pt-[50px] sm:pt-0">
        <HeroVideo />
      </div>

      {/* Subtitle */}
      <section className="page-container pt-[7%] pb-[7%]">
        <div className="grid grid-cols-12 gap-x-[1%]">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2">
            <p className="text-p2 m-0">
              After the big success of Spacebirth,<br />
              THE PEOPLE&deg; decided to produce another cult movie.
            </p>
          </div>
        </div>
      </section>

      {/* Artwork Images */}
      <section className="page-container pb-[8%]">
        <div className="grid grid-cols-12 gap-x-[1%] gap-y-[20px]">
          <div className="col-span-6 sm:col-span-3">
            <Image
              src="/images/home/aw3.png"
              alt="Spacebirth 2 artwork 3"
              width={1280}
              height={850}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Image
              src="/images/home/aw2.png"
              alt="Spacebirth 2 artwork 2"
              width={1280}
              height={850}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Image
              src="/images/home/aw1.png"
              alt="Spacebirth 2 artwork 1"
              width={1280}
              height={850}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Image
              src="/images/home/aw4.png"
              alt="Spacebirth 2 artwork 4"
              width={1280}
              height={850}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* DVD + Story Section */}
      <section className="page-container pb-[7%]">
        <div className="grid grid-cols-12 gap-x-[1%] gap-y-[30px]">
          <div className="col-span-12 sm:col-span-5">
            <Image
              src="/images/home/dvd.gif"
              alt="Spacebirth 2 DVD"
              width={500}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <div className="col-span-12 sm:col-span-4 sm:col-start-7 flex items-center">
            <div className="text-body">
              <p className="mb-6">
                SPACEBIRTH 2 tells the story of a lonely cosmonaut traveling
                through the galaxy and searching for beauty.
              </p>
              <p className="mb-6">
                Long on his isolated quest, he becomes tired and despondent.
                After his final hope of reaching something meaningful is lost,
                his greatest journey begins.
              </p>
              <p>
                Sucked into a surreal adventure beyond understanding, the
                cosmonaut discovers what he&apos;s really been searching for all
                along.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="page-container pb-[20px]">
        <div className="grid grid-cols-12 gap-x-[1%] gap-y-[20px]">
          {projectLinks.map((project) => (
            <div key={project.href} className="col-span-12 sm:col-span-6">
              <Link href={project.href} className="project-thumb">
                <div className="thumb-title">
                  <span>{project.title}</span>
                </div>
                <Image
                  src={project.image}
                  alt={`Spacebirth 2 - ${project.title}`}
                  width={project.w}
                  height={project.h}
                  className="w-full h-auto"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
