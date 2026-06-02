import type {
  OnboardingAnswers,
  ScannerResult,
  RebuildPlan,
  DashboardSummary,
  RiskTask,
  PivotPath,
  SkillToBuild,
  RebuildPlanWeek,
  DailyRebuildTask,
  DashboardOpportunity,
  HumanStrength,
} from "@/types";

const STORAGE_KEY = "workafterai:onboarding";

// Standard option lists across locales to normalize user inputs
const TASK_TRANSLATIONS = {
  en: ["Writing", "Customer support", "Design", "Admin work", "Data entry", "Research", "Management", "Sales", "Operations", "Video editing", "Social media content", "Data analysis"],
  vi: ["Viết", "Hỗ trợ khách hàng", "Thiết kế", "Hành chính", "Nhập liệu", "Nghiên cứu", "Quản lý", "Bán hàng", "Vận hành", "Dựng video", "Nội dung mạng xã hội", "Phân tích dữ liệu"],
  ja: ["文章作成", "カスタマーサポート", "デザイン", "事務作業", "データ入力", "調査", "マネジメント", "営業", "運用", "動画編集", "SNSコンテンツ", "データ分析"]
};

const AI_SKILL_TRANSLATIONS = {
  en: ["Beginner", "Using AI sometimes", "Using AI daily", "Advanced"],
  vi: ["Mới bắt đầu", "Thỉnh thoảng dùng", "Dùng hằng ngày", "Nâng cao"],
  ja: ["初心者", "ときどき使う", "毎日使う", "上級"]
};

const GOAL_TRANSLATIONS = {
  en: ["Protect my current role", "Find a new job", "Build freelance income", "Switch careers", "Create a proof-of-work portfolio"],
  vi: ["Bảo vệ vai trò hiện tại", "Tìm việc mới", "Xây thu nhập freelance", "Chuyển nghề", "Tạo portfolio Proof-of-Work"],
  ja: ["今の役割を守りたい", "新しい仕事を探したい", "フリーランス収入を作りたい", "キャリアを変えたい", "Proof-of-Workポートフォリオを作りたい"]
};

// Normalized mappings to English keys
function normalizeTask(task: string): string {
  for (const lang of ["en", "vi", "ja"] as const) {
    const index = TASK_TRANSLATIONS[lang].indexOf(task);
    if (index !== -1) {
      return TASK_TRANSLATIONS.en[index];
    }
  }
  return task;
}

function normalizeAiSkill(skill: string): string {
  for (const lang of ["en", "vi", "ja"] as const) {
    const index = AI_SKILL_TRANSLATIONS[lang].indexOf(skill);
    if (index !== -1) {
      return AI_SKILL_TRANSLATIONS.en[index];
    }
  }
  return skill;
}

function normalizeGoal(goal: string): string {
  for (const lang of ["en", "vi", "ja"] as const) {
    const index = GOAL_TRANSLATIONS[lang].indexOf(goal);
    if (index !== -1) {
      return GOAL_TRANSLATIONS.en[index];
    }
  }
  return goal;
}

export function getStoredOnboardingAnswers(): OnboardingAnswers | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as OnboardingAnswers;
  } catch {
    return null;
  }
}

// ----------------------------------------------------
// Localized Content Mappings
// ----------------------------------------------------

const SUPPORTIVE_EXPLANATION = {
  en: {
    low: "Your current role has a solid foundation of human-centric tasks. Focus on integrating AI tools early to boost your efficiency even further.",
    medium: "Your role is not disappearing overnight — but these tasks are becoming easier to automate.",
    high: "Your tasks are highly exposed to automation. This is a powerful opportunity to shift your focus toward higher-value workflows where human judgment is key."
  },
  vi: {
    low: "Vai trò hiện tại của bạn có nền tảng vững chắc là các công việc lấy con người làm trung tâm. Hãy tập trung tích hợp các công cụ AI sớm để tăng hiệu suất của bạn hơn nữa.",
    medium: "Vai trò của bạn không biến mất sau một đêm — nhưng những việc này đang dễ bị tự động hóa hơn.",
    high: "Các nhiệm vụ của bạn có tính tiếp xúc cao với tự động hóa. Đây là một cơ hội mạnh mẽ để chuyển trọng tâm sang các quy trình làm việc giá trị hơn, nơi phán đoán của con người là mấu chốt."
  },
  ja: {
    low: "現在の役割は、人間中心のタスクという強固な土台の上に成り立っています。早期にAIツールを取り入れることで、効率性をさらに高めましょう。",
    medium: "あなたの役割が一夜で消えるわけではありません。ただし、これらのタスクは自動化されやすくなっています。",
    high: "日々のタスクは自動化の影響を非常に強く受けやすくなっています。これは、人間の判断が鍵となる、より価値の高いワークフローへ注力する絶好のチャンスです。"
  }
};

