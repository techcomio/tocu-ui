
export function verifyValidate(data) {
  const errors = {};
  if(!data.code) {
    errors.code = 'Vui lòng nhập mã xác thực';
  }
  return errors;
}
