import * as React from 'react';
import * as styles from './ProductList.scss';

interface IProductListProps {
    children?: JSX.Element | JSX.Element[]
}

export class ProductList extends React.Component<IProductListProps, {}> {
    render() {
        return <React.Fragment><h1>My List</h1><ul>{this.props.children}</ul><button className={styles.btn}>Next</button></React.Fragment>;
    }
}