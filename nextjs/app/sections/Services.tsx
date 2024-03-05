import { ContentSection, ResponsiveGrid } from "../../ui/general.style";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { animateSlideInFromBottom5remTargetClassName } from "../page";
import { SectionTitle } from "./SectionTitle";
import { ServiceImage, ServiceWrapper } from "./Services.style";

export function Services() {
  return (
    <ContentSection id={NavbarRoutes.Services}>
      <div className={animateSlideInFromBottom5remTargetClassName}>
        <SectionTitle title="Services" targetId={NavbarRouteLinks.Services} />
        <h1>Dedicated and value rich Data Services</h1>
      </div>
      <ResponsiveGrid columns={3}>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Machine Learning</h3>
          <p>
            We build and deploy machine learning models to solve your business
            problems.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Deep Learning</h3>
          <p>
            We perform deep learning to create unbeknown value out of your data.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Image generation</h3>
          <p>We generate images to create new and unseen content.</p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Image Recognition</h3>
          <p>We recognize images ready to serve your needs.</p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Time Series Analysis</h3>
          <p>
            We analyze time series data to predict future events and trends.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Text Analysis</h3>
          <p>
            We analyze text data to extract valuable information for your
            business.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Speech Recognition</h3>
          <p>
            We recognize speech to create new and unseen content for your
            business.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Recommendation Systems</h3>
          <p>
            We build recommendation systems to increase your business revenue.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Reinforcement Learning</h3>
          <p>
            We perform reinforcement learning to optimize your business
            processes.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Data Engineering</h3>
          <p>
            We build data pipelines and databases to store and process your
            data.
          </p>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImage src="/AI KI.png" />
          <h3>Neural Networks</h3>
          <p>
            We build neural networks to solve complex problems in your business.
          </p>
        </ServiceWrapper>
      </ResponsiveGrid>
    </ContentSection>
  );
}
