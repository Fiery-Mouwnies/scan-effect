'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { EffectComposer } from '@react-three/postprocessing';
import { Bloom } from '@react-three/postprocessing';

export const PostProcessing = ({
  strength = 1,
  threshold = 1,
}: {
  strength?: number;
  threshold?: number;
}) => {
  return (
    <EffectComposer>
      <Bloom 
        intensity={strength}
        luminanceThreshold={threshold}
        luminanceSmoothing={0.5}
      />
    </EffectComposer>
  );
};