const RISK_TASKS: Record<string, Record<string, string>> = {
  "Writing": {
    en: "First drafts, summaries, and repeatable content can now be produced quickly with AI assistance.",
    vi: "Bản nháp, tóm tắt và nội dung lặp lại giờ có thể được tạo nhanh bằng AI.",
    ja: "初稿、要約、定型コンテンツは、AIで素早く作れるようになっています。"
  },
  "Customer support": {
    en: "Common questions and routine replies are increasingly handled by templates and AI support tools.",
    vi: "Câu hỏi phổ biến và phản hồi định kỳ ngày càng được xử lý bằng mẫu và công cụ AI.",
    ja: "よくある質問や定型対応は、テンプレートやAIツールで処理される場面が増えています。"
  },
  "Design": {
    en: "Simple layouts, asset generation, and formatting can be accelerated using AI design tools.",
    vi: "Bố cục đơn giản, tạo tài nguyên và định dạng có thể được tăng tốc bằng các công cụ thiết kế AI.",
    ja: "簡単なレイアウト、アセット生成、書式設定は、AIデザインツールを使って高速化できます。"
  },
  "Admin work": {
    en: "Scheduling, formatting, and document handling are becoming easier to automate.",
    vi: "Lập lịch, định dạng và xử lý tài liệu đang trở nên dễ dàng tự động hóa hơn.",
    ja: "スケジューリング、書式設定、ドキュメント処理は、自動化が容易になりつつあります。"
  },
  "Data entry": {
    en: "Structured information can be extracted, cleaned, and moved between tools with fewer manual steps.",
    vi: "Thông tin có cấu trúc có thể được trích xuất, làm sạch và chuyển giữa các công cụ với ít thao tác hơn.",
    ja: "構造化データの抽出、整理、ツール間移動は手作業が減っています。"
  },
  "Research": {
    en: "AI can quickly summarize and compare information, but human judgment is still needed.",
    vi: "AI có thể nhanh chóng tóm tắt và so sánh thông tin, nhưng vẫn cần sự phán đoán của con người.",
    ja: "AIは情報を素早く要約・比較できますが、それでも人間の判断が必要です。"
  },
  "Management": {
    en: "Project tracking, status updates, and meeting summaries are increasingly handled by AI tools.",
    vi: "Theo dõi dự án, cập nhật trạng thái và tóm tắt cuộc họp ngày càng được xử lý bởi các công cụ AI.",
    ja: "プロジェクトの追跡、進捗の更新、会議の要約は、AIツールで処理されることが増えています。"
  },
  "Sales": {
    en: "Lead list sorting, initial outreach drafts, and follow-up templates are becoming highly automated.",
    vi: "Phân loại danh sách lead, soạn nháp tiếp cận ban đầu và các mẫu theo dõi đang được tự động hóa cao.",
    ja: "リードリストの選別、最初のアプローチの下書き、フォローアップのテンプレートは自動化が進んでいます。"
  },
  "Operations": {
    en: "Workflow scheduling, order routing, and standard reports are easier to set up with automation.",
    vi: "Lập lịch luồng công việc, định tuyến đơn hàng và báo cáo tiêu chuẩn dễ thiết lập hơn với tự động hóa.",
    ja: "ワークフローのスケジュール設定、注文のルーティング、標準レポートは自動化で簡単に設定できます。"
  },
  "Video editing": {
    en: "Repetitive edits, captions, and clip selection are increasingly supported by AI tools.",
    vi: "Chỉnh sửa lặp lại, phụ đề và chọn clip ngày càng được hỗ trợ bởi các công cụ AI.",
    ja: "繰り返しの編集、キャプション、クリップの選択は、AIツールのサポートが増えています。"
  },
  "Social media content": {
    en: "Drafting captions, content calendars, and short-form ideas can be accelerated with AI.",
    vi: "Soạn thảo chú thích, lịch nội dung và ý tưởng dạng ngắn có thể được tăng tốc với AI.",
    ja: "キャプション作成、コンテンツカレンダー、ショート動画のアイデア出しはAIで加速できます。"
  },
  "Data analysis": {
    en: "Basic reporting and pattern detection are increasingly AI-assisted.",
    vi: "Báo cáo cơ bản và phát hiện mô hình ngày càng được AI hỗ trợ.",
    ja: "基本的なレポート作成やパターン検出は、AI支援の導入が進んでいます。"
  }
};

const HUMAN_STRENGTHS = {
  en: [
    { title: "Judgment", explanation: "Choosing the right action when the situation is unclear." },
    { title: "Empathy", explanation: "Reading emotion, trust, urgency, and context in human conversations." },
    { title: "Domain context", explanation: "Knowing what matters in your team, customers, market, and workflow." },
    { title: "Communication", explanation: "Explaining decisions clearly and adapting tone to the person receiving it." },
    { title: "Taste / quality control", explanation: "Spotting weak output and raising the standard before work ships." }
  ],
  vi: [
    { title: "Phán đoán", explanation: "Chọn hướng xử lý khi tình huống chưa rõ." },
    { title: "Thấu cảm", explanation: "Đọc được cảm xúc, niềm tin và mức độ khẩn cấp trong giao tiếp." },
    { title: "Ngữ cảnh chuyên môn", explanation: "Hiểu điều gì quan trọng với đội nhóm, khách hàng và quy trình." },
    { title: "Giao tiếp", explanation: "Trình bày quyết định rõ ràng và đúng giọng với từng người nghe." },
    { title: "Gu chất lượng", explanation: "Nhận ra đầu ra yếu và nâng tiêu chuẩn trước khi giao việc." }
  ],
  ja: [
    { title: "判断力", explanation: "状況が曖昧なときに、適切な行動を選ぶ力。" },
    { title: "共感", explanation: "会話の感情、信頼、緊急度を読み取る力。" },
    { title: "業務文脈", explanation: "チーム、顧客、ワークフローで何が重要かを理解していること。" },
    { title: "コミュニケーション", explanation: "意思決定をわかりやすく伝え、相手に合わせて調整する力。" },
    { title: "品質を見る目", explanation: "弱いアウトプットに気づき、出す前に水準を上げる力。" }
  ]
};

