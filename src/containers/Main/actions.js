import { createAction } from 'redux-actions';

export const addToBasket = createAction('Main.addToBasket', id => id);
export const removeFromBasket = createAction('Main.removeFromBasket', id => id);
export const incrementQuantity = createAction('App.incrementQuantity', id => id);
export const decrementQuantity = createAction('App.decrementQuantity', id => id);
export const changeSku = createAction('App.changeSku', (id, event) => ({id, sku: event.target.value}));
