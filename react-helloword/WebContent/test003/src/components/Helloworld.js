import React from 'react';
import ReactDom from 'react-dom';


var Header = React.createClass({
  render: function() {
    return (
    <div className="title title_bColor">
		<h3 className="title_text title_tColo">淘宝查询</h3>
		<p className="title_back clearfloat">
			<span className="mui-icon mui-icon-back"></span>
			<a className="title_tColo" href="#" >返回</a>
		</p>
	</div>
    );
  }
});

var Agree =  React.createClass({
	render: function() {
		return(
			<div className="agreeBox">
				<p>我已阅读并同意<a className="agreeText_col" href="http://www.baidu.com">《淘宝授权协议》</a></p>
			</div>
		);
	}
});

var SelectBtn =  React.createClass({
	render: function() {
		return(
			<div className="selectBtn liH_90">
				<input type="submit" value="查询" className="selectBtn_bCol selSubmitBtn" />
			</div>
		);
	}
});

var Input = React.createClass({
	getInput: function(){
		return (
			<div className="mui-input-row liH_90 loginBox clearCircle">
				<label className="label_18">{this.props.label}</label>
				<input type={this.props.elementType} className="password input_82" placeholder={this.props.placeholder} />
				<span className={ this.props.elementType=='text' ? 'mui-icon iconfont icon-eye-close password dis_none' : 'mui-icon iconfont icon-eye-close password ' }  ></span>
			</div>
		)
	},
	render: function() {
		return (
			this.getInput()
		)
	}
});

let inputEleData = {"elements":[]};
var Form =  React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		return {data: []};
	},
	componentDidMount: function() {
	    //this.loadCommentsFromServer();
	    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		console.log('componentDidMount');
		$.each($("form :input"),function(index,input){
			console.log(input.type + input.value + input.placeholder);
		});
	},
	handleSubmit: function(e) {
		//e.preventDefault();
		console.log('handleSubmit');
		return false;
	},
	render: function() {
		console.log('render before');
		
		inputEleData = {"elements":[{"lable":"账号","name":"username","elementType":"text","placeHolder":"公积金账号","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""},{"lable":"密码","name":"password","elementType":"password","placeHolder":"密码","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""},{"lable":"身份证","name":"otherInfo","elementType":"text","placeHolder":"身份证","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""}]};
		
		let inputItems = inputEleData.elements.map(function (ele,index){
			return (
				<Input key={index} label={ele.lable} elementType={ele.elementType} placeholder={ele.placeHolder}/>
			)
		});
		return(
			<form className="mui-input-group userInfo" onSubmit={this.handleSubmit} >
				{inputItems}
			    <Agree />
				<SelectBtn />
			</form>
		);
	}
});

var FormBox = React.createClass({
	render: function() {
		return (
			<section className="mui-content contentBox mt_39">
				<Header />
				<Form />
			</section>
		);
	}
});


ReactDom.render(
  <FormBox />,
  document.getElementById('content')
);