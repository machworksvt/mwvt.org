import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Renders nothing — just watches the URL and scrolls to the matching
// section when a #hash is present (e.g. /team#avionics). React Router
// doesn't do this on its own.
export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [hash, pathname]);

  return null;
}