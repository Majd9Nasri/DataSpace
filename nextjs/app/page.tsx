import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { StartPage } from "./sections/StartPage";
import { Services } from "./sections/Services";
import { Team } from "./sections/Team";

export default function Page() {
  return (
    <>
      <StartPage />
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  );
}
