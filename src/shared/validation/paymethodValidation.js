'use strict';

export function paymethodValidation(data) {
  const errors = {};

  if(!data.shipping) {
    errors.diachi = 'Chọn phương thức thanh toán';
  }

  return errors;
}
