import { EventMatch } from '@/types/events.ts';
import MatchItem from '@/pages/sports/MatchItem.tsx';
export default function MatchList({ matches }: { matches: Array<EventMatch> }) {
  return (
    <div>
      {matches.map((match) => (
        <MatchItem key={match.id} match={match} />
      ))}
    </div>
  );
}
