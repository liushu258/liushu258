# 2026年2月收藏


### AI 与效率工具

- **02-03 23:25** **参考照片转 3D 风格角色组图**<br>提示词骨架：上传本人照片，要求身份特征稳定；为同一角色分别指定服装、姿态、表情和发型；统一为原创的动画电影感 3D 设计，强调圆润五官、塑料/黏土质感、针织或摇粒绒材质、纯色高饱和背景、工作室柔光、次表面散射和浅景深。与其堆“8K、电影级”等形容词，更重要的是逐张明确服装和情绪变量。
- **02-03 23:56** **大型项目的循环式重构审查**<br>把“找重构点”和“执行重构”分开：先在 `.context/File.md` 建全量文件待办，逐文件阅读（过长则切片），只把确有价值的结构、可读性、扩展性、维护性或性能问题写入 `.context/REFACTOR.md`，再标记该文件审查完成；全部扫描后另开循环逐项重构。这样能避免一边审查一边大改导致范围失控，但每条重构建议仍需关联风险、测试和收益。
- **02-14 12:00** **Agent Skills 目录与仓库**<br>聚合站：[SkillsMP](https://skillsmp.com/zh)、[Agent Skills](https://agent-skills.md/)、[Skills.sh](https://skills.sh/)、[SkillStore](https://skillstore.io/zh-hans)、[Skills Directory](https://www.skillsdirectory.com/)、[Agent Skills Me](https://agentskills.me/)；源码仓库：[Anthropic Skills](https://github.com/anthropics/skills)、[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)、[Awesome Agent Skills](https://github.com/JackyST0/awesome-agent-skills)、[Antfu Skills](https://github.com/antfu/skills)、[Ultimate Collection](https://github.com/ZhanlinCui/Ultimate-Agent-Skills-Collection)。安装前检查脚本、权限、依赖、许可证和维护状态，不能只看榜单。
- **02-17 13:12** **扫描 PDF 转 EPUB**<br>[pdf2epub-paddle](https://github.com/jarodise/pdf2epub-paddle) 封装 PaddleOCR API，把扫描 PDF 转为 EPUB，并尝试去掉页眉、页脚和页码，保留插图与表格。使用前需申请百度 AI Studio API Key；转换后应抽查目录、段落顺序、表格、脚注和图片位置，避免 OCR 错误进入长期书库。

### 编程与软件

- **02-23 17:44** **PageIndex：文档树式 RAG**<br>[PageIndex](https://github.com/VectifyAI/PageIndex) 不依赖嵌入和固定分块，而让模型沿章节、标题、表格等文档树结构推理，适合金融报告、合同和合规文档，并有利于引用溯源。局限是单文档、速度和大规模扩展；向量检索仍更适合廉价的跨文档相似搜索。合理选型是结构化文档用树检索，非结构化语料用向量，复杂系统做混合，并在自己的数据上跑准确率、延迟和成本基准。

### 工程与设计

- **02-03 23:35** **人形机器人技术与产业图谱**<br>[Humanity's Last Machine](https://humanityslastmachine.com) 从第一性原理拆解谐波减速器、行星滚柱丝杠、镁/钛材料、电机电磁构型等工程选择，也分析工业密度、迭代速度、供应链瓶颈、关键厂商和物料成本。值得关注的主线是：机器人既是 AI 的执行载体，也是材料、执行器、运动控制和制造生态的系统性考验。

### 资源与课程

- **02-03 23:41** **2026 免费 AI 课程清单**<br>覆盖提示工程、生成式 AI、机器学习、深度学习、基础模型、RAG 与 Python AI： [ChatGPT Prompt Engineering for Developers](https://t.co/yWoQpEwQLq)、[Introduction to Generative AI](https://t.co/Ft7MRphwkS)、[Generative AI for Everyone](https://t.co/pH0b0ZPQiU)、[Machine Learning Crash Course](https://t.co/RawjqDAwJd)、[CS50’s AI with Python](https://t.co/kuJ9twcjpm)、[Introduction to Deep Learning](https://t.co/9mN4C39Ygj)、[Foundation Models & Generative AI](https://t.co/hU2hpAj7hW)、[DeepLearning.AI](https://t.co/iVfhy1PMle)、[AI and Algorithms](https://t.co/aRiOiZwScS)、[Building RAG Agents with LLMs](https://t.co/yW0NyUUV7M)。短链目标与免费政策可能变化，学习前先核对课程提供方。
- **02-21 18:34** **BBC 6 Minute English 合集**<br>2021—2025 年《BBC 6 Minute English》节目合集，适合用短音频做精听、跟读和口语复述；[夸克资源](https://pan.quark.cn/s/b24638aff575)。

### 其他收藏

- **02-28 00:23** **前端频道索引**<br>[cosine - 前端人の日常频道](https://t.me/cosine_front_end)，作为前端开发资讯与日常实践的 Telegram 信源收藏。

