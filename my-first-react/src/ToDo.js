import React from 'react';

class ToDo extends React.Component {

    state = {
        items: ['Get Awesome!', 'Play football', 'Sleep'],
    }

    addItem = (event) => {
        event.preventDefault()
        this.setState({items: [...this.state.items, 'work more']})
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={this.addItem}>Add Item</button>
                <h2>This is my awesome ToDo list</h2>
                <ToDoList items={this.state.items}/>
            </div>
        )
    }
}

class ToDoList extends React.Component {
    render(){
        const { items } = this.props;
        const todoItems = items.map(ToDoItem);
        return (
            <ul>
                { todoItems }
            </ul>
        )
    }
}

const ToDoItem = (props) => <li>{props}</li>

export default ToDo;
