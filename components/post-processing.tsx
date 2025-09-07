'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { BloomNode } from 'three/examples/jsm/nodes/display/BloomNode.js';
import { pass } from 'three/examples/jsm/nodes/Nodes.js';
import { WebGPUPostProcessing } from 'three/examples/jsm/renderers/webgpu/WebGPUPostProcessing.js';

import * as THREE from 'three';

export const PostProcessing = ({
  strength = 1,
  threshold = 1,
}: {
  strength?: number;
  threshold?: number;
}) => {
  const { gl, scene, camera } = useThree();

  const render = useMemo(() => {
    const postProcessing = new WebGPUPostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = new BloomNode(scenePassColor, strength, 0.5, threshold);

    const final = scenePassColor.add(bloomPass);

    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold]);

  useFrame(() => {
    render.renderAsync();
  }, 1);

  return null;
};