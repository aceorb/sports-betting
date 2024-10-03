function WalletConnect() {
  return (
    <div className="roboto-bold h-[40px] w-[125px] rounded-[15px] border-2 border-[#1F2848] bg-[#1B213F] flex justify-between items-center pl-[12px]">
      <div className="flex items-center">
        <span className="flex justify-center items-center bg-yellow-500 w-[16px] h-[16px] rounded-full text-[#1B213F] text-[12px] pt-[2px] mr-[5px]">
          $
        </span>
        <span className="text-white text-[14px]">7.456</span>
      </div>
      <button type="button" className="w-[40px] h-[40px] border-2 bg-yellow-500 border-yellow-400 rounded-[15px]">
        <span className="text-[25px] text-white">+</span>
      </button>
    </div>
  );
}

export default WalletConnect;
