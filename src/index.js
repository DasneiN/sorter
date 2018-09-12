class Sorter {
  constructor() {
    this.values = [];
  }

  add(element) {
    this.values.push(element);
  }

  at(index) {
    return this.values[index];
  }

  get length() {
    return this.values.length;
  }

  toArray() {
    return this.values;
  }

  sort(indices) {
    let sortFunction = this.sortFunction ? this.sortFunction : (a, b) =>  a - b,
        workArray = [];

    indices.sort();
        
    for (let i = 0; i < indices.length; i++) {
      workArray.push(this.values[indices[i]]);
    }

    workArray.sort(sortFunction);

    for (let i = 0; i < indices.length; i++) {
      this.values[indices[i]] = workArray[i];
    }

  }

  setComparator(compareFunction) {
    this.sortFunction = compareFunction;
  }
}

module.exports = Sorter;