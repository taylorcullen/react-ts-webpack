import * as React from 'react';

interface IProductProps {
    name: string,
    videoUrl: string
}
interface IProductState {
    selected: boolean
}

export class Product extends React.Component<IProductProps, IProductState> {

    constructor(props: any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selected: false
        };
    }

    handleClick(event: React.MouseEvent<HTMLAnchorElement>) : void{
        event.preventDefault();
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        return <li>
            <a href="#" onClick={this.handleClick}>{this.state.selected ? '[*]' : '[ ]'}{this.props.name}</a>
        </li>;
    }
}