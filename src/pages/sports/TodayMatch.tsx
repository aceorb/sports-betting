import ImgTodayMatchBackground from '@assets/images/today_match_background.svg';
import ImgClubBruggeKv from '@assets/images/club-brugge-kv.webp';
import ImgFcSalzburg from '@assets/images/fc-salzburg.webp';
export default function TodayMatch() {
  return (
    <div className="flex flex-col py-3 px-1 relative">
      <img src={ImgTodayMatchBackground} alt="background" className="absolute w-100 h-100" />
      <div className="flex z-10 justify-between px-2 text-white items-start">
        <div className="max-w-16 text-xs">MLS</div>
        <div className="rounded-lg py-1 px-2 bg-red-500">TODAY</div>
      </div>
      <div className="flex z-10 justify-between px-2 text-white items-end">
        <div className="flex items-center gap-2 rounded-3xl p-1 bg-gray-600">
          <div className="w-9 h-9 relative">
            <img src={ImgClubBruggeKv} alt="team1" />
          </div>
          <span></span>
          <div className="w-9 h-9 relative">
            <img src={ImgFcSalzburg} alt="team2" />
          </div>
        </div>
        <button>Bet Now</button>
      </div>
      <div className="main-info">Main Info</div>
    </div>
  );
}
