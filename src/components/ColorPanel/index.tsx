import { Square } from './styles';

type Props = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export const ColorPanel = ({ red, green, blue, alpha }: Props) => (
  <Square
    data-cy="square"
    style={{
      backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
    }} />
);