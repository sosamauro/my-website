// import { Box, AspectRatio, Flex } from '@chakra-ui/react';
// import Image from 'next/image';

// const HeroImage = () => {
//   return (
//     <Flex position="relative" justify="center" pb={4}>
//       <AspectRatio as="figure" flexShrink={0} w={60} h={60} ratio={1}>
//         <Box overflow="hidden" rounded="full">
//           <Image
//             src="/trabajando-con-mates.svg"
//             width={400}
//             height={400}
//             alt="Launching Illustration"
//           />
//         </Box>
//       </AspectRatio>
//     </Flex>
//   );
// };

// export default HeroImage;

import { Box, Flex, Link, Text, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

import MotionBox from './MotionBox';

const HeroImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        marginY={8}
        minWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/trabajando-con-mates.svg"
          width={400}
          height={400}
          alt="Trabajando con mates"
        />
      </MotionBox>
      {/* <Text textAlign="center" fontSize="xs">
        <Link
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </Link>
      </Text> */}

      {/* <Flex marginY={4} justifyContent="center" alignItems="center">
        <HelperImage src={`/nextjs-icon-${colorMode}.svg`} label="NextJS" />
        <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
        <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
      </Flex> */}
    </Box>
  );
};

export default HeroImage;
