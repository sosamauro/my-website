import type { HTMLChakraProps } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

type MotionBoxProps = Omit<
  HTMLChakraProps<'div'>,
  keyof HTMLMotionProps<'div'>
> &
  HTMLMotionProps<'div'>;

const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export default MotionBox;
