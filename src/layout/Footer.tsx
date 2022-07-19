import { Container, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      display="flex"
      // flexDir={{base: "center", md: "center"}}
      maxW="container.md"
      px={{ base: 4, lg: 0 }}
      pb={8}
    >
      <Text>
        {new Date().getFullYear()} -{' '}
        <Link href="https://maurososa.ar" isExternal rel="noopener noreferrer">
          mauro sosa 🧉
        </Link>
      </Text>
    </Container>
  );
};

export default Footer;
