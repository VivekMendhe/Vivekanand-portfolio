"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";

const Layout = ({ children }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Vivekanand Mendhe</h1>
        <p className="text-xl mt-2 mb-4">Full-Stack Developer</p>
        <div>
          <section>
            {/* <h2 className="text-2xl  font-semibold mb-4">Contact</h2> */}
            <div className="flex justify-center text-lg gap-x-2">
              <p>
                📧:{" "}
                <a
                  href="mailto:vivek.mendhe.022@gmail.com"
                  className="text-blue-500"
                >
                  Mail Me
                </a>
              </p>
              <p className="flex items-center justify-center gap-x-1">
                | <CiMobile2 />: +91-7620973663
              </p>
              <p className="flex items-center justify-center gap-x-1">
                | <FaLinkedin />:{" "}
                <a
                  href="https://www.linkedin.com/in/vivekanand-mendhe-23340117b/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Vivekanand Mendhe
                </a>
              </p>
              <p className="flex items-center justify-center gap-x-1">
                | <FaGithub />:{" "}
                <a
                  href="https://github.com/VivekMendhe"
                  target="_blank"
                  className="text-blue-500"
                >
                  VivekMendhe
                </a>
              </p>
            </div>
          </section>
        </div>
      </header>
      <main className="flex flex-col gap-8">{children}</main>
      <footer className="text-center mt-12">
        <p>&copy; 2024 Vivekanand Mendhe</p>
      </footer>
    </div>
  );
};

export default Layout;
