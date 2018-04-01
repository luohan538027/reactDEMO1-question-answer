var React = require('react');

var Questionitem = require('./questionitem.js');
 
module.exports = class QuestionList extends React.Component{

    
    render(){

      var list = this.props.list;
        
      var questionitemCom = list.map(function(qus){
        
         return <Questionitem  key={qus.key} title={qus.title} content={qus.content} vote={qus.vote} order={qus.key} voteUp={this.props.voteUp} voteDown={this.props.voteDown}/>
      },this)

     console.log(questionitemCom)
      function compare(prop) {
        return function(a,b){
          var v1 = a[prop].vote/1;
          var v2 = b[prop].vote/1;
          return v2 - v1;
        }
      }
      questionitemCom.sort(compare('props'))
     console.log(questionitemCom,22)
      
        return (
            

              <div id="questions" className="">

            {questionitemCom}
              </div>
          
        )
    }
}