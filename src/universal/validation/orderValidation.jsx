'use strict';

export function orderValidate(data) {
  const errors = {};
  if(!data.name) {
    errors.name = 'Nhập họ tên của bạn';
  }
  if(!data.phone) {
    errors.phone = 'Nhập số điện thoại của bạn';
  } else if(!/^([0-9]{10,11})$/.test(data.phone)) {
    errors.phone = 'Số điện thoại không đúng';
  }
  if(!data.address) {
    errors.address = 'Nhập địa chỉ người nhận';
  }
  if(!data.city) {
    errors.city = 'Chọn tỉnh thành người nhận';
  }
  if(!data.district) {
    errors.district = 'Chọn quận huyện người nhận';
  }
  return errors;
}