const PIVOT_PATHS_CONTENT = {
  en: {
    "AI Content Strategist": {
      title: "AI Content Strategist",
      whyItFits: "Your writing and communication experience can shift from producing every draft to directing useful AI-assisted content.",
      firstSkill: "Prompt workflows for briefs, drafts, and edits",
      difficulty: "Moderate, 3-5 weeks"
    },
    "Customer Success AI Operator": {
      title: "Customer Success AI Operator",
      whyItFits: "Support experience, empathy, and product context are valuable when paired with AI-assisted response systems.",
      firstSkill: "AI quality review for customer replies",
      difficulty: "Accessible, 2-4 weeks"
    },
    "Workflow Automation Assistant": {
      title: "Workflow Automation Assistant",
      whyItFits: "Your knowledge of repeated tasks can become a strength when you map and improve manual workflows.",
      firstSkill: "Automation basics with no-code tools",
      difficulty: "Moderate, 4-6 weeks"
    },
    "AI Research Assistant": {
      title: "AI Research Assistant",
      whyItFits: "Your ability to analyze data and research topics helps you guide AI tools to find and summarize facts accurately.",
      firstSkill: "AI-assisted research and synthesis",
      difficulty: "Moderate, 3-4 weeks"
    },
    "AI Creative Workflow Specialist": {
      title: "AI Creative Workflow Specialist",
      whyItFits: "Your design and editing taste can guide AI tool generations and speed up complex asset pipelines.",
      firstSkill: "No-code design generation and refinement",
      difficulty: "Moderate, 4-5 weeks"
    },
    "AI-enabled Revenue Operator": {
      title: "AI-enabled Revenue Operator",
      whyItFits: "Your leadership and sales drive are enhanced when you use AI tools to optimize customer outreach and tracking.",
      firstSkill: "CRM automation and lead routing workflows",
      difficulty: "Moderate, 4-6 weeks"
    }
  },
  vi: {
    "AI Content Strategist": {
      title: "Chiến lược gia nội dung AI",
      whyItFits: "Kinh nghiệm viết và giao tiếp có thể chuyển từ tự viết mọi bản nháp sang định hướng nội dung có AI hỗ trợ.",
      firstSkill: "Quy trình prompt cho brief, nháp và chỉnh sửa",
      difficulty: "Vừa, 3-5 tuần"
    },
    "Customer Success AI Operator": {
      title: "Customer Success AI Operator",
      whyItFits: "Kinh nghiệm hỗ trợ, thấu cảm và hiểu sản phẩm rất hợp với hệ thống phản hồi có AI.",
      firstSkill: "Rà soát chất lượng phản hồi bằng AI",
      difficulty: "Dễ tiếp cận, 2-4 tuần"
    },
    "Workflow Automation Assistant": {
      title: "Trợ lý tự động hóa quy trình",
      whyItFits: "Hiểu các việc lặp lại giúp bạn lập bản đồ và cải thiện quy trình thủ công.",
      firstSkill: "Tự động hóa cơ bản với công cụ no-code",
      difficulty: "Vừa, 4-6 tuần"
    },
    "AI Research Assistant": {
      title: "Trợ lý nghiên cứu AI",
      whyItFits: "Khả năng phân tích dữ liệu và nghiên cứu giúp bạn định hướng AI tìm kiếm và tóm tắt thông tin chính xác.",
      firstSkill: "Nghiên cứu và tổng hợp thông tin có AI hỗ trợ",
      difficulty: "Vừa, 3-4 tuần"
    },
    "AI Creative Workflow Specialist": {
      title: "Chuyên gia quy trình sáng tạo AI",
      whyItFits: "Gu thẩm mỹ thiết kế và biên tập của bạn giúp định hướng AI tạo nội dung và tăng tốc quy trình sản xuất ấn phẩm phức tạp.",
      firstSkill: "Tạo và tối ưu hóa thiết kế no-code",
      difficulty: "Vừa, 4-5 tuần"
    },
    "AI-enabled Revenue Operator": {
      title: "Chuyên viên vận hành doanh thu tích hợp AI",
      whyItFits: "Khả năng lãnh đạo và thúc đẩy doanh số được tăng cường khi bạn dùng công cụ AI tối ưu hóa phễu tiếp cận và theo sát khách hàng.",
      firstSkill: "Tự động hóa CRM và quy trình định hướng lead",
      difficulty: "Vừa, 4-6 tuần"
    }
  },
  ja: {
    "AI Content Strategist": {
      title: "AIコンテンツストラテジスト",
      whyItFits: "文章力と伝える力を、AI支援コンテンツの設計に活かせます。",
      firstSkill: "ブリーフ、下書き、編集のプロンプトフロー",
      difficulty: "普通、3-5週間"
    },
    "Customer Success AI Operator": {
      title: "カスタマーサクセスAIオペレーター",
      whyItFits: "サポート経験、共感、プロダクト理解をAI対応フローに活かせます。",
      firstSkill: "AI返信の品質レビュー",
      difficulty: "始めやすい、2-4週間"
    },
    "Workflow Automation Assistant": {
      title: "ワークフロー自動化アシスタント",
      whyItFits: "繰り返し作業の理解を、手作業の改善に活かせます。",
      firstSkill: "ノーコード自動化の基礎",
      difficulty: "普通, 4-6週間"
    },
    "AI Research Assistant": {
      title: "AIリサーチアシスタント",
      whyItFits: "データ分析や情報調査の力を活かし、AIを使って正確な情報を検索・要約できます。",
      firstSkill: "AI支援によるリサーチと統合",
      difficulty: "普通、3-4週間"
    },
    "AI Creative Workflow Specialist": {
      title: "AIクリエイティブワークフロースペシャリスト",
      whyItFits: "デザインや編集の感性を活かしてAIの出力をコントロールし、アセット制作を効率化できます。",
      firstSkill: "ノーコードデザイン生成と調整",
      difficulty: "普通、4-5週間"
    },
    "AI-enabled Revenue Operator": {
      title: "AIレベニューオペレーター",
      whyItFits: "リーダーシップや営業力を活かし、AIツールを使って顧客アプローチや追跡を最適化できます。",
      firstSkill: "CRM自動化とリード選別ワークフロー",
      difficulty: "普通、4-6週間"
    }
  }
};

