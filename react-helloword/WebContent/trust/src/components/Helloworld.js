import React from 'react';
import ReactDom from 'react-dom';

import Header from './Header';


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
				<label className="label_19">{this.props.label}</label>
				<input type={this.props.elementType} className="password input_81" placeholder={this.props.placeholder} name={this.props.name} />
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
			console.log(input.name + " " + input.type + " " + input.value + input.placeholder);
		});
	},
	handleSubmit: function(e) {
		//e.preventDefault();
		console.log('handleSubmit');
		return false;
	},
	getEleFromServer: function() {
		let inputEleData = {"elements":[
		                            {"lable":"手机号","name":"username","elementType":"text","placeHolder":"手机号","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""},
		                            {"lable":"服务密码","name":"password","elementType":"password","placeHolder":"密码","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""},
		                            {"lable":"客服密码","name":"otherInfo","elementType":"password","placeHolder":"客服密码","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""},
		                            {"lable":"身份证号码","name":"otherInfo","elementType":"text","placeHolder":"身份证号码","checkEmpty":"true","checkMoble":"false","checkLength":"false","checkEmail":"false","checkIdCard":"false","checkNumber":"false","onHasKeyShowInfo":""}
		                            ]};
		return inputEleData
	},
	render: function() {
		console.log('render before');
		
		let inputItems = this.getEleFromServer().elements.map(function (ele,index){
			return (
				<Input key={index} label={ele.lable} elementType={ele.elementType} placeholder={ele.placeHolder} name={ele.name} />
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
				<Header headerLabel="运营商查询"/>
				<Form />
			</section>
		);
	}
});


ReactDom.render(
  <FormBox />,
  document.getElementById('content')
);