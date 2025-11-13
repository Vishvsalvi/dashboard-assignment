import { useMemo } from "react";
import { cx } from "../../../utils/cx";
import chipcard from "../../../assets/chipcard.png";
import saralcard from "../../../assets/saralcard.svg";

interface CreditCardProps {
  balance?: string;
  cardHolder?: string;
  className?: string;
  width?: number;
}

const calculateScale = (
  desiredWidth: number,
  originalWidth: number,
  originalHeight: number
) => {
  const scale = desiredWidth / originalWidth;
  const scaledWidth = originalWidth * scale;
  const scaledHeight = originalHeight * scale;

  return {
    scale: scale.toFixed(4),
    scaledWidth: scaledWidth.toFixed(2),
    scaledHeight: scaledHeight.toFixed(2),
  };
};

export const CreditCard = ({
  balance = "$ 28.75",
  cardHolder = "JEN NELSON",
  className,
  width,
}: CreditCardProps) => {
  const originalWidth = 316;
  const originalHeight = 190;

  const { scale, scaledWidth, scaledHeight } = useMemo(() => {
    if (!width)
      return {
        scale: 1,
        scaledWidth: originalWidth,
        scaledHeight: originalHeight,
      };

    return calculateScale(width, originalWidth, originalHeight);
  }, [width]);

  return (
    <div
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
      }}
      className={cx("relative flex", className)}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          width: `${originalWidth}px`,
          height: `${originalHeight}px`,
        }}
        className={cx(
          "absolute top-0 left-0 flex origin-top-left flex-col justify-between overflow-hidden rounded-2xl p-5",
          "bg-gradient-to-r from-[#c2a3f3] via-[#a07bea] to-[#a573ef]"
        )}
      >
        {/* Subtle concentric circular pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full border border-white/20 blur-sm" />
          <div className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full border border-white/20 blur-sm" />
          <div className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full border border-white/20 blur-sm" />
          <div className="absolute top-0 left-0 w-[80px] h-[80px] rounded-full border border-white/20 blur-sm" />
          <div className="absolute top-0 left-0 w-[50px] h-[50px] rounded-full border border-white/20 blur-sm" />
        </div>

        {/* Top section */}
        <div className="relative flex items-start justify-between">
          {/* Left: Current balance */}
          <div className="flex flex-col">
            <p className="text-xs font-thin text-gray-100 mb-1.5">Current balance</p>
            <p className="text-3xl text-white tracking-tight">{balance}</p>
          </div>

          {/* Right: EMV chip */}
          <div className="flex items-center">
            <img src={chipcard} alt="EMV Chip" className="w-10 h-8 object-contain" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative flex items-end justify-between">
          {/* Left: Card holder */}
          <div className="flex flex-col">
            <p className="text-[10px] text-gray-100 mb-1.5">Card Holder</p>
            <p className="text-sm text-white uppercase tracking-wide">{cardHolder}</p>
          </div>

          {/* Right: SARAL logo */}
          <div className="flex items-center">
            <img src={saralcard} alt="SARAL" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};
