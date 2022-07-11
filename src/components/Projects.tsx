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
} from '@chakra-ui/react';
import { projects } from './constants';

const Projects = () => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={6}>
      <Heading size="md">Some of my projects.</Heading>
      <List w="full" spacing={{ base: 8, md: 2 }}>
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
            <ListItem>
              <LinkBox as="article">
                <VStack
                  alignItems="stretch"
                  w="full"
                  p={{ base: 0, md: 4 }}
                  _hover={{
                    bg: 'gray.100',
                    transform: 'scale(1.025, 1.025)',
                  }}
                  _dark={{
                    _hover: {
                      bg: 'gray.700',
                    },
                  }}
                  rounded="md"
                  transitionDuration="slow"
                  transitionProperty="all"
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
                          fontSize="sm"
                          textTransform="uppercase"
                        >
                          {tag}
                        </Text>
                      ))}
                    </HStack>
                  </VStack>
                  <Text color="gray.500" fontSize="sm">
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
