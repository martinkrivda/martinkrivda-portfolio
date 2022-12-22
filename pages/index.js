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
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
const Page = () => {
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
          Ahoj, jsem full-stack vývojář na volné noze.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Martin Křivda
            </Heading>
            <p>Digitální kutil ( Vývojář / Designer / Fotograf )</p>
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
            Work
          </Heading>
          <BioYear>2016 - dosud | ISS Europe spol. s r.o.</BioYear>
          <Paragraph>
            S ISS Europe spol. s r.o. jsem navázal externí spolupráci již při
            studiu na Vysoké škole. Pomáhal jsem s vývojem a správou
            softwarových produktů ECM pro velké a střední společnosti.
          </Paragraph>
          <Link href="http://www.iss-europe.eu/">Web společnosti</Link>
          <Heading as="h3" variant="section-title">
            Personal projects
          </Heading>
          <BioYear>2020 - dosud | Elektronický tréninkový deník</BioYear>
          <Paragraph>
            Myšlenka elektronického tréninkového deníku pro orientační sporty
            přišla od šéftrenéra juniorské reprezentace orientačního běhu, Pavla
            Košárka, na podzim 2019. V rámci mé diplomové práce jsem pak přišel
            s celým konceptem a na konci roku 2020 byla aplikace vypuštěna do
            světa.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Moje portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Vzdělání
          </Heading>
          <BioSection>
            <BioYear>2019 - 2021</BioYear>
            <Text as="b">Informační systémy a technologie (Ing.)</Text> <br />
            <Text fontSize="xs" pl="8.8em">
              Vysoká škola ekonomická v Praze
            </Text>
            <Link href="https://vskp.vse.cz/83131_vyvoj-a-implementace-aplikace-na-zpracovani-sportovnich-treninku">
              <Button size="xs" variant="outline" colorScheme="blue">
                Diplomová práce
              </Button>
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2015 - 2019</BioYear>
            <Text as="b">Aplikovaná informatika (Bc.)</Text>
            <Text fontSize="xs" pl="8.8em">
              Vysoká škola ekonomická v Praze
            </Text>
            <Link href="https://vskp.vse.cz/76811_analyza-moznosti-automatickeho-mereni-bezeckych-zavodu">
              <Button size="xs" variant="outline" colorScheme="blue">
                Bakalářská práce
              </Button>
            </Link>
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Dovednosti
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
            I ♥
          </Heading>
          <Paragraph>Orientační běh 🌲🏃💨 / běžky ⛷</Paragraph>
          <Paragraph>Multimédia 📷🎥🎨</Paragraph>
          <Paragraph>Cestování, hory, příroda 🌍🏔</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Na sítích
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

export default Page;
