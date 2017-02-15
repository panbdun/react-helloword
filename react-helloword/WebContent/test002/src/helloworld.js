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
				<p>我已阅读并同意<a className="agreeText_col" href="taobao_agreement.html">《淘宝授权协议》</a></p>
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

var Form =  React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
	    //this.loadCommentsFromServer();
	    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		console.log('componentDidMount');
	},
	handleSubmit: function(e) {
		//e.preventDefault();
		console.log('handleSubmit');
	},
	render: function() {
		return(
			<form className="mui-input-group userInfo" onSubmit={this.handleSubmit}>
			    <div className="mui-input-row liH_90 loginBox clearCircle">
			        <label className="label_18">账号</label>
			    	<input type="text" className="mui-input-clear input_82" placeholder="邮箱/用户名/手机号" />
			    </div>
			    <div className="mui-input-row liH_90 loginBox">
			        <label className="label_18">密码</label>
			        <input type="password"  placeholder="密码" className="password input_82" />
			        <span className="mui-icon iconfont icon-eye-close password"></span>
			    </div>
			    
			    <Agree />
				<SelectBtn />
			</form>
		);
	}
});

var FormBox = React.createClass({
	render: function() {
		return (
			<div className="mui-content contentBox mt_39">
				<Header />
				<Form />
			</div>
		);
	}
});


ReactDOM.render(
  <FormBox />,
  document.getElementById('content')
);