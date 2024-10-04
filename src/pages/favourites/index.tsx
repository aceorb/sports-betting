import EventList from '@/pages/sports/EventList.tsx';
import { eventsList } from '@/data/events.ts';

export default function Favourites() {
  return (
    <div>
      <div className="container mx-auto p-4 flex flex-col gap-6 pt-4 ">
        <EventList eventList={eventsList} />
      </div>
    </div>
  );
}
