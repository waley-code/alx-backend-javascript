import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.currency = currency;
    this.amount = amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (typeof currency !== 'number') {
      throw new TypeError('currency must be a number');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} ${this.currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
