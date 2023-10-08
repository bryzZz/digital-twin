import React from "react";
import { twMerge } from "tailwind-merge";
import { Range, getTrackBackground } from "react-range";

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
}) => {
  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={[value]}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: [value],
                colors: ["#548BF4", "#ccc"],
                min,
                max,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "1.5rem",
            width: "1.5rem",
            borderRadius: "2px",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
            position: "relative",
          }}
        >
          <div
            className={twMerge(
              "h-2 w-1 bg-[#CCC]",
              isDragged && "bg-[#548BF4]"
            )}
          />

          <div className="absolute rounded-sm -top-6 left-1/2 -translate-x-1/2">
            {value}
          </div>
        </div>
      )}
    />
  );
};
