import ImgLogo from '@assets/images/logo.svg';
export default function GambleGPTTry() {
  return (
    <div className="rounded-lg group-container">
      <div className="p-3 flex items-center justify-between gap-1">
        <div className="image">
          <img src={ImgLogo} className="max-h-[67px]" alt="gamblegpt logo" />
        </div>
        <div className="text flex flex-col gap-1">
          <div className="roboto-bold text-white text-lg leading-4 text-shadow">GambleGPT</div>
          <div className="proximanova-bold leading-3 text-[11px] description-color text-shadow">
            The next generation of bet selection
          </div>
        </div>
        <button className="primary-button righteous-regular text-white min-w-[100px]">Try it now!</button>
      </div>
    </div>
  );
}
