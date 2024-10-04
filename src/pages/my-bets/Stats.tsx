import { statsData } from '@/data/mybets';

export default function Stats() {
  return (
    <div className="flex gap-2 text-white px-2">
      <div className="flex-2 flex flex-col stats-container text-shadow justify-center items-center">
        <div className="righteous-regular text-[14px]">VOLUME</div>
        <div className="text-[12px]">{statsData.volume.toFixed(2)} USD</div>
      </div>
      <div className="flex-2 flex flex-col stats-container text-shadow  justify-center items-center">
        <div className="righteous-regular text-[14px]">HIGHEST WIN</div>
        <div className="text-[12px]">{statsData.highestWin.toFixed(2)} USD</div>
      </div>
      <div className="flex-1 flex flex-col stats-container text-shadow">
        <div className="flex justify-between">
          <div className="righteous-regular text-[14px]">TOTAL TRADES</div>
          <div className="text-[12px]">{statsData.totalTrades}</div>
        </div>
        <div className="flex justify-between">
          <div className="righteous-regular text-[14px]">LIFETIME WINS</div>
          <div className="text-[12px]">{statsData.lifetimeWins}</div>
        </div>
      </div>
    </div>
  );
}
