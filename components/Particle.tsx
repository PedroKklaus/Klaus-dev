"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const options: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 160, density: { enable: true, width: 1500, height: 1500 } },
    links: { enable: false },
    move: { enable: true, direction: "right", speed: 0.05 },
    size: { value: 1 },
    opacity: { value: { min: 0.05, max: 1 }, animation: { enable: true, speed: 1 } },
  },
  interactivity: {
    events: { onClick: { enable: true, mode: "push" } },
    modes: { push: { quantity: 1 } },
  },
  detectRetina: true,
};

let engineReady: Promise<void> | null = null;

function Particle() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    engineReady ??= initParticlesEngine(loadSlim);
    engineReady.then(() => setReady(true));
  }, []);

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} />;
}

export default Particle;
