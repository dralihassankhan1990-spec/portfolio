// Project data — verified against the actual source code in Drive ("My Project for Muse").
// GitHub repo links are added as repositories are published.
export const projects = [
    {
        id: 1,
        title: 'Playwright QA Automation Demo',
        description: 'Excel-driven Playwright automation demo: 5 test scenarios (form flows, KPI report generation, sprint-board task automation) with 5/5 passing. Every run produces video evidence, screenshots, an Excel results sheet, and a narrated walkthrough video.',
        fullDescription: `Playwright QA Automation Demo
An Excel-driven Playwright test-automation demo built on public demo sites — deliberately decoupled from any work system.

What it runs (5 scenarios, 5/5 PASS):
• Form submissions with red element highlighting and slowed pacing for video clarity
• Catalog KPI report generation (PM-flavored reporting flow)
• Sprint board task automation (PM-flavored workflow)
• Data-driven cases read from test_data.xlsx — no hard-coded values

What every run produces:
• Video evidence of the browser session
• Screenshots at key steps
• results.xlsx with pass/fail per case
• A 2:51 narrated walkthrough video (25 segments: test-data sheet → per-scenario card, row, real clip, result → KPI + sprint sheets → finale)

Stack: Playwright, Python, openpyxl, Excel-driven test data.`,
        image: '/prijectmanagment.jpg',
        tags: ['Playwright', 'Python', 'QA Automation', 'Excel-Driven', 'Video Reporting'],
        align: 'left',
        liveLink: 'https://drive.google.com/file/d/1mwe1m6-G_CGW5EDao2TEsLKjx4xS79Ed/view?usp=drivesdk',
        sourceCode: null
    },
    {
        id: 2,
        title: 'FaceGuard AI - Intelligent Attendance Management System',
        description: 'Browser-based face-recognition attendance system with two modes: Detector (surveillance logging with voice confirmation) and Attendance (face registration, hands-free auto-marking with 60-second anti-spam). All processing and storage stay local in the browser — no biometric data leaves the device.',
        fullDescription: `FaceGuard AI - Intelligent Attendance Management System
Built with React, TypeScript, Vite, and face-api.js.

Modes:
• Detector Mode: logs any face in front of the camera with timestamp, photo, and spoken confirmation; live log panel.
• Attendance Mode: register users by capturing their face; "Auto Mark" identifies walk-ins hands-free and plays a welcome message (60s cooldown per person to prevent duplicate marks).

Privacy-first: all face data is stored in the browser's local storage; nothing is uploaded anywhere.
Runs as a static site — deployed on Vercel.`,
        image: '/facegurd- ATM.JPG',
        tags: ['React', 'TypeScript', 'face-api.js', 'Face Recognition', 'Privacy-First'],
        align: 'right',
        liveLink: 'https://attendance-system-chi-three.vercel.app/',
        sourceCode: null
    },
    {
        id: 3,
        title: 'GestureFlow - Hand-Gesture PowerPoint Control',
        description: 'Control PowerPoint with hand gestures via webcam: open palm starts the slideshow, fist closes it, pointing toggles the laser pointer, swipes change slides, spread/pinch zoom. A PowerShell COM bridge talks to PowerPoint on Windows — no special hardware needed.',
        fullDescription: `GestureFlow - Hand-Gesture PowerPoint Control
Built with React, TypeScript, Vite, and MediaPipe hand tracking.

Gestures:
• Open palm (hold 1s) → start slideshow
• Closed fist → close presentation
• Pointing → laser pointer toggle
• Swipe right/left → next/previous slide
• Spread / pinch → zoom in/out

A Node/PowerShell bridge (bridge.cjs + ps_handler.ps1) sends the commands to PowerPoint via COM on Windows.
Deployed on Vercel.`,
        image: '/gesture flow.JPG',
        tags: ['React', 'MediaPipe', 'Computer Vision', 'PowerPoint', 'Touchless UI'],
        align: 'left',
        liveLink: 'https://gesture-flowppt.vercel.app/',
        sourceCode: null
    },
    {
        id: 4,
        title: 'DietAndWell - Nutrition Platform',
        description: 'Nutrition platform with a NestJS backend (50+ documented API endpoints) and React frontend: food/portion library, nutrition calculators, blog system, services showcase, and e-commerce shop with user + admin authentication.',
        fullDescription: `DietAndWell - Nutrition Platform
Backend: NestJS (TypeScript), ~80% complete, 50+ REST endpoints documented in API_REFERENCE.md.
Frontend: React.

Features:
• Food library with standard serving sizes and visual portion comparisons
• Nutrition calculators for personalized dietary insights
• Blog system with admin content management
• Services showcase and e-commerce shop
• Role-based auth (users + administrators)

Full developer docs: implementation roadmap, testing guide, and codebase analysis included in the repo.`,
        image: '/dietwell.JPG',
        tags: ['React', 'NestJS', 'TypeScript', 'REST API', 'MongoDB'],
        align: 'right',
        liveLink: null,
        sourceCode: null
    },
    {
        id: 5,
        title: 'BazMeer - Services Marketplace Portal',
        description: 'Three-portal services marketplace (customer, worker/seller, admin) with 54 routes: job posting wizard, bidding with counter-offers, escrow-style payment flow (JazzCash/EasyPaisa/Card), provider search with filters, chat, wallet, verification queue, and analytics — Zustand state, mocked API layer ready for backend integration.',
        fullDescription: `BazMeer - Services Marketplace Portal
Built with React, TypeScript, Vite, Tailwind, and Zustand.

• User portal: dashboard, provider search ("Near Me" GPS), 4-step job posting wizard, bookings, chat, wallet, notifications
• Seller portal: job feed, bids, orders, gigs, earnings, documents, subscriptions
• Admin portal: users, sellers, verification queue, disputes, analytics

All data currently mocked via mockData.ts with a documented path to plug in a real backend.`,
        image: '/products1.JPG',
        tags: ['React', 'TypeScript', 'Zustand', 'Marketplace', 'Tailwind'],
        align: 'left',
        liveLink: null,
        sourceCode: null
    },
    {
        id: 6,
        title: 'PortionVision - AR Portion-Size Visualizer',
        description: 'Competition-winning food portion visualizer: 20+ foods with standard serving sizes, mental-model comparisons (3oz steak = deck of cards), and a camera AR overlay that projects a wireframe reference object onto the real world. Zero-backend — runs fully client-side with LocalStorage.',
        fullDescription: `PortionVision - AR Portion-Size Visualizer
Built with React 18 and Vite. Competition entry.

• Food library: 20+ common foods with standard serving sizes
• "Mental model" comparisons (e.g., 3oz steak = deck of cards)
• AR camera overlay: wireframe reference object projected via getUserMedia + canvas, adjustable scale slider, capture-to-log
• Portion log with timestamps
• High-contrast accessibility mode; mobile-first glassmorphism UI

Zero-backend architecture: everything runs client-side; lazy-loaded camera keeps the dashboard instant.`,
        image: '/diet2.JPG',
        tags: ['React', 'AR', 'Camera', 'Health', 'Offline-First'],
        align: 'right',
        liveLink: null,
        sourceCode: null
    },
    {
        id: 7,
        title: 'GestureTransfer - Gesture File Transfer',
        description: 'Transfer files between laptop and Android phone with hand gestures: fist selects, pointing sends, open palm cancels. Flask + MediaPipe + OpenCV server with QR-code connect, live push updates, and a transfer-history dashboard — hand-tracking models bundled so the phone works offline.',
        fullDescription: `GestureTransfer - Gesture File Transfer
Python (Flask) + MediaPipe + OpenCV.

• Fist = select file, pointing = transfer to device, open palm = cancel
• Mobile camera "accept zone": hold an open palm to download incoming files
• QR-code connect, SSE live push (/events), offer system, transfer-history dashboard
• MediaPipe models bundled in static/hands/ and served by the laptop — the phone needs no internet

Includes setup guide, test pages, and a mobile receiver web app.`,
        image: '/lab 2.JPG',
        tags: ['Python', 'Flask', 'MediaPipe', 'OpenCV', 'WebRTC'],
        align: 'left',
        liveLink: null,
        sourceCode: null
    },
    {
        id: 8,
        title: 'Lab Information System (Prototype)',
        description: 'Enterprise-style laboratory management prototype with role-based access control: sample reviewing workflows, multi-level reviewer/approver chains, secure result entry, and audit-friendly data handling. Built as a personal concept aligned with real LIMS domain knowledge.',
        fullDescription: `Lab Information System (Prototype)
Personal prototype exploring LIMS concepts: React + Node.js + PostgreSQL.

• Role-based access (admin, reviewer, approver)
• Sample lifecycle: registration → review → approval → result entry
• Multi-level approval chains for data integrity
• Designed around real laboratory workflows (informed by the PAFDA LIMS program)

Concept build — demonstrates domain understanding, not affiliated with any employer system.`,
        image: '/lab1.JPG',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Role-Based Access', 'LIMS'],
        align: 'right',
        liveLink: null,
        sourceCode: null
    }
];
