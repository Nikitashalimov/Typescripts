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
        return this._items.reduce((total, item) => total + item.price, 0);
    }
    allSumSale(discount: number) {
        return (this._items.reduce((total, item) => total + item.price, 0)) * (1 - discount / 100);
    }
    cartDel(idNumber: number) {
        let arrCart = this._items;
        const index = arrCart.findIndex(item => item.id === idNumber);
        if (index !== -1) {
            arrCart.splice(index, 1);
            return arrCart;
        } else {
            return false;
        }
    }
}