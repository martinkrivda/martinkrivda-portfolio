import {
  Box,
  Container,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      position="fixed"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      left={0}
      right={0}
      bottom={0}
      zIndex={1}
      as="footer"
    >
      <Container
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text align="center">
          © {new Date().getFullYear()} Martin Křivda, tvořeno s ♥ a hodně ☕.
        </Text>
        <Text fontSize="xs" align="center">
          Inspired by <Link href="https://www.craftz.dog/">TM</Link>.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
