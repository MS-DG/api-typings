// https://github.com/wechat-miniprogram/api-typings/issues/15

wx.getSetting({
    success: res => {
        res.authSetting["scope.address"];
    },
});
const a: wx.AuthSetting = {
    "scope.address": false,
};
