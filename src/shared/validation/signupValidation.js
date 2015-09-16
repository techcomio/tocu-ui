'use strict';

export function signupValidate(data) {
  const errors = {};
  if(!data.name) {
    errors.name = 'Nhập họ tên của bạn';
  } else if(!/^[a-zA-Z0-9/ \_-]*$/.test(data.name)) {
    errors.name = 'Họ tên không chứa kí tự đặc biệt';
  }
  if(!data.mobilePhone) {
    errors.mobilePhone = 'Nhập số điện thoại của bạn';
  } else if(!/^([0-9]{10,11})$/.test(data.mobilePhone)) {
    errors.mobilePhone = 'Số điện thoại không đúng';
  }
  if(!data.password) {
    errors.password = 'Nhập mật khẩu của bạn';
  }
  return errors;
}
