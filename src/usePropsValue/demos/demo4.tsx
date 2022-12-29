import { useUpdate } from 'ahooks';
import React, { FC, SetStateAction, useRef, useState } from 'react';

type Options<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
};

function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options;
  const isControlled = value !== undefined;

  const update = useUpdate();

  const stateRef = useRef<T>(isControlled ? value : defaultValue);
  if (isControlled) {
    stateRef.current = value;
  }

  const setState = (v: SetStateAction<T>) => {
    const nextValue =
      typeof v === 'function'
        ? (v as (prevState: T) => T)(stateRef.current)
        : v;
    if (nextValue === stateRef.current) return;
    stateRef.current = nextValue;
    update();
    onChange?.(nextValue);
  };

  return [stateRef.current, setState] as const;
}

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = Omit<
  NativeInputProps,
  'onChange' | 'value' | 'defaultValue'
> & {
  value?: string;
  defaultValue: string;
  onChange?: (val: string) => void;
};

const Input: FC<InputProps> = (props) => {
  const [value, setValue] = usePropsValue(props);
  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const Parent = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <div>
        <Input placeholder="非受控" defaultValue="hello world" />
      </div>
      <div>
        <Input
          placeholder="受控"
          defaultValue="hello world"
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
};

export default Parent;
