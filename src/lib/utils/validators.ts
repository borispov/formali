export function isValidEmail(value) {
  return (
    (value &&
      !!value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )) ||
    false
  );
}

// should extract out the element selector...
export function emailValidation(sel: HTMLInputElement | null) {
  if (!sel) return false;
  let email = sel.value;
  return isValidEmail(email);
}

const israelPhoneRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;
export function isValidIsraeliPhone(phoneNumber: string) {
  return israelPhoneRegex.test(phoneNumber);
}

export function phoneValidation(phoneNumber: string, _type: string = "il") {
  console.log("inside validator: phoneValidation");
  console.log(isValidIsraeliPhone(phoneNumber));
  return isValidIsraeliPhone(phoneNumber);
}
