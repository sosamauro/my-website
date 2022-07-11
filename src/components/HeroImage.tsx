import { Box, AspectRatio, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <Flex position="relative" justify="center" pb={4}>
      <AspectRatio as="figure" flexShrink={0} w={60} h={60} ratio={1}>
        <Box overflow="hidden" rounded="full">
          <Image
            src="/trabajando-con-mates.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
