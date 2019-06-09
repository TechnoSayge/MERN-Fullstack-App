import React, { Component } from 'react';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this);
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this);
        this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeToDoDescription(e) {
        this.setState = ({
            todo_description: e.target.value
        });
    }
    onChangeToDoResponsible(e) {
        this.setState = ({
            todo_responsible: e.target.value
        });
    }
    onChangeToDoPriority(e) {
        this.setState = ({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        //onSubmit logic will go here
        //will access to see data

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_complete}`);

        this.setState = ({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.todo_description} onChange={this.onChangeToDoDescription}></input>
                    </div>
                </form>
            </div>
        )
    }
}