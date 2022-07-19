import { Heading, HStack, Container, Box } from '@chakra-ui/react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      w="full"
      // mb={16}
      py={3}
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      insetX={0}
      transitionDuration="normal"
      transitionProperty="background"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        maxW="container.md"
        px={{ base: 4, lg: 0 }}
      >
        <Heading size="md">
          <Link href="https://maurososa.ar">mauro sosa</Link>
        </Heading>
        <ThemeToggle />
      </Container>
    </HStack>
  );
};

export default Header;
