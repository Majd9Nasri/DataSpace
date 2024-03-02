import { Footer } from "./Footer";
import { HeaderNavBar } from "./HeaderNavBar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";
import { StartPage } from "./sections/StartPage";
import { Team } from "./sections/Team";

export default function Page() {
  return (
    <>
      <HeaderNavBar />
      <StartPage />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
