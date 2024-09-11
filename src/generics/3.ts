function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const result = merge({ email: 'example@gmail.com' }, { number: 6475349652 });
console.log(result);