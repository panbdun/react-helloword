$(function(){
	//判断是否为微信浏览器
	var isWeiXin = function(){ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
			return true; 
		}else{ 
			return false; 
		} 
	}
	if(isWeiXin()){
		$('.title').css('display','none');
		$('.scrollBox').css('padding-top','2.12rem');
		$('.scroll_agree').css('padding-top',0);
	}

	//初始化
	mui.init();
	mui('.mui-input-row input').input();
	psdOnOff();
})

//密码框睁眼和闭眼的控制
function psdOnOff(){
		var $passwordImg=$('span.password');
		var passBtn=true;
		$passwordImg.click(function () {
			var $password=$(this).siblings('.password');
			$password.focus();
			if(passBtn){
			    $(this).removeClass('icon-eye-close').addClass('icon-eye-open');
			    $password.attr('type','text');
			}else{
			    $(this).removeClass('icon-eye-open').addClass('icon-eye-close');
                $password.attr('type','password');
			}
			passBtn=!passBtn;
        })
        return false;
};

