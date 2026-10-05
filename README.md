# Autohex — Automotive Electronics & Module Programming

Modern high-performance website and digital growth platform for **Autohex Automotive Electronics Repair & Module Programming**, based on C1 Road, Abilay Sur, Oton, Iloilo, Philippines.

## 🚀 Live Demo & Production
- **Local Dev**: [http://localhost:3000](http://localhost:3000)
- **Framework**: Vite + React 19 + TypeScript + Tailwind CSS
- **Design System**: Industrial high-contrast dark theme with red `#e10600` accents, Anton display typography, and noise background texture.

## 🌟 Features & Structure

### Comprehensive 20-Page SEO Architecture
Sourced directly from the official **Autohex Iloilo SEO Content Workbook**:
- **Homepage (`/`)**: Diagnosis-led positioning, 24/7 emergency service, core service groups, 4-step workflow, verified customer reviews, and interactive quote form.
- **10 Dedicated Service Pages (`/services/*`)**:
  - `ecu-remapping`: ECU Remapping & Chip Tuning
  - `ecu-repair`: ECU Repair, Cloning & Board-Level Fixes
  - `automotive-diagnostics`: Computer Diagnostics & Live Data Coding
  - `dpf-egr-adblue`: DPF, EGR & AdBlue Permanent Solutions
  - `module-repair-programming`: Module Repair (ABS, BCM, TCM, EPS, Airbag, Cluster)
  - `immo-dtc-solutions`: Immobilizer & Diagnostic Trouble Code Solutions
  - `car-repair`: Car Repair & Mechanical Care
  - `auto-electrical-repair`: Auto Electrical Repair & Wiring Harness Diagnostics
  - `diesel-engine-diagnostics`: Diesel Common Rail & Injector Diagnostics
  - `preventive-maintenance`: Scheduled Preventive Maintenance & Fluid Care
- **9 Location Landing Pages (`/locations/*`)**:
  - Programmatic local SEO guides for **Oton** (Base), **Leganes**, **Pavia**, **Tigbauan**, **Guimbal**, **San Miguel**, **Santa Barbara**, **Iloilo City**, and **Mandurriao**.
- **Interactive Navigation**:
  - Desktop mega dropdowns for **Services** (split by Electronics & Mechanical) and **Areas We Serve** (with town route badges).
  - Mobile slide-out drawer with accordion expanders.
- **Proposal Assets**:
  - Complete printable proposal HTML & PDF in `/proposal`.

## 🛠️ Development & Deployment

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Typecheck and build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment on Vercel
Configured with `vercel.json` for SPA routing and instant global edge deployment.
