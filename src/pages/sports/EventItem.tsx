import { Event } from '@/types/events.ts';
import MatchList from '@/pages/sports/MatchList.tsx';
import ImgFavouriteStar from '@assets/images/favorite-star-svgrepo-com.svg';

export default function EventItem({ event }: { event: Event }) {
  return (
    <div>
      <div className="dropdown-item-container mb-1">
        <div className="flex items-center justify-between gap-1">
          <div className="flex gap-1">
            <div className="image">
              <img src={ImgFavouriteStar} className="max-h-[16px] w-[16px]" alt="favourite" />
            </div>
            <div className="image px-2">
              <img src={event.icon} className="max-h-[16px] w-[16px]" alt={event.icon} />
            </div>
            <div className="proximanova-bold leading-4 text-[12px] dropdown-text-color">{event.title}</div>
          </div>
          <div className="space-x-1"></div>
          <button>
            <img src={`svgs/vector.svg`} className="max-h-[8px]" alt="dropdown" />
          </button>
        </div>
      </div>
      <MatchList matches={event.matches} />
    </div>
  );
}
