import './side-menu/SideMenu.module.css';

function WalletConnect() {
  return (
    <div className="roboto-bold h-[40px] w-[125px] topbar-rounded-rect topbar-primary-theme flex justify-between pl-[12px]">
      <div className="flex items-center">
        <span className="flex-single-center bg-yellow-500 w-[16px] h-[16px] rounded-full text-[#1B213F] text-[12px] pt-[2px] mr-[5px]">
          $
        </span>
        <span className="text-white text-[14px]">7.456</span>
      </div>
      <button type="button" className="topbar-button topbar-rounded-rect bg-yellow-500 border-yellow-400 -mt-[2px]">
        <span className="text-[25px] text-white">+</span>
      </button>
    </div>
  );
}

export default WalletConnect;
