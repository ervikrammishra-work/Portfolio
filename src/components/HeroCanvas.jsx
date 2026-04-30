// components/HeroCanvas.jsx
// Three.js interactive 3D background for the hero section

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThreeScene } from '../hooks/useThreeScene.js';
import { randFloat } from '../utils/helpers.js';
import styles from './HeroCanvas.module.css';

/**
 * Interactive particle field + wireframe icosahedron for the hero background.
 * Mouse movement influences camera rotation and a secondary attractor force.
 */
export default function HeroCanvas() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const objectsRef = useRef({});

  // Mouse tracking
  useEffect(() => {
    const onMove = (e) => {
      const mx = (e.clientX / window.innerWidth) * 2 - 1;
      const my = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = mx;
      mouseRef.current.targetY = my;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Three.js scene
  useThreeScene(
    mountRef,

    // Setup scene
    (scene, camera) => {
      camera.position.set(0, 0, 6);

      /* ---- Ambient + point lights ---- */
      scene.add(new THREE.AmbientLight(0xffffff, 0.3));
      const pointLight = new THREE.PointLight(0x64ffda, 2, 20);
      pointLight.position.set(3, 3, 3);
      scene.add(pointLight);
      const pointLight2 = new THREE.PointLight(0x7b61ff, 1.5, 20);
      pointLight2.position.set(-3, -2, 2);
      scene.add(pointLight2);
      objectsRef.current.pointLight = pointLight;

      /* ---- Central wireframe icosahedron ---- */
      const icoGeo = new THREE.IcosahedronGeometry(1.4, 1);
      const icoMat = new THREE.MeshStandardMaterial({
        color: 0x64ffda,
        emissive: 0x64ffda,
        emissiveIntensity: 0.15,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const ico = new THREE.Mesh(icoGeo, icoMat);
      scene.add(ico);
      objectsRef.current.ico = ico;

      /* ---- Inner solid icosahedron (faint) ---- */
      const innerGeo = new THREE.IcosahedronGeometry(1.0, 1);
      const innerMat = new THREE.MeshStandardMaterial({
        color: 0x7b61ff,
        emissive: 0x7b61ff,
        emissiveIntensity: 0.05,
        transparent: true,
        opacity: 0.08,
      });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      scene.add(inner);
      objectsRef.current.inner = inner;

      /* ---- Orbital ring ---- */
      const ringGeo = new THREE.TorusGeometry(2.2, 0.008, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x64ffda,
        transparent: true,
        opacity: 0.18,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      scene.add(ring);
      objectsRef.current.ring = ring;

      /* ---- Particle field ---- */
      const particleCount = 600;
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        const r = randFloat(3, 12);
        const theta = randFloat(0, Math.PI * 2);
        const phi = randFloat(0, Math.PI);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        sizes[i] = randFloat(0.8, 2.5);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const particleMat = new THREE.PointsMaterial({
        color: 0x8b949e,
        size: 0.04,
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);
      objectsRef.current.particles = particles;
    },

    // Animate frame
    (scene, camera, renderer, clock) => {
      const t = clock.getElapsedTime();
      const mouse = mouseRef.current;
      const objs = objectsRef.current;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate icosahedron
      if (objs.ico) {
        objs.ico.rotation.x = t * 0.18 + mouse.y * 0.3;
        objs.ico.rotation.y = t * 0.12 + mouse.x * 0.3;
      }
      if (objs.inner) {
        objs.inner.rotation.x = -t * 0.22;
        objs.inner.rotation.y = -t * 0.1;
      }

      // Rotate ring
      if (objs.ring) {
        objs.ring.rotation.z = t * 0.08;
        objs.ring.rotation.y = t * 0.05 + mouse.x * 0.2;
      }

      // Drift particles slowly
      if (objs.particles) {
        objs.particles.rotation.y = t * 0.025;
        objs.particles.rotation.x = t * 0.01;
      }

      // Subtle camera sway from mouse
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Animate point light orbit
      if (objs.pointLight) {
        objs.pointLight.position.x = Math.sin(t * 0.5) * 3;
        objs.pointLight.position.z = Math.cos(t * 0.5) * 3;
      }
    }
  );

  return <div ref={mountRef} className={styles.canvas} aria-hidden="true" />;
}
