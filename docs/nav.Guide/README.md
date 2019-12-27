---
title: GuideDoc
---
# 简介

> 本站为 AthenaBlog ，用于分享学习成果和知识，由 AthenaEdu 组织成员共同维护。

当前文档为指导文档，请**详细阅读本文档之后再进行相关操作**。

同时**本文档也是一个示例文档**，请后续改动本项目成员按本文档规范进行。

## 相关技术说明

本站基于 [Vuepress](https://vuepress.vuejs.org) 创建，请先全局安装 [Nodejs](https://nodejs.org/en/) 和 Vuepress 包。


# 使用

本流程参考开源软件习惯工作流程进行。遵循 Vuepress 提出的“约定大于配置”原则。

## 获取

首次进行操作你需要在 organzation 下 `fork` 本项目，`clone` 到电脑本地。

```bash
# if you work on it for First time

fork it.       # fork it to your account.

git clone      # clone repo.
cd Athenablog  # enter project folder
npm install    # install dependencines.
```

如果你的电脑上已经存在该项目，请先执行命令 `git pull`进行与组织同步。

```bash
# if you have already worked on it or the project already existed on your computer.

git pull      # pull codes from remote repo.
cd Athenablog  # enter project folder
```

## 分类/导航条

页面导航栏对应 `doc` 目录中的 'nav' 开头的文件夹。

如果你需要新建分类文件夹，**请以 `nav.folderName` 格式创建**，本站采用根据文件夹前缀自动生成导航条插件。但此处请注意尽量避免过多分类。

## 写作

请以 markdown 文档形式提交你的内容，放在 `doc/nav.folder` 文件夹下。

### 文档编码

请以 `utf-8` 格式编辑你的文档，不论中英文。

非UTF8中文字符在Windows平台编译会乱码。

### 文档命名

文档请以英文命名，单词之间以下划线 `_` 隔开。
```bash
good: specifications_of_code_language.md

bad: specificationsOfCodeLanguage.md
bad: specificationsofcodelanguage.md
bad: specifications-of-code-language.md
bad: specifications of code language.md
```
### FrontMatter

每个文档开头必须以 `FrontMatter` 开始，具体格式为
```markdown
---
title: write your document name
author: Helen
date: 2019-12-25 12:24:14
category: first category
tag: ['first','second']
---
```
字段解释：

- `title`: 用于在侧边栏显示文档标题。请参考示例文档 `nav.Guide/sample.md` 写法。
- `author`: 注明作者
- `date`: 文档日期时间
- `category`: （可选，不写请空着）文档所属归类
- `tag`: （可选，不写请空着）文档所属标签

### 语法

文档请遵循 GFM 标准语法进行书写，公式请按LaTeX语法书写，这个功能后续会更新。

书写规范请参考文档 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines) 便于其他人的阅读。

当然更推荐英文写作。

### 预览
请在 `Athenablog` 文件夹下使用命令
```bash
npm run dev
```
编译完成后打开浏览器地址栏输入 `localhost:8080` 预览。

### 提交

提交此处指的是提交到你的个人账号下。然后发起 `pull request` 请求与组织库同步。

请以记事本形式打开 `deploy.sh` ，修改
```bash
git push -f https://github.com/<username>/Athenablog.git master:gh-pages
```
中的 username 为你的 Github ID。

双击执行根目录中的 `deploy.sh` 脚本进行提交。（注：脚本运行可能比较慢，它在运行完成后会自动关闭。）

# 组织者

[@Moriadry](https://github.com/Moriadry)

> Athena 学习计划
> 1. RoundTable
> 
>       在ToundTable下，我们通过issue进行技术问题的讨论、技术资料的共享，主要方式是: 每个人把自己看过某本技术书籍印象最深刻、最叹为观止的部分分享出来。如果有也研究过的，可以在下方进行评论，交流。
>
>       提issue的最佳实践:
>       
>       a. 标题必须是英文，不要是链接形式，可以是你起的 issue 的大致概括；
> 
>       b. 内容通常是 link ，可以是一本书名，也可以是一个博客文章的入口，甚至可以是一串代码的碎片，Anything worth mentioning;
> 
>       c. link 之后，请附带上个人感悟的部分。比如这段代码精妙在何处，这本书的第几章有何独到之处，这个博客棒在哪里；
> 
>       d. issue 内容最好是英文，如果感觉为难，也可以写中文。注意一定不要从他处直接抄点东西(可以部分借鉴)放上去，对你自己和他人都没有意义；
> 
>       e. 学会如何完整你的 issue ，https://github.com/AthenaEdu/RoundTable/issues/labels 提交 issue 的时候你可以选择 issue 类型，是 material ？ 还是 help wanted (比如希望找人组队比赛，某项作业或代码有疑问寻找解答)？ 抑或是 enhancement (对自己或他人之前的某个 issue 有更深的理解)？
> 
>       f. 如果你对某个issue感兴趣，请写下你的理解，不要刷无意义的回复。一经发现则踢出 org 和 学习计划。因为 github 是所有技术人的共有网站，我们应该爱护、保护它的生态，如果有英语语言国家的朋友看到我们的项目，也能进行一些学习交流。请对技术保持尊重和敬畏!
>       
>  2.  Athenablog
>   
>       Athenablog 接受 member 的原创文章，但是请保证是自己学习心得和总结，务必不要抄袭。形式可以是 leetcode 刷题感悟，比如某个dp解法到精髓你忍不住发个长篇大论回味一番。若干年后当你回味自己的文章时，还能感受到这样的工程与算法之美。我想，这样的感动才是长足的。
>       
>   这两种途径都纯粹出于个人对技术的热情，没有限制要求比如说必须多久写一篇文章之类的要求，Athena 学习计划这样一个小实验，会在3个月内无任何 issue、pr 更新的情况下 close 掉，感谢大家！

# 成员

项目搭建、初版文档：[@Sirice](https://github.com/Siricee)

<!-- 组织成员： -->
<!-- - [anybody](github-link) -->