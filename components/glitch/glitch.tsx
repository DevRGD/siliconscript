import React from 'react';
import './glitch.css';

export default function Glitch() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <h1 className="glitch" data-text="GLITCH">
        GLITCH
      </h1>
    </div>
  );
}
