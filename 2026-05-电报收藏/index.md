# 2026年5月收藏


### AI 与效率工具

- **05-05 00:02** **MTProtoPub**<br>[Agili Hacker Podcast](https://www.resohub.net/2025/12/20/agili-hacker-podcast-ai-hacker-news-chinese/) 用 AI 将 Hacker News 每日内容提炼成中文播客，适合通勤时同步技术趋势；文章同时记录订阅入口与开源实现思路。
- **05-05 00:07** **MTProtoPub**<br>[DiscordHunt 指南](https://www.resohub.net/2025/12/19/discordhunt-guide-find-quality-communities/)介绍通过分类、关键词和热度榜检索 Discord 社区；加入前应检查活跃度、管理规则、历史内容和邀请链接安全性，而不是只看成员数。
- **05-14 23:28** **互联网从业者充电站**<br>[Flowsint](https://github.com/reconurge/flowsint) 是图数据库驱动的 OSINT 平台，把域名、IP、邮箱、手机号、钱包、账号和组织建模为节点，再由 Enricher 扩展 WHOIS、DNS、ASN、泄露记录、社媒和链上关系。技术栈为 FastAPI + Neo4j + PostgreSQL + Celery，可 Docker 本地部署；项目仍较早期，必须限定在合法调查和授权安全研究。
- **05-19 22:03** **优质信息收藏夹**<br>[Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract) 用 LLM 把论文、研报、合同等非结构化文本提取为列表、知识图谱、时间线、超图和时空图；支持 GraphRAG、LightRAG、Hyper-RAG 等引擎、80+ YAML 模板与增量更新。基础流程是 `uv tool install hyperextract`，再用 `he parse` 提取、`he search` 查询。
- **05-19 22:04** **优质信息收藏夹**<br>Agent 数据采集工具链：跨平台 CLI 用 [Agent-Reach](https://github.com/Panniantong/Agent-Reach)，把网站转成命令行接口用 [opencli](https://github.com/jackwener/opencli)，带登录态浏览器控制用 [bb-browser](https://github.com/epiral/bb-browser)，Claude Code 联网编排用 [web-access](https://github.com/eze-is/web-access)，国内内容平台采集用 [MediaCrawler](https://github.com/NanmiCoder/MediaCrawler)，网页转 Markdown 用 [Jina Reader](https://r.jina.ai)。采集公开数据也要遵守平台条款、速率限制和隐私边界。
- **05-19 22:05** **优质信息收藏夹**<br>[飞搜](https://feisou.app/)给公开飞书云文档建立外部索引，按知识库聚合并增加 AI 推荐，适合补足飞书站内搜索难以发现跨空间公开资料的问题。
- **05-19 22:11** **优质信息收藏夹**<br>[Perplexica](https://github.com/ItzCrazyKns/Perplexica) 是可自托管的 Perplexity 类回答引擎，支持 Docker、Ollama、本地模型以及学术、图片和全网搜索；适合重视搜索隐私或需要把检索能力嵌入 Agent 的场景。项目后续可能更名，旧链接可通过 GitHub 重定向定位。
- **05-20 17:49** **黑洞资源笔记**<br>AI 工程师的 12 个核心主题可作为学习与面试地图：提示工程、RAG、向量/Embedding、Agent 与工具调用、推理、记忆与上下文、流式/异步、推理优化、Token/成本、LoRA/QLoRA 微调、自动评估、MLOps。工程重点分别落在可靠知识、死循环与误执行防护、上下文压缩、成本/延迟权衡、黄金数据集和生产监控，而非只会调用模型 API。[原帖](https://x.com/ConsciousRide/status/2044471256846897155)
- **05-30 21:06** **黑洞资源笔记**<br>[TrendRadar](https://github.com/sansan0/TrendRadar) 聚合 35+ 平台热榜与 RSS，用自然语言兴趣做 AI 分类、筛选、翻译、趋势和情感分析，并通过企业微信、飞书、钉钉、Telegram、邮件、ntfy、Bark、Slack 推送。支持 Docker、GitHub Actions 和 Web 配置，适合自建舆情/选题雷达。
- **05-30 21:07** **黑洞资源笔记**<br>[diagram-design](http://github.com/cathrynlavery/diagram-design) 为 Claude Code 提供 13 类 HTML + SVG 图表技能，包括架构、流程、序列、状态机、ER、时间线、泳道、象限、树状和维恩图；可提取站点配色与字体、切换明暗模式，输出自包含、可编辑且不依赖外部图片的图表。
- **05-30 21:07** **黑洞资源笔记**<br>[Insanely Fast Whisper](http://github.com/Vaibhavs10/insanely-fast-whisper) 用 Whisper-large-v3 + Flash Attention 2 加速本地语音转写，支持语言检测、翻译、说话人分离和词级时间戳；A100 上“150 分钟音频约 98 秒”是特定硬件基准，实际速度与显存取决于模型和 batch size。
- **05-30 21:09** **黑洞资源笔记**<br>[mattpocock/skills 的架构语言](https://github.com/mattpocock/skills/blob/main/improve-codebase-architecture/LANGUAGE.md)用 Module、Interface、Depth、Seam、Leverage、Locality 等精确术语替代含混的 component/service/boundary。核心是“小接口隐藏大行为”、实现与接口分离、以接缝支持替换，并通过“删除测试”验证模块是否真正封装复杂度。
- **05-30 21:10** **黑洞资源笔记**<br>“高阶 GPT”不应只当更快的执行器：可用长上下文构建有来源追踪的领域知识库，让模型承担系统架构与方案推演，并把产品、前端、后端、测试、运维拆成独立角色协作。真正价值来自任务设计、证据和复核，而不是订阅价格或“博士生”式营销比喻。[原帖](https://x.com/arkuy99/status/2047376901443129471)
- **05-31 05:51** **黑洞资源笔记**<br>斯坦福 CS336 [Language Modeling from Scratch](https://www.youtube.com/playlist?list=PLoROMvodv4rOY23Y0BoGoBGgQ1zmU_MT_) 共 17 讲，覆盖数据收集与清洗、Transformer/MoE、GPU 与内核优化、并行训练、推理部署、对齐与强化学习，适合从“会接 API”走向理解模型底层实现。
- **05-31 06:00** **黑洞资源笔记**<br>[Understand-Anything](https://github.com/Lum1104/Understand-Anything) 用多 Agent 分析代码库，生成文件、函数、类和依赖的交互式知识图谱，并提供语义搜索、架构导览和变更影响分析；可与 Claude Code、Cursor、Copilot、Gemini CLI 等配合，适合大型陌生项目上手与审查。
- **05-31 06:25** **黑洞资源笔记**<br>[像对待开发者一样对待编码 Agent](https://finbarr.site/2026/05/05/treat-your-coding-agents-like-developers.html)：多 Agent 并行时，共享 Git 分支、缓存、端口、Compose、数据库会互相污染。应给每个 Agent 独立项目副本、运行时、Compose 命名空间、本地 URL 和分支，再走提交、Review、合并或丢弃实验环境的常规工程流程。

### 编程与软件

- **05-14 23:30** **互联网从业者充电站**<br>[Cloud Document Converter](https://github.com/whale4113/cloud-document-converter) 是将飞书/Lark 文档导出为 Markdown 的浏览器扩展，可打包图片并导入 Obsidian。应只备份自己有权访问和保存的内容，不把“页面可见”误当作可绕过复制、版权或保密限制的授权。
- **05-29 07:51** **小声读书**<br>[Open Design v0.8.0](https://github.com/nexu-io/open-design/releases/tag/open-design-v0.8.0) 是设计相关开源项目的版本收藏；阅读 Release Notes 比只看宣传图更适合判断新增能力、兼容性和迁移成本。
- **05-30 20:09** **Programming / Data Science / ML**<br>一份 n8n 综合图解资料，主题是节点、触发器、凭据、数据流与自动化工作流；原收藏只留下 [Instagram 图文入口](https://www.instagram.com/p/DX1Thq5DE2n/?igsh=MTI0Z2Y4MDNxbGhhMA==)，没有可长期直链的 PDF，故仅记录主题、不虚构细节。

### 资源与课程

- **05-04 22:53** **Fang 的资源分享群**<br>[YouTube 零基础教程](https://pan.quark.cn/s/da0f4bff06d2)覆盖账号、频道定位、选题、拍摄剪辑、SEO 标题与缩略图、发布节奏、数据分析和变现方式；网盘资源可能失效，学习时应以 YouTube 当前政策为准。
- **05-04 22:53** **Fang 的资源分享群**<br>[Seedance 2.0 一小时入门](https://pan.quark.cn/s/d5be902da8c9)从提示词、场景和角色设定讲到渲染导出，适合快速建立视频生成的端到端流程；版本迭代较快，参数与界面需按当前产品核对。
- **05-05 00:04** **MTProtoPub**<br>[《超级聊天术》资料页](https://www.resohub.net/2025/12/20/effective-communication-guide-5-steps/)把沟通拆成破冰、提问、倾听、表达与推进，覆盖工作汇报和冲突处理；真正练习应以具体场景复盘和反馈为主，而不是背万能话术。
- **05-19 22:13** **优质信息收藏夹**<br>相邻两条是同一份“远程兼职/技能变现网站”长清单，合并为按用途选平台：综合外包看 [猪八戒](https://www.zhubajie.com)，技术远程看 [程序员客栈](https://www.proginn.com)，插画接单看 [米画师](https://www.mihuashi.com)，海外自由职业看 [Fiverr](https://www.fiverr.com)，课程与社群工具看 [小鹅通](https://www.xiaoe-tech.com)和[知识星球](https://zsxq.com)。收入宣传不可当承诺，应先核对抽成、交付、税务、争议处理与诈骗风险。

### 影视与阅读

- **05-09 19:26** **极客分享**<br>[Blogosphere](https://text.blogosphere.app/) 聚合不受算法信息流主导的个人博客和数字花园，按科技、个人生活、社会经济等频道分类，可作为 Hacker News 之外的独立写作者发现入口。

### 生活与思考

- **05-14 23:36** **互联网从业者充电站**<br>人们厌恶的常不是劳动本身，而是长期处于低自主、慢反馈、重复、可替代的位置。规模化组织为稳定和可预测性把任务标准化，个体因此失去控制感、独特性与意义。改善方向不是空泛“热爱工作”，而是逐步争取更高自主、更快反馈、更强挑战和更低可替代性，同时承认大量维护型岗位对系统稳定仍有价值。

