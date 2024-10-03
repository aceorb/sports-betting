import TodayMatch from '@/pages/sports/TodayMatch.tsx';
import GambleGPTTry from '@/pages/sports/GambleGPTTry.tsx';
import EventList from '@/pages/sports/EventList.tsx';

import { eventsList } from '@/data/events';
function SportsPage() {
  return (
    <div>
      <div className="container mx-auto p-4 flex flex-col gap-6 pt-4 ">
        <TodayMatch />
        <GambleGPTTry />
        <EventList eventList={eventsList} />
      </div>
    </div>
  );
}

export default SportsPage;
