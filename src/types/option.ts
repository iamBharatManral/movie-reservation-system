type Option<T> = Some<T> | None;

class Some<T> {
  constructor(private value: T) { }
  unwrap() { return this.value }
  isSome(): this is Some<T> { return true; }
  isNone(): this is None { return false; }
}

class None {
  isSome(): this is Some<never> { return false; }
  isNone(): this is None { return true; }
}

