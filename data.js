/**
 * HR 工作台知识库工具 · Demo 数据
 */
window.DATA = {
  roles: [
    { key: 'hrbp',      label: 'HRBP' },
    { key: 'manager',   label: '管理者' },
    { key: 'all',       label: '全员' },
    { key: 'recruiter', label: '招聘' },
  ],

  graph: {
    hrbp: {
      domains: [
        {
          key: 'd-recruit', label: '招聘与配置',
          children: [
            { key: 's-rc-interview', label: '面试与录用', pages: [
              { id: 'p-1', title: '面试评估表填写规范', summary: '面试官需在面试结束后 24 小时内完成评估表，评价维度含专业能力、潜力、文化匹配三项，每项须给出具体事例支撑。', tag: '流程规范', updatedAt: '2026-09-28', source: '招聘管理制度 V4.2', hasConflict: false, isNew: false },
              { id: 'p-2', title: 'offer 审批权限矩阵', summary: 'P6 及以下由部门负责人审批；P7 需 HRBP 复核；P8 及以上需 HRD 终审。', tag: '权限规则', updatedAt: '2026-10-08', source: 'offer 审批指引', hasConflict: true, isNew: false },
            ]},
            { key: 's-rc-channel', label: '渠道与人才库', pages: [
              { id: 'p-3', title: '内推奖励发放标准', summary: '成功入职满 3 个月后发放，T 类岗位 8000 元、非 T 类 5000 元。', tag: '激励政策', updatedAt: '2026-09-12', source: '内推激励办法', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-perf', label: '绩效管理',
          children: [
            { key: 's-perf-cycle', label: '绩效周期', pages: [
              { id: 'p-4', title: '绩效校准会操作指引', summary: '校准会由部门负责人主持，HRBP 列席；需提前完成自评与上级评分，会上只讨论 C/D 及争议项。', tag: '流程规范', updatedAt: '2026-10-02', source: '绩效管理办法 2026', hasConflict: false, isNew: true },
              { id: 'p-5', title: '绩效申诉处理时限', summary: '员工收到结果后 5 个工作日内可发起申诉，HRBP 需在 3 个工作日内给出初步答复。', tag: '时效规则', updatedAt: '2026-08-20', source: '绩效申诉流程', hasConflict: false, isNew: false },
            ]},
            { key: 's-perf-low', label: '低绩效管理', pages: [
              { id: 'p-6', title: 'PIP 改进计划启动条件', summary: '连续两个周期绩效为 C 或单周期为 D 时启动，周期 60 天。', tag: '管理制度', updatedAt: '2026-09-05', source: '绩效改进计划 SOP', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-cb', label: '薪酬福利',
          children: [
            { key: 's-cb-bonus', label: '奖金与激励', pages: [
              { id: 'p-7', title: '年终奖发放规则', summary: '按在职月份折算，发放日仍在职方可获得；绩效 A 系数 1.5、B 系数 1.2、C 系数 0.8。', tag: '薪酬政策', updatedAt: '2026-10-10', source: '奖金管理政策 2026', hasConflict: false, isNew: true },
            ]},
            { key: 's-cb-welfare', label: '福利与假期', pages: [
              { id: 'p-8', title: '年假折算与结转规则', summary: '入职满 1 年享 5 天，每满 1 年 +1 天，上限 15 天；当年未休完可结转至次年 3 月底。', tag: '假期政策', updatedAt: '2026-07-18', source: '考勤与假期管理规定', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-er', label: '员工关系',
          children: [
            { key: 's-er-case', label: '员工沟通', pages: [
              { id: 'p-9', title: '员工沟通会开展方式', summary: '新人入职 30 天内必做一次，转正前一次；重点了解工作适配度与团队融合情况。', tag: '沟通机制', updatedAt: '2026-06-30', source: '员工关系工作手册', hasConflict: false, isNew: false },
            ]},
            { key: 's-er-exit', label: '离职管理', pages: [
              { id: 'p-10', title: '离职面谈执行要求', summary: '主动离职员工需在提出后 3 个工作日内完成面谈，记录留存至 HR 系统。', tag: '流程规范', updatedAt: '2026-09-22', source: '离职管理流程', hasConflict: true, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-od', label: '组织发展',
          children: [
            { key: 's-od-talent', label: '人才盘点', pages: [
              { id: 'p-11', title: '九宫格盘点标准', summary: '以绩效与潜力双轴划分，重点识别「高潜」与「待观察」两类人群，结果仅限直属上级与 HRBP 可见。', tag: '人才方法', updatedAt: '2026-09-16', source: '人才盘点操作指引', hasConflict: false, isNew: false },
            ]},
          ],
        },
      ],
    },

    manager: {
      domains: [
        {
          key: 'd-team', label: '团队管理',
          children: [
            { key: 's-team-perf', label: '绩效与反馈', pages: [
              { id: 'm-1', title: '如何做好绩效面谈', summary: '面谈前准备事实清单，面谈中先听后说，聚焦行为不评价人格；结束时共同确认改进动作。', tag: '管理方法', updatedAt: '2026-10-01', source: '管理者行动手册', hasConflict: false, isNew: true },
              { id: 'm-2', title: '绩效评分分布参考', summary: '团队内建议 A 不超过 20%、C 与 D 合计不低于 5%，具体以校准会结果为准。', tag: '管理规则', updatedAt: '2026-09-25', source: '绩效管理办法 2026', hasConflict: false, isNew: false },
            ]},
            { key: 's-team-onboard', label: '新人融入', pages: [
              { id: 'm-3', title: '新人首月带教清单', summary: '第 1 周熟悉环境与工具，第 2 周完成小任务闭环，第 4 周独立负责一个完整模块。', tag: '带教方法', updatedAt: '2026-08-14', source: '新人融入指引', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-hiring', label: '招聘与用人',
          children: [
            { key: 's-hiring-need', label: '需求与编制', pages: [
              { id: 'm-4', title: '用人需求提报规范', summary: '需明确岗位职责、必备能力、到岗时间与薪酬区间，HC 未经审批不得启动面试。', tag: '流程规范', updatedAt: '2026-09-30', source: '招聘管理制度 V4.2', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-motivate', label: '激励与保留',
          children: [
            { key: 's-motivate-recog', label: '认可与激励', pages: [
              { id: 'm-5', title: '团队激励可用手段清单', summary: '含即时认可、项目奖金、发展机会、公开表扬四类，预算内可自主决定。', tag: '激励工具', updatedAt: '2026-07-28', source: '管理者激励指引', hasConflict: false, isNew: false },
            ]},
            { key: 's-motivate-risk', label: '离职风险', pages: [
              { id: 'm-6', title: '骨干离职预警信号', summary: '连续请假、主动减少发声、拒绝新任务等信号需及时与 HRBP 沟通。', tag: '风险提示', updatedAt: '2026-10-06', source: '人才保留实践', hasConflict: false, isNew: true },
            ]},
          ],
        },
      ],
    },

    all: {
      domains: [
        {
          key: 'd-life', label: '入职与日常',
          children: [
            { key: 's-life-onboard', label: '新人入职', pages: [
              { id: 'a-1', title: '入职第一天要做什么', summary: '领取工卡与设备、加入团队群、完成账号开通、阅读团队协作规范。', tag: '新人指南', updatedAt: '2026-09-01', source: '员工入职手册', hasConflict: false, isNew: false },
            ]},
            { key: 's-life-tool', label: '办公工具', pages: [
              { id: 'a-2', title: '常用办公系统入口', summary: '考勤、报销、IT 报修、知识库四类系统的统一入口与常见问题。', tag: '工具指引', updatedAt: '2026-08-25', source: 'IT 服务指南', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-benefit', label: '薪酬与福利',
          children: [
            { key: 's-benefit-salary', label: '发薪与个税', pages: [
              { id: 'a-3', title: '每月发薪时间与查询方式', summary: '每月 15 日发放上月工资，遇节假日提前；工资单在薪酬系统可查。', tag: '薪酬政策', updatedAt: '2026-09-20', source: '薪酬发放说明', hasConflict: false, isNew: false },
            ]},
            { key: 's-benefit-leave', label: '假期申请', pages: [
              { id: 'a-4', title: '各类假期申请流程', summary: '年假提前 3 个工作日申请，病假需附证明；婚假、产假等按当地规定执行。', tag: '假期政策', updatedAt: '2026-07-10', source: '考勤与假期管理规定', hasConflict: false, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-grow', label: '成长与发展',
          children: [
            { key: 's-grow-learn', label: '学习资源', pages: [
              { id: 'a-5', title: '内部学习平台使用指南', summary: '课程分类、学习路径推荐、线下培训报名入口。', tag: '学习资源', updatedAt: '2026-10-12', source: '学习平台使用说明', hasConflict: false, isNew: true },
            ]},
            { key: 's-grow-promo', label: '晋升发展', pages: [
              { id: 'a-6', title: '晋升评审的标准与节奏', summary: '每年两次评审窗口，需提前准备代表项目与影响力说明。', tag: '晋升政策', updatedAt: '2026-09-08', source: '职级晋升管理办法', hasConflict: false, isNew: false },
            ]},
          ],
        },
      ],
    },

    recruiter: {
      domains: [
        {
          key: 'd-rc-src', label: '渠道与寻源',
          children: [
            { key: 's-rc-src-channel', label: '渠道运营', pages: [
              { id: 'r-1', title: '各招聘渠道效果对比口径', summary: '以「简历-面试-入职」三级转化率衡量，按月统计，高于均值 20% 的渠道加大投入。', tag: '数据分析', updatedAt: '2026-09-18', source: '招聘渠道运营手册', hasConflict: false, isNew: false },
            ]},
            { key: 's-rc-src-pool', label: '人才库', pages: [
              { id: 'r-2', title: '人才库标签体系说明', summary: '技能、行业、职级、活跃度四类标签，用于精准寻访与激活。', tag: '工具指引', updatedAt: '2026-10-09', source: '人才库运营规范', hasConflict: false, isNew: true },
            ]},
          ],
        },
        {
          key: 'd-rc-proc', label: '招聘流程',
          children: [
            { key: 's-rc-proc-sched', label: '面试安排', pages: [
              { id: 'r-3', title: '面试排期与取消规则', summary: '面试官需在收到邀约后 4 小时内确认；取消需提前 12 小时通知候选人。', tag: '时效规则', updatedAt: '2026-09-14', source: '面试组织规范', hasConflict: false, isNew: false },
            ]},
            { key: 's-rc-proc-offer', label: 'offer 与背调', pages: [
              { id: 'r-4', title: '背景调查执行标准', summary: 'T 类及以上必做，需候选人书面授权；调查项含工作经历、离职原因、绩效表现。', tag: '流程规范', updatedAt: '2026-08-30', source: '背景调查指引', hasConflict: true, isNew: false },
            ]},
          ],
        },
        {
          key: 'd-rc-brand', label: '雇主品牌',
          children: [
            { key: 's-rc-brand-content', label: '内容运营', pages: [
              { id: 'r-5', title: '招聘内容发布审核流程', summary: '对外内容需经品牌与法务双重审核，敏感岗位描述不得公开薪资区间。', tag: '合规要求', updatedAt: '2026-09-26', source: '雇主品牌运营规范', hasConflict: false, isNew: false },
            ]},
          ],
        },
      ],
    },
  },

  // ── COE 待处理队列 ──────────────────────────────────────
  // kind: conflict | proposal | quality
  pendingItems: [
    // 冲突裁决：两份文档矛盾，必须人工裁定，否则卡住入库
    {
      id: 'c-1', kind: 'conflict', severity: 'hard',
      role: 'HRBP', pageTitle: 'offer 审批权限矩阵',
      uploadedAt: '今天 10:24',
      newText: 'P7 由 HRBP 复核后即可发出，无需 HRD 参与。',
      newSource: 'offer 审批指引（本次上传）',
      oldText: 'P7 需 HRD 终审后方可发出 offer。',
      oldSource: 'offer 审批指引 2026-04 版（库里已有）',
      hint: 'P7 审批层级硬性矛盾',
    },
    {
      id: 'c-2', kind: 'conflict', severity: 'soft',
      role: 'HRBP', pageTitle: '离职面谈执行要求',
      uploadedAt: '今天 09:12',
      newText: '主动离职员工需在提出后 3 个工作日内完成面谈。',
      newSource: '离职管理流程（本次上传）',
      oldText: '离职面谈应在员工提出后 5 个工作日内完成。',
      oldSource: '员工关系工作手册 2026-03 版（库里已有）',
      hint: '时限口径不同（3 天 vs 5 天）',
    },

    // 变更候选：存量文档更新，AI 抽出新版，等人工确认
    {
      id: 'p-1', kind: 'proposal',
      role: 'HRBP', pageTitle: '年终奖发放规则',
      uploadedAt: '今天 11:05', sourceTitle: '奖金管理政策 2026',
      diff: [
        { type: 'same',   text: '按在职月份折算，发放日仍在职方可获得。' },
        { type: 'remove', text: '绩效 A 系数 1.5、B 系数 1.2、C 系数 0.8。' },
        { type: 'add',    text: '绩效 A 系数 1.6、B 系数 1.2、C 系数 0.7、D 系数 0.5。' },
      ],
      hint: 'A 系数 1.5→1.6，新增 D 系数 0.5',
    },
    {
      id: 'p-2', kind: 'proposal',
      role: '招聘', pageTitle: '面试排期与取消规则',
      uploadedAt: '昨天 17:40', sourceTitle: '面试组织规范',
      diff: [
        { type: 'same',   text: '面试官需在收到邀约后 4 小时内确认。' },
        { type: 'remove', text: '取消需提前 12 小时通知候选人。' },
        { type: 'add',    text: '取消需提前 24 小时通知候选人，少于 24 小时需填写说明。' },
      ],
      hint: '取消提前通知 12h→24h',
    },

    // 质量复核：AI 信心不足，需人工确认后才放行
    {
      id: 'q-1', kind: 'quality',
      role: '全员', pageTitle: '各类假期申请流程',
      uploadedAt: '今天 12:10', sourceTitle: '考勤与假期管理规定',
      confidence: 0.61, pagesCount: 3,
      reason: '原文含大量表格，「产假/陪产假天数」一栏未能完整抽取，生成页面存在信息缺失。',
      triggerLabel: 'AI 信心低',
    },
    {
      id: 'q-2', kind: 'quality',
      role: '管理者', pageTitle: '如何做好绩效面谈',
      uploadedAt: '昨天 15:22', sourceTitle: '管理者行动手册',
      confidence: 0.74, pagesCount: 5,
      reason: '「面谈话术示例」与原文语义偏差较大，建议人工确认后再放行。',
      triggerLabel: 'AI 信心低',
    },
    {
      id: 'q-3', kind: 'quality',
      role: 'HRBP', pageTitle: '九宫格盘点标准',
      uploadedAt: '昨天 10:05', sourceTitle: '人才盘点操作指引',
      confidence: 0.88, pagesCount: 2,
      reason: '「结果可见范围」一句被拆到了另一个页面，建议合并后再发布。',
      triggerLabel: '结构问题',
    },
  ],

  tasks: [
    /* 文档级进度，不区分角色
     * status: submitted | generating | checking | done | failed
     */
    { sourceTitle: '《奖金管理政策 2026》',   uploadedAt: '今天 11:05', status: 'checking' },

    { sourceTitle: '《offer 审批指引》',       uploadedAt: '今天 10:24', status: 'done',
      pageCount: 3, conflictCount: 1 },

    { sourceTitle: '《考勤与假期管理规定》',   uploadedAt: '今天 08:55', status: 'done',
      pageCount: 6, conflictCount: 0 },

    { sourceTitle: '《学习平台使用说明》',     uploadedAt: '今天 09:40', status: 'generating' },

    { sourceTitle: '《薪酬体系设计规范2026》', uploadedAt: '昨天 17:08', status: 'failed',
      failedAt: 'generating',
      failReason: '文档被加密保护，无法读取内容。请去除密码保护后重新上传。' },
  ],

  coeSpaces: [
    { key: 'hrbp',      domain: 'HRBP',  label: '知识空间', pagesCount: 42 },
    { key: 'manager',   domain: '管理者', label: '知识空间', pagesCount: 28 },
    { key: 'all',       domain: '全员',   label: '知识空间', pagesCount: 35 },
    { key: 'recruiter', domain: '招聘',   label: '知识空间', pagesCount: 31 },
  ],

  managedPages: [
    { title: '年终奖发放规则',     status: 'review', subdomain: '薪酬福利 › 奖金', source: '奖金管理政策 2026',   updatedAt: '2026-10-10' },
    { title: '面试排期与取消规则', status: 'review', subdomain: '招聘流程 › 面试', source: '面试组织规范',       updatedAt: '2026-09-14' },
    { title: '绩效校准会操作指引', status: 'live',   subdomain: '绩效管理 › 周期', source: '绩效管理办法 2026', updatedAt: '2026-10-02' },
    { title: '年假折算与结转规则', status: 'live',   subdomain: '薪酬福利 › 假期', source: '考勤与假期管理规定', updatedAt: '2026-07-18' },
    { title: '离职面谈执行要求',   status: 'live',   subdomain: '员工关系 › 离职', source: '离职管理流程',       updatedAt: '2026-09-22' },
    { title: '九宫格盘点标准',     status: 'live',   subdomain: '组织发展 › 人才', source: '人才盘点操作指引',   updatedAt: '2026-09-16' },
  ],
};
