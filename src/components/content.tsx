import React, { Component } from 'react'
import {connect} from 'react-redux'

interface IProps{
    initState:any[]
}
class content extends Component<IProps> {
    render() {
        let {initState}=this.props
        return (
            <div>
                {
                    initState.map((item,index)=>{
                        return <div key={index}> {item.value} </div>
                    })
                }
            </div>
        )
    }
}
const mapState=(state:any)=>{
    // console.log(state,'shujv')
    return {
        initState:state
    }
}
export default connect(mapState)(content)