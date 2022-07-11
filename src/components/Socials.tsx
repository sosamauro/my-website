import { HStack, Link, Icon } from '@chakra-ui/react';

import { GrMail } from 'react-icons/gr';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <HStack
      as="section"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={10}
    >
      <Link
        href="mailto:mauro4sosa@gmail.com"
        isExternal
        _hover={{ transform: 'scale(1.2, 1.2)' }}
        transitionDuration="slow"
        transitionProperty="transform"
        transitionTimingFunction="ease-out"
      >
        <Icon as={GrMail} boxSize={30} />
      </Link>
      <Link
        href="https://github.com/sosamauro"
        isExternal
        _hover={{ transform: 'scale(1.2, 1.2)' }}
        transitionDuration="slow"
        transitionProperty="transform"
        transitionTimingFunction="ease-out"
      >
        <Icon as={FaGithub} boxSize={30} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mauro-sosa/"
        isExternal
        _hover={{ transform: 'scale(1.2, 1.2)' }}
        transitionDuration="slow"
        transitionProperty="transform"
        transitionTimingFunction="ease-out"
      >
        <Icon as={FaLinkedin} boxSize={30} />
      </Link>
    </HStack>
  );
};

export default Socials;
