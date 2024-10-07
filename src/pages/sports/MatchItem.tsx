import { EventMatch } from '@/types/events.ts';
import styles from './MatchItem.module.css';
export default function MatchItem({ match }: { match: EventMatch }) {
  console.log(match);
  return (
    <div className={styles.match_item_container}>
      <div className="flex gap-4 sm:gap-4 mb-2 text-center text-white">
        <div className="flex-1 flex flex-col gap-2 items-center justify-center min-h-30">
          <div className="relative w-16 h-16">
            <img src={match.player1.icon} alt="player1" className="w-full"/>
          </div>
          <p className="font-semibold text-[11px]">{match.player1.name}</p>
        </div>
        <div className="flex-1 flex flex-col gap-1 items-center justify-center">
          <p className="text-white">{match.time}</p>
          <span className="text-white">{match.set}</span>
          <p className="flex gap-2 text-2xl font-bold">
            <span>{match.player1.score}</span>
            <span>:</span>
            <span>{match.player2.score}</span>
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center justify-center min-h-30">
          <div className="relative w-16 h-16">
            <img src={match.player2.icon} alt="player2"  className="w-full"/>
          </div>
          <p className="font-semibold text-[11px]">C{match.player2.name}</p>
        </div>
      </div>

      <div className="flex gap-2 sm:gap-4 justify-between">
        <div className={styles.info_box}>
          <span className="field-text">1</span>
          <span className="value-text">{match.player1.point}</span>
        </div>
        <div className={styles.info_box}>
          <span className="field-text">2</span>
          <span className="value-text">{match.player2.point}</span>
        </div>
      </div>
    </div>
  );
}
