### AI 与效率工具

- **12-02 09:49** **Gemini 3 Prompt 案例库**<br>[awesome-gemini-ai](https://github.com/ZeroLu/awesome-gemini-ai) 收集可复现的 Gemini 3 Pro 提示词与作品，覆盖 Landing Page、AR、加密资产仪表盘、企业网站与复杂动效；适合从完整案例反推需求规格和交互描述。
- **12-02 09:55** **把论文转成中文板书**<br>向 Nano Banana 提供论文并要求“转换为中文教授白板图片，帮助我理解信息”，可把长论文压缩为视觉化板书。更稳妥的流程是先让模型列出章节、定义、公式和因果关系，再分块制图并逐项回查原文，避免一张图承载过多内容或产生公式幻觉。
- **12-21 12:17** **reminds 同步微信读书划线**<br>数据链路是“微信读书 → reminds 电脑端 → reminds 手机端”，电脑端是中枢。首次在电脑端进入“设置 → 通用 → 扫码绑定微信读书”，选择时间窗口并立即同步；手机端如需查看，再到“个人中心 → 设置 → 闪念 → 同步配置”打开微信读书划线。日常打开电脑端会自动同步前一天，会员可用 `Ctrl/Cmd + W` 触发实时同步；历史书籍可在“设置 → 书架”重新生成闪念。只有微信读书内部书籍支持想法，导入本地书籍只同步划线；闪念有有效期，重要内容仍需整理为正式笔记。
- **12-21 14:09** **个人 AI 工具栈与使用分区**<br>当时的组合：ChatGPT/Gemini/Qwen 负责对话，NotebookLM 学习，YouMind 输出，Codex 做后端、Antigravity 做前端，Nano Banana Pro/Lovart 处理图片。先判断任务是否属于共识区，再决定直接执行、框架化分析还是澄清目标；可显式指定 SMART、5W2H、黄金圈、第一性原理、金字塔、SWOT、奥卡姆剃刀或二八法则。编程采用 Spec 驱动：PRD → 技术文档 → 计划 → 开发 → 测试，且上下文越清楚，代码采用率越高。
- **12-21 14:11** **Claude Skills 案例库**<br>[awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) 展示如何把复杂任务拆成可重复执行的 Skill；价值在“高质量技能定义 = SOP + 工具 + 验证方式”，把反复纠错变成按需加载的稳定能力。
- **12-21 17:45** **Lyra 4D 提示词优化法**<br>[Lyra](https://gist.github.com/xthezealot/c873effd9e74225ef3fcfbb9c3a341da) 用 Dissect（剖析）、Diagnose（诊断）、Develop（开发）、Deliver（交付）重构模糊需求；提供 DETAIL 深度问询和 BASIC 快速修复两种模式，并在交付提示词之外说明关键改进和使用技巧。真正关键的是先识别缺失信息与逻辑断层，而不是堆形容词。
- **12-21 18:14** **AI 面试教练框架**<br>先让模型询问公司、规模、文化、汇报对象、面试阶段、岗位描述和简历，再制定行为题、技术/案例题和文化匹配计划；逐题模拟并给出结构与内容反馈，最后提炼简历亮点和反问清单。[原始讨论](https://www.reddit.com/r/ChatGPTPromptGenius/comments/1nu9ra0/i_tested_1000_chatgpt_prompts_in_2025_heres_the/)
- **12-21 18:17** **条件式规则替代超长系统提示**<br>规则越多，模型对单条指令的遵循可能越差。更好的架构是把规则写成“触发条件—动作—可用工具”的小模块，只在当前对话满足条件时加载 3—4 条相关规则；这样更易测试、维护和扩展。[Parlant](https://github.com/emcie-co/parlant) 是这一“对齐建模”思路的开源实现，另有[原帖](https://x.com/akshay_pachaar/status/1973377325225091560)。
- **12-22 21:57** **睡眠数据可视化海报提示词**<br>先从 Apple Watch 截图提取清醒、REM、核心、深睡的时长比例，再映射为透明玻璃容器中的四层微缩景观：橙色沙地、浅蓝梦境云层、深蓝柔软层、紫色水晶地基，厚度严格对应比例；顶部 Q 版人物的状态随睡眠分数变化，底部列总时长、评分与图例。提示词的可迁移点是“数据 → 视觉编码 → 材质隐喻 → 个性化角色”，而不只是睡眠主题。

### 编程与软件

- **12-21 14:13** **Vibe Coding 的增量交付法**<br>先让高能力模型把模糊想法整理为 PRD，再在新会话中选一个 10 分钟内可实现且可验证的最小功能；每次迭代都写清验证方法，复杂度上升后补 Git、数据结构、工程流程和部署知识。初学者可优先 Python 与本地任务，联网服务可考虑 Cloudflare Workers；核心不是“一次生成完整产品”，而是建立持续正反馈。
- **12-21 18:02** **LLM 性能优化工具箱**<br>模型侧包括 LoRA/PEFT、量化、剪枝、蒸馏、权重共享、Sparse MoE；训练侧包括混合精度、梯度检查点、分片训练与 CPU offload；推理侧包括 Flash Attention、KV Cache 压缩和推测解码。实际组合应以显存、吞吐、延迟和精度目标为约束，再用 roofline 等方法判断瓶颈，不能把技术名词简单相加。[原帖](https://x.com/asmah2107/status/1970530639402410263)
- **12-21 18:03** **文颜 MCP：Markdown 到公众号草稿**<br>[wenyan-mcp](https://github.com/caol64/wenyan-mcp) 能为 Markdown 套用 Typora 主题，上传本地/网络图片并发布到微信公众号草稿箱；提供 CLI、本地安装和 Docker 方案，适合接入 AI 写作或 CI/CD。上线前需配置公众号接口与 IP 白名单，并保留人工预览环节。
- **12-21 18:07** **Ligolo-ng 渗透测试隧道**<br>[Ligolo-ng 文档](http://docs.ligolo.ng/) 介绍基于 TUN 的跨平台隧道，不依赖传统 SOCKS，支持自动路由、证书、多代理、反向/绑定连接和 Web UI。仅应用于获授权的安全测试环境。
- **12-21 18:08** **HyperTTS for Anki**<br>[anki-hyper-tts](https://github.com/Vocab-Apps/anki-hyper-tts) 是 GPL-3.0 开源的 Anki 语音插件，可自动为卡片生成多语言朗读，适合语言学习与无障碍复习。
- **12-21 18:18** **EasyOffer：LLM 面试与手写实现**<br>[EasyOffer](https://github.com/jingtian11/EasyOffer) 汇集大厂面经、DeepSeek/LLaMA/Qwen 模块解读、Top-p/Top-k/温度采样手写实现、DPO 简析和大模型常见代码题，适合把“背题”转成小型可运行实验。

### 工程与设计

- **12-08 12:55** **Simscape 可再生能源系统集成**<br>MathWorks 的 [Renewable Energy Integration Design with Simscape](https://www.mathworks.com/matlabcentral/fileexchange/123870-renewable-energy-integration-design-with-simscape) 提供电力系统与可再生能源集成的模型和设计示例。
- **12-15 23:35** **MATLAB 微分方程入门**<br>Peter I. Kattan 的 [Differential Equations Using MATLAB](https://www.matlabcoding.com/2025/12/differential-equations-using-matlab.html) 面向学生和工程初学者，把微分方程概念与 MATLAB 求解实践结合。
- **12-18 12:51** **机器人项目与 MATLAB 代码**<br>MathWorks File Exchange 的[《机器人项目与解决方案》课程及代码](https://www.mathworks.com/matlabcentral/fileexchange/182844-matlab)可作为机器人算法与仿真的配套练习。

### 资源与课程

- **12-21 11:53** **网盘搜索**<br>[随心搜](https://pan.suixinso.com/) 提供夸克等网盘资源检索，使用时需选择“全网搜”；资源有效性与版权需要自行核查。
- **12-21 17:29** **171 页 LLM 技术白皮书**<br>[LLM 白皮书](https://docs.google.com/document/d/1WUk_A3LDvRJ8ZNvRG--vhI287nDMR-VNM4YOV8mctbI/edit) 从 Transformer、Scaling Laws、上下文与 MoE，延伸到 CoT/ToT、RLHF/RLAIF/DPO、GQA/RoPE/KV Cache，再分析 DeepSeek-V3、Llama 4、Gemma 3、Qwen3 等架构，并包含 Transformer 与 Gemma 3 的代码级讲解。
- **12-21 18:05** **机器学习分阶段书单**<br>基础阶段可读《Mathematics of Machine Learning》《AI: A Modern Approach》《Deep Learning》《ISLR》；实战阶段用《Hands-On Machine Learning》《Deep Learning with Python》《Generative Deep Learning》《Deep RL Hands-On》；工程阶段转向《Designing Data-Intensive Applications》《AI Engineering》《LLM Engineer’s Handbook》及 Agent 系统。顺序应按目标裁剪，不必线性读完。[原始路线图](https://x.com/tm23twt/status/1970056875313094911)
- **12-21 18:05** **生产级 RAG 六周项目**<br>[The Mother of AI Project](https://github.com/jamwithai/arxiv-paper-curator) 从 Docker、FastAPI、PostgreSQL、OpenSearch、Airflow 起步，构建 arXiv 抓取与解析、BM25、文档切片、语义+关键词混合检索、本地 Ollama 流式问答，再补 Langfuse 追踪、Redis 缓存与监控。其重要取向是先打牢可解释的关键词检索，再引入向量检索。
- **12-21 18:10** **用 AI 深读难教材**<br>[方法原文](https://medium.com/heptabase/the-best-way-to-use-ai-for-learning-762c3467bdf1) 建议优先挑权威教材，精确控制 PDF/OCR 上下文，按章节生成翻译、定义、引导问题和练习卡片；在白板并排对比、连线，再用自己的话写层级笔记。AI 用来降低进入难度、补例子和检验理解，而不是把深读替换成摘要。

### 内容与运营

- **12-02 02:00** **社媒助手 Chrome 插件**<br>图集中可见小红书侧边栏支持采集博主数据、笔记数据和评论数据，也能在博主主页批量导出指定数量的笔记；结果表包含笔记 ID、链接、类型、标题、内容、点赞、收藏、评论、分享、发布时间、博主信息等字段。适合竞品和选题研究，但应控制频率并遵守平台规则与隐私边界。
- **12-02 02:05** **n8n 自动发现 Reddit 线索**<br>流程将 subreddit 获取、帖子搜索、问题分类、相关性 Agent 与 Notion 入库串联：定时/手动触发后先检查当日数量，缺口则让 Agent 借助 Reddit、Google 等工具寻找子论坛和问题；相关内容写入 Notion，达到阈值后通知 Slack。工程上应保留来源 URL、去重、相关性评分和人工复核。

### 生活与思考

- **12-02 02:04** **新技术要配合组织重构**<br>电动机初期只是替换中央蒸汽机，工厂仍保留主轴和皮带，生产率并未立刻跃升；真正的变化来自为每台机器配置小电机，并按生产流程重排为单元化布局，进而催生流水线、单层厂房和更灵活的物料流。类比到 AI：把旧流程中的某一步换成模型通常只省局部成本，只有围绕新能力重新设计角色、信息流和决策权，才可能获得数量级收益。