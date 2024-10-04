import { CardButtonType } from '@/types/cardgroup.ts';

export default function CardButton({ title, icon, description, buttonTitle }: CardButtonType) {
  return (
    <div className="rounded-lg group-container flex flex-col justify-center items-center gap-2 p-6">
      <img src={icon} alt="card-logo" width={100} />
      <div className="righteous-bold text-white text-[2.125m]">{title}</div>
      <div className="roboto-regular description-color text-[10px] text-center">{description}</div>
      <button className="primary-button righteous-regular text-white min-w-[100px]">{buttonTitle}</button>
    </div>
  );
}
