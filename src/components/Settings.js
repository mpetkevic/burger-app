import React from 'react';
import {connect} from 'react-redux'


class Settings extends React.Component{
  state={
    name:'',
    price:''
  }
  render(){
    return (
      <div>
        <form onSubmit={(e)=>this.props.addSpecial(e,this.state)}>
          <input type="text"/>
          <input type="number"/>
          <button>add</button>
        </form>
        {this.props.workers.map((worker) => <li key={worker}>{worker}</li>)}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    workers: state.workers
  }
}
export default connect(mapStateToProps)(Settings);