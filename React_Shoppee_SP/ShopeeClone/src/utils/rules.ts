import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Email sai định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài Email từ 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài Email từ 5-160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài Email từ 5-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài Email từ 5-160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài Email từ 5-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài Email từ 5-160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === (getValues('password'), console.log('111', value)) || 'Nhập lại Password không khớp!'
        : undefined
  }
})
