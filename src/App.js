import React,{Component} from 'react';
import Card from './components/Card'
import Search from './components/search'
import Scroll from'./components/scroll'
import ErrorBoundry from './components/errorBoundry'
import {connect} from 'react-redux'
import {filedChange,requestRobots} from './actions'
const mapStateToProps=(state)=>{
  return {
    searchfield : state.actionReducer.searchfield,
    isPending:state.requestRobots.isPending,
    robots:state.requestRobots.robots,
    error:state.requestRobots.error

  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onsearchChange: (e)=>dispatch(filedChange(e.target.value)),
    onrequestRobot:()=>dispatch(requestRobots())
  }
}
class  App extends Component {
 
  componentDidMount(){
    this.props.onrequestRobot()
  }
  
  render(){
    const {searchfield, onsearchChange,robots,isPending,error}=this.props
    const filterRobot= robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
 const card= filterRobot.map(robot=> <Card key={robot.id}id={robot.id} name={robot.name} email={robot.email}/>)
 if (isPending) {
   return (
    <h1>LOADING ...</h1>
   )
 }else{
  return(
    <div className=" tc">
    <h1>robots friends</h1>
    <Search search={onsearchChange} />
    <Scroll>
      <ErrorBoundry>
        {card}
      </ErrorBoundry>
    </Scroll>
    </div>
  )
 }
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
