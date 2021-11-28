import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';


test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('test cart - items', () => {
  let cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'fantastic', '137 min/02:17'));
  expect(cart.items).toBe(
    [
      Book {
        id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225
      },
      MusicAlbum {
        id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900
      },
      Movie {
        id: 1010, name: 'Avengers', price: 1500, year: 2012, country: 'USA', slogan: 'Avengers Assemble', style: 'fantastic', time: '137 min/02:17'
      }
    ]);
});

test('test cart - allSum', () => {
  let cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'fantastic', '137 min/02:17'));
  expect(cart.allSum()).toBe(4400);
});

test('test cart - allSumSale', () => {
  let cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'fantastic', '137 min/02:17'));
  expect(cart.allSumSale(20)).toBe(3520);
});

test('test cartDel', () => {
  let cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'fantastic', '137 min/02:17'));
  expect(cart.cartDel(1008)).toBe(
    [
      Book {
        id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225
      },
      Movie {
        id: 1010, name: 'Avengers', price: 1500, year: 2012, country: 'USA', slogan: 'Avengers Assemble', style: 'fantastic', time: '137 min/02:17'
      }
    ]);
});