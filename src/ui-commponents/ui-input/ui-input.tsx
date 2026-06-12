'use client';

import {
  Controller,
  type Control,
  type FieldPathValue,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import styles from './ui-input.module.scss';

type UiInputProps<T extends FieldValues, TName extends Path<T> = Path<T>> = {
  control: Control<T>;
  dataName: TName;
  dataDefaultValue?: FieldPathValue<T, TName>;
  label: string;
  rules?: RegisterOptions<T, TName>;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const UiInput = <T extends FieldValues, TName extends Path<T> = Path<T>>({
  control,
  dataName,
  dataDefaultValue,
  label,
  rules,
  id,
  type = 'text',
  ...inputProps
}: UiInputProps<T, TName>) => {
  const inputId = id ?? String(dataName);

  return (
    <Controller
      control={control}
      name={dataName}
      defaultValue={dataDefaultValue}
      rules={rules}
      render={({ field, fieldState: { error, invalid } }) => (
        <div className={styles.inputWrapper}>
          <label htmlFor={inputId}>{label}</label>
          <div className={type === 'textarea' ? styles.textareaContainer : styles.inputContainer}>
            {type === 'textarea' ? (
              <textarea {...inputProps} {...field} id={inputId} aria-invalid={invalid} />
            ) : (
              <input {...inputProps} {...field} id={inputId} type={type} aria-invalid={invalid} />
            )}
            <p className={styles.error} role={error ? 'alert' : undefined}>
              {error?.message ?? '\u00A0'}
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default UiInput;
