import React, { Component } from 'react'
import {connect} from 'react-redux'

interface IState{
    tabIndex:number
}
let arrList=["全部","已删除","未删除"]
class Footer extends Component <{},IState>{
    state={
        tabIndex:0
    }
    handlClick=(index:number,item:string)=>{
        this.setState({
            tabIndex:index
        })
    }
    render() {
        const {tabIndex}=this.state
        return (
            <div>
                <span>展示</span>
                {
                    arrList.map((item,index)=>{
                        return <button disabled={tabIndex===index} onClick={this.handlClick.bind(this,index,item)} style={{marginLeft:'4px'}} key={index}> {item} </button>
                    })
                }
            </div>
        )
    }
}
export default connect()(Footer)