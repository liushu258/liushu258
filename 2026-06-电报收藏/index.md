# 2026年6月收藏


### AI 与效率工具

- **06-02 09:24** **Vibe Vibe：从想法到产品的 Vibe Coding 教程**<br>Datawhale 面向零基础用户设计的四段式路线：基础心法、全栈进阶、项目实践与延伸阅读；可在线学习，也能用 Docker Compose 私有部署。图中还给出“在线 IDE + Skills”的进阶路径，以及从选题、开发到部署的分层定位。[GitHub](https://github.com/datawhalechina/vibe-vibe)
- **06-02 09:25** **Anything to NotebookLM：多源资料加工流水线**<br>支持网页、微信、X、YouTube、播客、PDF/EPUB、Office 文档、图片 OCR 等 15+ 输入；可生成播客、PPT、思维导图、Quiz、视频、报告、信息图和闪卡。实现上以 Claude Code Skill 串联抓取器、付费墙绕过、NotebookLM API 与输出处理器；付费墙策略包含 Googlebot、Bingbot、Cookie/Referer、AMP、JSON-LD、archive.today 等逐级回退。[GitHub](https://github.com/joeseesun/qiaomu-anything-to-notebooklm)
- **06-02 09:26** **JustHireMe：本地优先的求职闭环**<br>从 ATS、RSS、Hacker News、GitHub Jobs、Reddit 等来源抓取职位，经标准化、质量门控、本地向量检索与 LLM 评估后排序，再生成简历、求职信和外联文案。设计原则是少抓取、重解释、重本地控制，避免无差别海投；技术栈为 Tauri/React 前端与 Python/FastAPI 后端。[GitHub](https://github.com/vasu-devs/JustHireMe)
- **06-02 14:22** **VoiceBox：本地声音克隆桌面端**<br>基于 Qwen3-TTS，约 3 秒参考音频即可克隆声音，强调完全本地运行、情绪表达和多语言切换；声音克隆降低了制作门槛，也应同步考虑授权、身份冒用和反诈骗风险。[GitHub](https://github.com/hobi2k/Qwen3-TTS-Voicebox)
- **06-02 16:19** **GitHub Trending Digest Skill**<br>按周追踪涨星最快的 GitHub 项目，通过 `/trending` 生成 Top 10 简报，适合把“逛 GitHub”变成固定的信息筛选流程。[GitHub](https://github.com/VivienneSuu/github-trending-digest)
- **06-02 16:59** **用超长 Meta-Prompt 构造专家人格**<br>一个 4 万字“巴菲特”提示词案例表明，高拟真专家模拟依赖四类材料：完整人物知识、领域决策框架、语言与行为锚点、严格的输出与核查步骤；价值更多在提示工程结构，而非角色崇拜。[案例](https://www.reddit.com/r/ChatGPT/comments/1m5ha9j/i_turned_chatgpt_into_warren_buffett_with_a_40000/)
- **06-05 22:28** **SIT：把岗位 JD 变成可投递的实习项目**<br>先补全候选人画像并匹配 2—3 个 GitHub 项目，再审计仓库、规划 baseline、提出 API/缓存/测试/监控/CI/CD 等增量改造，最后生成 STAR 简历段落、代码讲解、面试 Q&A、PPT 提示词与投递清单。支持 interview-only 到 full-run 四档深度，并可联动 VibeResume 导出网页简历/PDF。[GitHub](https://github.com/LiuMengxuan04/shushu-internship-tool)
- **06-14 14:09** **X Made Easy Skill：把复杂主题写成白话教材**<br>先确认目录与风格，再按“开篇除恐—术语白话化—直觉先行—贴身例子—短收尾”逐章生成 Markdown，最后可转 PDF；适合教师、培训师和内容创作者制作循序渐进的小书。[GitHub](https://github.com/baibanbao/x-made-easy-skill)
- **06-14 14:10** **AI 辅助读书：先建骨架，再做思维对抗**<br>四步提示框架：提炼核心论旨与五个概念；定位承载论点的章节、剔除重复案例；要求反对者寻找隐藏前提与证据薄弱处；最后压缩成三句话和一个行动点。AI 适合过滤噪声，不应替代对原文的判断。[原帖](https://x.com/ihtesham2005/status/2065366172426813644)
- **06-20 08:29** **“影子之书”阅读法**<br>读到论断时，不只问“作者说了什么”，还让 AI 补出三个反对学派、被略过的前提、思想谱系、推理边界与现有实验支持度，用一本书显影其未写出的对立版本。[原帖](https://m.okjike.com/originalPosts/6a1ef5bec2dc8bf83fac74aa)
- **06-20 14:45** **每日 AI 信息聚合器**<br>自动抓取 GitHub Trending、Hacker News、OpenAI、Anthropic、InfoQ AI 等来源，用 GPT-4o 摘要并翻译成中文，把每日浏览压缩到约 10 分钟。[GitHub](https://github.com/wenbochang888/github-trending-spider/) · [在线页](https://www.gdufe888.top/ai/)
- **06-27 20:35** **用 Codex 快速入门陌生领域**<br>图集给出的核心不是“让 AI 直接讲课”，而是建立可持续学习仓库：①先创建领域目录、`AGENTS.md`、学习计划与资料索引；②让 Codex 先画知识地图和依赖顺序，不急着钻细节；③把稳定的学习流程封装成可重复调用的 Skill；④每天完成一个明确输入—输出闭环，并把进度、错误与复盘写回仓库；⑤每个主题最终落到一个小项目，用可运行成果检验理解。

### 编程与软件

- **06-02 16:09** **Awesome CEO：创业者的结构化学习索引**<br>按融资、产品、销售、营销、管理、招聘、财务、创业八个模块，汇集 YC、a16z、Sequoia 与一线创业者资料，适合替代碎片化检索。[GitHub](https://github.com/kuchin/awesome-ceo)
- **06-02 16:15** **微信 4.0 数据库解密器**<br>从运行中的微信进程提取密钥，解密 SQLCipher 4 数据库并支持实时消息监听；仅应处理本人有权访问的数据，注意隐私与合规。[GitHub](https://github.com/ylytdeng/wechat-decrypt)
- **06-02 16:25** **Deep-Live-Cam：单图实时换脸**<br>无需训练即可用一张照片完成实时视频换脸。工具普及同时放大了肖像侵权、虚假内容和身份冒用风险，使用时应获得明确授权并标注合成内容。[GitHub](http://github.com/hacksider/Deep-Live-Cam)
- **06-02 16:53** **PanSou 聚合网盘搜索**<br>聚合百度、夸克等 13 类网盘及磁力资源，可封装为 Telegram 机器人，也能通过 MCP 给 AI 提供检索能力；适合自建统一资源入口。[部署指南](https://www.resohub.net/2025/08/31/pansou-api-integration-guide-disk-search-tg-bot/)
- **06-05 22:29** **Linux Basics for Hackers 学习笔记**<br>以 Kali Linux 虚拟机为环境，按命令行、网络、权限、进程、脚本与安全实践分模块学习，并补充 LabEx、OverTheWire、TryHackMe、CMD Challenge 等练习入口。[GitHub](https://github.com/ahegazy0/linux-basics-for-hackers-notes)
- **06-05 22:33** **Agent 的存算分离架构**<br>收藏了一篇关于 Agent 存储与计算解耦的架构讨论，适合作为长期运行 Agent 在状态持久化、弹性计算和会话迁移方面的设计线索。[原帖](https://m.okjike.com/originalPosts/6a1e6066c2dc8bf83f9f4030)
- **06-06 11:36** **Open Design：本地、Agent 驱动的设计平台**<br>以桌面客户端为主，接入多种编码 Agent 与大量设计系统，目标是把原型设计、网页和 PPT 工作流迁移到“本地 daemon + 多 CLI”架构，作为 Figma/云端单模型设计工具的开放替代。[教程](https://mp.weixin.qq.com/s/aDkaNcFfq8i15Aox344O4Q)
- **06-14 14:10** **软件架构的本质是团队共识**<br>架构不是大而全的 UML，而是团队对高代价、难逆转设计决策的共同理解。好架构通过高内聚减少 cruft，使交付更快；架构师要识别当下最重要的约束，而不是假装准确预测未来。[Martin Fowler 专题](https://martinfowler.com/architecture/)
- **06-26 07:35** **PaperTodo：一张纸式 Windows 便签**<br>纯 WPF、无账号和主窗口；便签可折叠成贴边胶囊，悬浮时滑出，适合临时待办和低干扰记录。[GitHub](https://github.com/snownico0722/PaperTodo/)
- **06-27 13:11** **TG Reader：本地 Telegram 频道阅读器**<br>把关注频道按需同步到本地，补足官方客户端在系统阅读、搜索、筛选与未读管理上的不足；支持刷新频道列表和手动同步单个频道。[GitHub](https://github.com/xin0907/tg-reader)

### 资源与课程

- **06-02 09:33** **识人术与社科书单**<br>两条连续收藏分别聚焦微表情、语言模式、社交边界，以及权力、道德演化、社会心理和制度设计；原帖仅提供宣传图和“评论区获取”，未保留不可验证的资源口令。
- **06-13 23:08** **《说话的逻辑与技巧》**<br>从演讲结构、论证链、逻辑递进、即兴表达、修辞、控场到语速语调，配合逐周训练计划；重点应放在结构清楚和受众反馈，而非套话术。[夸克网盘](https://pan.quark.cn/s/38b71fb0a4d0)

### 生活与思考

- **06-02 14:58** **挣钱能力的四层框架**<br>“道”看政策、平台规则、税务法律与自然规律；“法”看商业、盈利、投资、推广与战略模式；“术”落到营销、定价、物流、客户、人力、会计；“器”是财商、抗挫、表达、时间、形象与人脉。可用作商业项目尽调清单，而非成功学口号。
- **06-02 16:01** **《中国生育成本报告 2026》**<br>收藏同一报告的三段转载，适合从家庭直接成本、时间成本、女性职业影响和公共政策支持四个维度阅读。[原文](https://mp.weixin.qq.com/s/vu7EUApqnCAAkqYpcz6iCQ)
- **06-13 09:14** **“卡脖子”工程不能只靠行政投入**<br>一线国产基础软件从业者的观点：国家资源适合帮助行业跨过无产品、无人才的启动期，但长期封闭采购会弱化真实客户反馈、挤压民企与生态合作，最终让竞争从产品转向准入。更可持续的路径是教育鼓励探索、企业面向市场、生态内形成战略协作；这是个人经验判断，宜结合更多案例交叉验证。

### 其他收藏

- **06-05 12:55** **中文磁力搜索入口**<br>记录了磁力猫与磁力天堂两个站点；此类域名变动频繁，使用时需核实版权、文件来源与恶意软件风险。[磁力猫](https://bashi5.com/) · [磁力天堂](https://voicing1.sbs/)
- **06-15 23:26** **低成本美国 eSIM**<br>Saily 方案标称 0.99 美元/月、支持中国大陆申请和接码；价格与实名政策可能变化，开通前应重新核验。[教程](https://geekshare.org/504/)
- **06-19 21:32** **德国 O2 免费 eSIM 与低成本保号**<br>线上申请时必须选择 eSIM；原帖称可用中国护照 KYC、支持 Wi‑Fi Calling，并可通过小额充值维持号码。运营商规则随时可能调整，以官方页面为准。[O2 官方](https://www.o2online.de/mobilfunk/prepaid/kostenlose-sim/)

