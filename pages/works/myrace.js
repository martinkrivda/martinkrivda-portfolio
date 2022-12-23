import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Tréninkáč">
    <Container>
      <Title>
        MyRace <Badge>2018-</Badge>
      </Title>
      <P>
        Aplikace pro organizaci a měření času běžeckých závodů. Zjednodušte si
        závod chytře s naším levným řešením.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>WWW</Meta>
          <Link href="https://myrace.martinkrivda.cz/">
            https://myrace.martinkrivda.cz/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforma</Meta>
          <span>webová aplikace</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, jQuery, MariaDB</span>
        </ListItem>
        <ListItem>
          <Meta>Příspěvky</Meta>
          {/*
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
          */}
        </ListItem>
      </List>

      <WorkImage src="/images/works/myrace_registration.png" alt="MyRace" />
    </Container>
  </Layout>
);

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Work;
