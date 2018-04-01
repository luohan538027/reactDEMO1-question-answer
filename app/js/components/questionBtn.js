var React = require('react');

module.exports = class QuestionBtn extends React.Component{


    render(){
        return(
            <div>
                                 <div className="jumbotron text-center">
          <div className="container">
            <h1>React问答11111</h1>
            <button id="add-question-btn" className="btn btn-success" onClick={this.props.handShow}>添加问题</button>
          </div> 
      </div>
            </div>
        )
    }
}