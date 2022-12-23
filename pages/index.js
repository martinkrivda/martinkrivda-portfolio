import NextLink from 'next/link';
import {
  Box,
  Button,
  Badge,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
const Page = () => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          {t('intro')}
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Martin Křivda
            </Heading>
            <p>
              {t('digital-craftsman')} ( {t('developer')} / {t('data-engineer')}{' '}
              / {t('photographer')} )
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.100.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/martin.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t('work')}
          </Heading>
          <BioYear>2016 - {t('present')} | ISS Europe spol. s r.o.</BioYear>
          <Paragraph>{t('iss-europe')}</Paragraph>
          <Link href="http://www.iss-europe.eu/"> {t('company-website')}</Link>
          <Heading as="h3" variant="section-title">
            {t('personal-projects')}
          </Heading>
          <BioYear>
            2020 - {t('present')} | {t('electronic-training-log')}
          </BioYear>
          <Paragraph>{t('about-training-log')}</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t('my-portfolio')}
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('education')}
          </Heading>
          <BioSection>
            <BioYear>2019 - 2021</BioYear>
            <Text as="b">{t('vse-master')} (Ing.)</Text> <br />
            <Text fontSize="xs" pl="8.8em">
              {t('vse')}
            </Text>
            <Link href="https://vskp.vse.cz/83131_vyvoj-a-implementace-aplikace-na-zpracovani-sportovnich-treninku">
              <Button size="xs" variant="outline" colorScheme="blue">
                {t('diploma-thesis')}
              </Button>
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2015 - 2019</BioYear>
            <Text as="b">{t('vse-bachelor')} (Bc.)</Text>
            <Text fontSize="xs" pl="8.8em">
              {t('vse')}
            </Text>
            <Link href="https://vskp.vse.cz/76811_analyza-moznosti-automatickeho-mereni-bezeckych-zavodu">
              <Button size="xs" variant="outline" colorScheme="blue">
                {t('bachelor-thesis')}
              </Button>
            </Link>
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('skills')}
          </Heading>
          <Badge m={1}>JavaScript</Badge>
          <Badge m={1}>NodeJS</Badge>
          <Badge m={1}>PHP</Badge>
          <Badge m={1}>T-SQL</Badge>
          <Badge m={1}>MariaDB</Badge>
          <Badge m={1}>SQL Server</Badge>
          <Badge m={1}>REST API</Badge>
          <Badge m={1}>Sequelize</Badge>
          <Badge m={1}>Git</Badge>
          <Badge m={1}>UML</Badge>
          <Badge m={1}>Jira</Badge>
          <Badge m={1}>HTML</Badge>
          <Badge m={1}>XML</Badge>
          <Badge m={1}>React</Badge>
          <Badge m={1}>Laravel</Badge>
          <Badge m={1}>MS Project</Badge>
          <Badge m={1}>BPMN</Badge>
          <Badge m={1}>PowerBI</Badge>
          <Badge m={1}>Adobe Illustrator</Badge>
          <Badge m={1}>Adobe XD</Badge>
          <Badge m={1}>Adobe Photoshop</Badge>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('i-love')} ♥
          </Heading>
          <Paragraph>
            {t('orienteering')} 🌲🏃💨 / {t('xc-skiing')} ⛷
          </Paragraph>
          <Paragraph>{t('multimedia')} 📷🎥🎨</Paragraph>
          <Paragraph>{t('travelling')} 🌍🏔</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('on-web')}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.github.com/martinkrivda" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @martinkrivda
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/martini.kri"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @martini.kri
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Page;
