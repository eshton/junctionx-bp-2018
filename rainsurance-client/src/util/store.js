class Store {

  get location() {
    return this._location;
  }

  set location(val) {
    this._location = val;
  }

  get dateRange() {
    return this._dateRange;
  }

  set dateRange(val) {
    this._dateRange = val;
  }

  get offer() {
    return this._offer;
  }

  set offer(val) {
    this._offer = val;
  }
}

export default new Store();
