var React = require("react");


module.exports = class newQuestion extends React.Component{

    addForm(){
        if(this.refs.qTitle.value != '' && this.refs.qContent.value != '') {
            var newItem = {
                content:this.refs.qContent.value,
                title:this.refs.qTitle.value ,
                vote:'0',
                
            }

            this.props.addQuestion(newItem);


        }else{
            alert('情输入内容');
        }

    }
    render(){

        var styleobj = {
            display : this.props.isShowQus ? 'block':'none'
        }


        return(
            <div>
                        <form name="addQuestion" className="clearfix" style={ styleobj} onSubmit={(e)=>e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="qtitle">问题</label>
            <input type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" ref='qTitle'/>
          </div>
          <textarea className="form-control" rows="3" placeholder="问题的描述" ref='qContent'></textarea>
          <button className="btn btn-success pull-right"  onClick={this.addForm.bind(this)}>确认</button>
          <button className="btn btn-default pull-right" onClick={this.props.handShow}>取消</button>
        </form>
            </div>
        )
    }
}