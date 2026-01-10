# Frontend Developer Task

A Next.js project for a technical evaluation.

---

### Live Demo
**[ https://frontend-task-trendline-nextjs.vercel.app/ui-page ]**

**Figma Design Link:** [ https://www.figma.com/design/LwAzcMC020tu1lX5CtK7La/Untitled?node-id=1-386 ]
---

##  Features

- **User Authentication:**
 **Authentication Flow:**
    *   Full user cycle: `/register` → `/verify` → `/login` → `/dashboard`.
  - User registration with validation.
  - Mock account verification (using code `123456`).
  - Secure login and session management (JWT in `localStorage`).
  - Protected dashboard route for authenticated users.
  - User logout functionality.
- **Pixel-Perfect UI Page:**
  - A dedicated page (`/ui-page`) that accurately implements the provided Figma design.
  - Fully responsive layout for desktop, tablet, and mobile devices.
  - Clean and reusable component-based architecture.
- **Smart Routing:** The root URL (`/`) automatically redirects users to the dashboard if logged in, or to the login page if not.

---

### How to Run

1.  Clone the repository.
2.  Run `npm install`.
3.  Run `npm run dev`.
4.  Open [http://localhost:3000](http://localhost:3000 ) in your browser.
