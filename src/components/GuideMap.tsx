import { useEffect, useRef, useState } from "react";
import mapImg from "../assets/map.png";
import cn from "../utils/cn";

type Marker = {
  id: string;
  title: string;
  detail: string;
  // Position as a percentage of the map image.
  x: number;
  y: number;
  kind: "festival" | "station";
  side: "top" | "bottom";
  align: "left" | "center" | "right";
};

// Positions are measured against map.png, so they scale with the image.
const markers: Marker[] = [
  {
    id: "festival",
    title: "The Lake District Book Festival",
    detail: "Cartmel Racecourse",
    x: 62.5,
    y: 35.3,
    kind: "festival",
    side: "top",
    align: "center",
  },
  {
    id: "cark",
    title: "Cark-in-Cartmel",
    detail: "5 minutes drive",
    x: 61.7,
    y: 48.2,
    kind: "station",
    side: "bottom",
    align: "center",
  },
  {
    id: "oxenholme",
    title: "Oxenholme",
    detail: "30 minutes drive",
    x: 91.1,
    y: 10.8,
    kind: "station",
    side: "bottom",
    align: "right",
  },
  {
    id: "lancaster",
    title: "Lancaster",
    detail: "40 minutes drive",
    x: 80.3,
    y: 87.6,
    kind: "station",
    side: "top",
    align: "right",
  },
];

const GuideMap = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setActive(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative aspect-[2092/1600] w-full", className)}
    >
      <img
        src={mapImg}
        alt="A partial map of Cumbria, showing the local train stations and festival location"
        className="h-full w-full object-cover"
      />

      {/* Fades the map into the section background behind the welcome text. */}
      <div className="pointer-events-none absolute inset-0 lg:bg-gradient-to-r lg:from-map-grey lg:from-15% lg:via-map-grey/85 lg:via-35% lg:to-transparent lg:to-60%" />

      {markers.map((marker) => {
        const isActive = active === marker.id;
        const isFestival = marker.kind === "festival";

        return (
          <div
            key={marker.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          >
            <button
              type="button"
              aria-label={`${marker.title}, ${marker.detail}`}
              aria-describedby={isActive ? `map-tip-${marker.id}` : undefined}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setActive(marker.id);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") setActive(null);
              }}
              onClick={() => setActive(marker.id)}
              onFocus={() => setActive(marker.id)}
              onBlur={() => setActive(null)}
              className={cn(
                "relative block h-12 w-12 rounded-full ring-2 transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night",
                isFestival
                  ? "ring-jonquil bg-jonquil/10 hover:bg-jonquil/30"
                  : "ring-fire-red/70 bg-fire-red/5 hover:bg-fire-red/20",
                isActive && (isFestival ? "bg-jonquil/30" : "bg-fire-red/20"),
              )}
            >
              {isFestival && (
                <span className="absolute inset-0 rounded-full ring-2 ring-jonquil motion-safe:animate-ping" />
              )}
            </button>

            {isActive && (
              <div
                id={`map-tip-${marker.id}`}
                role="tooltip"
                className={cn(
                  "absolute z-10 w-52 rounded bg-night px-4 py-3 text-left text-white shadow-lg",
                  marker.side === "top" ? "bottom-full mb-3" : "top-full mt-3",
                  marker.align === "center" && "left-1/2 -translate-x-1/2",
                  marker.align === "right" && "right-0",
                  marker.align === "left" && "left-0",
                )}
              >
                <p className="font-adelphi text-lg leading-tight">
                  {marker.title}
                </p>
                <p className="mt-1 text-sm text-silver">{marker.detail}</p>
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full bg-night/85 px-4 py-2 text-xs text-white">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full ring-2 ring-jonquil" />
          Festival venue
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full ring-2 ring-fire-red/70" />
          Train station
        </span>
      </div>
    </div>
  );
};

export default GuideMap;
