"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 12;

    // Two fine, warm metal rims recall a serving plate around the real photograph.
    const plate = new THREE.Group();
    const outerGeometry = new THREE.TorusGeometry(3.08, 0.014, 8, 180);
    const innerGeometry = new THREE.TorusGeometry(2.78, 0.007, 6, 180);
    const outerMaterial = new THREE.MeshBasicMaterial({ color: 0xad8054, transparent: true, opacity: 0.54 });
    const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xc4a37b, transparent: true, opacity: 0.37 });
    const outer = new THREE.Mesh(outerGeometry, outerMaterial);
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    outer.scale.set(1, 1.2, 1);
    inner.scale.set(1, 1.2, 1);
    plate.add(outer, inner);
    plate.rotation.x = -0.14;
    scene.add(plate);

    let frame = 0;
    let visible = false;
    let pointerX = 0;
    let pointerY = 0;
    const clock = new THREE.Clock();
    const render = () => {
      if (!visible || document.hidden) return;
      const elapsed = clock.getElapsedTime();
      plate.rotation.y += (pointerX * 0.11 - plate.rotation.y) * 0.035;
      plate.rotation.x += (-0.14 + pointerY * 0.07 - plate.rotation.x) * 0.035;
      plate.rotation.z = Math.sin(elapsed * 0.35) * 0.018;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && visible) render();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) render();
    });
    const resizeObserver = new ResizeObserver(resize);

    resize();
    observer.observe(mount);
    resizeObserver.observe(mount);
    mount.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      outerGeometry.dispose();
      innerGeometry.dispose();
      outerMaterial.dispose();
      innerMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}
