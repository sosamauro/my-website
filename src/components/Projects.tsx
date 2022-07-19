import Link from 'next/link';
import {
  VStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  HStack,
  List,
  ListItem,
  Box,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { projects } from './constants';

const Projects = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={6}>
      <Heading size="md">Some of my projects.</Heading>
      <List w="full" spacing={4}>
        {projects.map(
          ({
            title,
            description,
            tags,
            link,
            id,
          }: {
            title: string;
            description: string;
            tags: any;
            link: any;
            id: number;
          }) => (
            <ListItem key={id}>
              <LinkBox as="article">
                <VStack
                  alignItems="stretch"
                  direction={{ base: 'column', md: 'row' }}
                  w="full"
                  p={4}
                  bg={bg}
                  _hover={{ transform: 'scale(1.025, 1.025)' }}
                  rounded="md"
                  spacing={{ base: 2, md: 3 }}
                  transitionDuration="slow"
                  transitionProperty="transform"
                  transitionTimingFunction="ease-out"
                >
                  <VStack alignItems="flex-start">
                    <Link href={link} passHref>
                      <LinkOverlay>
                        <Heading size="md">{title}</Heading>
                      </LinkOverlay>
                    </Link>
                    <HStack spacing={3}>
                      {tags.map((tag: string, i: number) => (
                        <Text
                          key={i}
                          color="gray.500"
                          fontSize={{ base: 'sm', md: 'md' }}
                          textTransform="uppercase"
                          fontWeight="semibold"
                        >
                          {tag}
                        </Text>
                      ))}
                    </HStack>
                  </VStack>
                  <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>
                    {description}
                  </Text>
                </VStack>
              </LinkBox>
            </ListItem>
          )
        )}
      </List>
    </VStack>
  );
};

export default Projects;
