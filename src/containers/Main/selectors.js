import { createSelector } from 'reselect';

export const selectMain = () => state => state.main;

export const selectProducts = () => createSelector(
	selectMain(),
    main => main.products
);

export const selectCurrentProducts = () => createSelector(
	selectMain(),
    main => main.currentProducts
);

export const cartTotal = () => createSelector(
	selectMain(),
    main => main.currentProducts.reduce((carry, product) => {
		return carry + product.quantity * product.source.price;
	}, 0)
);

export const selectCurrentProductsIds = () => createSelector(
	selectCurrentProducts(),
    currentProducts => currentProducts.map(product => product.id)
);
