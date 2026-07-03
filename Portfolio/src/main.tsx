import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// NOTE: StrictMode is intentionally omitted. The 3D character scene sets up an
// imperative Three.js renderer, loads the model, and attaches GSAP scroll
// timelines. StrictMode's dev-only double-invocation of effects tears this down
// and re-runs it, leaving the model oversized / stuck in a T-pose. Production
// builds never double-invoke, which is why the deployed site renders correctly.
createRoot(document.getElementById("root")!).render(<App />);
