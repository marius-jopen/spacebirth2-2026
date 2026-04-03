import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Contact",
};

export default function ContactPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <section className="page-container mb-[5%]">
        <h1 className="text-page-title">Contact</h1>
      </section>

      <section className="page-container">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-body mb-6">
            For screenings, press inquiries, collaborations or any other
            questions — feel free to reach out.
          </p>
          <p className="text-body mb-8">
            <a href="mailto:mail@mariusjopen.com">mail@mariusjopen.com</a>
          </p>
          <p className="text-body">
            Produced by{" "}
            <a
              href="http://thepeople.world/"
              target="_blank"
              rel="noopener noreferrer"
            >
              THE PEOPLE&deg;
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
