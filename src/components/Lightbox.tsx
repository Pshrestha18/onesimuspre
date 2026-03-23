import React from "react";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ src, alt, onClose, onPrev, onNext }: Props) {
  if (!src) return null;
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="modalBackdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <div className="modalBar">
          <div className="small">{alt}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <button className="btn" onClick={onPrev} aria-label="Previous">
              ← Prev
            </button>
            <button className="btn" onClick={onNext} aria-label="Next">
              Next →
            </button>
            <span className="kbd">Esc</span>
            <button className="btn btnPrimary" onClick={onClose} aria-label="Close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
