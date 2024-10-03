import styles from './index.module.css';

function SideMenu() {
  return (
    <div className="pl-[10px]">
      <button type="button" className={`${styles.button} ${styles.primary_theme} ${styles.rounded_rect}`}>
        <span>
          <img src="/svgs/menu.svg" alt="Menu" />
        </span>
      </button>
    </div>
  );
}

export default SideMenu;
