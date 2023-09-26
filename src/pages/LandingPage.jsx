import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";

function LandingPage() {
  return (
    <div className="bg-[#FFF8F8]">
      <Navbar />
      <div className="h-full px-8 py-20 bg-[#FFF8F8]">
        <header className="h-full lg:px-10">
          <div className="my-2 text-4xl font-bold lg:text-7xl">
            {Header.title}
          </div>
          <div className="my-2 text-4xl font-bold lg:text-7xl">
            {Header.subTitle}
          </div>
          <div className="my-5 text-lg">{Header.description}</div>
          <img
            src="/public/img-main.svg"
            alt="img-main"
            width={300}
            height={300}
            className="mx-auto"
          />
        </header>
        <div className="my-10 h-fit bg-[#FFF8F8]">
          <div className="my-2 text-4xl font-bold underline lg:text-7xl underline-offset-8">
            {About.title}
          </div>
          <div className="my-5 text-lg">{About.description1}</div>
          <div className="my-5 text-lg">{About.description2}</div>
          <div className="my-5 text-lg">{About.description3}</div>
          <div className="my-5 text-lg">{About.description4}</div>
          <a
            role="button"
            className="px-5 py-2 text-gray-100 rounded-md bg-slate-900 hover:bg-gray-600"
            href="https://rune-mum-5fc.notion.site/Dimah-Luthfi-Aulia-af6ad56d5b294e0e83bcd6448da67540?pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <img src="/public/img-main.svg" alt="image-main" className="hidden" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
