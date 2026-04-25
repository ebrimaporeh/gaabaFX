// src/components/TraderImage.jsx
import React from 'react';

const TraderImage = ({ variant = 'hero', className = '' }) => {
  // Hero version - larger, more detailed
  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 500 600"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1008"/>
            <stop offset="100%" stopColor="#0d0b06"/>
          </linearGradient>
          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b3a1c"/>
            <stop offset="100%" stopColor="#4a2510"/>
          </linearGradient>
          <linearGradient id="suitGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c1c1c"/>
            <stop offset="100%" stopColor="#0d0d0d"/>
          </linearGradient>
          <radialGradient id="faceLight" cx="0.35" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#7a4422"/>
            <stop offset="100%" stopColor="#3d2010"/>
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="500" height="600" fill="url(#bgGrad)"/>

        {/* Monitor glow */}
        <ellipse cx="80" cy="300" rx="80" ry="180" fill="#1a5c30" opacity="0.08"/>

        {/* Body / Suit */}
        <path d="M140 340 Q250 320 360 340 L400 600 H100 Z" fill="url(#suitGrad)"/>
        
        {/* Jacket lapels */}
        <path d="M140 340 L185 390 L230 340 L250 360 L270 340 L315 390 L360 340" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
        <path d="M140 340 L185 390 L230 340" fill="#222" stroke="#303030" strokeWidth="0.5"/>
        <path d="M270 340 L315 390 L360 340" fill="#222" stroke="#303030" strokeWidth="0.5"/>
        
        {/* Gold Tie */}
        <path d="M237 342 L250 400 L263 342 L256 370 L244 370 Z" fill="#c9a84c"/>
        <path d="M244 370 L256 370 L250 400 Z" fill="#a0832e"/>
        
        {/* Shirt collar */}
        <path d="M227 338 L240 358 L250 345 L260 358 L273 338" fill="#e8e0d0" stroke="#ccc" strokeWidth="0.5"/>
        
        {/* Pocket square */}
        <polygon points="160,370 170,365 173,380 163,385" fill="#c9a84c" opacity="0.9"/>

        {/* Neck */}
        <rect x="218" y="300" width="64" height="50" rx="8" fill="url(#skinGrad)"/>

        {/* Head */}
        <ellipse cx="250" cy="210" rx="95" ry="110" fill="url(#faceLight)"/>
        
        {/* Jawline */}
        <path d="M163 230 Q165 305 180 315 Q208 335 250 340 Q292 335 320 315 Q335 305 337 230" fill="url(#faceLight)" stroke="none"/>

        {/* Hair */}
        <ellipse cx="250" cy="150" rx="90" ry="60" fill="#1a0e06"/>
        <path d="M165 180 Q163 230 167 260 Q170 210 182 195 Z" fill="#1a0e06"/>
        <path d="M335 180 Q337 230 333 260 Q330 210 318 195 Z" fill="#1a0e06"/>
        <path d="M165 220 Q168 200 182 190 Q172 220 162 250" fill="#2a1506" opacity="0.8"/>
        <path d="M335 220 Q332 200 318 190 Q328 220 338 250" fill="#2a1506" opacity="0.8"/>

        {/* Ears */}
        <ellipse cx="165" cy="228" rx="16" ry="22" fill="#4a2a12"/>
        <ellipse cx="167" cy="228" rx="9" ry="15" fill="#3d2010"/>
        <ellipse cx="335" cy="228" rx="16" ry="22" fill="#4a2a12"/>
        <ellipse cx="333" cy="228" rx="9" ry="15" fill="#3d2010"/>

        {/* Eyebrows */}
        <path d="M200 195 Q218 185 235 190" stroke="#1a0e06" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M265 190 Q282 185 300 195" stroke="#1a0e06" strokeWidth="5" fill="none" strokeLinecap="round"/>

        {/* Eyes */}
        <ellipse cx="220" cy="215" rx="18" ry="10" fill="#2d1508" opacity="0.35"/>
        <ellipse cx="280" cy="215" rx="18" ry="10" fill="#2d1508" opacity="0.35"/>
        
        <ellipse cx="220" cy="215" rx="15" ry="8" fill="#e8ddd0"/>
        <ellipse cx="280" cy="215" rx="15" ry="8" fill="#e8ddd0"/>
        
        <circle cx="220" cy="215" r="6.5" fill="#3d2408"/>
        <circle cx="280" cy="215" r="6.5" fill="#3d2408"/>
        
        <circle cx="220" cy="215" r="3.5" fill="#0a0604"/>
        <circle cx="280" cy="215" r="3.5" fill="#0a0604"/>
        
        <circle cx="223" cy="212" r="2" fill="rgba(255,255,255,0.8)"/>
        <circle cx="283" cy="212" r="2" fill="rgba(255,255,255,0.8)"/>

        {/* Nose */}
        <path d="M245 220 Q246 255 236 265 Q250 272 265 265 Q255 255 256 220" fill="#4a2a12" opacity="0.5"/>
        <path d="M236 265 Q241 275 250 273 Q259 275 264 265" fill="#3d2010"/>
        <ellipse cx="239" cy="267" rx="6" ry="4" fill="#2a1506" opacity="0.7"/>
        <ellipse cx="261" cy="267" rx="6" ry="4" fill="#2a1506" opacity="0.7"/>

        {/* Mouth - confident smile */}
        <path d="M225 290 Q238 284 250 286 Q262 284 275 290 Q262 294 250 293 Q238 294 225 290Z" fill="#2a1006"/>
        <path d="M225 290 Q238 300 250 300 Q262 300 275 290 Q262 296 250 297 Q238 296 225 290Z" fill="#5a2e14"/>
        <path d="M232 292 Q250 298 268 292" fill="#e8ddd0" opacity="0.35"/>

        {/* Chin */}
        <path d="M238 310 Q250 320 262 310" stroke="#3d2010" strokeWidth="2" fill="none" opacity="0.4"/>

        {/* Left arm with phone */}
        <path d="M110 470 Q130 410 140 340 L170 360 Q155 430 150 490Z" fill="#1c1c1c"/>
        <rect x="108" y="468" width="55" height="22" rx="6" fill="#e8ddd0"/>
        <ellipse cx="125" cy="500" rx="30" ry="24" fill="url(#skinGrad)"/>
        <rect x="108" y="510" width="50" height="30" rx="6" fill="#1a1a1a"/>
        <rect x="110" y="512" width="46" height="26" rx="5" fill="#0a1f12"/>
        <polyline points="114,530 120,524 126,527 133,518 140,522 146,514 152,517" stroke="#4ade80" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Right arm with watch */}
        <path d="M390 470 Q370 410 360 340 L330 360 Q345 430 350 490Z" fill="#1c1c1c"/>
        <rect x="337" y="468" width="55" height="22" rx="6" fill="#e8ddd0"/>
        <ellipse cx="375" cy="500" rx="30" ry="24" fill="url(#skinGrad)"/>
        <rect x="360" y="486" width="24" height="24" rx="4" fill="#1a1a1a" stroke="#c9a84c" strokeWidth="1.2"/>
        <circle cx="372" cy="498" r="8" fill="#0d0d0d" stroke="#333" strokeWidth="0.5"/>
        <line x1="372" y1="498" x2="372" y2="493" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
        <line x1="372" y1="498" x2="375" y2="501" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>

        {/* Computer monitors in background */}
        <rect x="40" y="160" width="90" height="60" rx="6" fill="#0a2a18" stroke="#1a5c30" strokeWidth="1" opacity="0.6"/>
        <polyline points="46,205 52,198 59,202 66,192 73,196 80,186 87,190 94,182 101,188 115,178" stroke="#4ade80" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8"/>
        
        <rect x="360" y="155" width="95" height="62" rx="6" fill="#0a1020" stroke="#1a3060" strokeWidth="1" opacity="0.6"/>
        <text x="375" y="178" fontSize="7" fill="#5090d0" fontFamily="monospace" opacity="0.8">EUR/USD</text>
        <text x="375" y="190" fontSize="9" fill="#90c0f0" fontFamily="monospace" fontWeight="bold" opacity="0.9">1.0842</text>
        <text x="375" y="202" fontSize="7" fill="#4ade80" fontFamily="monospace" opacity="0.8">▲ +0.23%</text>
      </svg>
    );
  }

  // About version - slightly different pose
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#120e08"/>
          <stop offset="100%" stopColor="#0a0a0a"/>
        </linearGradient>
        <radialGradient id="face2" cx="0.45" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#7a4422"/>
          <stop offset="100%" stopColor="#3d2010"/>
        </radialGradient>
      </defs>
      
      <rect width="400" height="500" fill="url(#bg2)"/>
      
      {/* Grid lines - chart paper feel */}
      <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="0" y1="240" x2="400" y2="240" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="0" y1="320" x2="400" y2="320" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="80" y1="0" x2="80" y2="500" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="160" y1="0" x2="160" y2="500" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="240" y1="0" x2="240" y2="500" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
      <line x1="320" y1="0" x2="320" y2="500" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>

      {/* Body */}
      <path d="M90 370 Q200 345 310 370 L360 500 H40 Z" fill="#1a1a1a"/>
      <path d="M90 370 L130 415 L175 370 L190 390 L205 370 L250 415 L290 370" fill="#141414" stroke="#222" strokeWidth="0.8"/>
      
      {/* Tie */}
      <path d="M188 372 L200 425 L212 372 L206 400 L194 400 Z" fill="#c9a84c"/>
      <path d="M194 400 L206 400 L200 425 Z" fill="#a0832e"/>
      
      {/* Collar */}
      <path d="M180 370 L192 388 L200 376 L208 388 L220 370" fill="#ddd" opacity="0.9"/>
      
      {/* Neck */}
      <rect x="178" y="335" width="44" height="42" rx="6" fill="url(#face2)"/>
      
      {/* Head */}
      <ellipse cx="200" cy="240" rx="75" ry="88" fill="url(#face2)"/>
      <path d="M130 258 Q132 320 145 332 Q167 348 200 352 Q233 348 255 332 Q268 320 270 258" fill="url(#face2)"/>
      
      {/* Hair */}
      <ellipse cx="200" cy="190" rx="73" ry="48" fill="#1a0e06"/>
      <path d="M130 222 Q128 270 132 298 Q135 252 145 235 Z" fill="#1a0e06"/>
      <path d="M270 222 Q272 270 268 298 Q265 252 255 235 Z" fill="#1a0e06"/>
      
      {/* Eyebrows */}
      <path d="M167 224 Q180 217 192 220" stroke="#1a0e06" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M208 220 Q220 217 233 224" stroke="#1a0e06" strokeWidth="4" fill="none" strokeLinecap="round"/>
      
      {/* Eyes */}
      <ellipse cx="182" cy="240" rx="14" ry="8" fill="#e0d5c5"/>
      <ellipse cx="218" cy="240" rx="14" ry="8" fill="#e0d5c5"/>
      <circle cx="182" cy="240" r="6.5" fill="#2d1a08"/>
      <circle cx="218" cy="240" r="6.5" fill="#2d1a08"/>
      <circle cx="182" cy="240" r="4" fill="#0a0604"/>
      <circle cx="218" cy="240" r="4" fill="#0a0604"/>
      <circle cx="184" cy="237" r="1.5" fill="rgba(255,255,255,0.8)"/>
      <circle cx="220" cy="237" r="1.5" fill="rgba(255,255,255,0.8)"/>
      
      {/* Nose */}
      <path d="M195 248 Q196 278 187 286 Q198 292 213 286 Q204 278 205 248" fill="#3d2010" opacity="0.45"/>
      <path d="M187 286 Q192 294 200 293 Q208 294 213 286" fill="#2a1506"/>
      
      {/* Mouth - warm smile */}
      <path d="M183 308 Q192 316 200 315 Q208 316 217 308" stroke="#2a1006" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M188 310 Q200 316 212 310" fill="#e0d5c5" opacity="0.35"/>
      
      {/* Face light from monitor */}
      <ellipse cx="175" cy="235" rx="55" ry="60" fill="#7a4422" opacity="0.1"/>
      
      {/* Arms crossed */}
      <path d="M100 420 Q120 380 140 370 L160 395 Q145 430 140 450Z" fill="#1c1c1c"/>
      <path d="M300 420 Q280 380 260 370 L240 395 Q255 430 260 450Z" fill="#1c1c1c"/>
      
      {/* Hands */}
      <ellipse cx="145" cy="455" rx="25" ry="20" fill="url(#face2)"/>
      <ellipse cx="255" cy="455" rx="25" ry="20" fill="url(#face2)"/>
      
      {/* Gold accent */}
      <rect x="0" y="430" width="400" height="70" fill="url(#bg2)" opacity="0.8"/>
      <path d="M0 460 L400 460" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
    </svg>
  );
};

export default TraderImage;