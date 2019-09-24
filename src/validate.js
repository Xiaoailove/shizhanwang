import Vue from 'vue'
import VeeValidate from 'vee-validate'
//import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


Vue.use(VeeValidate)
//提示信息本地化
VeeValidate.Validator.localize('zh_CN',{
    messages: zh_CN.messages,
    attributes: {
			email: '邮箱账号',
			phone: '手机号',
      code: '验证码',
      sin:'密码'
    }
})
// import Vue from 'vue'
// import VeeValidate from 'vee-validate';
// import {Validator} from 'vee-validate';
// import zh_CN from 'vee-validate/dist/locale/zh_CN'  //加载语言包应该写成这个样子
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: 'zh_CN',
// })
// Vue.use(VeeValidate, {
//   i18n,
//   i18nRootKey: 'validation',
//   dictionary: {
//     zh_CN
//   }
// });
//自定义验证规则
VeeValidate.Validator.extend('mobile',{
	validate:value =>{
		return /^1\d{10}$/.test(value)
	},
	getMessage: field => field + '必须是11位手机号码'
})