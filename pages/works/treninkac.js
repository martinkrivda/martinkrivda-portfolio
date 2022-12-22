import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Tréninkáč">
    <Container>
      <Title>
        Tréninkáč <Badge>2020-</Badge>
      </Title>
      <P>
        Tréninkáč je elektronický tréninkový deník, který maximálně využívá nové
        technologie a pracuje s daty z chytrých hodinek — vedení deníku je tak
        mnohem jednodušší a pohodlnější.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>WWW</Meta>
          <Link href="https://treninkac.orientacnisporty.cz/landing">
            https://treninkac.orientacnisporty.cz <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforma</Meta>
          <span>webová aplikace</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, React, MariaDB</span>
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

      <WorkImage src="/images/works/treninkac.png" alt="Tréninkáč" />
    </Container>
  </Layout>
);

export default Work;
