"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * IraqMap - Interactive SVG map of Iraq with branch locations
 * 
 * Shows Iraq outline with pins at branch cities:
 * - Baghdad (بغداد) - HQ
 * - Babel (بابل)
 * - Karbala (كربلاء)
 * - Najaf (النجف)
 * - Dhi Qar (ذي قار)
 * - Maysan (ميسان)
 * 
 * 3D logo floats above the map
 */

interface BranchPin {
  id: string;
  name: string;
  nameEn: string;
  x: number;  // percentage position on map
  y: number;
  isHQ: boolean;
}

const branchPins: BranchPin[] = [
  { id: "baghdad", name: "بغداد", nameEn: "Baghdad", x: 55, y: 38, isHQ: true },
  { id: "babel", name: "بابل", nameEn: "Babel", x: 52, y: 45, isHQ: false },
  { id: "karbala", name: "كربلاء", nameEn: "Karbala", x: 46, y: 42, isHQ: false },
  { id: "najaf", name: "النجف", nameEn: "Najaf", x: 43, y: 50, isHQ: false },
  { id: "dhiqar", name: "ذي قار", nameEn: "Dhi Qar", x: 58, y: 56, isHQ: false },
  { id: "maysan", name: "ميسان", nameEn: "Maysan", x: 65, y: 52, isHQ: false },
];

