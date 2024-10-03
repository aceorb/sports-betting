import ImgTodayMatchBackground from '@assets/images/today_match_background.svg';
import ImgClubBruggeKv from '@assets/images/club-brugge-kv.webp';
import ImgFcSalzburg from '@assets/images/fc-salzburg.webp';
export default function TodayMatch() {
  return (
    <div className="today-match flex flex-col py-3 px-1 relative gap-10 text-white">
      <img src={ImgTodayMatchBackground} alt="background" className="absolute w-100 h-full w-full" />
      <div className="flex z-10 justify-between px-2 items-start">
        <div className="max-w-16 text-xs">MLS</div>
        <div className="rounded-lg py-1 px-2 bg-red-500">TODAY</div>
      </div>
      <div className="flex z-10 justify-between px-2 items-end">
        <div className="flex items-center gap-2 rounded-3xl p-1 bg-gray-600">
          <div className="w-9 h-9 relative">
            <img src={ImgClubBruggeKv} alt="team1" />
          </div>
          <span className="text-xs font-bold italic">VS</span>
          <div className="w-9 h-9 relative">
            <img src={ImgFcSalzburg} alt="team2" />
          </div>
        </div>
        <button>Bet Now</button>
      </div>
      <div className="main-info absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex gap-2 flex-col items-center">
        <div className="team-name-container flex flex-col">
          <div className="text-center text-[20px] leading-none">Bologna FC 1909</div>
          <div className="text-[1rem] text-red-600 text-center">VS</div>
          <div className="text-center text-[20px] leading-none">Parma Calcio 1913</div>
        </div>
        <div className="datetime-info flex flex-col items-center text-[.5rem] uppercase">
          <div className="font-normal">Oct 06</div>
          <div>1:00 AM</div>
        </div>
      </div>
    </div>
  );
}
