(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{742:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jenkins"}},[s._v("#")]),s._v(" 什么是 Jenkins")]),s._v(" "),a("p",[s._v("Jenkins 是一个开源软件项目，是基于 Java 开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。")]),s._v(" "),a("ul",[a("li",[s._v("Jenkins 功能包括：\n"),a("ol",[a("li",[s._v("持续的软件版本发布/测试项目。")]),s._v(" "),a("li",[s._v("监控外部调用执行的工作。")])])])]),s._v(" "),a("h2",{attrs:{id:"怎么实现自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现自动化部署"}},[s._v("#")]),s._v(" 怎么实现自动化部署")]),s._v(" "),a("p",[s._v("主要通过 Jenkins + Github 仓库的 webhooks 实现。")]),s._v(" "),a("p",[s._v("大概原理就是 git push 源码至源码仓库时，github 源码仓库的 webhooks 发出请求告知 Jenkins 服务器，有代码推送，而后 Jenkins 的自动部署任务开始拉取源码仓库代码进行自动部署操作。")]),s._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("服务器最低硬件要求：")]),s._v(" "),a("ol",[a("li",[s._v("256 MB 内存")]),s._v(" "),a("li",[s._v("1 GB 的驱动器空间（如果将 Jenkins 作为 Docker 容器运行，则建议至少 10 GB）")])])]),s._v(" "),a("li",[a("p",[s._v("自行安装好 Java 环境，最好是 jdk1.5 以上的。")])]),s._v(" "),a("li",[a("p",[s._v("自行安装好 Jenkins，推荐安装 LTS 版本。（具体安装方法自行百度，此处不进行讲解）")])]),s._v(" "),a("li",[a("p",[s._v("注：记得开放对应端口。")])]),s._v(" "),a("li",[a("p",[s._v("如果是部署到 Jenkins，相同服务器记得配置对应权限：如文件的写入、读取等。")])])]),s._v(" "),a("h2",{attrs:{id:"基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[s._v("#")]),s._v(" 基础配置")]),s._v(" "),a("p",[s._v("在安装好 Jenkins 后，于浏览器输入访问地址，进行基础配置。")]),s._v(" "),a("ol",[a("li",[s._v("根据提示获取密码，输入后，等待初始化。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/1.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("自定义 Jenkins 时，选择【安装推荐的插件】（如果不选择后面需要手动下载很多插件），而后等待插件安装。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/2.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("创建第一个管理员账户。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/3.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("配置 Jenkins URL，就是当前应用的访问地址。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/4.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("配置好后，建议重启一次，让刚刚安装的【推荐插件】生效。")]),s._v(" "),a("li",[s._v("重启 Jenkins：于访问地址后拼接 restart （例如：http://localhost:8080/restart）。")]),s._v(" "),a("li",[s._v("重载 Jenkins 配置信息：于访问地址后拼接 reload （例如：http://localhost:8080/reload）。")]),s._v(" "),a("li",[s._v("停止 Jenkins 服务器：于访问地址后拼接 exit （例如：http://localhost:8080/exit）。")])]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("安装插件")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("进入页面后如果不是中文的话，检查下是否安装了插件 【Localization: Chinese (Simplified)】，基本上都是会自动安装的")])]),s._v(" "),a("li",[a("p",[s._v("安装 NodeJS（后面要用，必须要安装）：【系统管理】——【插件管理】——【可选插件】——搜索【NodeJS】——【Download now and install after restart】")])]),s._v(" "),a("li",[a("p",[s._v("推荐插件（可选插件）：【Safe Restart】，安装后可在菜单栏选择【Restart Safely】一键重启")])]),s._v(" "),a("li",[a("p",[s._v("插件都安装好后需要重启一次。")])])]),s._v(" "),a("h2",{attrs:{id:"配置-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-nodejs"}},[s._v("#")]),s._v(" 配置 NodeJS")]),s._v(" "),a("p",[s._v("配置 NodeJS：【系统管理】——【全局工具配置】——【NodeJS】—— 【新增 NodeJS】—— 选择 NodeJS 版本，建议跟本地开发版本一致，而后设置别名")]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/28.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"配置-github-accesstoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-github-accesstoken"}},[s._v("#")]),s._v(" 配置 GitHub AccessToken")]),s._v(" "),a("ol",[a("li",[s._v("【settings】—— 【Developer settings】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/5.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/pageImg/220214/6.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("【Personal access tokens】——【Generate new token】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/7.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("配置 Token：")])]),s._v(" "),a("ul",[a("li",[s._v("【Note】自定义名称，例如：Jenkins Token")]),s._v(" "),a("li",[s._v("【Expiration】选择选择【No expiration】")]),s._v(" "),a("li",[s._v("勾选【repo】、【admin:org_hook】")]),s._v(" "),a("li",[s._v("而后选择【Generate token】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/8.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("复制 Token 并记录，后面需要用于 Jenkins，该 Token 只明文显示一次！！！")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/9.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"配置-jenkins-凭证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-jenkins-凭证"}},[s._v("#")]),s._v(" 配置 Jenkins 凭证")]),s._v(" "),a("ol",[a("li",[s._v("【系统管理】——【Manage Credentials】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/10.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("选择【全局】——【添加凭证】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/11.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/pageImg/220214/12.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("新建 Secret 凭证：类型选择【Secret text】，【Secret】输入刚刚在 Git 配置的 Token")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/13.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("新建 GitHub 登录凭证：类型选择【Username with password】，用户名输入 Git 的用户名，勾选【Treat username as secret】,【密码】输入刚刚在 Git 配置的 Token")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/14.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"配置-github-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-github-服务器"}},[s._v("#")]),s._v(" 配置 GitHub 服务器")]),s._v(" "),a("ol",[a("li",[s._v("【系统管理】——【系统配置】——【GitHub】——【Github 服务器】——【添加 Github 服务器】——【Github Server】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/15.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("配置信息，而后点击测试")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/16.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("测试提示：Credentials verified for user 用户名, rate limit 代表配置成功")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/17.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("复制 Hook 地址: 选择【高级】—— 勾选【为 Github 指定另外一个 Hook URL】—— 复制 【Hook URL】——【应用】——【保存】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/18.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/pageImg/220214/19.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("于 Github 源码仓库配置 Webhooks：【Settings】——【Webhooks】——【Add webhook】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/20.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("新建 webhook。配置成功后，源码仓库 push 提交时，Jenkins 就可以监听到了。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/21.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"配置-git-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-git-plugin"}},[s._v("#")]),s._v(" 配置 Git plugin")]),s._v(" "),a("p",[s._v("【系统管理】——【系统配置】——【Git plugin】—— 配置 user.name 跟 user.email（等等会用到的）——【应用】——【保存】")]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/22.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"新建-jenkins-任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建-jenkins-任务"}},[s._v("#")]),s._v(" 新建 Jenkins 任务")]),s._v(" "),a("ol",[a("li",[s._v("【新建任务】—— 输入任务名称，任务名称建议小写 ——【构建一个自由风格的软件项目】")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/23.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("【源码管理】——【Git】—— 配置")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/24.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("上图【新增】选择【Custom user name/e-mail address】 ，而后为空！！！不用填写对应 key！！！")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/25.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/pageImg/220214/26.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("【构建触发器】—— 勾选【GitHub hook trigger for GITScm polling】，用于监听 hook。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/27.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("【构建环境】—— 勾选【Use secret text(s) or file(s)】—— 【新增】——【Secret text】—— 选择凭证、设置别名为 token，后面要用到。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/31.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/pageImg/220214/32.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("【构建环境】—— 勾选【Provide Node & npm bin/ folder to PATH】—— 选择刚刚配置的 NodeJS 版本")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/pageImg/220214/29.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[s._v("【构建】——【新增构建步骤】——【执行 shell】")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入Jenkins工作空间下的项目目录。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作空间可以从【系统设置】—【系统配置】—【主目录】获取。我这里是 /home/springboot/.jenkins")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目目录在工作空间下的 workspace 文件夹内，blog是当前的任务名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/springboot/.jenkins/workspace/blog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 node 版本，可选")]),s._v("\nnode -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 npm 版本，可选")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 npm 源设置为淘宝源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测 npm 是否成功切换，可选")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开打包后的文件夹，dist为默认打包文件夹名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("部署到 Github Pages：需要额外添加以下代码，进行 Git push 操作")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 $GIT_AUTHOR_NAME、$GIT_AUTHOR_EMAIL 就是我们刚刚配置的全局变量，配置局部 git config 信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一定要配置第三步的【Custom user name/e-mail address】，不然取不到全局变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不配置局部 git config 的话，就不能进行 git commit 操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GIT_AUTHOR_NAME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GIT_AUTHOR_EMAIL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名，可选")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的域名'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 提交 commit，"$(date +"%Y-%m-%d %H:%M:%S")" 为当前服务器时间，根据自己需求修改')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自2021年8月13日起，GitHub 不再支持使用密码 push 的方式，所以我们要使用刚刚配置的 Personal access token 用于 push")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取 https 仓库地址，格式为：https://$token@你的仓库地址，例如 https://$token@github.com/demo/demo.git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $token 是刚刚配置的变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$token")]),s._v("@你的仓库地址 master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("部署到当前服务器：需要文件夹的读入、写入等权限")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把生成的项目文件打包成压缩包，方便操作。blog 是压缩文件名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf blog.tar.gz *\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 web 项目目录，/www/wwwroot 为自己当前服务器项目目录，blog 为当前要部署的项目目录，名称自定义（如果没有就要新建，不然会报错）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/wwwroot/blog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将打包好的压缩包，复制到 web 项目目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r /home/springboot/.jenkins/workspace/blog/dist/blog.tar.gz ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压项目到项目目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf blog.tar.gz -C ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除压缩包，可选")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf blog.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);