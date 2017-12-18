export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';
export * from './Confirm';

// with this kind of export, we cannot use 'export default Card' anymore
// Instead we use 'export { Card: Card }', in ES6 this can be 'export { Card }'
