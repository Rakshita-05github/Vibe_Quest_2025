import { useState } from "react";
import vibeData from "../data/vibeData.js";

function Result({ answers, onRestart }) {
  const [copied, setCopied] = useState(false);

  // Calculate top vibe
  const count = answers.reduce((acc, vibe) => {
    acc[vibe] = (acc[vibe] || 0) + 1;
    return acc;
  }, {});
  const topVibe = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  const vibe = vibeData[topVibe];

  // Share logic
  const shareText = `I just took the VIBE QUEST and got the "${topVibe}" vibe! 🌟 Check it out here:`;
  const shareUrl = `${window.location.origin}?vibe=${topVibe.toLowerCase()}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="result">
      <h2>Your vibe: {topVibe}</h2>
      <img
  src={vibe.image}
  alt={topVibe}
  className="vibe-image"
/>

      <p>{vibe.description}</p>
      <button onClick={onRestart}>Try again</button>

      <div className="share-buttons">
        <a
          className="whatsapp"
          href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on WhatsApp
        </a>
        <button onClick={handleCopyLink}>
          {copied ? "Link Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

export default Result;