const SKILLS_CONTENT = {
  en: {
    "Prompt workflows": {
      title: "Prompt workflows",
      description: "Build repeatable prompts for drafting, editing, triage, and decision support."
    },
    "AI-assisted research": {
      title: "AI-assisted research",
      description: "Use AI to compare, summarize, and organize information without losing context."
    },
    "Automation basics": {
      title: "Automation basics",
      description: "Learn how tasks move between tools and where simple automation can help."
    },
    "Quality control": {
      title: "Quality control",
      description: "Review AI output for accuracy, tone, edge cases, and user impact."
    },
    "Portfolio storytelling": {
      title: "Portfolio storytelling",
      description: "Turn your rebuild work into proof that explains the problem, process, and result."
    },
    "AI customer reply review": {
      title: "AI customer reply review",
      description: "Evaluate automated customer drafts for tone, accuracy, and user context."
    },
    "No-code workflow mapping": {
      title: "No-code workflow mapping",
      description: "Visualize daily processes and identify steps that can be safely automated."
    },
    "Content repurposing workflow": {
      title: "Content repurposing workflow",
      description: "Repurpose long-form content into short social posts using AI templates."
    },
    "AI-assisted reporting": {
      title: "AI-assisted reporting",
      description: "Draft structured summaries and reports with AI tools."
    }
  },
  vi: {
    "Prompt workflows": {
      title: "Quy trình prompt",
      description: "Tạo prompt có thể dùng lại cho viết, chỉnh sửa, phân loại và hỗ trợ quyết định."
    },
    "AI-assisted research": {
      title: "Nghiên cứu có AI hỗ trợ",
      description: "Dùng AI để so sánh, tóm tắt và sắp xếp thông tin mà không mất ngữ cảnh."
    },
    "Automation basics": {
      title: "Tự động hóa cơ bản",
      description: "Hiểu việc di chuyển giữa các công cụ và điểm nào có thể tự động hóa."
    },
    "Quality control": {
      title: "Kiểm soát chất lượng",
      description: "Rà soát đầu ra AI về độ chính xác, giọng điệu và tác động tới người dùng."
    },
    "Portfolio storytelling": {
      title: "Kể chuyện portfolio",
      description: "Gói lại vấn đề, quy trình và kết quả thành bằng chứng dễ hiểu."
    },
    "AI customer reply review": {
      title: "Rà soát phản hồi AI cho khách hàng",
      description: "Đánh giá bản nháp trả lời tự động về tông giọng, độ chính xác và bối cảnh người dùng."
    },
    "No-code workflow mapping": {
      title: "Vẽ bản đồ quy trình no-code",
      description: "Trực quan hóa quy trình hằng ngày và xác định các bước có thể tự động hóa an toàn."
    },
    "Content repurposing workflow": {
      title: "Quy trình chuyển đổi nội dung",
      description: "Chuyển nội dung dài thành các bài đăng ngắn trên mạng xã hội bằng mẫu AI."
    },
    "AI-assisted reporting": {
      title: "Báo cáo có AI hỗ trợ",
      description: "Lập các báo cáo và tóm tắt có cấu trúc bằng công cụ AI."
    }
  },
  ja: {
    "Prompt workflows": {
      title: "プロンプトフロー",
      description: "作成、編集、振り分け、意思決定支援に使えるプロンプトを整えます。"
    },
    "AI-assisted research": {
      title: "AI支援リサーチ",
      description: "文脈を保ったまま、比較、要約、整理にAIを使います。"
    },
    "Automation basics": {
      title: "自動化の基礎",
      description: "タスクがツール間でどう動くか、どこを自動化できるかを学びます。"
    },
    "Quality control": {
      title: "品質管理",
      description: "AI出力の正確さ、トーン、ユーザー影響を確認します。"
    },
    "Portfolio storytelling": {
      title: "ポートフォリオ設計",
      description: "課題、プロセス、結果が伝わる証拠にまとめます。"
    },
    "AI customer reply review": {
      title: "AI顧客返信レビュー",
      description: "自動生成された顧客への返答案のトーン、正確性、コンテキストを確認します。"
    },
    "No-code workflow mapping": {
      title: "ノーコード業務マップ",
      description: "日々の業務を可視化し、安全に自動化できるステップを特定します。"
    },
    "Content repurposing workflow": {
      title: "コンテンツ再利用フロー",
      description: "AIテンプレートを使い、長文コンテンツをSNS向けの短文投稿に変換します。"
    },
    "AI-assisted reporting": {
      title: "AI支援レポート作成",
      description: "AIツールを使って、構造化された要約やレポートの下書きを作成します。"
    }
  }
};

// ----------------------------------------------------
// Scoring and Personalization Engines
// ----------------------------------------------------

