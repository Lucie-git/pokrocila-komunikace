import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  const handleClick = () => {
    onSwitch(!on);
  };

  return (
    <button
      onClick={handleClick}
      className={on ? 'switch-button switch-button--on' : 'switch-button'}
    >
      <i className="switch-icon" />
      <div className="button-label">{on ? 'Vypnout' : 'Zapnout'}</div>
    </button>
  );
};
