
/**import from `/static/js/common/loginModal.js` **//*
 ** 登录注册弹窗
 ** 依赖插件： md5.js、jsencrypt.js (用于加密密码)
 ** auth:pw
 ** time:2016.9.21
 *///弹窗结构
(function(e){function i(t){function s(){
    var e=document.documentElement.clientHeight||document.body.clientHeight,
        t=document.documentElement.clientWidth||document.body.clientWidth;
    i.css({width:t}),r.css({"margin-top":-(r.height()/2),"margin-left":-(r.width()/2)})}
    var n={}; e.extend(n,t);
    var r=e(".frame-mod"),i=e(".full-bg");
    r.addClass("bounce-in");
    if(!e(".frame-mod").is(":hidden"))return!1;e(".frame-mod,.full-bg").css("display","block"),s(),n.type==1?(r.find(".log-btn").addClass("current").siblings("span").removeClass("current"),r.find(".login-box").addClass("current").siblings("li").removeClass("current")):n.type==2&&(r.find(".log-btn").removeClass("current").siblings("span").addClass("current"),r.find(".login-box").removeClass("current").siblings("li").addClass("current"),r.find(".yz-img img").length==0&&r.find(".yz-img").append('<img src="" alt="">')),
        r.find(".login-title span").on("click",function(){
            e(this).addClass("current").siblings("span").removeClass("current"),r.find(".BTVlogin-main li").eq(e(this).index()).addClass("current").siblings("li").removeClass("current"),e(this).hasClass("reg-btn")&&r.find(".yz-img img").length==0&&r.find(".yz-img").append('<img src="" alt="">')}),
        /*下次自动登录*/
        r.find(".rem-la").off("click").on("click",function(){var t=e(this);t.hasClass("la-uncheck")?t.removeClass("la-uncheck").addClass("la-checked"):t.removeClass("la-checked").addClass("la-uncheck")}),
        /*关闭*/
        r.find(".btn-close").on("click",function(){loginMod.closeFrame()});
    var o=new BtvLoginModal({beforSend:function(){},sendDone:function(){n.logSuccess()}}),
        u=new BtvRegisterModal({beforSend:function(){},sendDone:function(){n.regSuccess()}})}
    function s(){var t=e(".frame-mod"),n=e(".full-bg");t.hide(),n.hide()}
    var t='<div id="loginModal" class="frame-mod" style="display: none"><div class="fr-wrap">   <a target="_self" href="javascript:;" class="btn-close"></a>   ' +
        '<h4 class="login-title">     <span class="current log-btn">登录<i></i></span>     <span class="reg-btn">注册<i></i></span>   </h4>   <ul class="BTVlogin-main">     <li class="com-con current login-box">         <form action="" class="loginForm" id="loginForm" autocomplete="off">           <div class="login-form">             <div class="core">               <input type="text" id="loginPho" class="log_ipt ipt user_name bjs-input-test" name="user_name" placeholder="手机号/邮箱" reqmsg="手机号码/邮箱" data-vaildmsg="请输入手机号/邮箱" maxlength="100" datatypestatus="false">             </div>                 <div class="core">               <input type="password" datatype="text" class="log_ipt ipt ipt_passward bjs-input-test" placeholder="密码" id="ipt_passward" data-vaildmsg="请填写密码">               <input type="hidden" name="passwd" class="hid_PassWd">             </div>                 <div>               <input type="hidden" name="timestamp"><input type="hidden" name="jump" value="">               <button type="button" class="login-btn" id="login-btn">立即登录</button>             </div>             <div class="default-li">               <div class="fl momentHid">                 <input id="check-login" type="checkbox" name="remember" class="rem-lo">                 <label for="check-login" class="rem-la la-uncheck">下次自动登录</label>               </div>               <a class="fr for-word" href="">忘记密码？</a>             </div>           </div>           <div class="other-login">             <h5>使用第三方账号登录</h5>           <p class="other-wb"><a href="" target="_self"></a></p>           <p class="other-wx"><a href="" target="_self"></a></p>           <p class="other-qq"><a href="" target="_self"></a></p>           <p class="other-qihoo"><a href="" target="_self"></a></p>           </div>         </form>     </li>     <li class="com-con reg-box">       <form action="" id="regForm" autocomplete="off">       <div class="reg-form">         <div class="core">           <input type="text" datatype="mobile" name="mobile" class="ipt reg-ipt" id="phone-nb" placeholder="手机号" data-vaildmsg="请填写手机号码" datatypestatus="false">         </div>         <div class="core coremin">           <input type="text" datatype="text" class="ipt reg-ipt" name="image_captcha" id="reg-code" placeholder="验证码"  maxlength="4" data-vaildmsg="请填写验证码" datatypestatus="false" data-action="">           <span class="yz-img" href=""></span>         </div>         <div class="core coremin">           <input type="text" datatype="text" autocomplete="off" class="ipt reg-ipt" name="captcha" id="news-code" placeholder="短信验证码" data-vaildmsg="请填写短信验证码" maxlength="6" datatypestatus="false">           <span type="button" class="yz-sms" data-phone="#phone-nb" data-freq="60" data-api="">获取验证码</span>         </div>         <div class="core">           <input type="password" class="ipt reg-ipt" id="reg-password" placeholder="密码" data-vaildmsg="请填写用户密码" maxlength="20" datatypestatus="false"><input type="hidden" name="passwd" class="hid_PassWd">         </div>         <div class="core">           <input type="password" class="ipt reg-ipt" id="sure-password" placeholder="确认密码" data-vaildmsg="请填写确认密码" maxlength="20" datatypestatus="false">         </div>         <div class="default-li">           <div class="fl">             <input type="checkbox" name="" checked="checked" id="rem-lo" class="rem-lo">             <label for="rem-lo" class="rem-la la-checked">我已阅读并同意</label>           </div>           <a class="fl for-deal" href="" target="_blank">注册协议</a>         </div>         <div><input type="hidden" name="purpose" value="register"><button type="submit" class="login-btn" id="reg-btn">注册</button></div>       </div>       </form>     </li>   </ul> </div></div><div class="full-bg"></div>';

    e("body").append(t),e("#ipt_passward").on("focus",function(){e(this).attr("type","password")});
    var n="",r={msgAlertBox:function(t,n,r){var i=e(".msg-box");i&&i.remove();
        var t=t||"";if(!n||!(n instanceof jQuery))return;r===0?i=e('<div class="msg-box icon-success"><span>'+t+"</span></div>"):
            i=e('<div class="msg-box icon-error"><span>'+t+"</span></div>"),
            i.appendTo("body");
        var s=i.innerHeight()+3,
            o=i.innerWidth()+2,
            u=n.offset().top,
            a=n.offset().left,
            f=n.innerWidth()/2-o/2;
        i.css({top:u,left:a+f,opacity:0}),i.show(),i.animate({top:u-s,opacity:1},500,"swing"),setTimeout(function(){i.remove()},1500)},
        validForm:function(e,t){var n=e;if(!n||!t)return;return n.find("em.error-tips").length==0&&n.find("input").blur(),n.find("em.error-tips").length?(r.msgAlertBox("表单错误，请修改错误项",t),!1):!0},
        msgShowBox:function(t,n,r,i){
            var s,t=e(t),o=!0,u="",
                a=n||"请输入内容",f=r||null,l=t.parent(),c=t.val(),h=i||"输入错误";return t?(/^\s*$/g.test(c)?u=a:f&&!f.test(c)&&(u=h),u?(l.find("em").remove(),
                s='<em class="error-tips">'+u+"</em>",l.append(s),o=!1):l.find("em").remove(),o):!1},
        passwordEvent:function(t,i){function o(){var i=e(t),s=i.val(),o=r.encryptPassword(s,n);i.siblings(".hid_PassWd").val(o)}
            var s=e("body");e(document).on("change blur keyup",t,function(){o()}),
                e(document).on("change blur keyup",i,function(){o()})},
        encryptPassword:function(t,n){
            if(!t)return;
            if(!n)return t;
            if(JSEncrypt===undefined)throw new Error("Please introduce [JSEncrypt] package");
            var r=decodeURIComponent(e.trim(n)),
                i=new JSEncrypt;return i.setPublicKey(r),
                i.encrypt(e.trim(t))}};

    /*登录*/
    window.BtvLoginModal=function(e,t){
        function o(e){t.extend(s,e),u.init(e)}
        var n=t("body"),i={form:"#loginForm",pwdIpt:"#ipt_passward"},s={url:""},u={};return u.validInput=function(){var e=this,s={phoneId:"#loginPho",logPassword:"#ipt_passward"},
            o=/^(1[34578]\d{9})$|^[A-Za-z0-9_\-]+(\.[_A-Za-z0-9\-]+)*@([_A-Za-z0-9\-]+\.)+([a-z]{1,5})$/,u=new RegExp(o),a=/^\S{6,20}$/,f=[s.phoneId,s.logPassword],l=[u,a],c=["手机号/邮箱错误","密码错误"];
            n.off("focus",i.form+" input.log_ipt").on("focus",i.form+" input.log_ipt",function(){t(this).siblings("em").remove()});
            for(var h=0;h<f.length;h++)(function(e){
                n.off("change blur",f[e]).on("change blur",f[e],function(){
                    r.msgShowBox(t(this),t(this).data("vaildmsg"),l[e],c[e])})})(h)},
            u.submitForm=function(e,i){
            n.off("click","#login-btn").on("click","#login-btn",function(n){n.preventDefault();var o,u=t(this),a=t("#loginForm"),f=r.validForm(a,u),l=t("#check-login").prop("checked"),c=encodeURIComponent(document.referrer);if(!f)return;a.find('input[name="timestamp"]').val(+(new Date)),a.find('input[name="jump"]').val()==""&&a.find('input[name="jump"]').val(c),u.prop("disabled",!0),o=a.serialize(),e&&e(o),t.ajax({type:"POST",url:s.url,dataType:"jsonp",data:o}).done(function(e){e.errno==0?(r.msgAlertBox("登录成功",u,0),i&&i(e),setTimeout(function(){loginMod.closeFrame()},1500)):r.msgAlertBox(e.errmsg,u),u.prop("disabled",!1)})})},

            u.init=function(e){
                r.passwordEvent("#ipt_passward","#loginPho"),
                    u.validInput(),u.submitForm(e&&e.beforSend,e&&e.sendDone)},o}(window,jQuery),
        /*注册*/
        window.BtvRegisterModal=function(e,t){
            function o(e){t.extend(s,e),u.init(e)}
            var n=t("body"),i={form:"#regForm"},s={url:""},u={};
        /*错误提示*/
            return u.validInput=function(){
                var e=this,
                    s={phoneId:"#phone-nb",regCode:"#reg-code",newsCode:"#news-code",regPassword:"#reg-password",surePassword:"#sure-password"},
                    q=
                    o=/^1[34578]\d{9}$/,u=/^\S{6,20}$/,a=/^\S{4}$/,f=/^\S{6}$/,
                    l=new RegExp("^"+t("#reg-password").val()+"$"),
                    c=[s.phoneId,s.regPassword,s.regCode,s.newsCode,s.surePassword],
                    h=[o,u,a,f,l],
                    p=["手机号码格式错误","密码应为6至20位数字或字母","验证码错误","短信验证码无效","两次密码输入22不一致"];
           n.off("focus",i.form+" input.reg-ipt").on("focus",i.form+" input.reg-ipt", function(){t(this).siblings("em").remove()});
                for(var d=0;d<c.length;d++)(function(e){
                    n.off("change blur",c[e]).on("change blur",c[e],
                        function(){

                            h[4]=new RegExp("^"+t("#reg-password").val()+"$"),
                            r.msgShowBox(t(this),t(this).data("vaildmsg"),h[e],p[e])
                        })})(d);
        t("#reg-password").on("blur",function(){
            if(s.regPassword = s.surePassword){
                alert(2)
            }else {
                t("#sure-password").val()&&t("#sure-password").blur()
            }



        })},

        /*验证码*/
        u.yzRefresh=function(){var e=t(".yz-img"),n=t(".yz-img img");e.on("click",function(n){n.preventDefault(),e.find("img").remove();
            var r=Date.parse(new Date),i=e.attr("href")+"?="+r,s=t('<img src="'+i+'">');e.html(s)}),t('input[name="image_captcha"]').on("blur",function(){var n=t(this),r=n.data("action"),
            i=n.val();i.length==4&&t.ajax({type:"POST",url:r,dataType:"jsonp",data:{image_captcha:i},
            success:function(r){if(r.errno==0)n.parent().find("em").remove();else{
                n.parent().find("em").remove(),n.parent().append('<em class="error-tips">验证码错误</em>'),e.find("img").remove();var i=Date.parse(new Date),s=e.attr("href")+"?="+i,
                    o=t('<img src="'+s+'">');e.html(o)}},error:function(e){}})})},

        u.submitForm=function(e,i){n.off("click","#reg-btn").on("click","#reg-btn",function(n){n.preventDefault();var o,u=t(this),a=t("#regForm"),
            f=r.validForm(a,u),l=t("#rem-lo").prop("checked");
            if(!f)return;if(!l){r.msgAlertBox("请阅读并勾选注册协议",u);return}u.prop("disabled",!0),o=a.serialize(),e&&e(o),t.ajax({type:"POST",url:s.url,dataType:"jsonp",data:o}).done(function(e){
                i&&i(e),e.errno==0?(i&&i(e),r.msgAlertBox("注册成功",u,0),setTimeout(function(){loginMod.closeFrame()},1500)):r.msgAlertBox(e.errmsg,u),u.prop("disabled",!1)}).fail(function(){
                u.prop("disabled",!1)})})},

                /*短信验证*/
        u.smsVerify=function(){
            function s(e){return e.attr(n,n).addClass(n)}
            function o(e){return e.removeClass(n).removeAttr(n)}
            function u(e){var t=e.data("freq")||60,n=null,r="s后重新获取";e.data("orgtxt",e.text()).text("验证码已发送"),s(e).blur(),
                setTimeout(function(){n=setInterval(function(){t--,e.text(t+r),t<=-1&&(o(e).text(e.data("orgtxt")),clearInterval(n),n=null)},1e3)},500)}
            var e=".yz-sms",n="disabled",i=!1;t(e).each(function(){
                var e=t(this),n=t(e.data("phone")),r=e.data("phonecode"),i=/^(?:13|14|15|16|17|18|19)[\d]{9}$/;r&&i.test(r)?o(e):s(e),
                n.length&&n.on("input blur keyup",function(){var n=t(this).val();i.test(n)?(o(e),e.data("phonecode",n)):(s(e),e.data("phonecode",0))})}).on("click",function(){
                var e=t(this),n=e.data("api"),a=e.data("phonecode"),f=(new Date).getTime(),l=t('input[name="purpose"]').val(),c=t('input[name="image_captcha"]'),h=c.val(),
                    p={mobile:a,timestamp:f,purpose:l,image_captcha:h};
                if(!a)return!1;s(e),t.ajax({type:"POST",url:n,dataType:"jsonp",data:p}).done(function(t){t.errno!=0?(o(e),r.msgAlertBox(t.errmsg,e)):u(e)}).fail(function(){o(e)}),i=!0})},

        u.init=function(e){r.passwordEvent("#reg-password","#news-code"),u.validInput(),u.yzRefresh(),u.smsVerify(),u.submitForm(e&&e.beforSend,e&&e.sendDone)},o}(window,jQuery),
        e.loginFrame=function(){this.loginInit=i,this.closeFrame=s},
        window.loginMod=new e.loginFrame})(jQuery),

