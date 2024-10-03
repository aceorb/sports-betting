import EventItem from '@/pages/sports/EventItem.tsx';
import { Event } from '@/types/events.ts';

export default function EventList({ eventList }: { eventList: Array<Event> }) {
  return (
    <div>
      {eventList.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
