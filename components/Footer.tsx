import Link from "next/link";

export default function Footer() {
  return (
    <footer className="page-container pt-[80px] pb-[20px]">
      <div className="flex justify-between items-center">
        <p className="text-[13px] sm:text-[17px] lg:text-[20px] text-[#dbdbdb] m-0">
          Produced by{" "}
          <Link
            href="http://thepeople.world/"
            target="_blank"
            rel="noopener noreferrer"
          >
            THE PEOPLE&deg;
          </Link>
        </p>
        <p className="text-[13px] sm:text-[17px] lg:text-[20px] text-[#dbdbdb] m-0">
          <Link
            href="https://instagram.com/spacebirth_2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </p>
      </div>
    </footer>
  );
}
