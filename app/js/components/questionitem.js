var React = require('react');

module.exports = class Questionitem extends React.Component{

  constructor(props){
    super(props)
  }

   clickUp(e){
    
     this.props.voteUp(this.props.order);
   }
 
   clickDown(e){
    
    this.props.voteDown(this.props.order);
  }

    render(){


        return(
            <div>
                          <div className="media">
            <div className="media-left">
              <button className="btn btn-default" onClick={this.clickUp.bind(this)}>
                <span className="glyphicon glyphicon-chevron-up" ></span>
                <span className="vote-count">{this.props.vote}</span>
              </button>
              <button className="btn btn-default" onClick={this.clickDown.bind(this)}>
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.title}</h4>
              <p>{this.props.content}</p>
            </div>
          </div>
            </div>
        )
    }
}