import { redirect } from "next/navigation"

// The finished website is the self-contained static site located at
// public/index.html (with style.css, script.js, products data, and images).
// GitHub Pages serves that file directly at the project root URL.
// For the Next.js (Vercel) deployment we redirect the root to the same
// static site so the default v0 starter page is never shown.
export default function Page() {
  redirect("/index.html")
}
