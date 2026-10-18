// Project data — verified against the actual source code.
// Categories: 'ai' (AI & Computer Vision), 'web' (Web Platforms & Systems), 'automation' (QA & Automation)
// GitHub repo links: 9 of 10 live (dietandwell repo exists, code push deferred by owner).

export const projectCategories = [
    { id: 'ai', label: 'AI & Computer Vision', icon: '🧠', blurb: 'Face recognition, gesture control, and vision-powered apps that run in the browser.' },
    { id: 'web', label: 'Web Platforms & Systems', icon: '🌐', blurb: 'Full-stack platforms — marketplaces, nutrition, food-safety systems, and LIMS concepts.' },
    { id: 'automation', label: 'QA & Automation', icon: '⚙️', blurb: 'Test automation frameworks and office productivity tools that remove repetitive work.' },
];

// NOTE 2026-10-18: ids 19,22,23,24,25,26 have sourceCode:null until Ali creates those GitHub repos.
// Restore to https://github.com/dralihassankhan1990-spec/<repo> when ready.
export const projects = [
    {
        id: 1,
        title: 'Playwright QA Automation Demo',
        category: 'automation',
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
        image: '/projects/playwright-qa.jpg',
        tags: ['Playwright', 'Python', 'QA Automation', 'Excel-Driven', 'Video Reporting'],
        liveLink: 'https://drive.google.com/file/d/1mwe1m6-G_CGW5EDao2TEsLKjx4xS79Ed/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/playwright-qa-automation-demo'
    },
    {
        id: 2,
        title: 'FaceGuard AI - Intelligent Attendance Management System',
        category: 'ai',
        description: 'Browser-based face-recognition attendance system with two modes: Detector (surveillance logging with voice confirmation) and Attendance (face registration, hands-free auto-marking with 60-second anti-spam). All processing and storage stay local in the browser — no biometric data leaves the device.',
        fullDescription: `FaceGuard AI - Intelligent Attendance Management System
Built with React, TypeScript, Vite, and face-api.js.

Modes:
• Detector Mode: logs any face in front of the camera with timestamp, photo, and spoken confirmation; live log panel.
• Attendance Mode: register users by capturing their face; "Auto Mark" identifies walk-ins hands-free and plays a welcome message (60s cooldown per person to prevent duplicate marks).

Privacy-first: all face data is stored in the browser's local storage; nothing is uploaded anywhere.
Runs as a static site — deployed on Vercel.`,
        image: '/projects/faceguard-ai.jpg',
        tags: ['React', 'TypeScript', 'face-api.js', 'Face Recognition', 'Privacy-First'],
        liveLink: 'https://attendance-system-chi-three.vercel.app/',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/faceguard-ai'
    },
    {
        id: 3,
        title: 'GestureFlow - Hand-Gesture PowerPoint Control',
        category: 'ai',
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
        image: '/projects/gestureflow.jpg',
        tags: ['React', 'MediaPipe', 'Computer Vision', 'PowerPoint', 'Touchless UI'],
        liveLink: 'https://gesture-flowppt.vercel.app/',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/gestureflow'
    },
    {
        id: 4,
        title: 'DietAndWell - Nutrition Platform',
        category: 'web',
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
        image: '/projects/dietandwell.jpg',
        tags: ['React', 'NestJS', 'TypeScript', 'REST API', 'MongoDB'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/dietandwell'
    },
    {
        id: 5,
        title: 'BazMeer - Services Marketplace Portal',
        category: 'web',
        description: 'Three-portal services marketplace (customer, worker/seller, admin) with 54 routes: job posting wizard, bidding with counter-offers, escrow-style payment flow (JazzCash/EasyPaisa/Card), provider search with filters, chat, wallet, verification queue, and analytics — Zustand state, mocked API layer ready for backend integration.',
        fullDescription: `BazMeer - Services Marketplace Portal
Built with React, TypeScript, Vite, Tailwind, and Zustand.

• User portal: dashboard, provider search ("Near Me" GPS), 4-step job posting wizard, bookings, chat, wallet, notifications
• Seller portal: job feed, bids, orders, gigs, earnings, documents, subscriptions
• Admin portal: users, sellers, verification queue, disputes, analytics

All data currently mocked via mockData.ts with a documented path to plug in a real backend.`,
        image: '/projects/bazmeer.jpg',
        tags: ['React', 'TypeScript', 'Zustand', 'Marketplace', 'Tailwind'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/bazmeer-webportal'
    },
    {
        id: 6,
        title: 'PortionVision - AR Portion-Size Visualizer',
        category: 'ai',
        description: 'Competition-winning food portion visualizer: 20+ foods with standard serving sizes, mental-model comparisons (3oz steak = deck of cards), and a camera AR overlay that projects a wireframe reference object onto the real world. Zero-backend — runs fully client-side with LocalStorage.',
        fullDescription: `PortionVision - AR Portion-Size Visualizer
Built with React 18 and Vite. Competition entry.

• Food library: 20+ common foods with standard serving sizes
• "Mental model" comparisons (e.g., 3oz steak = deck of cards)
• AR camera overlay: wireframe reference object projected via getUserMedia + canvas, adjustable scale slider, capture-to-log
• Portion log with timestamps
• High-contrast accessibility mode; mobile-first glassmorphism UI

Zero-backend architecture: everything runs client-side; lazy-loaded camera keeps the dashboard instant.`,
        image: '/projects/portionvision.jpg',
        tags: ['React', 'AR', 'Camera', 'Health', 'Offline-First'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/portionvision'
    },
    {
        id: 7,
        title: 'GestureTransfer - Gesture File Transfer',
        category: 'ai',
        description: 'Transfer files between laptop and Android phone with hand gestures: fist selects, pointing sends, open palm cancels. Flask + MediaPipe + OpenCV server with QR-code connect, live push updates, and a transfer-history dashboard — hand-tracking models bundled so the phone works offline.',
        fullDescription: `GestureTransfer - Gesture File Transfer
Python (Flask) + MediaPipe + OpenCV.

• Fist = select file, pointing = transfer to device, open palm = cancel
• Mobile camera "accept zone": hold an open palm to download incoming files
• QR-code connect, SSE live push (/events), offer system, transfer-history dashboard
• MediaPipe models bundled in static/hands/ and served by the laptop — the phone needs no internet

Includes setup guide, test pages, and a mobile receiver web app.`,
        image: '/projects/gesturetransfer.jpg',
        tags: ['Python', 'Flask', 'MediaPipe', 'OpenCV', 'WebRTC'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/gesturetransfer'
    },
    {
        id: 8,
        title: 'Lab Information System (Prototype)',
        category: 'web',
        description: 'Enterprise-style laboratory management prototype with role-based access control: sample reviewing workflows, multi-level reviewer/approver chains, secure result entry, and audit-friendly data handling. Built as a personal concept aligned with real LIMS domain knowledge.',
        fullDescription: `Lab Information System (Prototype)
Personal prototype exploring LIMS concepts: React + Node.js + PostgreSQL.

• Role-based access (admin, reviewer, approver)
• Sample lifecycle: registration → review → approval → result entry
• Multi-level approval chains for data integrity
• Designed around real laboratory workflows (informed by the PAFDA LIMS program)

Concept build — demonstrates domain understanding, not affiliated with any employer system.`,
        image: '/projects/lims.jpg',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Role-Based Access', 'LIMS'],
        liveLink: null,
        sourceCode: null
    },
    {
        id: 9,
        title: 'Veritas HACCP - Food Safety Compliance Dashboard',
        category: 'web',
        description: 'Interactive HACCP compliance dashboard: 12-step implementation workflow, full Principle-5 deviation handling, first-run guided tour, and a server-backed API. Built with React, TypeScript, and Vite.',
        fullDescription: `Veritas HACCP - Food Safety Compliance Dashboard
Built with React, TypeScript, Vite, and Express.

• 12-step HACCP implementation workflow with progress tracking
• Complete Principle-5 deviation workflow (corrective actions)
• First-run guided tour, replayable from the header
• Server-backed API with SQLite persistence
• Demo guide included for a 5-minute walkthrough`,
        image: '/projects/haccp.jpg',
        tags: ['React', 'TypeScript', 'HACCP', 'Food Safety', 'Dashboard'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/HACCP'
    },
    {
        id: 10,
        title: 'RecallGuard - Food Recall & Traceability System',
        category: 'web',
        description: 'Digital recall and traceability system: one-click hero demo (92/CRITICAL/HOLD scenario), guided tour, empty states, and a full test suite (13/13 passing). Express + SQLite backend with a React frontend.',
        fullDescription: `RecallGuard - Food Recall & Traceability System
Backend: Express + SQLite. Frontend: React + Vite.

• One-click "Run hero demo" mode (92/CRITICAL/HOLD scenario)
• Guided tour and empty states for first-time users
• Full test suite: 13/13 passing
• Traceability records, recall workflows, and reporting`,
        image: '/projects/recallguard.jpg',
        tags: ['React', 'Node.js', 'SQLite', 'Traceability', 'Food Safety'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/recallguard'
    },
    {
        id: 11,
        title: 'AuditPro - Food-Safety Audit Management (Demo)',
        category: 'web',
        description: 'Demo web app for planning, running, scoring, and closing food-safety audits — checkpoint verdicts, an auto-derived findings register, and a CAPA workflow through to verified closure. Offline-first with localStorage.',
        fullDescription: `AuditPro - Food-Safety Audit Management (Demo)
Built with React and Vite. Zero-backend — all state in localStorage.

• Audit planning: templates, sites, auditors, progress and scores
• Findings register auto-derived from checkpoint verdicts (Minor NC and above)
• CAPA workflow: root cause → corrective action → owner → due date → verification → closure
• Dashboard: compliance gauges, findings-by-severity, repeat-finding analysis

Demonstration prototype — not a certified audit system.`,
        image: '/projects/auditpro.jpg',
        tags: ['React', 'Vite', 'Audits', 'CAPA', 'Offline-First'],
        liveLink: null,
        sourceCode: 'https://github.com/dralihassankhan1990-spec/auditpro'
    },
    {
        id: 13,
        title: 'n8n Local Workflows',
        category: 'automation',
        description: 'Two self-hosted n8n workflows for PM teams: a daily standup digest that groups tasks by owner (Done yesterday / Planned today / Blockers) and a file-intake organizer — each shipping both a workflow.json and an identical Python runner.',
        fullDescription: `n8n Local Workflows
Two production-shaped n8n workflows a PM team can run on its own machine — no external services, no accounts, no secrets. Each ships two execution paths with identical logic: workflow.json for self-hosted n8n (standard local nodes only) and a Python runner for any machine.

1. Daily Standup Digest — reads tasks.json, groups by owner, builds Done yesterday / Planned today / Blockers per person plus a team blocker roll-up. Runs weekdays 08:30; writes standup-digest-YYYY-MM-DD.md + runs.log. Verified: 14 tasks, 3 members, 2 blockers.

2. File Intake Organizer — watches an intake folder and files incoming documents into the right project folders automatically.

All demo data fictional. TEST-REPORT.md and demo videos included.`,
        image: '/projects/auto/n8n-local-workflows.jpg',
        tags: ['n8n', 'Workflow Automation', 'Python', 'Scheduling', 'Markdown'],
        liveLink: 'https://drive.google.com/file/d/1LerlegDxudK7x9xNUaEhdI89Qp1ZUepu/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/n8n-local-workflows'
    },
    {
        id: 14,
        title: 'Excel VBA Automation',
        category: 'automation',
        description: 'Two spreadsheet automations that remove the weekly grind: a one-click VBA task dashboard (KPI tiles, overdue in red, due-in-7-days in amber) and a Python weekly-report generator — macro execution proven via the LibreOffice UNO bridge.',
        fullDescription: `Excel VBA Automation
Two automations for the weekly spreadsheet grind. 100% local, fictional demo data.

1. Task Dashboard (VBA) — the BuildDashboard macro turns a flat Task Export sheet into a formatted Dashboard: KPI tiles (total / completed / in-progress / overdue / completion %), tasks by owner, tasks by status, overdue in red, due-in-7-days in amber. Executed for real via the LibreOffice UNO bridge; VBA project validated byte-identical with oletools.oleVBA; KPIs (40 / 12 / 14 / 9 / 30%) hand-verified.

2. Weekly Report Generator (Python + openpyxl) — builds the weekly status pack from tracker exports automatically.

Deliverables: .xlsm workbooks, importable .bas sources, build scripts, TEST-REPORT.md, demo videos.`,
        image: '/projects/auto/excel-vba-automation.jpg',
        tags: ['Excel VBA', 'Python', 'Dashboards', 'openpyxl', 'Reporting'],
        liveLink: 'https://drive.google.com/file/d/1psyfwtIVPD7vWsx5W-qi4qeCjZLWxvxD/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/excel-vba-automation'
    },
    {
        id: 15,
        title: 'Python Desktop Automation',
        category: 'automation',
        description: 'Two zero-dependency desktop automations: a folder watcher that version-backs-up every file change (keeping the last 5 versions with a change log) and an Excel-to-PDF status report generator with computed KPIs and RAG badges.',
        fullDescription: `Python Desktop Automation
Two production-ready desktop automations. 100% local, fictional demo data.

1. Folder Watcher & Auto-Backup — polls a shared folder; on any new or changed file saves a timestamped versioned copy, keeps the last 5 versions per file (auto-prunes older), logs every event to change-log.csv, and generates a daily backup-report.html. Python standard library only — zero dependencies. Verified: 6/6 demo events detected, retention pruning proven.

2. PDF Status Report Generator — turns one Excel workbook into polished multi-page PDFs, one per project: cover page with RAG badge, KPI summary (completion %, budget used, milestones, open risks), milestone timeline, risks & issues (LxI rating), next steps. KPIs and RAG are computed, never typed. Built with fpdf2.

TEST-REPORT.md and demo videos included.`,
        image: '/projects/auto/python-desktop-automation.jpg',
        tags: ['Python', 'Desktop Automation', 'PDF Reports', 'File Watching', 'fpdf2'],
        liveLink: 'https://drive.google.com/file/d/114wadrzGIWkfEXca-qobQjqxcSOAi1FI/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/python-desktop-automation'
    },
    {
        id: 16,
        title: 'Auto Trigger Scheduled',
        category: 'automation',
        description: 'Self-running scheduled automations: a deadline escalation watcher (Critical / High / Medium / Watch tiers, idempotent daily log) and a risk-register auto-scorer (Probability x Impact, RAG bands, 5x5 heatmap) — with Task Scheduler XMLs and cron lines included.',
        fullDescription: `Auto Trigger Scheduled
Automations that run themselves on a schedule — the team gets its morning brief and weekly risk picture without anyone remembering to produce them. 100% local, fictional data.

1. Deadline Escalation Watcher — reads tasks.csv every morning (daily 07:00 via Task Scheduler XML / cron) and flags overdue / due-soon tasks with severity tiers. Produces a styled HTML report, a colour-coded Excel report, and an append-only escalation log that is idempotent — re-running the same day adds zero duplicates. Sample: 30 tasks → 25 escalations (8 Critical, 7 High, 6 Medium, 4 Watch).

2. Risk Register Auto-Scorer — reads risk-register.csv every Monday 09:00, computes exposure = Probability x Impact, assigns RAG bands (Red >= 15, Amber 8-14, Green < 8), draws a 5x5 heatmap with risk IDs plotted in their cells, and produces an HTML report + scored Excel register. Sample: 15 risks → 4 Red, 9 Amber, 2 Green.

Demo videos included.`,
        image: '/projects/auto/auto-trigger-scheduled.jpg',
        tags: ['Python', 'Task Scheduler', 'Risk Management', 'Escalation', 'Excel'],
        liveLink: 'https://drive.google.com/file/d/1i0x5YOQJwqtpFrA8SW8uTkUAVWdt1618/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/auto-trigger-scheduled'
    },
    {
        id: 17,
        title: 'n8n Task Escalation Flow',
        category: 'automation',
        description: 'A daily n8n workflow that reads tasks.csv, classifies every open task into Critical / High / Medium severity tiers, and writes a dated escalation report plus an idempotent append-only escalation log.',
        fullDescription: `n8n Task Escalation Flow
Project managers lose hours scanning task lists for what's overdue and what needs escalating. This 8-node n8n workflow does it daily (cron 0 7 * * *) — 100% local, fictional data.

Severity rules: Critical = overdue > 7 days or blocks a milestone; High = overdue <= 7 days; Medium = due within 48 hours or this week. Done and Cancelled tasks are excluded.

Outputs: escalation-report-YYYY-MM-DD.md (severity summary + full flagged-task table) and escalation-log.csv (append-only; re-running the same day adds nothing).

Ships workflow.json, sample tasks.csv, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/n8n-task-escalation.jpg',
        tags: ['n8n', 'Escalation', 'Scheduling', 'CSV', 'Markdown'],
        liveLink: 'https://drive.google.com/file/d/1I3RDD_HtLDeUHaZZWW5-zfA7vsy99c8c/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/n8n-task-escalation-flow'
    },
    {
        id: 18,
        title: 'n8n Meeting Notes Processor',
        category: 'automation',
        description: 'Turns raw meeting notes into structured outputs: a daily n8n workflow that extracts ACTION / TODO / DECISION lines from inbox text files into MOM documents and an actions.csv tracker with owners and due dates.',
        fullDescription: `n8n Meeting Notes Processor
Meeting notes pile up as text files and the action items buried in them get forgotten. This 7-node n8n workflow (daily 08:00) turns them into structured outputs — 100% local, no AI, fictional data.

Extraction: lines starting with ACTION:, TODO: or DECISION: are pulled out; owners and due dates are parsed from (owner: Name, due: YYYY-MM-DD) and @Name due YYYY-MM-DD formats.

Outputs: MOM-YYYY-MM-DD.md (decisions list + action-items table) and actions.csv (source_file, type, action, owner, due_date). Processed notes stay in inbox/; move them to archive/ after a run.

Ships workflow.json, sample notes, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/n8n-meeting-notes.jpg',
        tags: ['n8n', 'Meeting Notes', 'MOM', 'Action Tracking', 'Text Processing'],
        liveLink: 'https://drive.google.com/file/d/1IL3Iv1HrahJSJZBEmQo34DoIQUqEmxXe/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/n8n-meeting-notes-processor'
    },
    {
        id: 19,
        title: 'n8n Backup Health Monitor',
        category: 'automation',
        description: 'A daily n8n workflow that audits every backup directory — measuring size, checking the newest file\u2019s age, flagging anything stale (older than 7 days) — and writes a dated markdown health report.',
        fullDescription: `n8n Backup Health Monitor
Backup jobs run silently for months — nobody notices a backup going stale until the day a restore is needed. This local n8n workflow checks every backup directory daily: measures each directory's size, finds the newest file's age, flags anything stale (older than 7 days), and writes a dated markdown health report. 100% local, fictional data.

Workflow (standard local nodes only): Daily 07:00 Schedule Trigger → Check backup dirs (Execute Command: du + find) → Compute health + write report (Code node: size/age math, stale flags, writes output/health-report-YYYY-MM-DD.md).

Ships workflow.json, sample backup tree, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/n8n-backup-monitor.jpg',
        tags: ['n8n', 'Backup Monitoring', 'Health Checks', 'Scheduling', 'Markdown'],
        liveLink: 'https://drive.google.com/file/d/134PYveGfgaeAeg0AU1NCtRg8XHkaoyHl/view?usp=drivesdk',
        sourceCode: null
    },
    {
        id: 20,
        title: 'Excel VBA Invoice Generator',
        category: 'automation',
        description: 'A macro-enabled workbook that turns one Invoice-Data sheet into professionally formatted invoices — one sheet per client with automatic INV-2026-001 numbering, line totals, 16% tax, and grand totals.',
        fullDescription: `Excel VBA Invoice Generator
Project teams bill clients by hand-copying line items into invoice templates — slow, error-prone, inconsistent. This workbook fixes it: maintain one Invoice-Data sheet (clients + line items); the GenerateInvoices macro (source: InvoiceGen.bas) creates one professionally formatted invoice sheet per client.

Each invoice: header block (invoice no, date, bill-to), item table with line totals, subtotal, 16% tax, grand total. Invoice numbers auto-increment (INV-2026-001...). Re-running first deletes previously generated INV-* sheets, so repeated runs never duplicate invoices.

100% local, fictional data. Ships .xlsm, importable .bas source, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/excel-vba-invoice.jpg',
        tags: ['Excel VBA', 'Invoicing', 'Automation', 'Templates', 'Finance'],
        liveLink: 'https://drive.google.com/file/d/1DF8dRPvGHRl2U5XC0IXlrCxmz2JHTv5P/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/excel-vba-invoice-generator'
    },
    {
        id: 21,
        title: 'Excel VBA Attendance Tracker',
        category: 'automation',
        description: 'One-click monthly attendance reporting: the BuildAttendanceReport macro reads 30 days of P/A/L/H codes for 15 employees, computes present percentages, color-codes the sheet, and flags chronic absentees and latecomers.',
        fullDescription: `Excel VBA Attendance Tracker
Tracking monthly attendance by hand means staring at hundreds of daily codes and hand-computing percentages — slow and error-prone. Attendance.xlsm ships the BuildAttendanceReport macro (source: AttendanceReport.bas) that does the whole month in one click:

1. Reads the Attendance sheet — 15 fictional employees x 30 days of codes (P/A/L/H).
2. Builds an "Attendance Report" sheet: per-employee % present (P + half-day/2), absent / late / half-day counts, days tracked.
3. Color-codes the source sheet — absent cells red, late cells amber.
4. Flags chronic absentees (>= 5 absents, red) and frequent latecomers (>= 3 lates, amber).
5. Writes a summary dashboard block.

Ships .xlsm, importable .bas source, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/excel-vba-attendance.jpg',
        tags: ['Excel VBA', 'Attendance', 'HR', 'Dashboards', 'Reporting'],
        liveLink: 'https://drive.google.com/file/d/1RQY4-BtQg97unA9JdaoqfYfAhR2YfgCc/view?usp=drivesdk',
        sourceCode: 'https://github.com/dralihassankhan1990-spec/excel-vba-attendance-tracker'
    },
    {
        id: 22,
        title: 'Excel VBA Task Tracker Pro',
        category: 'automation',
        description: 'A self-monitoring task workbook: the Workbook_Open auto-trigger scans every task on file open — painting overdue rows red and due-soon rows amber — with a validated AddTask dialog and a live dashboard.',
        fullDescription: `Excel VBA Task Tracker Pro
A task list is easy to start and easy to neglect — overdue work hides in the rows. Task-Tracker-Pro.xlsm contains three VBA pieces (TaskTrackerPro.bas, ThisWorkbook.cls.txt):

1. Workbook_Open auto-trigger — the moment the file opens, Excel fires TaskTrackerPro.AutoCheckOverdue automatically. No clicks, no buttons. It scans every task, paints overdue rows red, rows due within 7 days amber, completed rows green, and stamps a status line ("Last auto-check: ... — N overdue, M due within 7 days.") on the Dashboard.
2. AddTask — adds a task through InputBox dialogs with full validation (title required, real date, status/priority from fixed lists) and auto-generates the next ID (TASK-026...).
3. Dashboard — live counts by status and priority, Kanban-style visibility.

Ships .xlsm, VBA sources, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/excel-vba-task-tracker.jpg',
        tags: ['Excel VBA', 'Task Tracking', 'Kanban', 'Auto-Trigger', 'Dashboards'],
        liveLink: 'https://drive.google.com/file/d/1qwBy28bpFGd2qvrB1ultYixoT6XMZMP5/view?usp=drivesdk',
        sourceCode: null
    },
    {
        id: 23,
        title: 'Excel VBA Payroll Calculator',
        category: 'automation',
        description: 'Monthly payroll in one click: the RunPayroll macro computes gross pay, applies income-tax slabs (0% / 10% / 20%), and generates a formatted payslip per employee plus a payroll summary with totals and averages.',
        fullDescription: `Excel VBA Payroll Calculator
Monthly payroll means taking each employee's basic salary and allowances, applying income-tax slabs by hand, and building one payslip per employee — one wrong formula and someone gets underpaid. Payroll.xlsm ships an Employees sheet (8 fictional staff) and the RunPayroll macro (PayrollCalc.bas):

1. Gross pay = basic salary + allowances.
2. Income tax via monthly slabs: 0% on the first 50,000; 10% on 50,001-100,000; 20% above 100,000.
3. Net pay = gross - tax.
4. One formatted payslip sheet per employee (Payslip-1 ... Payslip-8).
5. Payroll-Summary sheet: headcount, total gross, total tax collected, total net pay, average net pay.

No formulas to maintain, no APIs, fictional data. Ships .xlsm, .bas source, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/excel-vba-payroll.jpg',
        tags: ['Excel VBA', 'Payroll', 'Finance', 'Tax Slabs', 'Payslips'],
        liveLink: 'https://drive.google.com/file/d/14p9Fl8mSVt9c54AW1GCsTgQvuIfkO5sq/view?usp=drivesdk',
        sourceCode: null
    },
    {
        id: 24,
        title: 'WhatsApp Message Scheduler',
        category: 'automation',
        description: 'Schedule WhatsApp messages from a CSV outbox: list recipients, messages, and send times — the scheduler sends via your own WhatsApp Web session (Playwright), logs to sent-log.csv, and never double-sends.',
        fullDescription: `WhatsApp Message Scheduler
Project teams send the same reminders again and again — typing them by hand at the right time is tedious and easy to forget. Schedule them instead: list messages in outbox.csv (to, message, send_at), run scheduler.py (or let Task Scheduler / cron run it).

The script opens your own WhatsApp Web session (Playwright + a persistent browser profile), sends every message whose send_at has passed and which was not sent before, and appends the result to sent-log.csv. Re-runs never double-send: already-sent rows are skipped automatically.

100% local, no APIs, no third-party services. Demo data only. Ships scheduler.py, requirements, run scripts, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/whatsapp-scheduler.jpg',
        tags: ['Python', 'Playwright', 'WhatsApp', 'Scheduling', 'CSV'],
        liveLink: 'https://drive.google.com/file/d/1Hn5PprgKVdqOoueNj-NcUhc3T1WugcT8/view?usp=drivesdk',
        sourceCode: null
    },
    {
        id: 25,
        title: 'WhatsApp Bulk Notifier',
        category: 'automation',
        description: 'One personalized WhatsApp message to a whole contact list: write the template once with {name} and {date} placeholders — the notifier personalizes and sends sequentially with a courtesy delay, logging every attempt.',
        fullDescription: `WhatsApp Bulk Notifier
"Meeting moved to 11am" — telling 10 people individually means copy-paste forwards that look impersonal, and someone always gets missed. Instead: put contacts in contacts.csv (name, phone), write the message once in template.txt using {name} and {date} placeholders, run notifier.py.

It opens your own WhatsApp Web session (Playwright + persistent browser profile), personalizes one message per contact, and sends them sequentially with a courtesy delay (default 15s) between sends. Every attempt is written to delivery-log.csv (contact, preview, status, timestamp).

100% local, no APIs, no third-party services. Demo data only. Ships notifier.py, requirements, run scripts, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/whatsapp-notifier.jpg',
        tags: ['Python', 'Playwright', 'WhatsApp', 'Bulk Messaging', 'Templates'],
        liveLink: 'https://drive.google.com/file/d/17fCAjs0-lnzGYrwwpxiWFQlv53lvdntE/view?usp=drivesdk',
        sourceCode: null
    },
    {
        id: 26,
        title: 'Excel VBA Data Cleaner',
        category: 'automation',
        description: 'Messy spreadsheet data, fixed in one click: the CleanData macro trims whitespace, removes duplicate rows, standardizes names to Proper Case, normalizes dates to YYYY-MM-DD, and validates emails.',
        fullDescription: `Excel VBA Data Cleaner
Real-world data arrives messy: leading/trailing spaces, names in ALL CAPS, join dates in four different formats, invalid email addresses, exact duplicate rows, blank critical cells. Cleaning 40 rows by hand takes hours — and you still miss things.

Data-Cleaner.xlsm ships a Raw-Data sheet (40 messy fictional rows: ID, name, email, join date, department, salary). The CleanData macro (DataCleaner.bas):

1. Trims leading/trailing whitespace from every cell.
2. Removes exact duplicate rows (compared on data columns, not the row ID).
3. Standardizes names to Proper Case ("  fatima KHAN " → "Fatima Khan").
4. Normalizes dates to YYYY-MM-DD (handles DD/MM/YYYY, MM/DD/YYYY, DD-Mon-YYYY, YYYY/MM/DD).
5. Validates emails with a pattern check.
6. Writes a before/after summary so every fix is verifiable.

Ships .xlsm, .bas source, README, TEST-REPORT.md, and a demo video.`,
        image: '/projects/auto/excel-vba-data-cleaner.jpg',
        tags: ['Excel VBA', 'Data Cleaning', 'Data Quality', 'Dedupe', 'Validation'],
        liveLink: 'https://drive.google.com/file/d/1Xzt-tiSMVBgRlu3BHG-su2MXfyA9okO4/view?usp=drivesdk',
        sourceCode: null
    }
];
