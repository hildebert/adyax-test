import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import ProductsList from 'components/ProductsList';
import Product from 'components/Product';
import Cart from 'components/Cart';
import CartProduct from 'components/CartProduct';
import * as actions from './actions';
import * as selectors from './selectors.js';
import './main.scss';

export class Main extends React.Component {
	static propTypes = {
		products: PropTypes.array,
		cartTotal: PropTypes.number,
		currentProducts: PropTypes.array,
		currentProductsIds: PropTypes.array,
		incrementQuantity: PropTypes.func,
		decrementQuantity: PropTypes.func,
		addToBasket: PropTypes.func,
		removeFromBasket: PropTypes.func,
		changeSku: PropTypes.func
	};

	handleAddToBasket = id => this.props.addToBasket(id);
	handleIncrement = id => this.props.incrementQuantity(id);
	handleDecrement = id => this.props.decrementQuantity(id);
	handleRemove = id => this.props.removeFromBasket(id);
	handleSkuChange = (id, sku) => this.props.changeSku(id, sku);

	render() {
		const {
			currentProducts,
			currentProductsIds,
			products,
			cartTotal
		} = this.props;

		return (
			<div className='main'>
				<ProductsList className='products'>
					{products.map(product => <Product
						key={product.id}
						inBasket={Boolean(currentProductsIds.includes(product.id))}
						product={product}
						addToBasket={this.handleAddToBasket}
					/>)}
				</ProductsList>
				<Cart total={cartTotal}>
					<ProductsList className='cart-products'>
						{currentProducts.map(product => <CartProduct {...product}
							key={product.id}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onDelete={this.handleRemove}
							onSkuChange={this.handleSkuChange}
						/>)}
					</ProductsList>
				</Cart>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	products: selectors.selectProducts(),
	currentProducts: selectors.selectCurrentProducts(),
	cartTotal: selectors.cartTotal(),
	currentProductsIds: selectors.selectCurrentProductsIds()
});

export default connect(mapStateToProps, actions)(Main);
