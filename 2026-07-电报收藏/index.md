### AI 与效率工具

- **07-02 09:25** **AI 账号商品比价站**<br>聚合发卡商家的价格与库存，缓解自建 Sub2Api 号池的信息差；实践提醒比价并不等于可靠，一号多卖、额度被耗尽、无法二次接码和商家跑路仍是主要风险。[AI 好摊](https://aihaotan.com)
- **07-02 09:45** **把 AI 产品开发过程做成公开笔记**<br>个人站记录真实项目、失败复盘、需求拆解、与 AI 的对话、发布推广过程，并提供经过实际使用或完整调研的工具排行与替代方案；比“只晒成品”更适合积累可复用判断。[hooosberg.com](https://hooosberg.com/)
- **07-02 17:27** **六类高杠杆提问方式**<br>第一性原理重建问题；系统思维找边界、反馈与杠杆点；多路径推演并做自洽检查；用苏格拉底式质疑和反转暴露假设；追问专家的默会知识；最后补充跨学科视角、二阶效应、费曼解释和“结论—风险—替代方案—行动”结构。不要要求模型泄露隐藏思维链，应要求可核查的关键依据和步骤。
- **07-04 09:30** **PPT 生成 Skill 观察**<br>收藏将 [ppt-master](https://github.com/hugohe3/ppt-master/tree/main) 列为优先方案：PPT 元素可编辑，并可生成旁白；另一类方案审美完成度高但主要输出 HTML。选择工具时应先区分“可交付 PPTX”与“演示型网页”。
- **07-04 12:01** **企业级 Agent 平台工程学习项目**<br>从 Demo 走向生产需要补上工具权限、失败重试与降级、评估、可观测性、成本、安全和多租户等工程问题；可作为 Agent/RAG/平台岗位的面试复习框架。[GitHub](https://github.com/datagallery-lab/enterprise_agent_platform)
- **07-04 13:41** **Cloud Document Converter**<br>浏览器扩展可将可见的飞书文档转换为 Markdown、打包图片并导入 Obsidian，用于个人知识归档；对禁止复制或导出的文档仍应尊重版权、保密和访问授权。[GitHub](https://github.com/whale4113/cloud-document-converter)
- **07-05 08:14** **OkkMax：AI API 中转站监测与点评**<br>尝试用模型纯度、速度、稳定性和价格等指标比较中转服务；数据可作筛选参考，密钥安全、服务条款和供应链透明度仍需自行核验。[okkmax.com](https://www.okkmax.com/)
- **07-09 22:35** **LLM Gateway：统一多模型接口**<br>把 OpenAI、Anthropic、DeepSeek 等供应商的调用格式、密钥管理和用量统计收口到轻量网关，减少客户端重复配置。[GitHub](https://github.com/AaronRZH/llm-gateway)
- **07-12 06:53** **OfferStar AI 面试辅助**<br>面向笔试和面试的实时答题工具；可用于模拟练习和复盘，不应在禁止外部辅助的正式考核中使用。[官网](https://www.offerstar.cn/)
- **07-12 07:03** **Karpathy LLM Wiki：让本地笔记自动长出关系**<br>Obsidian 插件以本地笔记为事实来源，后台建立概念关系，问答附原文链接；图示工作流为安装插件—配置模型/API—导入笔记—基于 Wiki 对话—持续整理。可配合 Web Clipper、AI 对话记录和 MinerU 转出的 Markdown，减少手工连关系图。[插件页](https://community.obsidian.md/plugins/karpathywiki) · [GitHub](https://github.com/green-dalii/obsidian-llm-wiki) · [MinerU](https://mineru.net/OpenSourceTools/Extractor)
- **07-12 07:36** **AI 工程师阅读清单**<br>汇集论文、经典书目、课程和 Prompt 工具，优先保留官方与研究者一手材料；长 PDF 可按需用 BabelDOC 翻译，而不是一次性吞下整个书单。[2025 Papers](https://www.latent.space/p/2025-papers)
- **07-15 13:08** **“人味儿写作”来自具体存在感**<br>AI 润色越讲究，越可能抹掉作者所处的位置、亲历细节和付出代价。改稿时应保留具体经验、犹豫和选择，不把所有句子磨成同一种正确腔调。[Skill](http://github.com/orange2ai/renwei-writing)
- **07-19 07:13** **Loops：给 Coding Agent 可终止的闭环**<br>收集约 40 个工作流模板，每个 loop 明确触发器、反馈门和退出条件，让代理根据执行结果调整节奏，避免“无限自主”。[Loops 集合](https://loops.elorm.xyz/)
- **07-19 07:14** **用 Nano Banana 重绘 GPT 图片**<br>对 GPT 生成图进行超分与重绘，可减轻破碎纹理、杂乱细节和文字模糊。实用提示词是要求“重绘和清晰化、增加有意义细节、删除无意义杂讯”，而不是只说“放大”。
- **07-19 08:01** **Claude Code 连接本地模型的缓存坑**<br>原帖称 Attribution Header 会令部分本地推理服务的 KV Cache 失效，可在 `~/.claude/settings.json` 的 `env` 中设置 `"CLAUDE_CODE_ATTRIBUTION_HEADER": "0"`；具体行为应按当前版本验证。[Unsloth 指南](https://unsloth.ai/docs/basics/claude-code)
- **07-20 08:36** **《The State of the AI Economy》观察框架**<br>同时看真实需求、宏观影响、资本开支、Token 消耗与产业链价值分配。核心问题不是“AI 收入是否增长”，而是更低价格能否诱发足够多的新使用量，覆盖数据中心、芯片、电力、云设施与折旧成本。[报告](https://co926i0b3r.feishu.cn/file/PMT3b10EkoqzEvxgGY2cViCCnOq)
- **07-20 08:51** **3D 材质文章配图 Skill**<br>读取文档或文案后生成干净、带标签的 3D 材质插图；遇到陌生概念会主动寻找参考图，也能重绘原始图表数据，适合教育解释图与人文内容配图。[GitHub](https://github.com/op7418/guizang-material-illustration)
- **07-20 09:58** **长会话结束前先写交接文档**<br>让 Codex 汇总任务目标、已完成内容、当前卡点、下一步计划和踩坑记录；新会话先读交接文档，能比依赖聊天历史更稳定地续接工作。
- **07-22 11:24** **《深入理解 AI Agent：设计原理与工程实践》**<br>核心公式是 `Agent = LLM + 上下文 + 工具`；全书开放正文、PDF、10 章代码与 28 个可运行项目，覆盖工具调用、上下文/KV Cache、压缩、记忆、RAG、Coding Agent、自我进化、多 Agent 和多模态交互。[GitHub](https://github.com/bojieli/ai-agent-book)
- **07-22 11:31** **Bolt Slides：一句提示生成交互式幻灯片**<br>让 Claude Code、Codex、Cursor、Bolt 等 Agent 以 Web 应用为底座生成动态、可交互演示，适合需要动效和现场操作的技术讲解。[GitHub](https://github.com/stackblitz/bolt-slides)
- **07-23 08:08** **Codex 雷达**<br>汇总 Codex 模型体感、推理强度、额度/重置事件和 Standard/Fast 性能对照；社区数据适合观察趋势，不宜当作官方 SLA。[codexradar.com](https://codexradar.com/)
- **07-27 18:05** **LearnAgent Wiki**<br>以 Agent、MCP、Skills、CLI 四套 Wiki 和 224+ 知识卡片组织中文学习路径，兼顾概念、协议、SDK、工作流、Claude Code/Codex/Gemini 等终端工具与工程实践。[learnagent.wiki](https://learnagent.wiki/)
- **07-27 18:36** **AI 岗位与资讯面板**<br>[AI 岗位全景分析平台](https://liyanlong123456dsf.github.io/ai-pm-job-dashboard/)用于观察岗位与薪资；[AI 日报](https://ibywind.github.io/ai-daily-news/)聚合人工智能、跨境电商、产品创业、区块链和新能源资讯。
- **07-28 07:14** **Nixtla：时间序列预测与异常检测**<br>面向生产环境的时间序列基础模型，强调少量代码、零售/能源/金融/IoT 场景与大规模数据预训练。[GitHub](https://github.com/Nixtla/nixtla)
- **07-28 07:15** **Reviva：本地 AI 学习工作台**<br>界面将学习对话、Wiki 浏览、创作台和设置中心放在同一应用；多 Agent 共享上下文，文档/音视频进入资料库后可生成测验、闪卡、导图、PPT、播客和报告，再回流到笔记与 Wiki。支持本地模型、自有 API、MCP、备份与回收站，适合长期知识闭环。[GitHub](https://github.com/mingchen666/Reviva)
- **07-28 07:17** **Marketing Skills：Agent 营销技能树**<br>以 `product-marketing` 作为所有模块的共同上下文，向下连接 SEO、CRO、内容与文案、付费投放、增长留存、销售/市场进入策略等 40+ 技能；模块间交叉引用，便于 Agent 在落地页、A/B 测试、定价和发布任务中调用统一产品定位。[GitHub](https://github.com/coreyhaines31/marketingskills)
- **07-28 07:22** **拒绝“黑灯工厂”式 AI 编程**<br>只奖励“修复 Bug、跑通测试”的代理会用滥捕异常、强转类型等方式换取短期分数，却把维护成本留给未来。更稳妥的流程是先对齐产品逻辑、系统架构和设计约束，再让 AI 实现；人仍负责审美、长期一致性和 Review。[原文](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md)

### 编程与软件

- **07-12 06:59** **Codex 指令脚本**<br>导出中附有一个用于调整 Codex 行为的 Python 文件，但正文只称“破除内容安全限制”，缺乏可审计说明；未把本地脚本写入笔记，也不建议绕过安全策略。
- **07-17 13:49** **Stanford CS336：从零实现语言模型**<br>作业从 tokenizer、模型与训练系统一路做到后训练/RL，并提供视频和讲义，适合作为“亲手做一遍”的系统课程。[课程主页](https://cs336.stanford.edu/)
- **07-19 07:50** **Windows 进程注入示例集**<br>以四个 C 示例演示当前/远程进程注入、RW/RWX 内存保护切换和动态函数解析；只应在授权实验环境中用于防御研究。[GitHub](https://github.com/toneillcodes/windows-process-injection)
- **07-20 10:21** **免费编程资料总索引**<br>社区维护的合法免费书籍、课程、交互式网站、编程挑战、播客和视频清单，按语言与主题分类。[free-programming-books](http://github.com/EbookFoundation/free-programming-books)
- **07-21 10:21** **网络安全自学笔记**<br>覆盖 Linux 命令、计算机网络、OWASP Top 10 漏洞复现和面试题，可按基础—复现—总结顺序学习。[GitHub](https://github.com/xin520-xin/Security-Notes)
- **07-30 22:27** **用 Rust 重写 Linux 0.11**<br>`linux-0.11-rs` 用 Rust 实现经典内核版本；同一作者还公开编译器项目 `GeeCeeCee`，可配合《Linux 内核 0.11 完全注释》对照学习。[内核](https://github.com/Poseidon-fan/linux-0.11-rs) · [编译器](https://github.com/Poseidon-fan/GeeCeeCee) · [注释版 PDF](https://download.oldlinux.org/clk011c-3.0.pdf)
- **07-30 22:27** **面向 AI Agent 的 Clean Code 优先级**<br>代理受上下文窗口、文件截断、grep 导航和工具调用成本约束，因此更重视小函数/小文件、单一职责、唯一且可搜索的命名、解释“为什么”的注释、显式类型、去重复与可无头运行的测试。[原文](https://akitaonrails.com/en/2026/04/20/clean-code-for-ai-agents/)
- **07-31 21:56** **LLM 训练流水线笔记**<br>训练不只是 forward/backward，而要做到可恢复、可复现、可控成本；应先按任务与数据决定 Pretrain、SFT 或 LoRA，再用 Transformers/Trainer/DeepSpeed 管理分词、保存、混合精度、梯度累积和分布式训练。[原文](https://www.cnblogs.com/hazy-star/p/21911646)
- **07-31 21:57** **LangChain 对话记忆**<br>用 `ChatMessageHistory` 存储历史，`RunnableWithMessageHistory` 包装执行链并隔离会话，`ChatPromptTemplate + MessagesPlaceholder` 组织“系统指令—历史—当前问题”；示例结合本地 Ollama 模型。[原文](https://www.cnblogs.com/aqi00/p/21906204)
- **07-31 22:08** **Cloudflare Worker 上的自托管 AI 网关**<br>Octafuse Gateway 用 Proxy Worker、Admin Worker 和共享 D1 集中管理供应商 Base URL/API Key、路由、用户、计费与时段倍率，可先用 `workers.dev` 验证，再绑定域名。[原文](https://www.cnblogs.com/didispace/p/21871792)
- **07-31 22:09** **小模型微调、Thinking Budget 与多模态接口**<br>窄任务可用 LoRA 微调 0.6B 模型换取本地、稳定与低成本；推理预算是质量/延迟/成本旋钮，不保证模型真的反思；多模态拼接要严格对齐视觉特征、hidden size、image token、chat template、截断与损失掩码。[原文](https://www.cnblogs.com/hazy-star/p/21968477)

### 工程与设计

- **07-14 22:24** **精馏塔液泛（Flooding）**<br>当蒸汽或液体负荷过大，液体不能顺利向下层塔板排放而在塔内累积，压降上升、传质和分离效率下降；图示强调塔板区域的气液逆向拥塞。
- **07-14 23:45** **化工数值计算、阀门附件与分离器设计资料组**<br>连续收藏包括 Chemical Engineers with MATLAB 数值方法、控制阀的执行机构/定位器/限位开关/空气过滤减压器/增压器，以及卧式/立式两相分离器 sizing 表。图中 GPSA 网垫 K 值随压力升高而降低，并提示乙二醇/胺溶液需折减；立式分离器长径比过大会增加动态载荷。归档仅存在于导出附件，未写入本地链接。
- **07-17 18:32** **Pro/II 流程工程问题课程**<br>收藏了一套 2026 年 7 月的 Pro/II 工程问题求解压缩包；原文件超过导出上限，笔记只保留课程线索。
- **07-17 20:09** **管壳式换热器与 Aspen Plus/HYSYS 课程**<br>包括油气行业管壳式换热器工程，以及 Aspen Plus/HYSYS 换热器案例；大部分分卷未随导出下载，不保留失效的本地分卷路径。
- **07-19 01:05** **AVEVA Dynamic Simulation 2026**<br>收藏了动态流程模拟软件包及登录/联网说明；
- **07-19 08:02** **精馏塔完整设计与雷诺数速查**<br>精馏设计图把进料表征、VLE、Fenske–Underwood–Gilliland、McCabe–Thiele、物料/能量衡算、塔板效率、液泛/漏液/雾沫夹带、冷凝器/再沸器和仪表控制串成完整流程；雷诺数图用 `Re = ρvD/μ` 区分层流、过渡与湍流，并提示管径、流速、密度和黏度共同决定流态。
- **07-30 07:40** **免费 3D 模型站**<br>[3D Warehouse](https://3dwarehouse.sketchup.com/)适合 SketchUp 模型；[CGTrader 免费区](https://www.cgtrader.com/free-3d-models)提供 3DS、C4D、FBX、MAX、OBJ 等格式。另收藏办公柜、装饰架和桌面摆件等 Telegram 模型，未引用本地媒体。

### 资源与课程

- **07-19 10:00** **Telegram 频道与内容检索工具箱**<br>优先保留较稳定的入口：[TGStat](https://cn.tgstat.com/)、[Telemetr](https://telemetr.io/en/channels)、[Lyzem 内容搜索](https://lyzem.com/)、[Telegram Limits](https://limits.tginfo.me/zh-CN)、[IntelX Telegram 工具](https://intelx.io/tools?tab=telegram)；短时间打开过多群组/频道链接可能触发临时限制。
- **07-20 09:59** **《线性代数与数据学习》**<br>Gilbert Strang 将线性代数、矩阵计算、优化与数据学习连接起来，适合从数学基础过渡到机器学习；

### 生活与思考

- **07-03 06:28** **提效工具可能制造更多忙碌**<br>效率提升会降低做事门槛，继而增加任务数量；当忙碌侵蚀决策质量，产出可能变成“碌碌无为”。真正的约束应是**优先级和停止条件**，而不是工具速度。[原帖](https://m.okjike.com/originalPosts/6a3d0e8f228d9ca16962bece)
- **07-12 12:25** **识别服从性测试，守住边界**<br>常见模式包括突然指令、外表评判、深夜打扰、责任转嫁、先夸后求、制造紧急、频繁改计划、情感绑架、借钱试探、反复失信与持续施压。判断重点不是给人贴标签，而是观察对方是否反复利用你的时间、愧疚和拒绝疲劳。

### 其他收藏

- **07-12 15:38** **无正文媒体**<br>图片只是一只坐在厨房里的狗，没有可确认的知识或资源信息，未作延伸解读。
- **07-26 21:38** **交互式 3D 房间作品集**<br>作者把作品集设计成一个可探索的三维房间，房间内每件物品都可交互，适合作为空间化个人叙事与 Web 3D 作品展示参考。[原帖](https://x.com/pinchenchong/status/2035664003176038909?s=20)