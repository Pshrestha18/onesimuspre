import React from "react";

type Props = {
  title: string;
  youtubeId: string;
  onClose: () => void;
};

export default function VideoModal({ title, youtubeId, onClose }: Props) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modalBackdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ aspectRatio: "16/9", width: "100%", background: "rgba(0,0,0,0.38)" }}>
          <iframe
            title={title}
            className="embed"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="modalBar">
          <div>{title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="kbd">Esc</span>
            <button className="btn" onClick={onClose} aria-label="Close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
