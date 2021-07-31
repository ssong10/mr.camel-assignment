const CORRECT_TYPE = ['string', 'number', 'boolean', 'null', 'object', 'array'];

const UNINTEREST_KEY = 'unInterest-list';
const RECENTSHOW_KEY = 'recent-show-list';


export function setItem(key, data) {
  if (!CORRECT_TYPE.includes(typeof data)) {
    console.error('incorrect data type');
    return null;
  }

  localStorage.setItem(key, JSON.stringify(data));
}
export function getItem(key) {
  let loadedData = localStorage.getItem(key);

  if (loadedData === null) {
    console.error('Non existent key');
    return null;
  }

  return JSON.parse(loadedData);
}

export class ArraylocalStorage {
  constructor(key) {
    const loadedData = getItem(key) || [];

    this.key = key;
    this.items = loadedData;
  }

  set items(data) {
    this._list = data;
    setItem(this.key, this._list);
  }

  get items() {
    return this._list;
  }

  push(data) {
    if (this.includes(data.id)) {
      const index = this.indexOf(data.id);

      this.items.splice(index, 1);
    }

    this.items.push(data);
    setItem(this.key, this.items);
  }

  includes(id) {
    return this.items.some(item => item.id === id);
  }

  indexOf(id) {
    for (const index in this.items) {
      const item = this.items[index];

      if (item.id === id) return index;
    }

    return -1;
  }
}

export const unInterestLocalStorage = new ArraylocalStorage(UNINTEREST_KEY);
export const recentShowLocalStorage = new ArraylocalStorage(RECENTSHOW_KEY);