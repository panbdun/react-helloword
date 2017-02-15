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
					{ className: "agreeText_col", href: "http://www.baidu.com" },
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

var Input = React.createClass({
	displayName: "Input",

	getInput: function () {
		return React.createElement(
			"div",
			{ className: "mui-input-row liH_90 loginBox clearCircle" },
			React.createElement(
				"label",
				{ className: "label_18" },
				this.props.label
			),
			React.createElement("input", { type: this.props.elementType, className: "password input_82", placeholder: this.props.placeholder }),
			React.createElement("span", { className: this.props.elementType == 'text' ? 'mui-icon iconfont icon-eye-close password dis_none' : 'mui-icon iconfont icon-eye-close password ' })
		);
	},
	render: function () {
		return this.getInput();
	}
});

let inputEleData = { "elements": [] };
var Form = React.createClass({
	displayName: "Form",

	getInitialState: function () {
		console.log('getInitialState');
		return { data: [] };
	},
	componentDidMount: function () {
		//this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		console.log('componentDidMount');
		$.each($("form :input"), function (index, input) {
			console.log(input.type + input.value + input.placeholder);
		});
	},
	handleSubmit: function (e) {
		//e.preventDefault();
		console.log('handleSubmit');
		return false;
	},
	render: function () {
		console.log('render before');

		inputEleData = { "elements": [{ "lable": "账号", "name": "username", "elementType": "text", "placeHolder": "公积金账号", "checkEmpty": "true", "checkMoble": "false", "checkLength": "false", "checkEmail": "false", "checkIdCard": "false", "checkNumber": "false", "onHasKeyShowInfo": "" }, { "lable": "密码", "name": "password", "elementType": "password", "placeHolder": "密码", "checkEmpty": "true", "checkMoble": "false", "checkLength": "false", "checkEmail": "false", "checkIdCard": "false", "checkNumber": "false", "onHasKeyShowInfo": "" }, { "lable": "身份证", "name": "otherInfo", "elementType": "text", "placeHolder": "身份证", "checkEmpty": "true", "checkMoble": "false", "checkLength": "false", "checkEmail": "false", "checkIdCard": "false", "checkNumber": "false", "onHasKeyShowInfo": "" }] };

		let inputItems = inputEleData.elements.map(function (ele, index) {
			return React.createElement(Input, { key: index, label: ele.lable, elementType: ele.elementType, placeholder: ele.placeHolder });
		});
		return React.createElement(
			"form",
			{ className: "mui-input-group userInfo", onSubmit: this.handleSubmit },
			inputItems,
			React.createElement(Agree, null),
			React.createElement(SelectBtn, null)
		);
	}
});

var FormBox = React.createClass({
	displayName: "FormBox",

	render: function () {
		return React.createElement(
			"section",
			{ className: "mui-content contentBox mt_39" },
			React.createElement(Header, null),
			React.createElement(Form, null)
		);
	}
});

ReactDOM.render(React.createElement(FormBox, null), document.getElementById('content'));