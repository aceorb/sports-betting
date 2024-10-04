import { EventMatch } from '@/types/events.ts';

export default function MatchItem({ match }: { match: EventMatch }) {
  console.log(match);
  return <div>{match.id}</div>;
}
