import React from 'react'
import { Paper, Grid, TextField, Button } from '@mui/material';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {item: {title: ""}} //사용자의 입력을 저장할 오브젝트
        this.add = props.add; // props의 함수를 this.add에 연결
    }
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem})
        console.log(thisItem);
    }
    
    onButtonClick = () => {
        this.add(this.state.item); // add 함수 사용
        this.setState({item: {title: ""}})
    }
    
    enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16}}>
                        <TextField 
                            placeholder="Add Todo here" 
                            fullWidth
                            onChange={this.onInputChange}
                            value={this.state.item.title} 
                            onKeyPress={this.enterKeyEventHandler}/>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                            fullWidth 
                            color="secondary" 
                            variant="outlined"
                            onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }   
}

export default AddTodo;
