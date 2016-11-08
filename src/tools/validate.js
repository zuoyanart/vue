/**
 * 表单验证
 * @method
 * @param  {[type]} ( [description]
 * @return {[type]}   [description]
 */
import tools from './tools.js';

let validate = (function() {
    let self = {};
    const validReg = {
        mail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, //邮箱
        china: /^[\u0391-\uFFE5]+$/, //中文
        int: /^\d+$/, //数字
        qq: /^[1-9]*[1-9][0-9]*$/, //QQ号码
        phone: /^[1]([3]|[4]|[5]|[8])[0-9]{9}$/, //手机号码
        user: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/, //验证用户名，长度在5~16之间，只能包含字符、数字和下划线
        post: /[1-9]d{5}(?!d)/, //邮编
        url: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^\"\"])*$/, //url地址
        idcard: /^\d{15}(\d{2}[A-Za-z0-9])?$/, //身份证号
        ip: /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g, //IP
        time: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/
    };

    const validOption = {
        required: true,
        type: "string", //string, number,array
        min: 1,
        max: 1000000,
        reg: '',
        eq: '',
        url: '',
        message: '验证规则描述'
    }

    self.check = async(rule, value) => { //验证
            rule = mergeJson(rule, validOption);
            let ischeck = true;
            if(rule.message == '$') {
              ischeck = true;
              return ischeck;
            }
            if (!rule.required && value == '') { //不是必填
                ischeck = true;
                return ischeck;
            }
            // console.log("required");
            //比较长度
            let len = 0;
            switch (rule.type) {
                case 'string':
                    len = getCharLen(value);
                    break;
                case 'array':
                    len = value.length;
                    break;
                case 'number':
                    len = parseInt(value);
                    break;
            }
          //  console.log(value + "=" + rule.type + " len=" + len);
                if (len < rule.min || len > rule.max) {
                    ischeck = false;
                    return ischeck;
                }

            // console.log("len");
            //chek eq
            if (rule.eq && rule.eq != '') {
                if (rule.eq === value) {
                    ischeck = true;
                } else {
                    ischeck = false;
                    return ischeck;
                }
            }
            // console.log("eq");
            //check url
            if (rule.url != '') {
                let result = await tools.httpAgent("http://192.168.1.134:3004/v1/need/page", 'get');
                if (result.state == true) {
                    ischeck = true;
                } else {
                    ischeck = false;
                    return ischeck;
                }
            }
            // console.log("url");
            // check reg
            if (rule.reg && rule.reg != '') {
                if (typeof(rule.reg) == 'string') {
                    if (!(validReg[rule.reg].test(value))) {
                        ischeck = false;
                        return ischeck;
                    }
                } else {
                    if (!(rule.reg.test(value))) {
                        ischeck = false;
                        return ischeck;
                    }
                }
            }
            // console.log("reg");
            return ischeck;
        }
        /**
         * 校验全部
         * @method async
         * @param  {[type]} rule     [description]
         * @param  {[type]} ruleData [description]
         * @return {[type]}          [description]
         */
    self.checkAll = async(rules, values) => {
        let ischeck = true;
        let check = false;

        for (let key in values) {
            check = await self.check(rules[key], values[key]);
            if (check == false) {
                ischeck = false;
            }
        }

        return ischeck;
    }

    /**
     * 获取字符串长度，区分中英文
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    function getCharLen(str) { //获取字符串长度，区分中英文
        return str.replace(/[^\x00-\xff]/g, "rr").length;
    }
    /**
     * 合并json
     * @method mergeJson
     * @param  {[type]}  optons [description]
     * @param  {[type]}  def    [description]
     * @return {[type]}         [description]
     */
    function mergeJson(options, def) {
        for (let key in def) {
            if (options[key] == undefined) {
                options[key] = def[key];
            }
        }
        return options;
    }

    return self;
}());

module.exports = validate;
