import { Stack, VStack, Heading, Text } from '@chakra-ui/react';

// import SomeImage from '../components/SomeImage';
import Socials from './Socials';

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={3}
        >
          <Heading size="lg">Hi, I’m Mauro!</Heading>
        </Stack>
        <Text as="h2" lineHeight="175%">
          I’m a Full Stack Developer and advanced student of Information Systems
          Engineering based in Argentina 🇦🇷.
        </Text>
        <Socials />
      </VStack>
      {/* <SomeImage /> */}
    </Stack>
  );
};

export default Hero;
