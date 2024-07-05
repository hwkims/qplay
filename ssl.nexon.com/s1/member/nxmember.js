var NXMember = new function __NXMember() {
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    var isMobile = /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(agent.substr(0, 4));
    var GetCookie = function(name) {
        var numCookie = document.cookie.length;
        var oven = document.cookie.split("; ");

        for (var i = 0; i < oven.length; i++) {
            if (oven[i].indexOf("=") != -1) {
                cookieName = oven[i].substring(0, oven[i].indexOf("="));
            } else {
                cookieName = oven[i];
            }

            if (cookieName == name) {
                if (oven[i].indexOf("=") != -1) {
                    cookieVal = oven[i].substr(oven[i].indexOf("=") + 1);
                } else {
                    cookieVal = "";
                }

                return cookieVal;
            }
        }
        return "";
    }
    var Parse = function(inputVal, defaultVal) {
        return inputVal == null ? defaultVal : inputVal;
    }

    this.GoLogin = function(json) {
        json = json || {};
        var redirect = Parse(json.redirect, document.location.href);
        var accesscode = Parse(json.accesscode, 0);
        document.location.href = "http://nxlogin.nexon.com/common/login.aspx?redirect=" + escape(redirect) + "&accesscode=" + accesscode;

        return false;
    }

    this.GoJoin = function(json) {
        json = json || {};
        var accesscode = Parse(json.accesscode, 0);
        var pagetype = Parse(json.pagetype, 1);
        var needverify = Parse(json.needverify, 0);
        var appcrypt = json.appcrypt;
        var authlevel = Parse(json.authlevel, 0);
        var redirect = json.redirect;
        var url;

        if (pagetype == 2) {
            url = "https://member.nexon.com/mobile/join/mobilejoin.aspx?pagetype=2&accesscode=" + accesscode + "&needverify=" + needverify;

            if (appcrypt != null)
                url += "&appcrypt=" + appcrypt;
        } else {
            if (isMobile) {
                var usetpa = Parse(json.usetpa, 0);
                url = "https://member.nexon.com/mobile/join/mobilejoin.aspx?accesscode=" + accesscode + "&needverify=" + needverify;
                url += "&usetpa=" + usetpa;
            } else {
                var usetpa = Parse(json.usetpa, -1);
                url = "https://member.nexon.com/join/join.aspx?accesscode=" + accesscode;

                if (authlevel == 1) {
                    url += "&authlevel=1";
                }
                if (usetpa == 0) {
                    url += "&usetpa=" + usetpa;
                }
            }
        }

        if (redirect != null) {
            url += "&redirect=" + escape(redirect);
        }

        document.location.href = url;

        return false;
    }

    this.GoVerify = function(json) {
        json = json || {};
        var redirect = Parse(json.redirect, document.location.href);
        var pagetype = Parse(json.pagetype, 1);
        var guide = Parse(json.guide, 1);
        var appcrypt = json.appcrypt;
        var url;

        if (pagetype == 2) {
            document.location.href = "https://member.nexon.com/mobile/verify/realname.aspx?pagetype=2&appcrypt=" + appcrypt;
        } else {
            if (isMobile)
                document.location.href = "https://member.nexon.com/mobile/verify/realname.aspx?redirect=" + escape(redirect);
            else {
                if (guide) {
                    if (document.location.protocol == "https:")
                        popup = window.open("https://member.nexon.com/html/pop_realname.html?redirect=" + escape(redirect), "VerifyGuide", "scrollbars=no, resizable=no, width=530, height=449");
                    else
                        popup = window.open("http://member.nexon.com/html/pop_realname.html?redirect=" + escape(redirect), "VerifyGuide", "scrollbars=no, resizable=no, width=530, height=449");

                    if (popup == null) {
                        if (confirm("���� ���񽺴� ����Ȯ���� ���� ������ ���Ͽ� �̿� �����մϴ�.\n�Ʒ� [Ȯ��] ��ư�� Ŭ���Ͻ� �� ����Ȯ���� �Ϸ��� �ֽñ� �ٶ��ϴ�."))
                            document.location.href = "https://member.nexon.com/verify/realname.aspx?redirect=" + escape(redirect);
                    }
                } else
                    document.location.href = "https://member.nexon.com/verify/realname.aspx?redirect=" + escape(redirect);
            }
        }

        return false;
    }

    this.GoFindID = function(json) {
        json = json || {};
        var pagetype = Parse(json.pagetype, 1);
        var redirect = json.redirect;

        if (pagetype == 2)
            document.location.href = "https://member.nexon.com/mobile/find/findid.aspx";
        else {
            if (isMobile) {
                if (redirect != null) {
                    document.location.href = "https://member.nexon.com/mobile/find/findid.aspx?redirect=" + escape(redirect);
                } else {
                    window.open("https://member.nexon.com/mobile/find/findid.aspx");
                }
            } else
                window.open("https://member.nexon.com/find/findid.aspx", "FindID", "scrollbars=no, resizable=no, width=610, height=750");
        }

        return false;
    }

    this.GoFindPwd = function(json) {
        json = json || {};
        var pagetype = Parse(json.pagetype, 1);
        var redirect = json.redirect;

        if (pagetype == 2)
            document.location.href = "https://member.nexon.com/mobile/find/findpwd.aspx";
        else {
            if (isMobile) {
                if (redirect != null) {
                    document.location.href = "https://member.nexon.com/mobile/find/findpwd.aspx?redirect=" + escape(redirect);
                } else {
                    window.open("https://member.nexon.com/mobile/find/findpwd.aspx");
                }
            } else
                window.open("https://member.nexon.com/find/findpwd.aspx", "FindPwd", "scrollbars=no, resizable=no, width=610, height=750");
        }

        return false;
    }

    this.GoCashCharge = function() {
        if (NXMember.IsLogin()) {
            if (NXMember.IsMembership())
                window.open("https://member.nexon.com/cash/cashcharge.aspx", "CashCharge", "width=530, height=516, resizable=no");
            else
                window.open("https://user.nexon.com/mypage/cash/cashcharge.aspx", "CashCharge", "width=530, height=516, resizable=no");
        } else {
            NXMember.GoLogin();
        }

        return false;
    }

    this.GoChargeGuide = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=cash/main";
        else
            url = "https://member.nexon.com/cash/chargeguide.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoChargeUseList = function(json) {
        json = json || {};
        var pagecode = Parse(json.pagecode, 1);
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false) {
            if (pagecode == 1)
                url = "https://user.nexon.com/mypage/page/nx.aspx?url=cash/chargelist";
            else if (pagecode == 2)
                url = "https://user.nexon.com/mypage/page/nx.aspx?url=cash/uselist";
        } else {
            if (pagecode == 1)
                url = "https://member.nexon.com/cash/chargelist.aspx";
            else if (pagecode == 2)
                url = "https://member.nexon.com/cash/chargelist.aspx?pagecode=2";
        }

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoHome = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=home/index";
        else
            url = "https://member.nexon.com/home/index.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoMyInfo = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=myinfomanage/changemyinfo";
        else
            url = "https://member.nexon.com/manage/changemyinfo.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoChangePwd = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=myinfomanage/changepwd";
        else
            url = "https://member.nexon.com/manage/changepwd.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoIdentityBlock = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=mysecurity/idblock";
        else
            url = "https://member.nexon.com/security/idblock.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoCashBlock = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=mysecurity/cashblock";
        else
            url = "https://member.nexon.com/security/cashblock.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoLoginBlock = function(json) {
        json = json || {};
        var isShowGuide = Parse(json.isShowGuide, 1);
        var target = Parse(json.target, "_self");
        var url = "";

        if (isShowGuide == 1) {
            if (NgbMember.IsLogin() == false || NXMember.IsMembership())
                url = "https://member.nexon.com/security/loginblock.aspx";
            else
                url = "https://user.nexon.com/mypage/page/nx.aspx?url=mysecurity/loginblock";
        } else {
            if (NgbMember.IsLogin() == false || NXMember.IsMembership())
                url = "https://member.nexon.com/security/loginblock.aspx?isshowguide=0";
            else
                url = "https://user.nexon.com/mypage/page/nx.aspx?url=mysecurity/loginblockset";
        }

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoStipulation = function(json) {
        json = json || {};
        var type = Parse(json.type, "service");

        if (type == "service")
            window.open("https://member.nexon.com/policy/stipulation.aspx");
        else if (type == "cash")
            window.open("https://member.nexon.com/policy/stipulation.aspx?pagecode=2");
        else if (type == "mobile")
            window.open("https://member.nexon.com/policy/stipulation.aspx?pagecode=3");
    }

    this.GoPrivacy = function(json) {
        json = json || {};
        var type = Parse(json.type, "service");

        if (type == "service")
            window.open("https://member.nexon.com/policy/privacy.aspx");
        else if (type == "mobile")
            window.open("https://member.nexon.com/policy/privacy.aspx?pagecode=3");
    }

    this.GoYouthProtection = function() {
        window.open("https://member.nexon.com/policy/youthprotection.aspx");
    }

    this.GoRealNameGuide = function() {
        window.open("https://member.nexon.com/policy/realname.aspx");
    }

    this.GoSystemInfo = function() {
        window.open("https://member.nexon.com/policy/systeminfo.aspx", "GoInfo_ChildProtect");
    }

    this.IsLogin = function() {
        if (GetCookie("ENC") != "" && GetCookie("NPP") != "")
            return true;
        else
            return false;
    }

    this.IsMembership = function() {
        if (GetCookie("IM") == "1")
            return true;
        else
            return false;
    }

    this.GoCashBlockByGame = function(json) {
        json = json || {};

        var cashBlockByGameUrl = "";
        var isShowBtn = Parse(json.isShowBtn, 1);
        var isPopup = Parse(json.isPopup, 1);
        var gameCode = Parse(json.gameCode, 0);

        if (json.gameCode === 0) {
            return false;
        }

        cashBlockByGameUrl = "https://member.nexon.com/security/cashblockbygame.aspx" + "?isshowbtn=" + isShowBtn + "&gamecode=" + gameCode;

        if (isPopup === 1) {
            window.open(cashBlockByGameUrl, "cashBlockByGame", "width=425, height=500, resizable=no");
        } else {
            location.href = cashBlockByGameUrl;
        }
    }

    this.GoUnprotectService = function(json) {
        json = json || {};

        var unprotectServiceUrl = "";
        var token = Parse(json.token, "");
        var isShowBtn = Parse(json.isShowBtn, 1);
        var isPopup = Parse(json.isPopup, 1);
        var extParams = Parse(json.extParams, "");

        if (json.token === false) {
            return false;
        }

        unprotectServiceUrl = "https://member.nexon.com/security/unprotectservice.aspx" + "?token=" + token + "&isshowbtn=" + isShowBtn;
        if (extParams != "")
            unprotectServiceUrl = unprotectServiceUrl + "&extParams=" + encodeURIComponent(extParams);

        if (isPopup === 1) {
            window.open(unprotectServiceUrl, "unprotectservice", "width=500, height=500, resizable=no");
        } else {
            location.href = unprotectServiceUrl;
        }
    }

    this.GoAuthBlock = function(json) {
        json = json || {};
        var target = Parse(json.target, "_self");
        var url = "";

        if (NXMember.IsLogin() == true && NXMember.IsMembership() == false)
            url = "https://user.nexon.com/mypage/page/nx.aspx?url=mysecurity/authblock";
        else
            url = "https://member.nexon.com/security/authblock.aspx";

        if (target == "_self")
            document.location.href = url;
        else
            window.open(url);
    }

    this.GoEmailIDVerify = function(json) {
        json = json || {};
        var pagetype = Parse(json.pagetype, 1);
        var redirect = json.redirect;

        if (confirm("�̸��� ���� �� ���� �̿��� �����մϴ�.\n�̸��� ���� �������� �̵��Ͻðڽ��ϱ�?")) {
            var url = "";

            if (pagetype == 2) {
                url = "https://member.nexon.com/manage/verifyemailid.aspx?pagetype=2";
            } else if (isMobile) {
                url = "https://member.nexon.com/manage/verifyemailid.aspx?pagetype=1";
            } else {
                url = "https://member.nexon.com/manage/verifyemailid.aspx?pagetype=1";
            }

            if (redirect != null) {
                url = url + "&redirect=" + escape(redirect);
            }

            document.location.href = url;
        }
    }
}