import React from "react";
import Link from "../../Link";

interface TradeSummaryCardProps {
  imageUrl: string;
  title: string;
  roi: number;
  duration: string;
  progress: number;
}
export default function TradeSummaryCard({
  imageUrl,
  title,
  roi,
  duration,
  progress
}: TradeSummaryCardProps) {
  return (
    <Link to="/app/trade/73bd7db388sns" className="w-[200px] flex-none space-y-2 py-3 group">
      <div className="h-32 bg-gray-200 rounded-lg overflow-hidden w-full">
        {imageUrl}
      </div>
      <div className="text-lg font-medium group-hover:underline">{title}</div>
      <div>
        <ul className="text-sm list-inside text-gray-600 group-hover:underline">
          <li>ROC: {roi}%</li>
          <li>Project Duration: {duration}</li>
          <li>Progress: {progress}%</li>
        </ul>
      </div>
    </Link>
  );
}