export function generateScannerResult(
  answers: OnboardingAnswers,
  locale: string = "en"
): ScannerResult {
  const l = (locale === "vi" || locale === "ja") ? locale : "en";

  // If no tasks are selected, return default fallback scanner results in localized structures
  if (!answers.dailyTasks || answers.dailyTasks.length === 0) {
    return {
      disruptionScore: 68,
      riskLevel: l === "vi" ? "Rủi ro trung bình" : l === "ja" ? "中程度のリスク" : "Medium Risk",
      supportiveExplanation: SUPPORTIVE_EXPLANATION[l].medium,
      tasksAtRisk: [
        { title: l === "vi" ? "Viết cơ bản" : l === "ja" ? "基本的な文章作成" : "Basic writing", explanation: RISK_TASKS["Writing"][l] },
        { title: l === "vi" ? "Nhập liệu" : l === "ja" ? "データ入力" : "Data entry", explanation: RISK_TASKS["Data entry"][l] },
        { title: l === "vi" ? "Trả lời khách hàng lặp lại" : l === "ja" ? "定型的な顧客返信" : "Repetitive customer replies", explanation: RISK_TASKS["Customer support"][l] }
      ],
      humanStrengths: HUMAN_STRENGTHS[l].slice(0, 5),
      pivotPaths: [
        PIVOT_PATHS_CONTENT[l]["AI Content Strategist"],
        PIVOT_PATHS_CONTENT[l]["Workflow Automation Assistant"],
        PIVOT_PATHS_CONTENT[l]["Customer Success AI Operator"]
      ],
      skillsToBuild: [
        SKILLS_CONTENT[l]["Prompt workflows"],
        SKILLS_CONTENT[l]["AI-assisted research"],
        SKILLS_CONTENT[l]["Automation basics"],
        SKILLS_CONTENT[l]["Quality control"],
        SKILLS_CONTENT[l]["Portfolio storytelling"]
      ]
    };
  }

  // 1. Calculate Score
  let score = 40;

  const taskWeights: Record<string, number> = {
    "Writing": 8,
    "Data entry": 10,
    "Customer support": 8,
    "Admin work": 8,
    "Research": 6,
    "Social media content": 7,
    "Video editing": 6,
    "Data analysis": 7,
    "Design": 5,
    "Sales": 4,
    "Operations": 5,
    "Management": 3
  };

  const normalizedSelectedTasks = answers.dailyTasks.map(normalizeTask);

  normalizedSelectedTasks.forEach((task) => {
    if (taskWeights[task]) {
      score += taskWeights[task];
    }
  });

  const normalizedAiSkill = normalizeAiSkill(answers.aiSkillLevel);
  const skillAdjustments: Record<string, number> = {
    "Beginner": 8,
    "Using AI sometimes": 3,
    "Using AI daily": -4,
    "Advanced": -8
  };

  if (skillAdjustments[normalizedAiSkill]) {
    score += skillAdjustments[normalizedAiSkill];
  }

  // Clamp between 25 and 88
  score = Math.max(25, Math.min(88, score));

  // Determine risk level
  let riskLevel = "";
  let supportiveExplanation = "";
  if (score < 40) {
    riskLevel = l === "vi" ? "Rủi ro thấp" : l === "ja" ? "低いリスク" : "Low Risk";
    supportiveExplanation = SUPPORTIVE_EXPLANATION[l].low;
  } else if (score < 70) {
    riskLevel = l === "vi" ? "Rủi ro trung bình" : l === "ja" ? "中程度のリスク" : "Medium Risk";
    supportiveExplanation = SUPPORTIVE_EXPLANATION[l].medium;
  } else {
    riskLevel = l === "vi" ? "Rủi ro cao" : l === "ja" ? "高いリスク" : "High Risk";
    supportiveExplanation = SUPPORTIVE_EXPLANATION[l].high;
  }

  // 2. Generate Tasks at Risk (top 3 by weight, fallback to English lookup)
  const sortedTasks = [...normalizedSelectedTasks]
    .filter((t) => taskWeights[t] !== undefined)
    .sort((a, b) => taskWeights[b] - taskWeights[a]);

  const top3Tasks = sortedTasks.slice(0, 3);
  const tasksAtRisk: RiskTask[] = top3Tasks.map((task) => {
    // Map tasks to localized titles
    let title = task;
    const standardIndex = TASK_TRANSLATIONS.en.indexOf(task);
    if (standardIndex !== -1) {
      title = TASK_TRANSLATIONS[l][standardIndex];
    }

    const explanation = RISK_TASKS[task]?.[l] || RISK_TASKS[task]?.en || "";
    return { title, explanation };
  });

  // 3. Human strengths (choose 3-4 based on selected tasks, otherwise slice default list)
  const humanStrengths: HumanStrength[] = [];
  const defaultStrengths = HUMAN_STRENGTHS[l];
  // 0: Judgment, 1: Empathy, 2: Domain context, 3: Communication, 4: Taste
  if (normalizedSelectedTasks.includes("Customer support") || normalizedSelectedTasks.includes("Sales") || normalizedSelectedTasks.includes("Management")) {
    humanStrengths.push(defaultStrengths[1]); // Empathy
    humanStrengths.push(defaultStrengths[3]); // Communication
  }
  if (normalizedSelectedTasks.includes("Writing") || normalizedSelectedTasks.includes("Design") || normalizedSelectedTasks.includes("Social media content")) {
    humanStrengths.push(defaultStrengths[4]); // Taste
  }
  humanStrengths.push(defaultStrengths[0]); // Judgment
  humanStrengths.push(defaultStrengths[2]); // Domain Context

  // De-duplicate and ensure max 4 strengths
  const uniqueStrengths = Array.from(new Set(humanStrengths)).filter(Boolean).slice(0, 4);

  // 4. Pivot paths based on selected tasks and goal (max 3)
  const pivotPaths: PivotPath[] = [];
  const addedPivotKeys = new Set<string>();

  const mappingRules: Array<{ key: string; trigger: string[] }> = [
    { key: "AI Content Strategist", trigger: ["Writing", "Social media content"] },
    { key: "Customer Success AI Operator", trigger: ["Customer support"] },
    { key: "Workflow Automation Assistant", trigger: ["Admin work", "Data entry", "Operations"] },
    { key: "AI Research Assistant", trigger: ["Research", "Data analysis"] },
    { key: "AI Creative Workflow Specialist", trigger: ["Design", "Video editing"] },
    { key: "AI-enabled Revenue Operator", trigger: ["Sales", "Management"] }
  ];

  // Try trigger mappings from selected tasks
  for (const rule of mappingRules) {
    if (rule.trigger.some((t) => normalizedSelectedTasks.includes(t))) {
      const pathContent = PIVOT_PATHS_CONTENT[l][rule.key as keyof typeof PIVOT_PATHS_CONTENT["en"]];
      if (pathContent && !addedPivotKeys.has(rule.key)) {
        pivotPaths.push(pathContent);
        addedPivotKeys.add(rule.key);
      }
    }
  }

  // Fallbacks if we have fewer than 3 pivot paths, depending on goal
  const normalizedGoal = normalizeGoal(answers.goal);
  const fallbacksByGoal: Record<string, string[]> = {
    "Protect my current role": ["Customer Success AI Operator", "Workflow Automation Assistant"],
    "Find a new job": ["Customer Success AI Operator", "Workflow Automation Assistant"],
    "Build freelance income": ["AI Content Strategist", "AI Creative Workflow Specialist"],
    "Switch careers": ["AI Content Strategist", "AI Research Assistant"],
    "Create a proof-of-work portfolio": ["AI Creative Workflow Specialist", "AI Content Strategist"]
  };

  const goalFallbacks = fallbacksByGoal[normalizedGoal] || ["Customer Success AI Operator", "Workflow Automation Assistant"];
  for (const key of goalFallbacks) {
    if (pivotPaths.length < 3 && !addedPivotKeys.has(key)) {
      const pathContent = PIVOT_PATHS_CONTENT[l][key as keyof typeof PIVOT_PATHS_CONTENT["en"]];
      if (pathContent) {
        pivotPaths.push(pathContent);
        addedPivotKeys.add(key);
      }
    }
  }

  // Absolute fallback to fill to at least 2 or 3
  const allKeys = Object.keys(PIVOT_PATHS_CONTENT[l]);
  for (const key of allKeys) {
    if (pivotPaths.length < 3 && !addedPivotKeys.has(key)) {
      const pathContent = PIVOT_PATHS_CONTENT[l][key as keyof typeof PIVOT_PATHS_CONTENT["en"]];
      if (pathContent) {
        pivotPaths.push(pathContent);
        addedPivotKeys.add(key);
      }
    }
  }

  // 5. Skills to Build (4-5 skills)
  const skillsToBuild: SkillToBuild[] = [];
  const addedSkillKeys = new Set<string>();

  const skillMappingRules: Array<{ key: string; trigger: string[] }> = [
    { key: "Prompt workflows", trigger: ["Writing", "Social media content", "Design"] },
    { key: "Content repurposing workflow", trigger: ["Writing", "Social media content"] },
    { key: "AI customer reply review", trigger: ["Customer support"] },
    { key: "Quality control", trigger: ["Customer support", "Design", "Video editing"] },
    { key: "Automation basics", trigger: ["Admin work", "Data entry", "Operations", "Sales", "Management"] },
    { key: "No-code workflow mapping", trigger: ["Admin work", "Data entry", "Operations"] },
    { key: "AI-assisted research", trigger: ["Research", "Data analysis", "Management", "Sales"] },
    { key: "AI-assisted reporting", trigger: ["Research", "Data analysis"] }
  ];

  for (const rule of skillMappingRules) {
    if (rule.trigger.some((t) => normalizedSelectedTasks.includes(t))) {
      const skillContent = SKILLS_CONTENT[l][rule.key as keyof typeof SKILLS_CONTENT["en"]];
      if (skillContent && !addedSkillKeys.has(rule.key)) {
        skillsToBuild.push(skillContent);
        addedSkillKeys.add(rule.key);
      }
    }
  }

  // Add Portfolio storytelling as a highly recommended default
  const storySkill = SKILLS_CONTENT[l]["Portfolio storytelling"];
  if (!addedSkillKeys.has("Portfolio storytelling")) {
    skillsToBuild.push(storySkill);
    addedSkillKeys.add("Portfolio storytelling");
  }

  // Ensure between 4 and 5 skills
  if (skillsToBuild.length < 4) {
    const allSkills = Object.keys(SKILLS_CONTENT[l]);
    for (const key of allSkills) {
      if (skillsToBuild.length < 4 && !addedSkillKeys.has(key)) {
        skillsToBuild.push(SKILLS_CONTENT[l][key as keyof typeof SKILLS_CONTENT["en"]]);
        addedSkillKeys.add(key);
      }
    }
  }

  return {
    disruptionScore: score,
    riskLevel,
    supportiveExplanation,
    tasksAtRisk,
    humanStrengths: uniqueStrengths,
    pivotPaths: pivotPaths.slice(0, 3),
    skillsToBuild: skillsToBuild.slice(0, 5)
  };
}

