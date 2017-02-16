import React from 'react';

export default React.createClass({
  render: function() {
    return (
    <div className="title title_bColor">
		<h3 className="title_text title_tColo">{this.props.headerLabel}</h3>
		<p className="title_back clearfloat">
			<span className="mui-icon mui-icon-back"></span>
			<a className="title_tColo" href="#" >返回</a>
		</p>
	</div>
    );
  }
});
