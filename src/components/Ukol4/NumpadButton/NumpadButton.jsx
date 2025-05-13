import './style.css';

// Do komponenty `NumpadButton` přidejte prop `onDigitClick`, která bude očekávat
//     funkci, která se zavolá při kliknutí na tlačítko a předá se jí číslo, které je na
//     tlačítku napsané.

export const NumpadButton = ({ digit, onDigitClick }) => {
  return (
    <button
      className="numpad-button"
      onClick={() => {
        onDigitClick(digit);
        console.log(digit);
      }}
    >
      {digit}
    </button>
  );
};
