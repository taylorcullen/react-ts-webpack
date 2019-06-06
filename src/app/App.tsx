import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductList } from './components/ProductList/ProductList';
import { Product } from './components/Product/Product';

declare let module: any

ReactDOM.render(
    <ProductList>
        <Product name="Test1" videoUrl="http://www.youtube.com" />
        <Product name="Test2" videoUrl="http://www.youtbue.com" />
    </ProductList>
    ,document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
 }