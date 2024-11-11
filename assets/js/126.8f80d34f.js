(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{787:function(n,t,o){"use strict";o.r(t);var e=o(4),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h2",{attrs:{id:"unionid-获取机制说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unionid-获取机制说明"}},[n._v("#")]),n._v(" UnionID 获取机制说明")]),n._v(" "),o("p",[n._v("如果开发者拥有多个移动应用、网站应用、和公众帐号（包括小程序），可通过 UnionID 来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号（包括小程序），用户的 UnionID 是唯一的。换句话说，同一用户，对同一个微信开放平台下的不同应用，UnionID 是相同的。")]),n._v(" "),o("h2",{attrs:{id:"将小程序与公众号绑定到-微信开发平台"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#将小程序与公众号绑定到-微信开发平台"}},[n._v("#")]),n._v(" 将小程序与公众号绑定到 微信开发平台")]),n._v(" "),o("p",[n._v("登录"),o("a",{attrs:{href:"https://open.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("微信开放平台"),o("OutboundLink")],1),n._v(" — 管理中心 — 小程序 — 绑定小程序")]),n._v(" "),o("h2",{attrs:{id:"unionid-获取途径"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unionid-获取途径"}},[n._v("#")]),n._v(" UnionID 获取途径")]),n._v(" "),o("p",[n._v("绑定了开发者帐号的小程序，可以通过以下途径获取 UnionID。")]),n._v(" "),o("ul",[o("li",[n._v("主体说明： 公众号的账户主体 or 小程序的账户主体，是否为同一家公司")])]),n._v(" "),o("h2",{attrs:{id:"同主体获取方法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#同主体获取方法"}},[n._v("#")]),n._v(" 同主体获取方法")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[n._v("1. 如果开发者帐号下存在同主体的公众号，并且该用户已经关注了该公众号。开发者可以直接通过 wx.login + code2Session 获取到该用户 UnionID，无须用户再次授权。\n\n2. 如果开发者帐号下存在同主体的公众号或移动应用，并且该用户已经授权登录过该公众号或移动应用。开发者也可以直接通过 wx.login + code2Session 获取到该用户 UnionID ，无须用户再次授权。\n\n3. 用户在小程序（暂不支持小游戏）中支付完成后，开发者可以直接通过getPaidUnionId接口获取该用户的 UnionID，无需用户授权。注意：本接口仅在用户支付完成后的5分钟内有效，请开发者妥善处理。\n\n4. 小程序端调用云函数时，如果开发者帐号下存在同主体的公众号，并且该用户已经关注了该公众号，可在云函数中通过 cloud.getWXContext 获取 UnionID。\n\n5. 小程序端调用云函数时，如果开发者帐号下存在同主体的公众号或移动应用，并且该用户已经授权登录过该公众号或移动应用，也可在云函数中通过 cloud.getWXContext 获取 UnionID。\n")])])]),o("h2",{attrs:{id:"不同主体-or-同主体获取方法-通过用户授权解密数据获取-可参考-小程序完整授权逻辑"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#不同主体-or-同主体获取方法-通过用户授权解密数据获取-可参考-小程序完整授权逻辑"}},[n._v("#")]),n._v(" 不同主体 or 同主体获取方法(通过用户授权解密数据获取，可参考 "),o("RouterLink",{attrs:{to:"/docs/WeChat/xiao-cheng-xu-wan-zheng-shou-quan-luo-ji.html"}},[n._v("小程序完整授权逻辑")]),n._v(")")],1),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[n._v("1. 调用接口 wx.getUserInfo，从解密数据中获取 UnionID。注意本接口需要用户授权，请开发者妥善处理用户拒绝授权后的情况。\n\n2. 通过 button 进行用户授权, 获取加密数据，解密获取 UnionID。\n")])])]),o("h2",{attrs:{id:"小程序直接获取-unionid"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#小程序直接获取-unionid"}},[n._v("#")]),n._v(" 小程序直接获取 unionID")]),n._v(" "),o("p",[n._v("通过 wx.login 接口获取的登录凭证可直接换取 unionID。")]),n._v(" "),o("p",[n._v("若小程序已在微信开放平台进行绑定，原 wx.login 接口获取的登录凭证若需换取 unionID 需满足以下条件：")]),n._v(" "),o("ol",[o("li",[n._v("如果开发者帐号下存在同主体的公众号，并且该用户已经关注了该公众号。")]),n._v(" "),o("li",[n._v("如果开发者帐号下存在同主体的公众号或移动应用，并且该用户已经授权登录过该公众号或移动应用。")])]),n._v(" "),o("p",[n._v("2021 年 2 月 23 日后，开发者调用 wx.login 获取的登录凭证可以直接换取 unionID，无需满足以上条件（重点）。")]),n._v(" "),o("p",[n._v("具体内容："),o("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=unionId",target:"_blank",rel:"noopener noreferrer"}},[n._v("小程序登录、用户信息相关接口调整说明"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);