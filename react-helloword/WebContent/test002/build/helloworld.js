var Header = React.createClass({
	displayName: "Header",

	render: function () {
		return React.createElement(
			"div",
			{ className: "title title_bColor" },
			React.createElement(
				"h3",
				{ className: "title_text title_tColo" },
				"\u6DD8\u5B9D\u67E5\u8BE2"
			),
			React.createElement(
				"p",
				{ className: "title_back clearfloat" },
				React.createElement("span", { className: "mui-icon mui-icon-back" }),
				React.createElement(
					"a",
					{ className: "title_tColo", href: "#" },
					"\u8FD4\u56DE"
				)
			)
		);
	}
});

var Agree = React.createClass({
	displayName: "Agree",

	render: function () {
		return React.createElement(
			"div",
			{ className: "agreeBox" },
			React.createElement(
				"p",
				null,
				"\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F",
				React.createElement(
					"a",
					{ className: "agreeText_col", href: "taobao_agreement.html" },
					"\u300A\u6DD8\u5B9D\u6388\u6743\u534F\u8BAE\u300B"
				)
			)
		);
	}
});

var SelectBtn = React.createClass({
	displayName: "SelectBtn",

	render: function () {
		return React.createElement(
			"div",
			{ className: "selectBtn liH_90" },
			React.createElement("input", { type: "submit", value: "\u67E5\u8BE2", className: "selectBtn_bCol selSubmitBtn" })
		);
	}
});

var Form = React.createClass({
	displayName: "Form",

	getInitialState: function () {
		return { data: [] };
	},
	componentDidMount: function () {
		//this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		console.log('componentDidMount');
	},
	handleSubmit: function (e) {
		//e.preventDefault();
		console.log('handleSubmit');
	},
	render: function () {
		return React.createElement(
			"form",
			{ className: "mui-input-group userInfo", onSubmit: this.handleSubmit },
			React.createElement(
				"div",
				{ className: "mui-input-row liH_90 loginBox clearCircle" },
				React.createElement(
					"label",
					{ className: "label_18" },
					"\u8D26\u53F7"
				),
				React.createElement("input", { type: "text", className: "mui-input-clear input_82", placeholder: "\u90AE\u7BB1/\u7528\u6237\u540D/\u624B\u673A\u53F7" })
			),
			React.createElement(
				"div",
				{ className: "mui-input-row liH_90 loginBox" },
				React.createElement(
					"label",
					{ className: "label_18" },
					"\u5BC6\u7801"
				),
				React.createElement("input", { type: "password", placeholder: "\u5BC6\u7801", className: "password input_82" }),
				React.createElement("span", { className: "mui-icon iconfont icon-eye-close password" })
			),
			React.createElement(Agree, null),
			React.createElement(SelectBtn, null)
		);
	}
});

var FormBox = React.createClass({
	displayName: "FormBox",

	render: function () {
		return React.createElement(
			"div",
			{ className: "mui-content contentBox mt_39" },
			React.createElement(Header, null),
			React.createElement(Form, null)
		);
	}
});

ReactDOM.render(React.createElement(FormBox, null), document.getElementById('content'));