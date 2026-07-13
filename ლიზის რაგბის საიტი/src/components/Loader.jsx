import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(onDone, 600);
    }, 1400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`loader ${hidden ? 'loader--hidden' : ''}`}>
      <img src="/logo.jpg" alt="RC Batumi" className="loader__logo" />
      <div className="loader__ball" />
      <span className="loader__text">RC BATUMI</span>
    </div>
  );
}
