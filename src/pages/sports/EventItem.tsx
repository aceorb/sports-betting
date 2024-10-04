import React, { useState } from 'react';
import classNames from 'classnames';

import { Event } from '@/types/events.ts';
import MatchList from '@/pages/sports/MatchList.tsx';
import ImgFavouriteStar from '@assets/images/favorite-star-svgrepo-com.svg';

export default function EventItem({ event }: { event: Event }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleShowMatch = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleFavourite = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    console.log(id);
    setIsFavourite((isFavourite) => !isFavourite);
  };
  return (
    <div className={classNames('group', { 'is-open': isOpen })}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="dropdown-item-container mb-1 cursor-pointer" onClick={handleShowMatch} role="button" tabIndex={0}>
        <div className="flex items-center justify-between gap-1 ">
          <div className="flex gap-1">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div className="image" onClick={(e) => handleFavourite(e, event.id)} role="button" tabIndex={0}>
              <img
                src={ImgFavouriteStar}
                className={classNames('max-h-[16px] w-[16px]', { 'filter grayscale': isFavourite })}
                alt="favourite"
              />
            </div>
            <div className="image px-2">
              <img src={event.icon} className="max-h-[16px] w-[16px]" alt={event.icon} />
            </div>
            <div className="proximanova-bold leading-4 text-[12px] dropdown-text-color">{event.title}</div>
          </div>
          <div className="space-x-1"></div>
          <div className="transition-transform group-[.is-open]:rotate-180">
            <img src={`svgs/vector.svg`} className="max-h-[8px]" alt="dropdown" />
          </div>
        </div>
      </div>
      <div className="peer transition-max-height duration-300 overflow-hidden max-h-0 group-[.is-open]:max-h-[500px]">
        <MatchList matches={event.matches} />
      </div>
      {/*)}*/}
    </div>
  );
}
