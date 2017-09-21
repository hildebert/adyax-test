import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../ProductInfo';
import CartSku from '../CartSku';

import './cartProduct.scss';

export default function CartProduct({id, quantity, source, sku, onIncrement, onDecrement, onDelete, onSkuChange}) {
	return (
		<article className='cart-product'>
			<ProductInfo {...source}>
				<CartSku options={source.sku} selected={sku} onChange={onSkuChange} />
			</ProductInfo>
			<aside className='cart-product__controls'>
				<button className='cart-product__controls__item _minus' onClick={onDecrement}>-</button>
				<div className='cart-product__controls__qty'>{quantity}</div>
				<button className='cart-product__controls__item _plus' onClick={onIncrement}>+</button>
			</aside>
			<aside className='cart-product__price'>
				{source.price * quantity} &euro;
			</aside>
			<button className='cart-product__delete' onClick={onDelete}>
				delete
			</button>
		</article>
	);
};

CartProduct.propTypes = {
	id: PropTypes.number,
	quantity: PropTypes.number,
	source: PropTypes.object,
	sku: PropTypes.string,
	onIncrement: PropTypes.func,
	onDecrement: PropTypes.func,
	onDelete: PropTypes.func,
	onSkuChange: PropTypes.func
};
