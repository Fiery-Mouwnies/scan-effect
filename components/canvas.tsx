'use client';

import * as THREE from 'three';
import { WebGPURenderer } from 'three/examples/jsm/renderers/webgpu/WebGPURenderer.js';
import { Canvas, CanvasProps, extend } from '@react-three/fiber';

extend(THREE as any);

export const WebGPUCanvas = (props: CanvasProps) => {
  return (
    <Canvas
      {...props}
      flat
      gl={async (props) => {
        const renderer = new WebGPURenderer(props as any);
        await renderer.init();
        return renderer;
      }}
    >
      {props.children}
    </Canvas>
  );
};