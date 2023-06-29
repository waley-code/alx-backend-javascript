import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    if (typeof sqrt !== 'number') throw new Error();
    super(sqrt);
    this.floors = floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') throw new Error();
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
