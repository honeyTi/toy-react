import { createElement, Component, render } from './toy-react';

class MyComponent extends Component{
    render() {
        return <div>
            <h1>子元素</h1>
            {this.children}
        </div>
    }
}


render(<MyComponent id="a" class="b">
    <div>abc</div>
    <div></div>
</MyComponent>, document.body)