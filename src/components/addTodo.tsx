import React, { Component } from 'react'
import {connect} from 'react-redux'

interface IProps{
    addTodo:(value:string)=>void
}
let input:HTMLInputElement|null
class addTodo extends Component<IProps>{
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <input type="text" ref={node=>input=node}/>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
    handleSubmit(e:any) {
        // 接触默认事件
        e.preventDefault()
        if(!input?.value){
            alert('输入不能为空')
        }
        // !取HTMLInputElement
        let value=input!.value
        this.props.addTodo(value)
    }
}
const mapState=()=>{
    return{

    }
}
const mapDispatch=(dispatch:any)=>{
    return{
       addTodo(value:string){
           dispatch({
               type:'ADD_TODO',value
           })
       } 
    }
}
export default connect(mapState,mapDispatch)(addTodo)