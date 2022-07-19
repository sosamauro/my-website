import { Stack, VStack, Heading, Text } from '@chakra-ui/react';

import HeroImage from './HeroImage';
import Socials from './Socials';

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={{ base: 6, md: 0 }}
    >
      <VStack alignItems="flex-start" w="full" spacing={6}>
        <VStack
          // alignItems="center"
          // justifyContent={{ base: 'center', md: 'flex-start' }}
          // direction={{ base: 'column', md: 'row' }}
          w="full"
          // spacing={3}
        >
          <Stack
            alignItems="center"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            direction={{ base: 'column', md: 'row' }}
            w="full"
          >
            <Heading size="lg">Hi, I’m Mauro!</Heading>
          </Stack>
          <Text
            as="h2"
            lineHeight="175%"
            textAlign={{ base: 'center', md: 'left' }}
          >
            I’m a Full Stack Developer and advanced student of Information
            Systems Engineering at UTN FRCU. Based in Argentina 🇦🇷.
          </Text>
        </VStack>

        <Socials />
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
