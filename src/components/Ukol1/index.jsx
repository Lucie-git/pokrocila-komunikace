import { useState } from 'react';
import { SwitchButton } from './SwitchButton';
import './style.css';

/*
  Krok 5: Pokud bude chtít uživatel žárovku zapnout, tak se ho ve funkci `handleSwitch` zeptejte, jestli je si 
    opravdu jistý pomocí window.confirm. Pokud uživatel odpoví ne, tak žárovku nezapínejte. 
    Pokud uživatel chce žárovku vypnout, tak se ho neptejte a žárovku rovnou vypněte.
*/

export const Ukol1 = () => {
  const [bulbOn, setBulbOn] = useState(true);

  const handleSwitch = (shouldBeOn) => {
    if (bulbOn === true) {
      setBulbOn(shouldBeOn);
    } else {
      confirm(`"Určitě?"${setBulbOn(shouldBeOn)}`);
    }
  };

  return (
    <>
      <div className={bulbOn ? 'bulb bulb--on' : 'bulb'} />
      <SwitchButton label="Vypnout" onSwitch={handleSwitch} on={bulbOn} />
    </>
  );
};
