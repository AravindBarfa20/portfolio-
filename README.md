<div align="center">

# ✦ Aravind T — AI Engineer & Agentic Systems Builder ✦

<p align="center">
  <img src="https://img.shields.io/badge/React-18-black?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=threedotjs" alt="Three.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-black?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-black?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

### 🌐 [Live Site: portfolio-red-two-30.vercel.app](https://portfolio-red-two-30.vercel.app)

High-performance 3D portfolio featuring GPU-accelerated interactive geometry, real-time mouse-tracking character rigging, and GSAP scroll transitions — built for production-grade visual feedback.

</div>

<br />

---

## ⚡ Technical Architecture

This application is built with a focus on real-time rendering performance, clean component boundaries, and hardware-accelerated animations:

- **Cobalt Signal Design Token Engine**: Custom CSS variable architecture featuring deep navy-black (`#0B0F19`) and electric sky blue (`#38BDF8`) accent tokens.
- **R3F & Three.js Character Rigging**: Interactive WebGL character rendering powered by `@react-three/fiber`, featuring dynamic head-tracking rotation driven by lerped mouse coordinates.
- **Physics-Based Tech Stack Visualization**: Interactive 3D tech stack physics simulation utilizing `@react-three/rapier` rigid bodies and ambient occlusion (`N8AO`).
- **Hardware-Accelerated Scroll Sequencing**: Native scroll-driven timeline transitions powered by `gsap/ScrollSmoother` and `gsap/ScrollTrigger`.
- **Bounded Flex Carousel**: Fully responsive, zero-layout-thrashing project showcase built with strict 100% width viewport bounds.

<br />

## 🧠 Featured Projects

| Project | Description | Core Stack |
| :--- | :--- | :--- |
| **SRE-Bot** | Autonomous Incident Remediation RL benchmark with cascading fault injection & adversarial signal triage. | `Python` `FastAPI` `TypeScript` `Docker` `HuggingFace` |
| **ARGUS** | Temporal Memory Engine for real-time video AI enabling cross-frame reasoning without reprocessing raw video. | `Python` `Computer Vision` `Compressed Memory` `AI` |
| **ContraCulture** | Cultural adaptation engine that rewrites landing page copy using Hofstede psychological framework scores. | `TypeScript` `Next.js` `LLM` `Hofstede Model` |

<br />

## 🛠️ Running Locally

```bash
# Clone repository
git clone https://github.com/AravindBarfa20/portfolio-.git
cd portfolio-

# Install dependencies
npm install

# Launch Vite dev server
npm run dev
```

Navigate to `http://localhost:5173` or `http://localhost:4173` (preview).

<br />

## 📐 Project Structure

```text
├── public/                    # Production assets & resume PDF
│   ├── Aravind_T_Resume.pdf   # Native vector resume document
│   ├── images/                # High-res project dashboard screenshots
│   └── models/                # 3D GLTF models & HDR lighting environment
├── src/
│   ├── components/
│   │   ├── Character/         # Three.js WebGL canvas, lighting & head tracking
│   │   ├── styles/            # Modular CSS design token stylesheets
│   │   ├── About.tsx          # Biography & summary section
│   │   ├── Career.tsx         # Interactive career & hackathon timeline
│   │   ├── Contact.tsx        # Direct contact links & education info
│   │   ├── Landing.tsx        # Hero section with single-line headline
│   │   ├── MainContainer.tsx  # Core layout wrapper & smooth scroll context
│   │   ├── Navbar.tsx         # Header navigation
│   │   ├── TechStack.tsx      # Rapier 3D physics tech stack sphere scene
│   │   ├── WhatIDo.tsx        # Agentic AI & Full-Stack engineering cards
│   │   └── Work.tsx           # Bounded flex project carousel
│   ├── context/               # Global loading context provider
│   ├── data/                  # Rigging bone definitions & static metadata
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vercel.json                # Vercel Vite build configuration
└── vite.config.ts
```

<br />

## 📜 License

This repository is open source under the [MIT License](LICENSE).
