import React, {Component} from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        console.log('constructor is running')
        this.state = {name :props.name}

    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps is running')
        return(
            {name: "mss "+state.name}
        )
    }
    componentDidMount() {
        console.log('componentDidMount is running')
        setTimeout(()=>{this.setState({name:'sima'})})
        console.log(this.state.name)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate is running')
        if(nextState.name===this.props.name){
            return false
        }else return true
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate is running')
        return null
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is running')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount is running')
    }

    render() {
        console.log('render is running')
        const {name}=this.state
        return (
            <div>
                {/*<input type={'text'} value={this.state.name}/>*/}
                <h1>hy my original name is: {this.props.name}</h1>
                <h1>Hello I'm {name} component</h1>
                <button onClick={()=>{
                    this.setState({name: 'test'})
                }}>Change</button>
            </div>

        )
    }
}

export default Test