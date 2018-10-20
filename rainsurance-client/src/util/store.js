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
}

export default new Store();
