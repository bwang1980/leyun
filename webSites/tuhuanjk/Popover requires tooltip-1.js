<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if IE]><script src="/scripts/html5shiv.js"></script><![endif]-->
    <title>页面不存在</title>
    <link href="/Content/css?v=6917mvlu8smyOXZ4blpLgaRMUp-JhZB5VrskHAVn6ZQ1" rel="stylesheet"/>

    <script src="/bundles/modernizr?v=wBEWDufH_8Md-Pbioxomt90vm6tJN2Pyy9u9zHtWsPo1"></script>

    <script src="/bundles/jquery?v=LmhrAkpKkZOW8YOzhoTeIM0fB6qRMwX8wJ43LZf9qqU1"></script>

    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?1b8744d06d96de9e8b41c8595fa7ceca";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</head>
<body class="vbox">
    <div class="top-header-bar white fix-width-parent hbox">
    <div class="place-holder" style="width:0"></div>
    <div class="hbox box-v-center fix-width">
        <div class="top-bar-logo"><a href="/home/door"><img src="/images/namelogo_black.png" width="122" height="34" /></a></div>
        <div class="place-holder"></div>
            <div>    <a href="javascript:;" id="loginButton">登&nbsp;录</a>
</div>
        

    </div>
    <div class="place-holder" style="width:0"></div>
</div>
    


<div class="place-holder" style="width:100%;background:url(/images/err_404.png) no-repeat center center"></div>
    <script src="/bundles/bootstrap?v=bpa7NdPNdm_yNfivgK3FAC9n1KT9dCwYaph-hAeE7zE1"></script>

    

    <script type="text/javascript">
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            var success = options.success;
            options.success = function (data, textStatus, jqXHR) {
                if (data && (data.ok === false) && data.needLogin) {
                    location.href = "/?returnUrl=" + encodeURIComponent(location.href);
                    throw "interupt ajax";
                    return;
                }

                if (typeof (success) === "function") return success(data, textStatus, jqXHR);
            };
        });
    </script>
</body>
</html>
