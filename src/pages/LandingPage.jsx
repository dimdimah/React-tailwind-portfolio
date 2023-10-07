import { Header, About, Projects, Contact } from "../utils/constant/content";
import imgAbout from "../assets/img-about.svg";
import imgMain from "../assets/img-main.svg";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FormContact from "../components/form";

function LandingPage() {
  return (
    <div className="bg-[#FFF8F8]">
      <Navbar />
      <div className="h-full px-8 py-20 lg:py-5 bg-[#FFF8F8]">
        <header className="h-full lg:px-10 lg:flex lg:items-center lg:h-screen">
          <div className="w-9/12">
            <div className="my-2 text-4xl font-bold lg:text-7xl">
              {Header.title}
            </div>
            <div className="my-2 text-4xl font-bold lg:text-7xl">
              {Header.subTitle}
            </div>
            <div className="my-5 text-lg lg:text-xl">{Header.description}</div>
          </div>
          <img
            src={imgMain}
            alt="img-main"
            width={300}
            height={300}
            className="mx-auto"
          />
        </header>
        <Layout title={About.title}>
          <div>
            <div className="my-5">{About.description1}</div>
            <div className="my-5">{About.description2}</div>
            <div className="my-5">{About.description3}</div>
            <div className="my-5">{About.description4}</div>
            <a
              role="button"
              className="px-5 py-2 text-gray-100 rounded-md bg-slate-900 hover:bg-gray-600"
              href="https://rune-mum-5fc.notion.site/Dimah-Luthfi-Aulia-af6ad56d5b294e0e83bcd6448da67540?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              My resume
            </a>
          </div>
          <img src={imgAbout} alt="image-main" />
        </Layout>

        <Layout title={"Project"}>
          <div className="lg:flex lg:my-10">
            {Projects.map((project) => (
              <div key={project.id}>
                <div className="my-5 rounded-lg shadow-xl lg:mx-5 bg-base-100">
                  <figure>
                    <img
                      src={project.image}
                      alt="project-img"
                      className="rounded-md"
                    />
                  </figure>
                  <div className="card">
                    <div className="collapse">
                      <input type="checkbox" />
                      <div className="text-xl font-medium collapse-title">
                        <h2 className="text-semibold">{project.title}</h2>
                      </div>
                      <div className="text-lg collapse-content">
                        <p>{project.description}</p>
                        <p>
                          <button
                            className="mx-auto text-lg btn btn-link"
                            href={project.linkProject}
                          >
                            Link Project
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Layout>
        <Layout title="Contact Us">
          <div className="lg:flex lg:flex-row-reverse lg:justify-around lg:mx-auto">
            <FormContact />
            <div className="lg:mr-32">
              <div className="flex items-center mt-10 mb-4">
                <img
                  src="/icon-header.png"
                  alt="icon-contact"
                  width={50}
                  height={50}
                />
                <p>Dimdimah</p>
              </div>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {Contact.address}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {Contact.phone}
              </p>
            </div>
          </div>
        </Layout>
        <footer className="text-sm text-center">Created by | Dimdimah</footer>
      </div>
    </div>
  );
}

export default LandingPage;
