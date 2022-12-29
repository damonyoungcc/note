import { useUpdate } from 'ahooks';
import React, { FC, useRef, useState } from 'react';

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = Omit<NativeInputProps, 'onChange' | 'value'> & {
  value?: string;
  onChange?: (val: string) => void;
};

const Input: FC<InputProps> = (props) => {
  console.log('child start');
  const isControlled = props.value !== undefined;

  const stateRef = useRef(props.value);
  if (isControlled) {
    stateRef.current = props.value;
  }

  // const finalValue = isControlled ? props.value : stateRef.current;

  const update = useUpdate();

  console.log('child end');
  return (
    <input
      {...props}
      value={stateRef.current}
      onChange={(e) => {
        stateRef.current = e.target.value;
        update();
        props.onChange?.(e.target.value);
      }}
    />
  );
};

const Parent = () => {
  console.log('Parent start');
  const [value, setValue] = useState('Hello World');
  console.log('Parent render');
  return (
    <div>
      <div>{/* <Input placeholder="非受控" /> */}</div>
      <div>
        <Input
          placeholder="受控"
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
};

export default Parent;
