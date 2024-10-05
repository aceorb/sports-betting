import { MatchSummaryCount } from '@/types/events.ts';
import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './SportIconBadge.module.css';

export default function SportIconBadge({
  data,
  activeId,
  onHandleClick,
}: {
  data: MatchSummaryCount;
  activeId: number;
  onHandleClick: () => void;
}) {
  const isOpen = useMemo(() => data.id == activeId, [activeId]);

  return (
    <button
      onClick={onHandleClick}
      className={classNames('group', styles.sports_icon_badge, {
        'is-open text-white acitve-glow ': isOpen,
        'description-color': !isOpen,
      })}
    >
      {data.icon === 'live' ? (
        <div className={classNames('px-[13px]', styles.live_dot)} />
      ) : (
        <img src={data.icon} alt="sport-icon" className="w-[20px] min-w-[20px]" />
      )}

      <div className="flex transition-all duration-300 overflow-hidden w-0 group-[.is-open]:w-[120px]">
        <span className="ml-2">{data.title}</span>
        <span className="ml-auto">{data.count}</span>
      </div>
    </button>
  );
}
