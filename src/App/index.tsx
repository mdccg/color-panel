import { useState } from 'react';
import { ColorPanel } from '../components/ColorPanel';
import { Bars, Main } from './styles';
import { Bar } from './../components/Bar';

export const App = () => {
  const [red, setRed]     = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue]   = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(0);

  return (
    <Main>
      <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
      <Bars>
        <Bar label="Red"   value={red}   setValue={setRed}   min={0} max={255} />
        <Bar label="Green" value={green} setValue={setGreen} min={0} max={255} />
        <Bar label="Blue"  value={blue}  setValue={setBlue}  min={0} max={255} />
        <Bar label="Alpha" value={alpha} setValue={setAlpha} min={0} max={1}   />
      </Bars>
    </Main>
  );
}