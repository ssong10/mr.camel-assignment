const CORRECT_TYPE = ['string','number','boolean','null','object','array'];

const UNINTEREST_KEY = 'unInterest-list';
const RECENTSHOW_KEY = 'recent-show-list';

export function setItem(key,data) {
    if (!CORRECT_TYPE.includes(typeof data)) {
        console.error('incorrect data type');
        return;
    }

    localStorage.setItem(key,JSON.stringify(data));
}

export function getItem(key) {
    let loadedData = localStorage.getItem(key);

        if (loadedData === null) { 
            console.error('incorrect key');
            return;
        }
    
    return JSON.parse(loadedData);
}

export class ArraylocalStorage{
    constructor(key) {
        const loadedData = localStorage.getItem(key);

        if (loadedData === null) {
            setItem(key,[]);
        }

        this.list = getItem(key);
        this.key = key;
    }

    push(data) {
        if (this.includes(data.id)) {
            const index = this.indexOf(data.id);
            this.list.splice(index,1);
        }

        this.list.push(data);
        setItem(this.key,this.list);
    }

    includes(id) {
        return this.list.some(item=> item.id === id);
    }

    indexOf(id) {
        for (const index in this.list) {
            const item = this.list[index];

            if (item.id === id) return index;
        }

        return -1;
    }

   
}

export const unInterestLocalStorage = new ArraylocalStorage(UNINTEREST_KEY);
export const recentShowLocalStorage = new ArraylocalStorage(RECENTSHOW_KEY);