export function generateRebuildPlan(
  answers: OnboardingAnswers,
  scannerResult: ScannerResult,
  locale: string = "en"
): RebuildPlan {
  const l = (locale === "vi" || locale === "ja") ? locale : "en";

  const targetRole = scannerResult.pivotPaths[0]?.title || (l === "vi" ? "Vai trò phù hợp" : l === "ja" ? "目標ロール" : "Target Role");
  const nextSkill = scannerResult.skillsToBuild[0]?.title || (l === "vi" ? "Kỹ năng tiếp theo" : l === "ja" ? "次のスキル" : "Next Skill");

  const normalizedAiSkill = normalizeAiSkill(answers.aiSkillLevel);
  const progressPercent = normalizedAiSkill === "Beginner" ? 12 : 18;
  const completedTasksCount = progressPercent === 12 ? 1 : 2;

  // Custom dynamically populated strings using user inputs
  const jobTitle = answers.currentJobTitle || (l === "vi" ? "vai trò hiện tại" : l === "ja" ? "現在の役割" : "your current role");
  const industry = answers.industry || (l === "vi" ? "ngành" : l === "ja" ? "業界" : "industry");

  let nextAction = "";
  if (l === "vi") {
    nextAction = `Liệt kê 5 việc trong vai trò ${jobTitle} mà AI đã có thể hỗ trợ.`;
  } else if (l === "ja") {
    nextAction = `${jobTitle}の役割で、AIが支援できるタスクを5つ書き出す。`;
  } else {
    nextAction = `List 5 tasks in your current role (${jobTitle}) that AI can already assist.`;
  }

  // Dynamic daily tasks builder
  const dailyTasks: DailyRebuildTask[] = [
    {
      title: l === "vi" 
        ? `Liệt kê 5 việc trong vai trò ${jobTitle} mà AI đã có thể hỗ trợ` 
        : l === "ja" 
        ? `${jobTitle}の役割で、AIが支援できるタスクを5つ書き出す` 
        : `List 5 tasks in your current role (${jobTitle}) that AI can already assist`,
      estimatedTime: l === "vi" ? "20 phút" : l === "ja" ? "20分" : "20 min",
      difficulty: "Easy",
      status: "In progress"
    },
    {
      title: l === "vi"
        ? `Viết lại vai trò ${jobTitle} thành 3 hướng có AI hỗ trợ`
        : l === "ja"
        ? `現在の役割（${jobTitle}）をAI支援の3方向に書き換える`
        : `Rewrite your current role (${jobTitle}) into 3 AI-assisted directions`,
      estimatedTime: l === "vi" ? "30 phút" : l === "ja" ? "30分" : "30 min",
      difficulty: "Medium",
      status: "Next"
    },
    {
      title: l === "vi"
        ? `So sánh 2 công cụ AI liên quan đến ngành ${industry}`
        : l === "ja"
        ? `${industry}業界や業務に関連するAIツールを2つ比較する`
        : `Compare 2 AI tools relevant to ${industry} or your tasks`,
      estimatedTime: l === "vi" ? "25 phút" : l === "ja" ? "25分" : "25 min",
      difficulty: "Easy",
      status: "Upcoming"
    },
    {
      title: l === "vi"
        ? `Xây dựng 1 mẫu Proof-of-Work nhỏ cho vai trò ${targetRole}`
        : l === "ja"
        ? `${targetRole}に向けた小さなProof-of-Workサンプルを1つ作る`
        : `Build 1 proof-of-work sample for ${targetRole}`,
      estimatedTime: l === "vi" ? "90 phút" : l === "ja" ? "90分" : "90 min",
      difficulty: "Medium",
      status: "Upcoming"
    },
    {
      title: l === "vi"
        ? `Phác thảo bài viết case study cho mẫu Proof-of-Work của bạn`
        : l === "ja"
        ? `制作したProof-of-Workサンプルのケーススタディの概要を設計する`
        : `Draft a portfolio case study outline for your rebuild project`,
      estimatedTime: l === "vi" ? "35 phút" : l === "ja" ? "35分" : "35 min",
      difficulty: "Medium",
      status: "Upcoming"
    },
    {
      title: l === "vi"
        ? `Cập nhật tiêu đề trang cá nhân hướng tới vai trò ${targetRole}`
        : l === "ja"
        ? `目標ロール（${targetRole}）向けに見出し・プロフィールを更新する`
        : `Update your profile headline for your target role (${targetRole})`,
      estimatedTime: l === "vi" ? "15 phút" : l === "ja" ? "15分" : "15 min",
      difficulty: "Easy",
      status: "Upcoming"
    }
  ];

  // Weeks mapping
  const weeklyRoadmap: RebuildPlanWeek[] = [
    {
      week: 1,
      title: l === "vi" ? "Hiểu rủi ro" : l === "ja" ? "リスクを理解する" : "Understand your risk",
      description: l === "vi"
        ? `Xác định phần việc của vai trò ${jobTitle} dễ tự động hóa và thế mạnh con người cần giữ.`
        : l === "ja"
        ? `現在の職種（${jobTitle}）の中で自動化されやすい業務と、守るべき強みを整理します。`
        : `Map the parts of your current work (${jobTitle}) that are most exposed to automation and the human strengths worth protecting.`,
      tasks: [
        { title: l === "vi" ? "Xem lại Điểm gián đoạn AI" : l === "ja" ? "AIディスラプションスコアを確認する" : "Review your AI Disruption Score", status: "Done" },
        { title: dailyTasks[0].title, status: "In progress" },
        { title: l === "vi" ? "Chọn một hướng vai trò để thử" : l === "ja" ? "試す役割の方向性を1つ選ぶ" : "Choose one role direction to test", status: "Next" }
      ]
    },
    {
      week: 2,
      title: l === "vi" ? "Học quy trình có AI" : l === "ja" ? "AI支援フローを学ぶ" : "Learn AI-assisted workflows",
      description: l === "vi"
        ? "Dùng AI như cộng sự trong quy trình để kinh nghiệm của bạn hữu ích hơn."
        : l === "ja"
        ? "AIをワークフローの相棒として使い、経験をより役立つ形にします。"
        : "Practice using AI as a workflow partner so your existing experience becomes more useful, not less visible.",
      tasks: [
        { title: dailyTasks[1].title, status: "Upcoming" },
        { title: dailyTasks[2].title, status: "Upcoming" },
        { title: l === "vi" ? "Tạo một quy trình prompt lặp lại" : l === "ja" ? "再利用できるプロンプトフローを1つ作る" : "Create one repeatable prompt workflow", status: "Upcoming" }
      ]
    },
    {
      week: 3,
      title: l === "vi" ? "Xây dựng Proof-of-Work" : l === "ja" ? "Proof-of-Workを作る" : "Build proof-of-work projects",
      description: l === "vi"
        ? "Đưa việc học thành mẫu công việc thực tế cho thấy cách bạn dùng AI giải quyết vấn đề."
        : l === "ja"
        ? "学びを、実際の課題を解く見える成果物に変えます。"
        : "Turn learning into a visible sample that shows how you solve a real work problem with AI support.",
      tasks: [
        { title: dailyTasks[3].title, status: "Upcoming" },
        { title: l === "vi" ? "Ghi lại trước đó, quy trình và kết quả" : l === "ja" ? "Before、プロセス、結果を記録する" : "Document before, process, and result", status: "Upcoming" },
        { title: l === "vi" ? "Nhờ một người đáng tin góp ý" : l === "ja" ? "信頼できる人に意見をもらう" : "Ask one trusted person for feedback", status: "Upcoming" }
      ]
    },
    {
      week: 4,
      title: l === "vi" ? "Tiếp cận cơ hội phù hợp" : l === "ja" ? "再構築に向いた機会へ進む" : "Apply to rebuild-friendly opportunities",
      description: l === "vi"
        ? `Cập nhật định vị thương hiệu cá nhân và hướng tới các vị trí cần kỹ năng ${nextSkill}.`
        : l === "ja"
        ? `見せ方を整え、AIスキル（${nextSkill}）が活きる役割や案件を狙います。`
        : `Update your positioning and aim toward roles or projects where your AI-assisted workflow skills (${nextSkill}) are useful.`,
      tasks: [
        { title: dailyTasks[5].title, status: "Upcoming" },
        { title: dailyTasks[4].title, status: "Upcoming" },
        { title: l === "vi" ? "Tìm 5 cơ hội phù hợp để xây lại" : l === "ja" ? "再構築に向いた機会を5つ見つける" : "Identify 5 rebuild-friendly opportunities", status: "Upcoming" }
      ]
    }
  ];

  const currentStrengths = scannerResult.humanStrengths.map((s) => s.title);
  const skillsToBuildNext = scannerResult.skillsToBuild.map((s) => s.title);

  const skillGapSummary = l === "vi"
    ? `Bạn đã hiểu ngành ${industry} và biết cách giao tiếp. Khoảng trống là đưa kinh nghiệm đó thành quy trình có AI hỗ trợ và Proof-of-Work cho vai trò ${targetRole}.`
    : l === "ja"
    ? `あなたはすでに${industry}業界やコミュニケーションの経験を持っています。課題は、その経験をAI支援フローや、${targetRole}向けのProof-of-Workに変えることです。`
    : `You already understand ${industry} and communication. The gap is turning that experience into AI-assisted workflows and visible proof-of-work for ${targetRole}.`;

  const proofOfWorkGoals = l === "vi"
    ? [
        `1 quy trình nhỏ có AI hỗ trợ cho vai trò ${targetRole}`,
        `1 mẫu Proof-of-Work thể hiện kĩ năng ${nextSkill}`,
        `1 câu chuyện case study / bài viết portfolio chứng minh phán đoán của bạn`
      ]
    : l === "ja"
    ? [
        `${targetRole}向けの小さなAI支援フローを1つ`,
        `${nextSkill}を示すProof-of-Workサンプルを1つ`,
        `判断力を証明するケーススタディ・ポートフォリオ記事を1つ`
      ]
    : [
        `1 small AI-assisted workflow for ${targetRole}`,
        `1 proof-of-work sample demonstrating ${nextSkill}`,
        `1 portfolio case study highlighting your human judgment`
      ];

  return {
    title: l === "vi" ? "Kế hoạch xây dựng lại sự nghiệp 30 ngày" : l === "ja" ? "30日キャリア再構築プラン" : "Your 30-Day Career Rebuild Plan",
    currentScore: scannerResult.disruptionScore,
    targetRole,
    nextSkill,
    progressPercent,
    currentWeek: 1,
    completedTasksCount,
    nextAction,
    weeklyRoadmap,
    dailyTasks,
    currentStrengths,
    skillsToBuildNext,
    skillGapSummary,
    proofOfWorkGoals
  };
}