export default function IraqMap() {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[4/4] max-w-md mx-auto lg:mx-0">
      {/* Glow behind map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-green/8 rounded-full blur-3xl" />

      {/* 3D Logo floating above map */}
      <motion.div
        animate={{ y: [0, -10, 0], rotateY: [0, 10, 0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
        style={{ perspective: "800px" }}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20" style={{ transformStyle: "preserve-3d" }}>
          <Image
            src="/images/logo.png"
            alt="شعار حبيب الساعدي"
            fill
            className="object-contain drop-shadow-[0_8px_32px_rgba(74,222,64,0.4)]"
          />
        </div>
      </motion.div>

      {/* Iraq Map SVG */}
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 400 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter for map */}
            <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="#4ADE40" floodOpacity="0.15" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Pin glow */}
            <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor="#4ADE40" floodOpacity="0.6" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Radial gradient for map fill */}
            <radialGradient id="mapFill" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="rgba(74,222,64,0.12)" />
              <stop offset="100%" stopColor="rgba(74,222,64,0.03)" />
            </radialGradient>
            {/* Pulse animation */}
            <radialGradient id="pulseGrad">
              <stop offset="0%" stopColor="#4ADE40" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4ADE40" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Iraq outline - simplified but recognizable shape */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 145,40 L 170,35 L 195,30 L 215,25 L 240,30 L 265,28 L 285,35 L 300,50 
               L 310,70 L 305,90 L 300,105 L 310,120 L 320,140 L 315,155 L 305,165 
               L 300,180 L 295,195 L 285,210 L 280,230 L 275,250 L 270,265 L 280,280 
               L 290,300 L 300,320 L 295,335 L 280,345 L 265,355 L 255,370 L 240,380 
               L 225,385 L 210,390 L 195,395 L 180,400 L 165,395 L 150,385 L 140,370 
               L 130,355 L 120,340 L 115,325 L 105,310 L 100,290 L 95,270 L 95,250 
               L 100,230 L 105,210 L 110,190 L 115,170 L 120,150 L 125,130 L 130,110 
               L 130,90 L 135,70 L 140,55 Z"
            fill="url(#mapFill)"
            stroke="#4ADE40"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            filter="url(#mapGlow)"
          />

          {/* Internal province lines (subtle) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {/* Horizontal dividers */}
            <line x1="115" y1="190" x2="290" y2="190" stroke="#4ADE40" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
            <line x1="105" y1="250" x2="280" y2="250" stroke="#4ADE40" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
            <line x1="110" y1="320" x2="280" y2="320" stroke="#4ADE40" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
          </motion.g>

          {/* Grid dots on map */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {Array.from({ length: 12 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => {
                const cx = 100 + col * 30;
                const cy = 50 + row * 35;
                return (
                  <circle
                    key={`dot-${row}-${col}`}
                    cx={cx}
                    cy={cy}
                    r="0.8"
                    fill="#4ADE40"
                    opacity="0.08"
                  />
                );
              })
            )}
          </motion.g>

          {/* Connection lines between branches */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            {branchPins.map((pin) => {
              if (pin.isHQ) return null;
              const hq = branchPins.find((p) => p.isHQ)!;
              return (
                <line
                  key={`line-${pin.id}`}
                  x1={hq.x * 4}
                  y1={hq.y * 4 + 100}
                  x2={pin.x * 4}
                  y2={pin.y * 4 + 100}
                  stroke="#4ADE40"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  strokeDasharray="3 3"
                />
              );
            })}
          </motion.g>

          {/* Branch pins */}
          {branchPins.map((pin, i) => {
            const px = pin.x * 4;
            const py = pin.y * 4 + 100;
            const isActive = activePin === pin.id;

            return (
              <motion.g
                key={pin.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + i * 0.15, duration: 0.4, type: "spring" }}
                onMouseEnter={() => setActivePin(pin.id)}
                onMouseLeave={() => setActivePin(null)}
                className="cursor-pointer"
              >
                {/* Pulse ring */}
                <circle cx={px} cy={py} r={pin.isHQ ? "12" : "8"} fill="url(#pulseGrad)" opacity="0.3">
                  <animate attributeName="r" values={pin.isHQ ? "8;18;8" : "6;14;6"} dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Pin outer */}
                <circle
                  cx={px}
                  cy={py}
                  r={pin.isHQ ? "8" : "5"}
                  fill={pin.isHQ ? "#4ADE40" : "rgba(74,222,64,0.2)"}
                  stroke="#4ADE40"
                  strokeWidth={pin.isHQ ? "2" : "1.5"}
                  filter={isActive || pin.isHQ ? "url(#pinGlow)" : "none"}
                />
                {/* Pin inner */}
                <circle
                  cx={px}
                  cy={py}
                  r={pin.isHQ ? "3" : "2"}
                  fill={pin.isHQ ? "#0A0A0B" : "#4ADE40"}
                />

                {/* City label */}
                <motion.g
                  initial={{ opacity: pin.isHQ ? 1 : 0 }}
                  animate={{ opacity: isActive || pin.isHQ ? 1 : 0.7 }}
                >
                  {/* Label background */}
                  <rect
                    x={px - (pin.isHQ ? 28 : 22)}
                    y={py - (pin.isHQ ? 26 : 20)}
                    width={pin.isHQ ? 56 : 44}
                    height={pin.isHQ ? 16 : 14}
                    rx="4"
                    fill="rgba(10,10,11,0.85)"
                    stroke={pin.isHQ ? "#4ADE40" : "rgba(74,222,64,0.2)"}
                    strokeWidth="0.5"
                  />
                  <text
                    x={px}
                    y={py - (pin.isHQ ? 15 : 11)}
                    textAnchor="middle"
                    fill={pin.isHQ ? "#4ADE40" : "#D1D5DB"}
                    fontSize={pin.isHQ ? "9" : "7.5"}
                    fontFamily="Cairo, sans-serif"
                    fontWeight={pin.isHQ ? "800" : "600"}
                  >
                    {pin.name}
                  </text>
                </motion.g>

                {/* HQ badge */}
                {pin.isHQ && (
                  <g>
                    <rect
                      x={px - 18}
                      y={py + 12}
                      width={36}
                      height={12}
                      rx="3"
                      fill="#4ADE40"
                    />
                    <text
                      x={px}
                      y={py + 21}
                      textAnchor="middle"
                      fill="#0A0A0B"
                      fontSize="6.5"
                      fontFamily="Cairo, sans-serif"
                      fontWeight="800"
                    >
                      المقر الرئيسي
                    </text>
                  </g>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Tooltip for active pin */}
      {activePin && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2.5 text-center z-20"
        >
          <p className="text-sm font-bold text-brand-green">
            {branchPins.find((p) => p.id === activePin)?.name}
          </p>
          <p className="text-[10px] text-brand-gray">
            {branchPins.find((p) => p.id === activePin)?.isHQ ? "الفرع الرئيسي" : "فرع"}
          </p>
        </motion.div>
      )}

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-green/20 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-green/20 rounded-bl-lg" />
    </div>
  );
}
