var React = require('react');
var ReactDOM = require('react-dom');

var NewQuestion = require('./newQuestion.js');
var QusetionBtn = require('./questionBtn.js');
var QuestionList = require('./questionList.js');

module.exports = class QuestionApp extends React.Component{

    constructor(props)  {


      super(props);

      var list = [
        {
          title:'产品经理与程序员矛盾的本质是什么？',
          content:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
          vote:'22',
          key:1
        },
        {
          title:'热爱编程是一种怎样的体验？',
          content:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
          vote:'12',
          key:2
        },        
      ];
      this.state = {
        isShowQus: false,
        list:list
      }

      this.handShow = this.handShow.bind(this);
      this.addQus = this.addQus.bind(this);
      this.voteUp = this.voteUp.bind(this);
      this.voteDown = this.voteDown.bind(this);
    }

    handShow(){


      
      console.log(this.state);
      

      this.setState({
        isShowQus: ! this.state.isShowQus,
        
      })

    }
 addQus(qus){
  qus.key = this.state.list.length + 1;
  console.log(qus);
  this.state.list.push(qus)
  
  this.setState({
      list:this.state.list,
      isShowQus:false
  })

 }
 
 voteUp(key){
  this.state.list[key-1].vote =  this.state.list[key-1].vote/1 + 1; 
   this.setState({
     list:this.state.list
   })


 }

 voteDown(key){
   if(this.state.list[key-1].vote/1 >0){
    this.state.list[key-1].vote =  this.state.list[key-1].vote/1 - 1; 
    this.setState({
      list:this.state.list
    })
 
   }
 }



    render(){
        return (
            <div>
              <QusetionBtn handShow = {this.handShow}/>
      <div className="main container">
            <NewQuestion isShowQus = {this.state.isShowQus}  handShow = {this.handShow}  addQuestion = {this.addQus}/>
       
            <QuestionList list={this.state.list} voteUp={this.voteUp} voteDown={this.voteDown}/>
      </div>

            </div>
        )
    }
}