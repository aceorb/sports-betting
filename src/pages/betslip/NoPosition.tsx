import ImgNoData from '@assets/images/no-data.webp';
export default function NoPosition() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center pt-10">
      <img src={ImgNoData} alt="no position" width={100} />
      <div className="text-white text-[24px]">No Positions</div>
      <div className="text-white text-[12px] max-w-64 text-center">
        Add position, choose a market and make your selection.
      </div>
    </div>
  );
}
