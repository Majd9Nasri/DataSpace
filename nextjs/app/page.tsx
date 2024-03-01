import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Homepage } from "./sections/Homepage";
import { Services } from "./sections/Services";
import { Team } from "./sections/Team";

export default function Page() {
  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  );
}
