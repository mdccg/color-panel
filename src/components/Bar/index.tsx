import { Field, Label } from './styles';

type Props = {
  label: string;
  value: number;
  setValue: (number: number) => void;
  min: number;
  max: number;
}

export const Bar = ({ label, value, setValue, min, max }: Props) => {
  return (
    <Field>
      <Label>{label}</Label>
      <input
        type="range"
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        min={min}
        max={max}
        step={label === 'Alpha' ? 0.1 : 1} />
    </Field>
  );
}