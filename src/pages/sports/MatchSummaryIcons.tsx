import { useState } from 'react';
import { matchesCountList } from '@/data/events';
import SportIconBadge from '@/pages/sports/SportIconBadge.tsx';
export default function MatchSummaryIcons() {
  const [activeId, setActiveId] = useState(0);
  return (
    <div className="flex w-full px-4">
      <div className="flex items-center mx-auto overflow-x-auto h-16 gap-4">
        {matchesCountList.map((matchesCount) => (
          <SportIconBadge
            key={matchesCount.id}
            data={matchesCount}
            activeId={activeId}
            onHandleClick={() => {
              setActiveId(matchesCount.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
