'use strict';

export function loginValidate(data) {
  const errors = {};
  if(!data.mobilePhone) {
    errors.mobilePhone = 'Nhập số điện thoại của bạn';
  } else if(!/^([0-9]{10,11})$/.test(data.mobilePhone)) {
    errors.mobilePhone = 'Số điện thoại không đúng'
  }
  if(!data.password) {
    errors.password = 'Nhập mật khẩu của bạn';
  }
  return errors;
}

export function asyncValidate(data) {
  return new Promise((resolve, reject) => {
    const errors = {};
    // do async validation
    resolve(errors);
  });
}
