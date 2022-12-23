import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { WorkGridItem } from '../components/grid-item';
import thumbTreninkac from '../public/images/works/treninkac_01.png';
import thumbMyRace from '../public/images/works/myrace_01.png';
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg';
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png';
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png';
// import thumbStyly from '../public/images/works/styly_eyecatch.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Portfolio
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="treninkac"
              title="Tréninkáč"
              thumbnail={thumbTreninkac}
            >
              Tréninkáč je elektronický tréninkový deník, který maximálně
              využívá nové technologie a pracuje s daty z chytrých hodinek —
              vedení deníku je tak mnohem jednodušší a pohodlnější.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="myrace" title="MyRace" thumbnail={thumbMyRace}>
              Aplikace MyRace vznikla primárně pro usnadnění organizace
              sportovních událostí. Primárně zastává funkce časomíry, ale umí si
              také poradit s online registrací, evidencí přijatých plateb a
              živého výsledkového servisu.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        {/*
          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={thumbFourPainters}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Spolupráce
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="modetokyo"
              thumbnail={thumbModeTokyo}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
              A VR Creative tools for fashion brands
            </WorkGridItem>
          </Section>
        </SimpleGrid>
  */}
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Works;
