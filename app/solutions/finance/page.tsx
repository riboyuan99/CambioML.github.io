'use client';

import PageHero from '@/app/components/hero/PageHero';
import Section from '@/app/components/Section';
import useDemoModal from '@/app/hooks/useDemoModal';
import Feature from '@/app/components/feature/Feature';
import DemoFeature from '@/app/components/feature/DemoFeature';

const FintechSolutionsPage = () => {
  const demoModal = useDemoModal();
  return (
    <div className="pb-10 w-full h-full flex flex-col justify-center items-center">
      <PageHero
        title="Your Customized AI Assistant to Beat Wall Street"
        description={`Find mispriced equity faster.
        Explain your investment decisions with real data.
        Fully own and control your proprietary AI agent.`}
        button={{ label: 'Book a Demo', onClick: demoModal.onOpen }}
      />
      <div className="flex flex-col gap-10 items-center justify-center py-20">
        <Section
          title={`Interested in using LLMs to boost your
          portfolio performance?`}
          paragraphs={[
            '• Do you want to extract trading signals from unstructured data 10x faster?',
            '• Do you need a personalized AI explainer to interpret the trading signals?',
            '• Are you concerned about information leak from using public LLM APIs?',
          ]}
          center
        />
        <Feature title="Access to unknown insights from multi-source data" center>
          <DemoFeature
            imageTitle="Your Corporate Laptop"
            image="/images/graphics/cambio-flow-portfolio.png"
            alt="Cambio Flow Portfolio"
            text={`• Reduce time spent on data cleaning by up to 90%
            • Access to 10x more financial insights from multiple sources
            • Fully own and control your proprietary AI agent`}
          />
        </Feature>
        <Feature title="Interpret your investment decisions with evidence" center>
          <DemoFeature
            demo="/images/pykoi/pykoi-rag-chatbot-modify.gif"
            alt="Cambio Flow Portfolio"
            text={`• Back up your own investment decisions with real data
            • Write your economist views with your own style
            • Fully own and control your proprietary AI agent`}
          />
        </Feature>
      </div>
    </div>
  );
};

export default FintechSolutionsPage;
