import { Event } from '@/types/events.ts';
import MatchList from '@/pages/sports/MatchList.tsx';

export default function EventItem({ event }: { event: Event }) {
  console.log(event);
  return (
    <div>
      <div className="dropdown-item-container mb-1">
        <div className="flex items-center justify-between gap-1">
          <div className="flex gap-1">
            <div className="image">
              <img src={`svgs/berry.svg`} className="max-h-[16px]" alt="favourite" />
            </div>
            <div className="image">
              <img src={`svgs/berry.svg`} className="max-h-[16px]" alt={event.icon} />
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
