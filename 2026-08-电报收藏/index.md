# 2026年8月收藏


### AI 与效率工具

- **08-02 15:38** **Hyper-Extract：从文档到结构化知识**<br>用 LLM 将论文、研报、合同等非结构化文本提取为列表、知识图谱、超图、时间线或时空图；整合 GraphRAG、LightRAG、Hyper-RAG、KG-Gen 等引擎，并提供金融、法律、医疗、工业等 80+ YAML 模板和增量更新。基本用法：`uv tool install hyperextract`，再用 `he parse 文档.md -t 模板 -o 输出目录` 与 `he search 输出目录 "问题"`。[GitHub](http://github.com/yifanfeng97/Hyper-Extract)
- **08-03 21:01** **AI 生成 PPT 的关键是先定听众记忆点**<br>实用提示词：先判断汇报最需要听众记住什么，再围绕目标设计整套 PPT；不要照原文顺序分页。逐页给出标题、核心信息、建议图表、页面结构和口播重点，每页只承担一个任务，页间保持因果、递进或转折。先解决逻辑，再处理排版。
- **08-03 21:06** **扁平手绘动画 Skill**<br>工作流分三步：先确认动画方案，再确认最终静帧，最后生成动画并检查画面与音效。视频样例用米白纸张背景、黑色手绘线稿和少量彩色强调，把“笔记/脚本—录音—摄影—胶片成片”的内容生产链用虚线箭头和接力出现的物件串起来；适合知识讲解、观点可视化和口播 B-roll。生成模型可替换，不必绑定单一供应商。
- **08-06 21:39** **松散水彩线稿的童书叙事风格**<br>四张图保持钢笔/墨线草稿感、透明水彩晕染、柔和低饱和色、轻纸张颗粒与大面积留白；人物和动物比例略夸张，连续场景有明确故事感。提示词应强调“松、干净、有故事”，避免过度细节；可附 `--sref 1979611645 --ar 3:4 --v 6.0 --style raw` 作为 Midjourney 风格参考。
- **08-09 17:02** **WeRSS：微信公众号热度分析系统**<br>支持公众号定时采集、文章导出、关键词提取、主题聚类、可视化，以及飞书/钉钉/微信通知；还提供外部 API、MCP 与 AI 接口，适合自建内容监测和选题雷达。[GitHub](https://github.com/wang-h/werss)

### 编程与软件

- **08-02 15:47** **Awesome Architecture：像架构师一样思考**<br>以架构方法、案例和工程实践组织知识，适合作为系统设计学习索引。[站点](https://study8677.github.io/awesome-architecture/)
- **08-03 18:30** **GhidraMCP：让 Agent 调用逆向分析工具**<br>通过 Model Context Protocol 暴露 Ghidra 的反编译与分析能力，让模型辅助执行二进制逆向、代码审计与漏洞研究；应限定在自有或明确授权样本中使用。[GitHub](https://github.com/LaurieWired/GhidraMCP)
- **08-03 18:33** **Blackbird：跨平台账号 OSINT**<br>用用户名或邮箱在 600+ 社交平台检索数字足迹，提供 AI 过滤与分析，并可导出 PDF/CSV；结果可能有同名误报，必须二次核验且遵守隐私与授权边界。[GitHub](https://github.com/p1ngul1n0/blackbird)
- **08-04 00:14** **poc-lab：近期高危漏洞复现库**<br>收集 Linux 内核、Windows、macOS 等平台的 CVE PoC 与复现脚本，适合在隔离实验环境中做防御验证，不应用于未授权目标。[GitHub](https://github.com/Unclecheng-li/poc-lab)
- **08-09 17:07** **翁国栋的网络日志**<br>个人技术博客，主题包括微信小程序开发和 AI 技术实践，可作为中文开发案例补充。[博客](https://wengguodong.com/)

### 工程与设计

- **08-01 11:42** **SketchUp Pro 2026 v26.1.189**<br>连续消息包含软件主体与补丁归档，预览仅能确认版本和 SketchUp Pro 2026 标识；文件超过导出上限，笔记不引用本地压缩包，也不提供来源不明的破解文件。
- **08-02 20:36** **70 年代风格办公桌模型**<br>白色大桌面配镀铬弧形桌腿和可移动抽屉柜，造型偏现代主义/复古办公家具，适合经理办公室、展厅或产品渲染；归档附件不写入本地链接。
- **08-02 20:40** **桌面文具与数码摆件模型**<br>组合包含 iMac、书本、笔记本、纸张、笔筒、台灯和多种文具，可快速填充办公室、工作室或学生桌面场景；本地模型包不在 Markdown 中引用。
- **08-03 20:42** **优秀个人网站灵感清单**<br>共同特征是强叙事、交互细节和鲜明个人气质，适合研究作品集与实验型 Web 设计：[Echo Echo](https://echoecho.space/)、[Jesse Zhou](https://www.jesse-zhou.com/)、[Nitya's Notes](https://nityasnotes.com/)、[Harini](https://harinisk.com/)、[VVisual](https://www.vvisual.biz/)、[Rona Wang](https://rona.wang/)、[Joey de Ruiter](https://joeyderuiter.me/)、[Charlie Dean](https://charliedean.com/portfolio)、[Sumatran Cat](https://sumatran.cat/)、[Itom](https://itomdev.com/)、[Matteo Santoro](https://interactive.matteosantoro.dev/)、[Moncy](https://www.moncy.dev/)。
- **08-06 22:03** **优秀设计工作室知识库**<br>飞书数据库以卡片缩略图集中整理品牌、网页、交互与视觉设计工作室，可用于建立设计参考雷达和项目对标清单。[知识库](https://dqxf1izhlm.feishu.cn/share/base/view/shrcng6FtYpq6HMbd3Me9pPvLkc)

