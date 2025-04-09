import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Check if there's a redirect stored in session storage (from 404 page)
const storedRedirect = sessionStorage.getItem('redirect');
if (storedRedirect) {
  // Clear the redirect from session storage
  sessionStorage.removeItem('redirect');
  // Push to the history
  window.history.pushState(null, '', storedRedirect);
}

// Render the app
createRoot(document.getElementById("root")!).render(<App />);
