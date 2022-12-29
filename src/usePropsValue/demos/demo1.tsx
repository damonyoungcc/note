import React, { FC, useEffect, useState } from 'react';

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = Omit<NativeInputProps, 'onChange' | 'value'> & {
  value?: string;
  onChange?: (val: string) => void;
};

/**
 * 非受控模式渲染一次 Parent start, Parent render, child start, child renders
 *
 * 受控模式：第一次加载：1、Parent start, Parent render, child start, child render 2、child trigger useEffect，值相同不会触发render
 *         更新值：1、Parent start, Parent render, child start, child render, child trigger useEffect, child start, child render, child trigger useEffect, child start, child render
 */

const Input: FC<InputProps> = (props) => {
  console.log('child start');
  const isControlled = props.value !== undefined;

  const [value, setValue] = useState(isControlled ? props.value : '');
  useEffect(() => {
    console.log('child trigger useEffect');
    if (isControlled) {
      setValue(props.value);
    }
  });
  console.log('child render');
  return (
    <input
      {...props}
      value={value}
      onChange={(e) => {
        if (!isControlled) {
          setValue(e.target.value);
        }
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
