import React, { Component } from 'react'
import { ListItem, Checkbox, ListItemText, InputBase } from '@mui/material';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {item: props.item}
    }
    render() {  
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done} />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label": "naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        );  
    }
}

export default Todo;