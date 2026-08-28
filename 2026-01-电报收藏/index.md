### AI 与效率工具

- **01-07 08:25** **搜索公开飞书知识库**<br>在 Google 使用 `site:feishu.cn 高质量关键词` 可定向发现公开的飞书文档与知识库；还可加引号、文件名或主题限定词减少噪声。只使用公开可访问内容，并尊重原作者权限。
- **01-14 21:12** **让 AI 用“最低理解门槛”解释内容**<br>与其只说“通俗一点”，不如明确受众耐心短、缺乏背景、不愿额外推理，要求直接回答“这篇文章到底说什么”。这种受众约束常能生成更接近短视频口播的语言；发布前仍需去掉冒犯性设定，并保留关键限定条件。
- **01-18 15:36** **AI 友好的分形文档结构**<br>根目录文档规定：功能、架构和写法变化后必须更新子目录说明；每个目录放一份三行以内的架构说明与文件职责清单；每个源码文件开头写 input、output、position，并要求文件变化时同步更新目录文档。这样局部知道自己在整体中的位置，整体又能追踪局部变化，可显著改善 Claude Code 在大项目中的导航与维护。
- **01-18 22:22** **网页转 Markdown**<br>[Jina Reader](https://jina.ai/reader/) 可将 URL 转为适合 LLM 处理的文本并提供 API；[MarkdownDown](https://markdowndown.vercel.app/) 侧重把网页连同图片下载为 Markdown。前者适合自动摘要/RAG 输入，后者适合个人归档；动态页面、登录墙和版权内容需另行处理。
- **01-18 22:25** **Azure OpenAI 申请与国内使用线索**<br>收藏记录了通过 [Azure OpenAI Service](https://azure.microsoft.com/zh-cn/products/ai-services/openai-service) 申请 OpenAI API 的流程，并参考 [use-ChatGPT-in-GFW](https://github.com/Sha1rholder/use-ChatGPT-in-GFW) 与[首次创建问题](https://github.com/Sha1rholder/use-ChatGPT-in-GFW/issues/6)。这是当时经验，区域可用性、赠金和合规要求会变化，使用前应以 Azure 官方规则为准。
- **01-18 22:45** **为 Cursor 固化项目架构**<br>中大型 monorepo 架构稳定后，让 Cursor 生成带架构图的 project rule，说明包边界、数据流和各 feature 所属位置；新增功能时始终附带该规则，能减少模型在上下文不足时乱建文件。规则应随架构变更更新，且避免塞入会快速过期的实现细节。
- **01-18 23:33** **LEANN：轻量本地语义检索**<br>LEANN 以图结构和按需计算嵌入减少本地向量存储，可检索文档、邮件、浏览历史、聊天记录和代码库，强调数据留在设备本地；适合个人知识库和 Claude Code 辅助检索。[项目入口](https://qumao.eu.org/nREYrn)
- **01-18 23:46** **n8n 工作流索引**<br>[n8nworkflows.xyz](https://n8nworkflows.xyz/) 收录数千个工作流，可用于寻找触发器、节点连接与错误处理范例。复用前应删除陌生凭证、检查外部请求与代码节点，避免直接导入后运行。
- **01-19 22:57** **Nano Banana 图像案例与一致性数据**<br>[Awesome-Nano-Banana-images](https://github.com/PicoTrex/Awesome-Nano-Banana-images) 提供输入图、输出图和完整提示词，覆盖换装/妆发、风格迁移、照片修复、产品包装、多图融合等任务；配套 Nano-consistent-150k 数据集面向多编辑任务中的身份一致性研究。
- **01-19 23:12** **交互式 AI 导师模板**<br>先询问主题，再拆成从基础到高级的大纲；每个知识点依次用类比解释、苏格拉底提问、短练习和“是否继续”检查，未理解就换一种解释；每个板块有小测，结尾用综合挑战检验迁移。十五分钟最多建立框架，不等于真正掌握，后续仍要实践和间隔复习。
- **01-19 23:23** **Agent Skills 中文指南**<br>[指南原文](https://mp.weixin.qq.com/s/jUylk813LYbKw0sLiIttTQ) 覆盖 Skill 的概念、优势、制作方法、适用场景与实验，适合从“写一次提示词”转向“封装可重复工作流”。
- **01-19 23:34** **用 Skill 生成 PPT**<br>[Nano Banana Pro + Claude Code PPT Skill 教程](https://mp.weixin.qq.com/s/QRek8OUN_BvBvOPr6ySvBA) 以实际 Skill 展示创建和安装过程；一个实用技巧是在 README 中直接给出面向 AI 编程工具的安装指令，让 Cursor/Claude Code 可自动完成依赖和配置。
- **01-20 12:57** **SkillsMP**<br>[SkillsMP](https://skillsmp.com/) 聚合并分类 GitHub 上的 Skills，可按 star 和主题做初筛；仍需检查源码、权限、维护状态与许可证。
- **01-22 08:27** **Remotion Skills**<br>可用 `npx skills add remotion-dev/skills` 安装 Remotion 官方技能；[补充 Gist](https://gist.github.com/JonnyBurger/5b801182176f1b76447901fbeb5a84ac) 记录相关用法。适合把 React 视频制作的固定规范注入编码 Agent。
- **01-25 14:53** **Claude 长对话与上下文管理**<br>接近上限前让模型总结问题演变、关键方案、偏好、项目背景和下一步，再把总结带入新会话；代码/文档可通过 Artifact 发布后 Customize 重开；Pro 可在新会话搜索旧对话。减少消耗的关键是编辑原始 prompt 后重新生成，而不是不断追加整篇修改；Memory 只存稳定偏好和长期背景，不存敏感信息或频繁变化状态。提示词应直接、分阶段加载上下文，并在长任务中定期做外部 checkpoint。
- **01-25 22:00** **Agent Skills 目录**<br>[agent-skills.cc](https://agent-skills.cc/zh) 按 `SKILL.md` 开放格式收集面向 Claude Code、Codex CLI 和 ChatGPT 的技能，支持分类和搜索。
- **01-28 23:47** **ClawdBot 7×24 桌面 Agent 部署**<br>[部署文章](https://telegra.ph/ClawdBot傻瓜式使用方法手把手教你部署724替你用电脑干活的ClawdBot-01-28)与[掘金原文](https://juejin.cn/post/7599483314161860627)介绍常驻桌面 Agent 的搭建。长期运行前应最小化系统权限、隔离浏览器账户和密钥，并加入预算、日志和停止开关。
- **01-29 22:31** **近 30 天社区研究 Skill**<br>[last30days-skill](https://github.com/mvanhorn/last30days-skill) 会研究 Reddit 与 X 最近 30 天的讨论，再生成可复制提示词；适合需要近期舆情和用户语言的主题，但结论仍应保留帖子链接与日期。
- **01-29 23:31** **把成熟开源项目封装成自然语言工具**<br>Skill 可把 yt-dlp、格式转换、PDF 处理、图片压缩、网页抓取等成熟项目包装为按需加载的工作流，让 Agent 负责依赖、参数和调用。优势不是临时“重写轮子”，而是复用被社区验证的实现；封装时仍要固定版本、检查许可证、限制输入和验证输出。

### 编程与软件

- **01-25 14:26** **OpenCode 中文教程**<br>[Learn OpenCode](https://learnopencode.com/) 提供从安装配置到 Agent、Skill、命令和主题定制的路线，并覆盖智谱、DeepSeek、MiniMax 等模型；另有[详细入门指南](https://mp.weixin.qq.com/s/zKsbKMMVLiayrehHJHFgOg)。
- **01-30 00:01** **SVGView 在线工具**<br>[SVGView](https://svgview.com/zh) 可查看、优化、编辑 SVG，并在本地导出 PNG、WebP、PDF 或 React 组件，适合快速检查图标和前端资产。
- **01-30 00:03** **爱鼓捣 AI 开发博客**<br>[techdiylife](https://techdiylife.github.io/blog/index.html) 覆盖 RAG、LLM 使用技巧、本地模型部署、提示调优、语音识别与合成，可作为中文实操资料索引。
- **01-31 12:13** **暴躁的教授：论文阅读助手**<br>[mad-professor-public](https://github.com/LYiHub/mad-professor-public) 集成 PDF 处理、翻译、RAG 检索、问答和语音交互，支持中英对照阅读，适合搭建一站式论文研读界面。

### 工程与设计

- **01-14 20:51** **AI 工控与视觉运控课程链路**<br>学习顺序可按[上位机 + AI](https://edu.51cto.com/course/37648.html)建立工控认知，再学[机器视觉 + AI](https://edu.51cto.com/course/38002.html)、[C# 多线程与异步](https://edu.51cto.com/course/38214.html)，最后进入[MES + AI](https://edu.51cto.com/course/38244.html)。比“套餐”更值得保留的是能力链：现场控制 → 视觉/运控 → 并发通信 → 制造执行系统。
- **01-15 12:58** **不同阶层的消费触发框架**<br>截图将消费动机简化为三类：预算受限者更看重性价比、实用功能、熟人推荐和即时满足；中产更看重品质、教育/健康、专业背书和身份认同；高净值人群更看重时间、隐私、专属服务、稀缺机会和圈层信任。可用于提出访谈假设，不能把阶层标签当作真实用户画像，必须用数据验证。

### 资源与课程

- **01-18 23:08** **Microsoft 初学者课程群**<br>[Generative AI for Beginners](https://microsoft.github.io/generative-ai-for-beginners/) 含导学、代码、作业与延伸链接；同系列还有 [ML](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)、[Data Science](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)、[AI](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)、[Web Dev](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)、[IoT](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst) 和 [XR](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)。
- **01-22 10:04** **微服务与多 Agent 课程**<br>极客时间的[微服务进阶训练营](https://u.geekbang.org/subject/microservices-java/1008433)偏 Java 微服务工程；慕课网的[MCP + A2A 商业级多 Agent 全栈应用](https://coding.imooc.com/class/955.html)覆盖 MCP、A2A、思维链、多 Agent 与分布式架构。是否购买应先看公开大纲与项目产出，原消息中的非官方换课广告已略去。
- **01-23 05:51** **网络安全学习路径**<br>[mycybersecuritylearningpath](https://github.com/lhosts/mycybersecuritylearningpath) 记录作者学习网络安全的路线与资料，可用于规划练习顺序；所有攻防实验只在授权靶场中进行。
- **01-25 22:05** **AI Fundamentals 知识库**<br>[AI-fundermentals](https://github.com/ForceInjection/AI-fundermentals) 涵盖 GPU 架构、CUDA、大模型基础与 AI Agent，适合补齐从硬件到应用的技术链路。

### 内容与运营

- **01-15 22:38** **监控“新词”的反向追踪法**<br>先监控能快速上线热点内页的 all-in-one 站点，用 Google `site:` 配合最近 24 小时筛选新增页面；再拿已知热点回溯其爆发初期，用 `intitle:` 查当时哪些站最先上线内容，把这些先行站加入长期监控。团队协作时应共享词表、首次发现时间、来源站和后续流量表现。
- **01-17 10:50** **SEO 基础工具栈**<br>Surfer SEO 做内容覆盖，Screaming Frog 做技术审计，GSC 看索引与查询，Similarweb 看竞品渠道，BuzzSumo 找选题，Ubersuggest 找关键词，BuiltWith 看技术栈；生成初稿和流量情报工具只能辅助，最终仍以搜索意图、页面质量和转化数据验证。
- **01-17 10:51** **从产品追溯到环境**<br>产品 ← 解决方案 ← 问题 ← 需求 ← 场景 ← 目的 ← 人性 ← 环境。分析时不要停在“用户想要这个功能”，而要追问它在哪个时刻出现、用户真正想完成什么、哪些心理动机稳定、又被技术、社会观念和文化怎样塑形。
- **01-17 10:53** **竞品分析提示词骨架**<br>正向反馈要记录“谁、在什么场景、原有方案、痛点、产品独特能力、使用渠道、带来的定性/定量价值”；负向反馈记录用户画像、任务、失败环节和相对旧方案的损失，并保留原话与链接。再补产品更新、团队访谈、融资收入、增长手段和替代品，最后抽象成“对某类用户做某件事，本产品是什么、能做到什么、为何优于替代品”的定位句。
- **01-17 11:11** **产品的三部分**<br>产品不仅是已经做出的功能，还包括明确决定不做的边界，以及用户真正使用的那一小部分。后两者通常更关键：边界决定定位与维护成本，真实使用决定价值是否成立。
- **01-17 11:15** **“半可控随机”更容易上瘾**<br>纯随机缺乏掌控感，完全可控又缺少惊喜；在随机结果中插入有限选择，会让用户把成功归因于决策、把失败部分归因于运气。设计抽卡、推荐或游戏强化机制时，应警惕利用成瘾心理，并给出概率、预算和退出机制。
- **01-24 16:50** **Reddit 营销社区地图**<br>SEO 可关注 r/SEO、r/bigseo、r/linkbuilding、r/seogrowth；营销增长可关注 r/marketing、r/socialmedia、r/PPC、r/GrowthHacking；创业可关注 r/entrepreneur、r/smallbusiness。成员数会变化，真正筛选标准应是目标用户密度、每日有效讨论量和版规。
- **01-25 00:47** **WorkAny 一周 Vibe Coding 复盘**<br>[完整复盘](https://telegra.ph/复盘一下我vibe-coding-一周开发WorkAny-的过程很有意思-1-上周三在香港办卡临时起意想做个-01-24-2)记录从临时想法到桌面 Agent 项目的开发过程，可重点看需求收敛、工具选择、连续迭代与真实发布之间的取舍。
- **01-25 00:57** **NotebookLM 做原创虚拟产品**<br>把 NotebookLM 从“学习工具”改造成“内容策展与重组工具”：一次导入大量同主题来源，要求按用户问题重新归类、比较、交叉验证，再生成新的结构与产品骨架。优势是多源处理、可按要求直接生成结构、可多维度产出；但最终目标应是“用自己的判断重新编排并服务特定用户”，必须二次筛选、加工、加案例和优化体验，不能直接售卖 AI 拼接文本。
- **01-25 01:16** **运营术语压缩表**<br>用户链路：拉新 → 激活 → 留存 → 收入 → 传播（AARRR），配合用户画像、分层、分群、生命周期和行为路径；内容侧关注选题、UGC/PGC、痛点/痒点/爽点、内容闭环、完播率、完读率、迭代；指标侧区分 UV、PV、CTR、CVR、GMV、CAC、LTV、ARPU、ROI/ROAS、NPS/CSAT；活动侧明确钩子、蓄水期、爆发期、复盘与链路优化；社群侧用 SOP、活跃/留存 KPI、用户教育、意见领袖与裂变因子。术语的价值在建立共同口径，不在用黑话替代问题定义。
- **01-25 08:04** **口播短视频流水线**<br>用已验证的标题和开头重写新框架；把同选题的优质资料放入知识库，让 AI 只补主体，开头占约 20%，15—20 秒进入主题；录制时优先灯光与收音；剪辑只保留有效表达、配字幕和必要素材；封面从多个爆款标题的结构重新组合，标签兼顾宽词和窄词。最关键仍是脚本的信息和观点，设备与模板只是放大器。
- **01-25 14:57** **六个月 AI 开发学习路线**<br>第 1 月 Python、必要数学和模型概览；第 2 月 NumPy/Pandas/Matplotlib 与 3 个 ML 小项目；第 3 月 PyTorch/TensorFlow、基础网络、NLP 与视觉项目；第 4 月 LLM、API、RAG、Agent、向量数据库；第 5 月发布并部署 3 个项目；第 6 月整理作品集、简历、社区与面试。月份只是节奏参考，作品是否可运行和能否解释取舍比打卡更重要。
- **01-25 15:11** **30 分钟 Reddit 需求调研**<br>在 3 个垂直 subreddit 搜索 `alternative to`、`too expensive`、`problem with`、`frustrated with`，记录用户真实抱怨句式和被提及竞品，形成“购买意图词库”；再找 24 小时内的新问题，先不推产品，只给 2—3 个真有用的方案和亲历经验。营销的本质是及时进入正确对话，而不是冷启动群发私信。
- **01-25 15:54** **出海 SEO 工具链**<br>关键词：Google Keyword Planner、AnswerThePublic；竞品/难度：Similarweb、Ahrefs Webmaster Tools；技术审计：Screaming Frog、PageSpeed Insights、Schema Validator；数据：GSC、GA4、Looker Studio；多地区 SERP：SerpApi/搜索参数、AccuRanker；本地化：DeepL；基础设施：Cloudflare。AI 只做结构与初稿，不能直接批量发布低质量内容。
- **01-25 16:08** **Reddit 的长期运营法**<br>选择目标用户密度高且活跃的 subreddit；发营销内容前先通过真实点赞与评论建立信誉；用 f5bot 等工具监控竞品与痛点关键词，尽早进入新讨论；反复验证吐槽、深度指南、开放问题和创始人故事；内容保持 95% 提供价值、5% 轻量植入，并严格遵守社区版规。

### 生活与思考

- **01-18 22:43** **低成本海外短信卡经验**<br>收藏者当时使用英国 GiffGaff 卡接收海外短信，经验是免费邮寄、收短信不计费、每 180 天主动发一次短信保号。费用与服务规则可能变化，购买前需核对漫游、实名、号码回收和目标平台支持情况。
- **01-25 16:06** **生命会寻找出路**<br>视频里一只没有脚的鸟用嘴勾住树枝休息。可留下的不是励志口号本身，而是一个具体观察：限制会改变策略，适应往往来自对现有能力的重新组合。