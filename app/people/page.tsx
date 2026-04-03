import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spacebirth 2 — People",
};

const people = [
  {
    name: "Marius Jopen",
    role: "Co-Director & Co-Producer",
    bio: "As a multi-skilled creative, Marius was looking for an opportunity to put beauty into motion. As all his previous work was focused on graphic design, directing SPACEBIRTH 2 came as a natural next step in his journey.",
  },
  {
    name: "RICHARD KEITH",
    role: "Co-Director & Prop Designer",
    bio: "As a visionary, Richard seamlessly knew how to envision the world of SPACEBIRTH 2. His fine arts background allowed for the most supersonic props on set. After endlessly collecting free cardboard from bike shops",
  },
  {
    name: "AUDREY BELAUD",
    role: "Co-Producer & Emotional Glue",
    bio: "Audrey, the co-producer of the film, initially joined the team as a PROP BUILDER. Her skills in team management and her natural talent for organization quickly led her to become the project manager and eventually the lead producer",
  },
];

export default function PeoplePage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      {/* Page Title */}
      <section className="page-container mb-[7%]">
        <h1 className="text-page-title">People</h1>
      </section>

      {/* People Grid */}
      <section className="page-container mb-[10%]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px] sm:gap-x-[1%]">
          {people.map((person) => (
            <div key={person.name} className="text-center">
              <h2 className="text-h1 mb-2">{person.name}</h2>
              <p className="text-body mb-4 text-white">{person.role}</p>
              <p className="text-body">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credits Image */}
      <section className="page-container mb-[7%]">
        <Image
          src="/images/people/credits.png"
          alt="Spacebirth 2 credits"
          width={437}
          height={2560}
          className="w-full h-auto"
        />
      </section>
    </div>
  );
}
