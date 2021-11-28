import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    allSum() {
        let arrCart = this._items;
        let sale = 0;
        for (let i = 0; i < arrCart.length; i++) {
            sale = sale + arrCart[i].price;
        }
        return sale;
    }
    allSumSale(discount: number) {
        let arrCart = this._items;
        let sale = 0;
        for (let i = 0; i < arrCart.length; i++) {
            sale = sale + arrCart[i].price;
        }
        return sale * (1 - discount / 100);
    }
    cartDel(idNumber: number) {
        let arrCart = this._items;
        for (let i = 0; i < arrCart.length; i++) {
            if (arrCart[i].id === idNumber) {
                this._items.splice(i, 1);
                return this._items;
            }
        }
    }
}