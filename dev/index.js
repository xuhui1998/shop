/**
 * 格式化获取当前时间戳
 * // formatTime("yyyy-MM-dd")           ==> 2006-07-02 08:09:04.423 
 * // formatTime("yyyy-MM-dd HH:mm:ss")  ==> 2006-7-2 8:9:4.18
 */
function xhzz(fmt) {
    let myDate = new Date()
    let o = {
        "M+": myDate.getMonth() + 1, //月份 
        "d+": myDate.getDate(),       //日 
        "H+": myDate.getHours(),      //小时 
        "m+": myDate.getMinutes(),    //分 
        "s+": myDate.getSeconds(),    //秒 
        "q+": Math.floor((myDate.getMonth() + 3) / 3), //季度 
        "S": myDate.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (myDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//导出成员
module.exports = {
    author: 'XH',
    xhzz: xhzz
}