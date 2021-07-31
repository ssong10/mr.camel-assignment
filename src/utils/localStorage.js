const CORRECT_TYPE = ['string', 'number', 'boolean', 'null', 'object', 'array'];

export function setItem(key, data) {
  if (!CORRECT_TYPE.includes(typeof data)) {
    console.error('incorrect data');
    return;
  }

  localStorage.setItem(key, JSON.stringify(data));
}

function getItem(key) {
  const loadedData = localStorage.getItem(key);

  if (loadedData === null) {
    console.error('incorrect key');
    return;
  }

  return JSON.parse(loadedData);
}

export class ArraylocalStorage {
  constructor(key) {
    this.key = key;
    this.data = getItem(key);
  }

  push(data) {
    this.data.push(data);
    setItem(this.key, this.data);
  }

  includes(id) {
    return this.data.includes(id);
  }
}
