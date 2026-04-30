// hooks/useThreeScene.js
// Encapsulates Three.js scene setup, animation loop, and cleanup

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Initializes and manages a Three.js scene inside a given canvas ref.
 * Returns refs to the scene, camera, and renderer for external use.
 *
 * @param {React.RefObject} mountRef - ref to the DOM element for mounting
 * @param {Function} setupScene - callback(scene, camera, renderer) to configure scene
 * @param {Function} onAnimate - callback(scene, camera, renderer, clock) called each frame
 * @param {Array} deps - dependency array for re-initialization
 */
export function useThreeScene(mountRef, setupScene, onAnimate, deps = []) {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Scene ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // --- User setup ---
    setupScene(scene, camera, renderer);

    // --- Animation loop ---
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const clock = clockRef.current;
      onAnimate(scene, camera, renderer, clock);
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize handler ---
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, deps);

  return { sceneRef, cameraRef, rendererRef };
}
