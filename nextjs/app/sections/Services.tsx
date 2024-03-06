import { useContext } from "react";
import { ContentSection, ResponsiveGrid } from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";
import { ServiceImage, ServiceWrapper } from "./Services.style";

export function Services() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <ContentSection id={NavbarRoutes.Services}>
      <SectionTitle
        className="animate-slide-in-from-bottom-5rem-target-class"
        title={dictionary.Navbar.Services}
        targetId={NavbarRouteLinks.Services}
      />
      <h1 className="animate-slide-in-from-bottom-5rem-target-class">
        {dictionary.Services.h1}
      </h1>
      <p className="animate-slide-in-from-bottom-5rem-target-class">
        {dictionary.Services.p}
      </p>
      <ResponsiveGrid columns={3}>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Machine Learning"].h3}</h3>
          <p>{dictionary.Services["Machine Learning"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Deep Learning"].h3}</h3>
          <p>{dictionary.Services["Deep Learning"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Image Generation"].h3}</h3>
          <p>{dictionary.Services["Image Generation"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Image Recognition"].h3}</h3>
          <p>{dictionary.Services["Image Recognition"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Time Series Analysis"].h3}</h3>
          <p>{dictionary.Services["Time Series Analysis"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Text Analysis"].h3}</h3>
          <p>{dictionary.Services["Text Analysis"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Speech Recognition"].h3}</h3>
          <p>{dictionary.Services["Speech Recognition"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Recommendation Systems"].h3}</h3>
          <p>{dictionary.Services["Recommendation Systems"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Reinforcement Learning"].h3}</h3>
          <p>{dictionary.Services["Reinforcement Learning"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Data Engineering"].h3}</h3>
          <p>{dictionary.Services["Data Engineering"].p}</p>
        </ServiceWrapper>
        <ServiceWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <ServiceImage src="/AI KI.png" />
          <h3>{dictionary.Services["Neural Networks"].h3}</h3>
          <p>{dictionary.Services["Neural Networks"].p}</p>
        </ServiceWrapper>
      </ResponsiveGrid>
    </ContentSection>
  );
}