function(e){
            $("body").on("click",".user-info-unread",function(e){
                var n=$(this);n.data("hasMessage")=="1"&&(t.find(".user-info-cycle").hide(),
                    n.find(".unread-time").text("0").removeClass("has-unread-time"),n.data("hasMessage","0"))}),
                $("body").on("click",".j-user-login",
                function(t,n){t.preventDefault(),window.loginMod&&loginMod.loginInit({type:1,logSuccess:function(t){o(),window.QHPass&&e.config&&e.config.pid!=="item-live"&&location.reload(),$.isFunction(n)&&n()}
                })
                }),
                $("body").on("click",".j-user-register",function(t){t.preventDefault(),window.loginMod&&loginMod.loginInit({type:2,regSuccess:function(){o(),window.QHPass&&e.config&&e.config.pid!=="item-live"&&location.reload()}})})
 }(window.App=window.App||{}),window.App=window.App||{}();
$(function() {
    $(".j-user-register").click(function(){
        $(".reg-btn i").css("display","block");
    });
    $(".j-user-login").click(function(){
        $(".log-btn i").css("display","block");
    });
    $(".log-btn").click(function(){
        $(".login-box").css("display","block");
        $(".reg-box").css("display","none");
        $(".reg-btn i").css("display","none");
        $(".log-btn i").css("display","block");
        $(".error-tips").css("display","none");
    });
    $(".reg-btn").click(function(){
        $(".login-box").css("display","none");
        $(".reg-box").css("display","block");
        $(".reg-btn i").css("display","block");
        $(".log-btn i").css("display","none");
        $(".error-tips").css("display","none");
    });

    $(".bjs-input-test").blur(function (){
        $(".error-tips").css("display","block");
    });
    $(".ipt1 input").blur(function (){
        $(".ipt1 em").addClass("xs");
    });
    $(".ipt2 input").blur(function (){
        $(".ipt2 em").addClass("xs");
    });
    $(".ipt3 input").blur(function (){
        $(".ipt3 em").addClass("xs");
    });
    $(".ipt4 input").blur(function (){
        $(".ipt4 em").addClass("xs");
    });
    $(".ipt5 input").blur(function (){
        $(".ipt5 em").addClass("xs");
    });


});