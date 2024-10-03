import styles from './index.module.css';

function WalletConnect() {
  return (
    <div
      className={`roboto-bold h-[40px] w-[125px] flex justify-between pl-[12px] ${styles.primary_theme} ${styles.rounded_rect}`}
    >
      <div className="flex items-center">
        <span className="flex-single-center bg-yellow-500 w-[16px] h-[16px] rounded-full text-[#1B213F] text-[12px] pt-[2px] mr-[5px]">
          $
        </span>
        <span className="text-white text-[14px]">7.456</span>
      </div>
      <button
        type="button"
        className={`bg-yellow-500 border-yellow-400 -mt-[2px] ${styles.button} ${styles.rounded_rect}`}
      >
        <span className="text-[25px] text-white">+</span>
      </button>
    </div>
  );
}

export default WalletConnect;
