(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{704:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Android 平台打包发布 apk 应用，需要使用数字证书（.keystore 文件）进行签名，用于表明开发者身份。")]),s._v(" "),t("p",[s._v("Android 证书的生成是自助和免费的，不需要审批或付费。")]),s._v(" "),t("p",[s._v("可以使用 JDK 环境中的 keytool 命令生成。以下是 windows 平台生成证书的方法：")]),s._v(" "),t("h2",{attrs:{id:"安装-jdk-环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-jdk-环境"}},[s._v("#")]),s._v(" 安装 JDK 环境")]),s._v(" "),t("p",[s._v("可从 Oracle 官方下载 JDK 安装包："),t("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("下面以 Windows 平台，JDK 安装目录为“C:\\Program Files\\Java\\jdk-18.0.1.1”为例，实际操作时请修改为自己安装目录")]),s._v(" "),t("p",[s._v("建议将 JDK 安装路径添加到系统环境变量")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("d:\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files\\Java\\jdk-18.0.1.1'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('in"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("第一行：切换工作目录到 D:路径")]),s._v(" "),t("li",[s._v("第二行：将 JDK 命令添加到临时环境变量中")])]),s._v(" "),t("h2",{attrs:{id:"生成签名证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成签名证书"}},[s._v("#")]),s._v(" 生成签名证书")]),s._v(" "),t("ul",[t("li",[s._v("使用 "),t("code",[s._v("keytool-genkey")]),s._v(" 命令生成证书")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("keytool -genkey -alias testalias -keyalg RSA -keysize "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" -validity "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36500")]),s._v(" -keystore test.keystore\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("testalias 是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字")])]),s._v(" "),t("li",[t("p",[s._v("test.keystore 是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径")])]),s._v(" "),t("li",[t("p",[s._v("36500 是证书的有效期，表示 100 年有效期，单位天，建议时间设置长一点，避免证书过期")])]),s._v(" "),t("li",[t("p",[s._v("回车后会提示：")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Enter keystore password:  //输入证书文件密码，输入完成回车\nRe-enter new password:   //再次输入证书文件密码，输入完成回车\nWhat is your first and last name?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入名字和姓氏，输入完成回车\nWhat is the name of your organizational unit?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入组织单位名称，输入完成回车\nWhat is the name of your organization?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入组织名称，输入完成回车\nWhat is the name of your City or Locality?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入城市或区域名称，输入完成回车\nWhat is the name of your State or Province?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入省/市/自治区名称，输入完成回车\nWhat is the two-letter country code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this unit?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入国家/地区代号（两个字母），中国为CN，输入完成回车\nIs "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("O")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("L")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX correct?\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //确认上面输入的内容是否正确，输入y，回车\n\nEnter key password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("testalias"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RETURN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" same as keystore password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  //确认证书密码与证书文件密码一样（HBuilder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("HBuilderX要求这两个密码一致），直接回车就可以\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("以上命令运行完成后就会生成证书，路径为“D:\\test.keystore”。")]),s._v(" "),t("ul",[t("li",[s._v("注意：上述信息填写要规范，乱填有可能会影响应用上架应用市场。")])]),s._v(" "),t("h2",{attrs:{id:"查看证书信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看证书信息"}},[s._v("#")]),s._v(" 查看证书信息")]),s._v(" "),t("ul",[t("li",[s._v("可以使用以下命令查看")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("keytool -list -v -keystore test.keystore\nEnter keystore password: //输入密码，回车\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("会输出以下格式信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Keystore type: PKCS12\nKeystore provider: SUN\n\nYour keystore contains "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" entry\n\nAlias name: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nCreation date: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-28\nEntry type: PrivateKeyEntry\nCertificate chain length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nCertificate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\nOwner: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Tester, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Test, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("O")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Test, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("L")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("HD, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("BJ, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CN\nIssuer: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Tester, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Test, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("O")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Test, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("L")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("HD, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("BJ, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CN\nSerial number: 7dd12840\nValid from: Fri Jul "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":52:56 CST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" until: Sun Jul 02 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":52:56 CST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2119")]),s._v("\nCertificate fingerprints:\n         MD5:  F9:F6:C8:1F:DB:AB:50:14:7D:6F:2C:4F:CE:E6:0A:A5\n         SHA1: BB:AC:E2:2F:97:3B:18:02:E7:D6:69:A3:7A:28:EF:D2:3F:A3:68:E7\n         SHA256: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(":11:7D:E7:36:12:BC:FE:AF:2A:6A:24:BD:04:4F:2E:33:E5:2D:41:96:5F:50:4D:74:17:7F:4F:E2:55:EB:26\nSignature algorithm name: SHA256withRSA\nSubject Public Key Algorithm: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("-bit RSA key\nVersion: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("ul",[t("li",[s._v("其中证书指纹信息（Certificate fingerprints）")]),s._v(" "),t("li",[s._v("MD5：证书的 MD5 指纹信息（安全码 MD5）")]),s._v(" "),t("li",[s._v("SHA1：证书的 SHA1 指纹信息（安全码 SHA1）")]),s._v(" "),t("li",[s._v("SHA256：证书的 SHA256 指纹信息（安全码 SHA245）")])])])}),[],!1,null,null,null);a.default=e.exports}}]);