export default class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('code must be a string');
    }
    this._code = code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