export function generateDashboardSummary(
  answers: OnboardingAnswers,
  scannerResult: ScannerResult,
  rebuildPlan: RebuildPlan,
  locale: string = "en"
): DashboardSummary {
  const l = (locale === "vi" || locale === "ja") ? locale : "en";

  const firstName = answers.currentJobTitle
    ? (l === "vi" ? "Người xây lại" : l === "ja" ? "再構築者" : "Rebuilder")
    : "Maya";

  // Dashboard Opportunities from the pivot paths
  const opportunities: DashboardOpportunity[] = scannerResult.pivotPaths.map((p) => {
    return {
      title: p.title,
      matchReason: l === "vi"
        ? `Khớp với công việc hiện tại, điểm mạnh giao tiếp và kỹ năng ${p.firstSkill} của bạn.`
        : l === "ja"
        ? `現在の職種、強みであるコミュニケーション、そして次のAIスキル（${p.firstSkill}）と一致しています。`
        : `Matches your experience, communication strengths, and target skill (${p.firstSkill}).`,
      firstSkillRequired: p.firstSkill
    };
  });

  const recommendedActions = [
    {
      title: l === "vi" ? "Làm tiếp việc hôm nay" : l === "ja" ? "今日のタスクを続ける" : "Continue today's rebuild task",
      description: l === "vi" 
        ? "Đưa việc hiện tại tiến lên khi bước tiếp theo còn rõ."
        : l === "ja"
        ? "次のステップが明確なうちに、現在のタスクを進めます。"
        : "Move the current task forward while the next step is clear.",
      href: "/rebuild-plan"
    },
    {
      title: l === "vi" ? "Xây một mẫu Proof-of-Work" : l === "ja" ? "Proof-of-Workを1つ作る" : "Build one proof-of-work sample",
      description: l === "vi"
        ? "Đưa một quy trình có AI thành bằng chứng nhìn thấy được."
        : l === "ja"
        ? "AI支援フローを、見せられる証拠に変えます。"
        : "Turn one AI-assisted workflow into visible evidence.",
      href: "/rebuild-plan"
    },
    {
      title: l === "vi" ? "Xem lại báo cáo AI" : l === "ja" ? "AIレポートを見直す" : "Review your AI risk report",
      description: l === "vi"
        ? "Xem lại những việc và thế mạnh đang định hình kế hoạch của bạn."
        : l === "ja"
        ? "プランを形づくるタスクと強みを確認します。"
        : "Revisit the tasks and strengths shaping your plan.",
      href: "/scanner"
    }
  ];

  return {
    firstName,
    disruptionScore: scannerResult.disruptionScore,
    nextSkill: rebuildPlan.nextSkill,
    bestOpportunityMatch: rebuildPlan.targetRole,
    todayTask: rebuildPlan.dailyTasks[0].title,
    planProgressPercent: rebuildPlan.progressPercent,
    profileCompletionPercent: 35,
    profileNextStep: l === "vi" ? "Thêm một mẫu Proof-of-Work" : l === "ja" ? "Proof-of-Workを1つ追加" : "Add one proof-of-work sample",
    nextMilestone: l === "vi" ? "Hoàn tất bản đồ rủi ro Tuần 1" : l === "ja" ? "1週目のリスク整理を完了" : "Finish Week 1 risk mapping",
    recommendedActions,
    opportunities
  };
}
