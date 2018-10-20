class Store {

  get location() {
    return this._location;
  }

  set location(val) {
    this._location = val;
  }

  get date() {
    return this._date;
  }

  set date(val) {
    this._date = val;
  } 
}

export default new Store();
