import React from 'react';
import ProductCardStructure from './ProductCardStructure';
import OrderCardStructure from './OrderCardStructure';
import { useState } from 'react';

export default function HomePage() {
	const [page, setPage] = useState('products');
	const changePage = () => {
		setPage(page === 'products' ? 'orders' : 'products');
	};

	return (
		<>
			<div className="options">
				<button onClick={changePage}>
					<div className="feature">
						<h1>My Shop</h1>
					</div>
				</button>
				<button onClick={changePage}>
					<div className="feature">
						<h1>My Order</h1>
					</div>
				</button>
			</div>
			{page === 'products' && <ProductCardStructure />}
			{page === 'orders' && <OrderCardStructure />}
		</>
	);
}