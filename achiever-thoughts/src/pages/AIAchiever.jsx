import { useState, memo } from "react";
import "../styles/ai-achiever.css";

// ─── SKILL TREE ───────────────────────────────────────────────────────────────
const SKILL_TREE = [
  {
    id: "ai-literacy",
    name: "AI Literacy",
    color: "#7c3aed",
    icon: "🧠",
    skills: [
      { id: "prompting",        name: "Prompting Mastery" },
      { id: "ai-workflows",     name: "AI Workflows" },
      { id: "ai-limitations",   name: "AI Limitations" },
      { id: "llm-understanding",name: "LLM Understanding" },
    ],
  },
  {
    id: "systems-thinking",
    name: "Systems Thinking",
    color: "#0369a1",
    icon: "⚙️",
    skills: [
      { id: "apis",         name: "APIs" },
      { id: "automation",   name: "Automation" },
      { id: "orchestration",name: "Orchestration" },
      { id: "ecosystems",   name: "Ecosystems" },
    ],
  },
  {
    id: "product-business",
    name: "Product & Business",
    color: "#d97706",
    icon: "📦",
    skills: [
      { id: "product-strategy",        name: "Product Strategy" },
      { id: "customer-understanding",  name: "Customer Understanding" },
      { id: "prioritization",          name: "Prioritization" },
      { id: "monetization",            name: "Monetization" },
    ],
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    color: "#059669",
    icon: "🤖",
    skills: [
      { id: "agentic-workflows",     name: "Agentic Workflows" },
      { id: "multi-agent",           name: "Multi-Agent Systems" },
      { id: "evaluation-guardrails", name: "Evaluation & Guardrails" },
      { id: "memory-systems",        name: "Memory Systems" },
    ],
  },
  {
    id: "leadership-3d",
    name: "3D Leadership",
    color: "#dc2626",
    icon: "🎯",
    skills: [
      { id: "leading-self",       name: "Leading Self" },
      { id: "leading-others",     name: "Leading Others" },
      { id: "leading-innovation", name: "Leading Innovation" },
    ],
  },
  {
    id: "new-ai-roles",
    name: "New AI Roles",
    color: "#9333ea",
    icon: "🚀",
    skills: [
      { id: "generative-ai-pm", name: "Generative AI PM" },
      { id: "predictive-ai-pm", name: "Predictive AI PM" },
      { id: "agents-pm",        name: "AI Agents PM" },
      { id: "business-engineer",name: "Business Engineer" },
      { id: "gtm-engineer",     name: "GTM Engineer" },
    ],
  },
  {
    id: "ai-tech-stack",
    name: "AI Tech Stack",
    color: "#0f766e",
    icon: "🔧",
    skills: [
      { id: "compute-cloud",     name: "Compute & Cloud" },
      { id: "foundation-models", name: "Foundation Models" },
      { id: "ai-frameworks",     name: "AI Frameworks" },
      { id: "data-vector",       name: "Data & Vector DBs" },
    ],
  },
];

// ─── SKILLS DATA ──────────────────────────────────────────────────────────────
const SKILLS_DATA = {

  // ── MODULE 1: AI LITERACY ──────────────────────────────────────────────────

  "prompting": {
    naive: {
      concept: {
        headline: "Talk Better, Get Better Answers!",
        emoji: "💬",
        core_idea: "Prompting is how you talk to AI — the better your instructions, the better the answers. Think of it like giving directions: vague directions get you lost, precise ones get you exactly where you need to go.",
        why_it_matters: "You don't need to be a programmer to get amazing results from AI. A well-written prompt is like having a superpower that anyone can unlock with practice.",
        key_insight: "The AI is always trying its best — your job is to make sure it knows exactly what 'best' looks like for your situation.",
        analogy: "Think of prompting like ordering coffee. 'Give me a drink' might get you anything. 'Medium oat milk latte, extra shot, no sugar' gets exactly what you want every time! ☕",
        pillars: [
          "Clarity: Describe exactly what you want without leaving room for guessing",
          "Context: Give the AI the background it needs to tailor the answer to you",
          "Format: Tell the AI how you want the response structured (list, paragraph, table)",
        ],
      },
      examples: [
        {
          title: "Homework Helper Upgrade",
          context: "Education",
          situation: "A student typed 'Help me with history' and the AI wrote a confusing essay covering all of human history.",
          action: "She rephrased it: 'I'm writing a 2-paragraph essay for 8th grade about the main causes of World War I. Give me 3 key points in simple language.'",
          outcome: "The AI gave a focused, grade-appropriate response the student could actually use in under 60 seconds.",
        },
        {
          title: "Recipe Remix",
          context: "Everyday Life",
          situation: "Someone asked 'Make me a recipe' and got a complicated chicken dish they hated because they're vegetarian.",
          action: "They rephrased: 'I'm vegetarian and only have tomatoes, cheese, and pasta at home. Give me a 20-minute dinner recipe.'",
          outcome: "The AI generated a perfect tomato pasta recipe using only the ingredients available — no shopping needed.",
        },
        {
          title: "Email Made Easy",
          context: "Work",
          situation: "A new employee needed to write a professional email to request a day off but got a stiff, overly formal template from AI.",
          action: "She specified: 'Write a friendly but professional email to my manager requesting Friday off. Casual tone, under 80 words.'",
          outcome: "The AI produced a warm, appropriately brief email that matched her workplace culture perfectly.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "The Confused Chatbot",
          scenario: "Your company just launched an AI chatbot on its website to answer customer questions. But customers keep complaining that the chatbot gives wrong or confusing answers. Your manager says the AI model is good — so the problem must be how it's set up.",
          challenge: "What would you change about the chatbot's instructions to fix this problem?",
          hints: [
            "Think about what information the AI might be missing about your company and products",
            "Think about what a perfect answer looks like and work backwards from there",
          ],
          model_answer: "Write a clearer 'instruction' for the chatbot that tells it what your company does, who it speaks to, what tone to use, and what to say when it doesn't know an answer. Give it 2–3 example questions with ideal answers so it understands the standard to meet.",
        },
        {
          id: "cs2",
          title: "The Vague Grade-Giver",
          scenario: "Your teacher uses AI to help give feedback on essays, but students say the feedback is useless. The AI writes things like 'good job' or 'needs improvement' without ever explaining why. You've been asked to help fix it.",
          challenge: "How would you rewrite the prompt to get more useful, specific feedback for students?",
          hints: [
            "What do students actually need to know to improve their next essay?",
            "Think about what a great human teacher would comment on for each paragraph",
          ],
          model_answer: "Tell the AI exactly what to evaluate: 'For each paragraph, comment on clarity, quality of evidence, and strength of argument. End with one specific, actionable improvement tip per paragraph.' Specific instructions always produce specific results.",
        },
      ],
    },
    learner: {
      concept: {
        headline: "Engineer Precise AI Instructions That Deliver",
        emoji: "💬",
        core_idea: "Prompt engineering is the practice of crafting inputs to LLMs (Large Language Models) to reliably elicit high-quality outputs. Techniques like few-shot examples, chain-of-thought instructions, and explicit role assignment significantly improve result quality.",
        why_it_matters: "In practice, 80% of poor AI output is caused by poor prompts, not model limitations. Prompt mastery is the highest-leverage, lowest-cost skill to develop for any AI practitioner or PM.",
        key_insight: "Prompts are the API of natural language — treat them like code: versioned, tested, and deliberately structured.",
        analogy: "Like briefing a talented contractor — the more precisely you describe scope, constraints, and expected deliverables, the better the result, regardless of who does the work.",
        pillars: [
          "Instruction: The core task stated clearly with explicit constraints, scope, and output format",
          "Few-shot Examples: Sample inputs and ideal outputs that calibrate tone, structure, and depth",
          "Chain-of-Thought: Instructing the model to reason step-by-step before producing its final answer",
        ],
      },
      examples: [
        {
          title: "Customer Support Bot Overhaul",
          context: "E-commerce / Retail",
          situation: "A retail company's generic customer service prompt was producing inconsistent responses — sometimes overly formal, sometimes apologising for things the company wasn't responsible for.",
          action: "The PM redesigned the system prompt with an explicit persona definition, a list of escalation scenarios, and five few-shot examples of ideal vs. unacceptable responses for common edge cases.",
          outcome: "CSAT scores improved 22% in the first month and escalations to human agents dropped 31% within six weeks of deployment.",
        },
        {
          title: "Code Generation Pipeline",
          context: "SaaS / Developer Tools",
          situation: "GitHub Copilot enterprise customers were getting inconsistent code quality because prompts didn't specify language version, style guides, or security constraints relevant to their codebase.",
          action: "Engineering teams prefixed code-generation prompts with project-specific context: language version, relevant coding standards, and two examples of preferred pattern implementations.",
          outcome: "Code review rejection rates for AI-generated code dropped from 45% to 12% within a quarter of adopting structured prompting.",
        },
        {
          title: "Brand Voice at Scale",
          context: "Marketing / SaaS",
          situation: "Jasper.ai customers were generating marketing copy that missed brand voice — output varied wildly in tone even for similar requests from the same team.",
          action: "Jasper built reusable brand voice templates as system prompts — capturing tone examples, forbidden phrases, and preferred phrasing for each customer's brand identity.",
          outcome: "Customer retention improved as teams achieved consistent brand voice at 10× the content output with half the editing time previously required.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Inconsistent Brand Voice",
          scenario: "Your SaaS company uses AI to generate email marketing copy. Sales and marketing love the tool, but output tone varies wildly — sometimes casual, sometimes corporate. Customer research shows brand consistency drives conversion. The current prompt just says 'write a marketing email about our product.'",
          challenge: "How would you redesign the prompt to ensure consistent brand voice across all generated emails?",
          hints: [
            "Define the brand persona explicitly in the system prompt with tone examples",
            "Include 2–3 examples of ideal vs. off-brand writing directly in the prompt",
          ],
          model_answer: "Add a brand voice block to the system prompt: define the persona ('direct, friendly, jargon-free'), include two ideal output examples, list forbidden phrases, and specify format requirements. Few-shot examples outperform abstract brand descriptions every time.",
        },
        {
          id: "cs2",
          title: "Hallucinating Support Bot",
          scenario: "Shopify merchants using your AI support tool report the bot confidently gives wrong pricing information. The bot has access to current pricing via retrieval, but still invents numbers. Support escalations have increased 40% and trust in the product is declining fast.",
          challenge: "How would you modify the prompt and system design to reduce confident hallucination on factual questions?",
          hints: [
            "Add explicit grounding instructions: 'answer only using the retrieved context'",
            "Design a clear fallback behaviour for when retrieved context is insufficient",
          ],
          model_answer: "Add grounding constraints to the generation prompt: 'Answer only using the provided product data. If exact pricing is unavailable, say so and offer to connect to a human agent.' Also add confidence scoring to route low-confidence answers to human review before delivery.",
        },
      ],
    },
    expert: {
      concept: {
        headline: "Systematic Prompt Design for Production Deployment",
        emoji: "💬",
        core_idea: "Prompt engineering encompasses instruction design, context window management, latency-quality trade-offs, and systematic evaluation of output consistency across temperature settings, model versions, and deployment contexts.",
        why_it_matters: "The key tension here is between generalization (robust prompts that hold across diverse inputs) and specialization (optimized prompts for narrow, high-value use cases). Production AI PM work demands mastery of both ends of this trade-off.",
        key_insight: "Prompt brittleness is the primary cause of LLM production failures — systematic evaluation suites with diverse edge-case coverage are non-negotiable before any deployment.",
        analogy: "Prompt engineering in production is analogous to compiler optimization — micro-decisions in instruction design compound into significant performance deltas at scale and across model versions.",
        pillars: [
          "Context Window Architecture: Hierarchical structuring of system, user, and retrieval content for principled token budget management",
          "Evaluation Framework: Automated scoring of prompt variants across edge cases with statistical significance thresholds before promotion",
          "Latency-Quality Trade-off: Token budget management, model routing by task complexity, and prompt compression strategies for SLA compliance",
        ],
      },
      examples: [
        {
          title: "RAG Prompt Grounding Architecture",
          context: "Enterprise AI / LegalTech",
          situation: "A legal research platform's RAG system was hallucinating case citations despite high retrieval relevance scores — the generation prompt lacked explicit grounding constraints, allowing the model to extrapolate beyond retrieved content.",
          action: "The PM implemented a two-stage prompt with explicit grounding instructions, temperature reduction to 0.1, and output parsing validation that flagged any citation not present verbatim in the retrieved context.",
          outcome: "Citation hallucination dropped from 8% to 0.3% of responses, enabling deployment in actual legal workflows with a defensible compliance posture for the first time.",
        },
        {
          title: "Instruction Hierarchy for Enterprise Safety",
          context: "B2B SaaS / Enterprise",
          situation: "An enterprise AI assistant was being manipulated by end-users using clever reframing — the system prompt lacked an explicit authority hierarchy for conflicting instructions, creating compliance risk.",
          action: "The team designed a layered instruction hierarchy: system-level non-negotiables (compliance, guardrails), admin-level customizations, and user-level preferences — with each layer explicitly unable to override the layer above it.",
          outcome: "Compliance violations dropped to zero while maintaining high user satisfaction scores, enabling confident deployment across regulated financial services and healthcare customers.",
        },
        {
          title: "Multi-Model Prompt Routing",
          context: "AI Platform / Infrastructure",
          situation: "An AI platform routing all requests through a single frontier model faced unsustainable inference costs at scale. Naive downgrade attempts degraded output quality unpredictably across task types.",
          action: "The PM implemented task complexity classification in the prompt pipeline — simple extraction tasks routed to smaller models with optimised prompts, complex reasoning routed to frontier models — each with prompt variants tuned to the target model's architecture.",
          outcome: "Inference costs reduced 58% with less than 3% degradation in user-rated output quality, enabling sustainable operations at 3× the previous user volume.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Prompt Stability Under Distribution Shift",
          scenario: "Your production LLM pipeline achieves 91% accuracy on the held-out test set but degrades to 67% in production — a classic distribution shift problem. Analysis shows input phrasing in production differs substantially from the few-shot examples in the prompt. An alternative prompt achieves 83% on test but 79% in production.",
          challenge: "How do you approach the prompt engineering trade-off between in-distribution optimization and out-of-distribution robustness for a production system?",
          hints: [
            "Diversify few-shot examples to cover the actual production input distribution, not just the test set distribution",
            "Build a continuous evaluation pipeline using stratified production samples, not just a static hold-out set",
          ],
          model_answer: "Prefer the more robust prompt with strategic modification: audit the production input distribution, expand few-shot examples to cover under-represented input patterns, and implement continuous evaluation using live production samples. Accept lower peak test performance in exchange for stable production behavior — brittleness is the primary failure mode in LLM systems.",
        },
        {
          id: "cs2",
          title: "Context Window Budget Allocation",
          scenario: "Your enterprise AI assistant has a 128K context window. Analysis shows long-running conversations consume 90%+ of the context window with conversation history after 30+ turns, leaving insufficient budget for retrieved documents. Response quality correlates 0.87 with available context budget for retrieved content.",
          challenge: "How do you architect the context window allocation policy to maximize response quality across diverse session lengths and task types?",
          hints: [
            "Consider dynamic allocation based on task-type detection at the start of each turn",
            "Evaluate conversation summarization as a context compression strategy for long sessions",
          ],
          model_answer: "Implement dynamic context budget management: detect task type per turn (conversational vs. document analysis), allocate budget accordingly (cap history at 20K for document tasks), apply summarization for turns beyond the history window, and monitor context utilization metrics continuously in production to refine allocation thresholds over time.",
        },
      ],
    },
  },

  "ai-workflows": {
    naive: {
      concept: {
        headline: "Let AI Do the Repetitive Work for You!",
        emoji: "🔄",
        core_idea: "AI workflows are like assembly lines where AI does the boring, repetitive steps automatically. You set up the steps once, and AI handles them every time without you lifting a finger.",
        why_it_matters: "Imagine never having to do the same boring task twice. AI workflows free you up to focus on the creative and important work, while AI handles the routine stuff.",
        key_insight: "The best AI workflows are invisible — they just make things happen faster without you having to think about it.",
        analogy: "Think of it like a self-checkout machine 🛒 — someone programmed the steps once (scan, pay, bag), and now millions of people use it every day without a cashier.",
        pillars: [
          "Trigger: Something that starts the workflow — like receiving an email or clicking a button",
          "Steps: The sequence of actions AI takes automatically, one after another",
          "Output: The end result delivered to the right person at the right time",
        ],
      },
      examples: [
        {
          title: "Auto Email Sorter",
          context: "Small Business",
          situation: "A small shop owner was spending 2 hours a day reading and sorting customer emails into folders: complaints, orders, and general questions.",
          action: "She set up an AI workflow that reads each incoming email, figures out what type it is, and sorts it into the right folder automatically.",
          outcome: "She now spends 15 minutes a day on email instead of 2 hours, and never misses a complaint that needs urgent attention.",
        },
        {
          title: "Meeting Notes Generator",
          context: "Office / Remote Work",
          situation: "A team manager was spending 30 minutes after every meeting writing up notes and action items to send to the team.",
          action: "They set up an AI workflow: record the meeting → AI transcribes it → AI writes a summary with action items → automatically emails the team.",
          outcome: "Meeting summaries now arrive in inboxes within 5 minutes of the meeting ending, with zero manual effort from the manager.",
        },
        {
          title: "Social Post Scheduler",
          context: "Content / Marketing",
          situation: "A content creator was manually writing captions, resizing images, and posting to three social platforms every day — taking 90 minutes of work.",
          action: "They built a workflow: upload the photo → AI writes 3 captions in the brand voice → resizes for each platform → schedules posts at optimal times.",
          outcome: "Daily social posting went from 90 minutes of manual work to a 10-minute review-and-approve process.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "The Inbox Nightmare",
          scenario: "A customer support team receives 500 emails a day. Agents spend 40% of their time just figuring out which emails are urgent and assigning them to the right team member. By the time urgent issues get noticed, customers are already angry.",
          challenge: "How would you design a simple AI workflow to fix this problem?",
          hints: [
            "Think about what needs to happen to every email before a human sees it",
            "What information does an agent need to know immediately when they open their queue?",
          ],
          model_answer: "Build a workflow: incoming email → AI reads and classifies it (urgent/normal, category: billing/technical/general) → assigns to correct team queue → flags urgent ones with an alert. Agents start every day with pre-sorted, pre-labelled emails and see urgent issues first.",
        },
        {
          id: "cs2",
          title: "Report That Writes Itself",
          scenario: "Every Monday morning, your team's analyst spends 3 hours pulling data from five different spreadsheets and writing a weekly performance report. The report always looks the same — same metrics, same format — just with new numbers.",
          challenge: "Design a workflow that produces this report automatically every Monday morning.",
          hints: [
            "The data is always in the same place — what's the first step?",
            "What does the finished report always contain? List the fixed sections.",
          ],
          model_answer: "Set up a weekly trigger → AI pulls data from all five spreadsheets → fills a report template with the new numbers → AI writes a 3-sentence summary highlighting the biggest changes → sends the finished report to the team by 8am Monday. Zero analyst time required.",
        },
      ],
    },
    learner: {
      concept: {
        headline: "Design AI-Assisted Processes That Scale",
        emoji: "🔄",
        core_idea: "AI workflows are structured sequences of AI-assisted tasks designed to automate, augment, or accelerate business processes using LLMs and supporting systems. They replace manual handoffs with intelligent automation that maintains quality at scale.",
        why_it_matters: "In practice, workflows are where AI moves from a point tool to a business multiplier. A well-designed workflow can eliminate entire categories of manual work while improving consistency across the process.",
        key_insight: "The highest-value AI workflows are not those that eliminate humans entirely, but those that redirect human effort from execution to exception handling and judgment.",
        analogy: "Like a well-run restaurant kitchen (mise en place) — every ingredient prepped, every step sequenced, every role clear. AI workflows bring that level of operational discipline to knowledge work.",
        pillars: [
          "Trigger & Context: Clear initiation events with sufficient context passed downstream for each step to operate independently",
          "Human-in-the-Loop Checkpoints: Deliberate points where human judgment gates progression — especially for high-stakes or novel situations",
          "Output Validation: Automated checks that verify each step's output meets quality thresholds before passing to the next step",
        ],
      },
      examples: [
        {
          title: "Zapier AI-Powered Support Triage",
          context: "SaaS / Customer Success",
          situation: "A B2B SaaS company's support team was manually reading and routing 300+ daily tickets, with urgent issues often sitting in the queue for hours before being spotted.",
          action: "The PM built a Zapier + GPT-4 workflow: new ticket → AI classifies severity and category → routes to appropriate queue → generates a suggested first response for agent review → flags P0 issues via Slack alert.",
          outcome: "P0 response time dropped from 4 hours to 18 minutes and first-response quality scores improved 34%, as agents started from AI-drafted responses rather than blank pages.",
        },
        {
          title: "HubSpot Lead Enrichment Pipeline",
          context: "B2B Sales / Marketing",
          situation: "Sales reps at a mid-market SaaS company were spending 45 minutes per lead manually researching company background, ICP fit, and likely pain points before outreach.",
          action: "The team built an automated workflow: new CRM lead → AI searches company website and LinkedIn → generates a 200-word company brief and ICP score → attaches to the CRM record before the rep opens it.",
          outcome: "Research time per lead dropped from 45 minutes to under 2 minutes and outreach personalisation quality improved, lifting reply rates by 28%.",
        },
        {
          title: "Notion Document QA Pipeline",
          context: "Legal / Professional Services",
          situation: "A legal services firm's team was manually reviewing client intake documents for completeness before scheduling consultations — a process that took 20 minutes per document and caused bottlenecks.",
          action: "They built a Notion + AI workflow that extracted document fields, checked for required information, generated a completeness report, and flagged missing items directly to the client via email — all before a human saw the document.",
          outcome: "Document review time dropped 85% and consultation scheduling bottlenecks were eliminated, freeing paralegal capacity for higher-value work.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Content Production Pipeline",
          scenario: "Your marketing team produces 20 blog posts per month. The current process: writer drafts → editor reviews → SEO specialist optimises → designer creates header image → published. Each handoff takes 1–2 days and the pipeline frequently stalls when any person is unavailable.",
          challenge: "How would you redesign this workflow with AI to reduce cycle time and remove single points of failure?",
          hints: [
            "Identify which steps can be fully automated vs. which need human judgment",
            "Think about where AI can prepare work so human review takes minutes, not hours",
          ],
          model_answer: "Automate the augmentation steps: AI generates SEO brief before writing starts, AI provides an initial edit pass before the human editor sees the draft, AI optimises meta tags and suggests internal links, AI generates 5 header image concepts for designer selection. Human effort focuses on judgment calls, not execution. Cycle time drops from 5–7 days to 2–3 days.",
        },
        {
          id: "cs2",
          title: "Compliance Review Bottleneck",
          scenario: "Your fintech startup's compliance team manually reviews every customer onboarding document before accounts are activated. This takes 2 business days on average and creates a poor user experience. The team reviews 200 applications per day and 85% require no changes — only 15% need human follow-up.",
          challenge: "Design an AI workflow that accelerates the 85% of straightforward cases without compromising compliance quality.",
          hints: [
            "What criteria define a 'straightforward' case vs. one that needs human review?",
            "How do you ensure the AI's pass decisions are auditable for regulatory purposes?",
          ],
          model_answer: "Build a risk-scoring workflow: AI extracts document fields → checks against compliance rules → scores risk (low/medium/high) → auto-approves low-risk cases with audit log → routes medium/high to human review queue. The 85% of straightforward cases process in minutes; humans focus exclusively on edge cases. Maintain a full decision audit trail for every application.",
        },
      ],
    },
    expert: {
      concept: {
        headline: "Architect Resilient AI Process Automation at Scale",
        emoji: "🔄",
        core_idea: "AI workflow design involves task decomposition, human-in-the-loop checkpoint placement, output validation logic, and failure mode handling within orchestration layers. The goal is deterministic business outcomes from probabilistic AI components.",
        why_it_matters: "The key tension here is that LLMs introduce stochastic behavior into workflows designed for deterministic operation. Production-grade AI workflows must be architected to contain variance, not assume it away.",
        key_insight: "Workflow reliability is determined by its weakest validation gate — every LLM step that lacks output schema enforcement and fallback routing is a latent production incident.",
        analogy: "Like circuit breaker patterns in distributed systems — individual components can fail, but the system is designed to isolate failures, fallback gracefully, and recover without cascading breakdown.",
        pillars: [
          "Task Decomposition & Routing: Separating high-variance AI steps from deterministic logic, with explicit routing rules for exception cases",
          "Schema Enforcement: Structured output validation (JSON schema, Pydantic models) at every LLM step boundary to prevent downstream failure propagation",
          "Observability & Retry Architecture: Step-level logging, latency SLAs, idempotent retry logic, and dead-letter queues for unrecoverable failures",
        ],
      },
      examples: [
        {
          title: "LangGraph Agentic Document Pipeline",
          context: "Enterprise / Insurance",
          situation: "An insurance company's claims processing workflow required extracting structured data from unstructured documents (PDFs, photos, handwritten notes) and routing to appropriate adjusters — with high error cost if data extraction failed silently.",
          action: "The PM architected a LangGraph workflow with explicit state management: extraction → schema validation → confidence scoring → human-review routing for low-confidence extractions → adjuster queue assignment. Each node had independent error handling and retry logic.",
          outcome: "Straight-through processing (zero human touch) reached 73% of claims with 99.1% accuracy on extracted fields, with all exceptions correctly routed to human review rather than silently propagated as errors.",
        },
        {
          title: "Real-Time Personalisation Engine",
          context: "E-commerce / Recommendation",
          situation: "An e-commerce platform needed a real-time workflow generating personalised product descriptions for each user session — with a 200ms latency SLA that a standard LLM call could not reliably meet.",
          action: "The PM designed a two-tier workflow: a low-latency cache layer serving pre-generated descriptions for common user segments, and an async LLM pipeline enriching the cache during off-peak hours — with deterministic fallback to template descriptions when cache miss occurred.",
          outcome: "P99 latency for personalised content hit 140ms (under SLA), with LLM-generated content serving 91% of sessions and a 19% lift in click-through rate versus generic descriptions.",
        },
        {
          title: "Multi-Step Contract Analysis Orchestration",
          context: "LegalTech / Enterprise",
          situation: "A contract management platform needed to orchestrate parallel extraction tasks (parties, obligations, dates, risk clauses) across 50+ page documents while maintaining sub-60-second processing time and providing structured confidence scores per section.",
          action: "The PM designed a fan-out/fan-in orchestration pattern: parallel extraction agents per section type, each with section-specific prompts and validation schemas, merged by a coordinator agent that computed cross-section consistency scores and flagged contradictions for review.",
          outcome: "Processing time dropped from 8 minutes (sequential) to 52 seconds (parallel), extraction accuracy reached 94.7% on held-out test set, and confidence scoring correctly identified low-accuracy sections for human review with 89% precision.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Silent Failure Propagation",
          scenario: "Your production AI workflow processes 10,000 customer records daily: extract → enrich → score → update CRM. Last quarter, a prompt regression caused the enrichment step to silently return empty strings for company size — corrupting downstream ICP scores for 3 weeks before discovery. The data quality issue affected sales targeting for an entire quarter.",
          challenge: "How do you re-architect the workflow to prevent silent failure propagation and detect schema regression within one processing cycle?",
          hints: [
            "Define explicit schema contracts at every step boundary with automated validation",
            "Implement statistical monitoring on output distributions to detect drift before it becomes a data quality incident",
          ],
          model_answer: "Implement schema enforcement via Pydantic models at each step boundary — any output that fails validation is routed to a dead-letter queue rather than propagated. Add output distribution monitoring (e.g., null rate, value distribution per field) with alerting thresholds that trigger within the first processing batch of any regression. Implement integration tests with golden-set records that run on every prompt change before production promotion.",
        },
        {
          id: "cs2",
          title: "Latency SLA Under Load",
          scenario: "Your AI-powered customer onboarding workflow must complete within 30 seconds (SLA) to avoid drop-off. At 100 concurrent users it runs in 12 seconds. At 1,000 concurrent users (peak hours), P95 latency hits 67 seconds due to LLM API rate limiting and sequential step execution. You cannot increase API tier without a 3-month procurement cycle.",
          challenge: "How do you re-architect the workflow to meet the 30-second SLA at 1,000 concurrent users within your current API constraints?",
          hints: [
            "Identify which workflow steps are independent and can be parallelised within the same request",
            "Consider what can be pre-computed or cached to reduce per-request LLM calls",
          ],
          model_answer: "Parallelise all independent steps within each request (document extraction, identity verification, risk scoring) to reduce sequential LLM calls from N to 1 round-trip per dependency chain. Pre-compute common workflow branches during off-peak hours and cache results. Implement request queuing with priority tiers so SLA-critical onboarding requests preempt lower-priority batch work. Target: reduce per-user LLM calls from 4 sequential to 2 parallel calls, projecting P95 at ~24 seconds under peak load.",
        },
      ],
    },
  },

  "ai-limitations": {
    naive: {
      concept: {
        headline: "AI Is Smart — But Not Perfect!",
        emoji: "⚠️",
        core_idea: "AI is super smart at some things but has real blind spots. It can make stuff up, get confused by tricky questions, and doesn't actually 'understand' things the way people do — it just predicts what sounds right.",
        why_it_matters: "Knowing what AI can't do is just as important as knowing what it can do. It helps you catch mistakes before they cause problems and know when to double-check AI's work.",
        key_insight: "AI is very confident even when it's wrong — which means you always need to be the last check before anything important.",
        analogy: "Imagine a student who memorised every book in a library 📚 but never actually lived life. They can sound very knowledgeable, but ask them something they haven't read about and they'll make up a very convincing-sounding answer!",
        pillars: [
          "Hallucination: AI sometimes invents facts that sound real but aren't — always verify important claims",
          "Knowledge Cutoff: AI only knows things up to a certain date and doesn't know what happened recently",
          "Context Limits: AI can only read a limited amount of text at once — very long documents may get 'forgotten'",
        ],
      },
      examples: [
        {
          title: "The Made-Up Citation",
          context: "Education",
          situation: "A university student asked AI to find academic papers on a topic for a research assignment.",
          action: "The AI confidently provided five paper titles, author names, and journal details — none of which actually existed.",
          outcome: "The student submitted the assignment with fake citations and was marked for academic dishonesty. The lesson: always verify AI-generated references in real databases.",
        },
        {
          title: "The Outdated Advice",
          context: "Finance / Everyday Life",
          situation: "Someone asked an AI chatbot for the current interest rate to decide whether to refinance their mortgage.",
          action: "The AI gave a confident answer based on rates from two years ago — before several rate rises had occurred.",
          outcome: "The person almost made a major financial decision based on stale data. Always check AI's information against current sources for time-sensitive topics.",
        },
        {
          title: "The Missing Context",
          context: "Customer Service",
          situation: "A company deployed an AI assistant to handle customer queries, but didn't give it access to their actual product database.",
          action: "When customers asked about specific order numbers or account details, the AI improvised answers based on what it 'thought' was likely.",
          outcome: "Dozens of customers received wrong order status information. The fix: AI needs access to real, live data to answer specific factual questions reliably.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "The Overconfident Doctor Bot",
          scenario: "A health app uses AI to answer general health questions. A user asks: 'My doctor prescribed me a specific medication. Is 500mg the right dose for my condition?' The AI answers confidently with a specific dose recommendation — but the dose it suggests is different from what the doctor prescribed.",
          challenge: "What safeguards should this health app have in place to prevent this kind of harm?",
          hints: [
            "Think about what kinds of questions AI should refuse to answer vs. answer with a disclaimer",
            "What should the app always tell users before they read any AI health response?",
          ],
          model_answer: "The app should add a hard guardrail: AI never gives specific dosage recommendations and always defers to the user's doctor. Every health response should include a clear disclaimer: 'This is general information only — always follow your healthcare provider's advice.' High-risk topics (medications, diagnoses, emergencies) should trigger an immediate 'contact a professional' response.",
        },
        {
          id: "cs2",
          title: "The News That Wasn't",
          scenario: "You manage a company newsletter that uses AI to summarise industry news. This week, the AI confidently included a 'recent acquisition' of a major competitor in the newsletter. You're about to send it to 10,000 subscribers when a colleague asks where that story came from.",
          challenge: "What should your editorial process look like to prevent AI-generated misinformation reaching your subscribers?",
          hints: [
            "What's the minimum verification step for every AI-generated 'fact' in a newsletter?",
            "Should AI write the summary first, or should a human find the source first?",
          ],
          model_answer: "Establish a source-first policy: humans curate verified news sources, then AI summarises confirmed articles. AI should never generate original 'news' claims — only summarise verified sources provided to it. Add a pre-send checklist: every fact in the newsletter must link to a real, dated external source. One person owns final verification before every send.",
        },
      ],
    },
    learner: {
      concept: {
        headline: "Know Where AI Breaks Before It Breaks Your Product",
        emoji: "⚠️",
        core_idea: "AI limitations include hallucination (confident false outputs), knowledge cutoffs (training data end dates), context length constraints (token limits), and the fundamental inability to take real-world actions without external tooling. Each creates distinct failure modes in production.",
        why_it_matters: "In practice, products fail not because AI is bad, but because PMs build assuming AI is reliable where it isn't. Understanding limitations is how you design the guardrails that make the difference between a trustworthy product and a liability.",
        key_insight: "Every AI limitation is a product design problem — the job of the PM is to architect around it, not hope users won't encounter it.",
        analogy: "Like building on an API with known rate limits and error codes — you don't blame the API when it returns a 429; you design your system to handle it gracefully.",
        pillars: [
          "Hallucination: Stochastic generation produces plausible-but-false outputs — requires grounding, retrieval, or explicit uncertainty signalling",
          "Knowledge Cutoff & Staleness: Models have a training data end date — dynamic information requires live retrieval, not generation",
          "Context Window Limits: Long documents and conversations exceed token budgets — requires chunking, summarisation, or retrieval strategies",
        ],
      },
      examples: [
        {
          title: "Bing Chat's Confident Errors",
          context: "Search / Consumer AI",
          situation: "At launch, Bing Chat was generating confident, plausible-sounding answers to factual questions that contained subtle errors — users were citing them without verification because the confident tone implied certainty.",
          action: "Microsoft added explicit uncertainty language ('I'm not sure, but...'), citations linking to sources, and refused to answer certain high-risk categories (legal, medical) without strong disclaimers.",
          outcome: "User trust improved as the system became more transparent about uncertainty — setting a design precedent that confident-sounding AI output requires source attribution to be trustworthy.",
        },
        {
          title: "Harvey AI's Document Grounding",
          context: "LegalTech / Enterprise",
          situation: "Legal AI tools faced a fundamental trust problem: lawyers needed to cite specific clauses in real documents, but LLMs generating text from memory would occasionally produce plausible but non-existent clause language.",
          action: "Harvey built a retrieval-augmented architecture where the model could only cite text that existed verbatim in the uploaded document corpus — generation was constrained to summarisation and analysis, not creation of legal text.",
          outcome: "This architectural choice made the product usable in actual legal workflows — lawyers could trust citations because the system was architecturally incapable of inventing them.",
        },
        {
          title: "ChatGPT Plugins for Live Data",
          context: "Consumer AI / Platform",
          situation: "ChatGPT's knowledge cutoff meant users asking about current stock prices, today's weather, or recent news events received stale or hallucinated answers — a fundamental limitation for practical use cases.",
          action: "OpenAI launched the plugin architecture, allowing ChatGPT to call live APIs (Wolfram Alpha, Kayak, real-time weather) to retrieve current data rather than generating it from training memory.",
          outcome: "Plugins demonstrated the correct architectural response to knowledge cutoff limitations — retrieve live, don't generate stale — and established the tool-use pattern that became central to agentic AI systems.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "The Confident Wrong Answer",
          scenario: "Your AI-powered legal research tool is used by paralegals to find relevant case law. During QA, you discover the model occasionally generates plausible-sounding but non-existent case citations — with the same formatting and confidence level as real ones. Users cannot tell the difference by looking at the output.",
          challenge: "How do you redesign the product to make hallucinated citations architecturally impossible rather than just unlikely?",
          hints: [
            "What system change removes the model's ability to generate citations that aren't in a verified source?",
            "How do you communicate to users which citations have been verified vs. generated?",
          ],
          model_answer: "Shift from generation to retrieval: the model only selects and quotes from a verified, indexed case law database — it never generates citations from memory. Every citation in output links to its source record. Add a verification badge UI element: citations with database matches are marked 'verified'; any response without retrievable sources is flagged for human review. This makes hallucinated citations a system failure (detectable) rather than a silent error.",
        },
        {
          id: "cs2",
          title: "The Stale Competitive Intel Bot",
          scenario: "Your sales team uses an AI assistant to research competitors before calls. The assistant was trained 14 months ago. Sales reps have started trusting its competitive analysis without verification — last month, three reps pitched against a product feature the competitor had discontinued 8 months ago, damaging credibility on calls.",
          challenge: "How do you fix the knowledge staleness problem without retraining the model (which takes 3 months and $200K)?",
          hints: [
            "What data source could the AI be given access to that provides current information?",
            "How do you communicate to users that some information may be outdated?",
          ],
          model_answer: "Implement RAG (Retrieval-Augmented Generation) with a live competitive intelligence data source: competitor website scrapers, press release feeds, product changelog pages. The model reasons over retrieved current content rather than training memory. Add a 'last updated' timestamp to every competitive fact. Display a staleness warning for any claim the system cannot verify from retrieved content dated within the last 30 days.",
        },
      ],
    },
    expert: {
      concept: {
        headline: "Engineering Around Fundamental LLM Failure Modes",
        emoji: "⚠️",
        core_idea: "Core LLM limitations include: stochastic output instability under distribution shift, catastrophic forgetting in fine-tuned models, insufficient calibration of uncertainty (overconfidence), context window architectural constraints, and brittleness to adversarial or out-of-distribution inputs.",
        why_it_matters: "The key tension here is that business stakeholders demand reliability guarantees from systems with inherently probabilistic behaviour. The PM's role is to architect and communicate the boundary between what can be guaranteed and what must be monitored.",
        key_insight: "Model limitations are not bugs to be fixed by the next model release — they are architectural properties to be designed around. Teams that wait for 'the model to get better' ship nothing.",
        analogy: "Like CAP theorem for distributed systems — you cannot simultaneously guarantee consistency, availability, and partition tolerance. LLMs present an analogous trilemma: you cannot simultaneously maximise accuracy, generality, and latency without explicit trade-off decisions.",
        pillars: [
          "Calibration Gap: LLMs produce poorly calibrated confidence — output certainty does not correlate with factual accuracy, requiring external verification systems for high-stakes applications",
          "Context Window Architecture: Finite token budgets create information truncation risks — production systems require chunking strategies, retrieval augmentation, and context prioritisation logic",
          "Distribution Sensitivity: LLMs degrade predictably under input distribution shift — prompt brittleness, fine-tune overfitting, and adversarial inputs require systematic red-teaming and monitoring",
        ],
      },
      examples: [
        {
          title: "Factuality vs. Fluency Trade-off in Medical AI",
          context: "HealthTech / Clinical Decision Support",
          situation: "A clinical AI startup discovered that the most fluent, readable model outputs had the highest hallucination rates — a direct inverse correlation between output quality as rated by non-clinician users and factual accuracy as rated by clinicians.",
          action: "The PM reframed the evaluation strategy: replaced user satisfaction scores with clinical accuracy as the primary success metric, accepted lower fluency scores in exchange for grounded outputs, and implemented mandatory citation requirements for all clinical claims.",
          outcome: "Factual accuracy improved from 72% to 94% with verified retrieval grounding, enabling the product to move into regulated clinical trial contexts — a market the higher-fluency but less accurate version could never enter.",
        },
        {
          title: "Red-Teaming the Boundary Cases",
          context: "Enterprise AI / Safety",
          situation: "Anthropic's deployment of Claude in enterprise contexts revealed that the same model exhibited significantly different refusal behaviors across different prompt phrasings of functionally identical requests — creating inconsistent user experiences and unpredictable compliance postures.",
          action: "Systematic red-teaming programs were developed to map boundary conditions, identify inconsistent refusal patterns, and build constitutional AI approaches that produce more consistent behavior across input variations.",
          outcome: "Red-teaming is now a standard pre-deployment requirement — establishing the principle that identifying failure modes before users do is a product responsibility, not an optional research activity.",
        },
        {
          title: "Fine-Tune Catastrophic Forgetting Management",
          context: "AI Platform / Domain Adaptation",
          situation: "A coding assistant startup fine-tuned a base LLM on proprietary internal code to improve relevance — but discovered the fine-tuned model had significantly degraded general reasoning capabilities required for code explanation tasks.",
          action: "The team implemented LoRA (Low-Rank Adaptation) fine-tuning to preserve base model weights while adding domain-specific adaptation layers, and built an evaluation suite covering both domain-specific performance and general capability benchmarks before any fine-tune promotion.",
          outcome: "Domain-specific task accuracy improved 31% while general reasoning degradation dropped from 18% to 2%, demonstrating that fine-tuning strategy selection is as important as fine-tuning data selection.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Calibration Architecture for High-Stakes Decisions",
          scenario: "Your AI credit underwriting tool makes loan approval recommendations at a fintech. Analysis shows the model's stated confidence (output probability) correlates poorly with actual accuracy (Brier score of 0.31 vs. ideal 0.0). High-confidence wrong answers occur 12% of the time — creating regulatory risk as confidence scores are being used directly in compliance documentation.",
          challenge: "How do you redesign the system so that stated confidence is actually calibrated, and how do you communicate model uncertainty to downstream decision-makers appropriately?",
          hints: [
            "Consider post-hoc calibration techniques (Platt scaling, temperature scaling) applied to model output probabilities",
            "Design a UI that communicates uncertainty ranges rather than point-estimate confidence scores",
          ],
          model_answer: "Apply temperature scaling calibration to the model's output logits using a held-out calibration set, targeting Brier score below 0.12. Replace point-estimate confidence scores in UI and documentation with calibrated confidence intervals. Implement mandatory human review for any decision where the calibrated confidence interval crosses the approval threshold boundary. Train compliance documentation to reference calibrated intervals rather than raw model outputs, with an explanation of what calibration means for regulatory reviewers.",
        },
        {
          id: "cs2",
          title: "Adversarial Input Boundary Management",
          scenario: "Your enterprise AI assistant deployed to a legal firm has been manipulated twice in production: once via prompt injection in a pasted client document that overwrote the system prompt, and once via multi-turn conversation that gradually shifted the model's persona outside its intended behavior boundaries. Both incidents resulted in the model providing advice outside its authorised scope.",
          challenge: "How do you architect a defensive system that prevents prompt injection and persona drift without destroying the flexibility that makes the assistant valuable?",
          hints: [
            "Consider architectural separation between trusted (system) and untrusted (user/document) content in the context window",
            "Design monitoring that detects behavioral drift from the intended persona across conversation turns",
          ],
          model_answer: "Implement three-layer defense: (1) Architectural — use separate context sections for system vs. user vs. document content with explicit XML-style delimiters and a meta-instruction that the model should treat document content as data, never as instructions. (2) Runtime — add an output classifier that checks every response against a defined behavioral specification, rejecting or flagging responses that fall outside authorised scope. (3) Monitoring — track topic distribution, refusal rate, and scope adherence metrics per conversation, alerting when any session deviates more than 2σ from baseline behavior distributions.",
        },
      ],
    },
  },

  "llm-understanding": {
    naive: {
      concept: {
        headline: "How Does AI Actually Think? Let's Find Out!",
        emoji: "🤖",
        core_idea: "LLMs (Large Language Models) are giant autocomplete machines trained on billions of pages of text. They predict what word comes next, over and over — and that turns out to be weirdly powerful for doing all sorts of tasks.",
        why_it_matters: "Understanding even a little about how AI works helps you use it better and trust it more appropriately. You'll know why it's great at some things and struggles with others.",
        key_insight: "AI doesn't 'know' things the way you do — it learned patterns from text, so it's brilliant at language but doesn't experience the world.",
        analogy: "Imagine reading every book, blog post, and website ever written — then getting very good at guessing what comes next in any sentence. That's basically what an LLM does! 📖✨",
        pillars: [
          "Training: The AI learned by reading enormous amounts of text and learning patterns from it",
          "Prediction: When you talk to AI, it predicts the best next word based on everything it learned",
          "Emergence: As AI gets bigger and reads more, it starts doing surprising new things it wasn't explicitly taught",
        ],
      },
      examples: [
        {
          title: "The Autocomplete Superpower",
          context: "Technology / Everyday Life",
          situation: "People were confused about why AI seemed to 'understand' questions — after all, it's just predicting words, right?",
          action: "Researchers showed that a model trained only to predict the next word naturally developed abilities like translation, summarisation, and even basic reasoning — without being explicitly taught any of those skills.",
          outcome: "This revealed the surprising power of scale: train a model to predict text at large enough scale, and complex capabilities emerge spontaneously. This is why LLMs can do so many things.",
        },
        {
          title: "GPT Going from Small to Big",
          context: "AI Research / OpenAI",
          situation: "OpenAI's first GPT model (2018) was interesting but limited — it could write text but struggled with multi-step tasks.",
          action: "By dramatically increasing the number of 'parameters' (the model's internal settings) and training data through GPT-2, GPT-3, and GPT-4, OpenAI discovered new capabilities emerged at each scale jump.",
          outcome: "GPT-4 can pass law exams, write functional code, and reason through complex problems — capabilities that GPT-1 couldn't do at all, demonstrating that scale unlocks qualitatively new abilities.",
        },
        {
          title: "Why ChatGPT Is Friendly",
          context: "Consumer AI / OpenAI",
          situation: "Early AI models trained only to predict text were not very helpful and could produce harmful content — they were good at predicting text, not at being useful assistants.",
          action: "OpenAI used a technique called RLHF (Reinforcement Learning from Human Feedback) — human trainers rated thousands of responses for helpfulness, and the AI learned to produce responses humans preferred.",
          outcome: "ChatGPT became a more helpful, more conversational, and safer assistant than its base model alone — showing that how you train the model after the initial training matters enormously.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Choosing the Right Size AI",
          scenario: "You're building a mobile app that suggests what to have for dinner based on what's in the user's fridge. You could use a very powerful, expensive AI (like GPT-4) or a smaller, cheaper one. The powerful one is slower and costs 50× more to run.",
          challenge: "Which model should you choose and why? What questions would help you decide?",
          hints: [
            "How complicated is the task really? Does dinner suggestion need the most powerful AI in the world?",
            "Think about speed and cost when millions of people use the app",
          ],
          model_answer: "Use the smaller, cheaper model. Suggesting dinner from a list of ingredients is a relatively simple task that small models handle very well. Speed and cost matter enormously for a consumer app used millions of times. Save the powerful model for complex tasks that actually need it — like generating a full recipe with nutritional analysis.",
        },
        {
          id: "cs2",
          title: "Why Did the AI Change?",
          scenario: "Your company has been using an AI writing tool for six months and employees love it. Then the company updates the AI to a newer version. Suddenly, some employees complain that it writes differently — it's more formal, less creative. Nothing changed in how they use it, but the output feels different.",
          challenge: "What likely happened, and how would you handle this change management situation?",
          hints: [
            "Think about what could have changed between model versions",
            "How do you help employees who have built a workflow around the old style?",
          ],
          model_answer: "The new model version was likely trained differently or fine-tuned with different feedback data, shifting its default style. Communicate the change proactively and explain why (improved accuracy, safety). Provide employees with example prompts that guide the new model toward their preferred style. If style consistency is critical, consider allowing teams to specify their preferred tone in every prompt rather than relying on model defaults.",
        },
      ],
    },
    learner: {
      concept: {
        headline: "What LLMs Are — and Aren't — Under the Hood",
        emoji: "🤖",
        core_idea: "LLMs are transformer-based neural networks trained via next-token prediction on massive text corpora. Their capabilities emerge from scale — billions of parameters trained on trillions of tokens produce qualitatively different abilities than smaller models trained the same way.",
        why_it_matters: "In practice, understanding LLM architecture helps PMs make better decisions about model selection, fine-tuning, context management, and capability expectations — avoiding both underestimation and misplaced trust.",
        key_insight: "LLMs are statistical models of language, not databases of facts — which is why they excel at reasoning and generation but require retrieval augmentation for reliable factual recall.",
        analogy: "Like a very sophisticated approximation engine — it learned the shape of human knowledge from text, so it can generalize and reason, but it doesn't store facts with database-style reliability.",
        pillars: [
          "Transformer Architecture: Self-attention mechanisms allow the model to consider all tokens in context simultaneously — the core reason LLMs handle long-range dependencies in text",
          "Emergent Capabilities: New abilities (code generation, reasoning, translation) appear at scale thresholds — not trained explicitly but emerge from the general next-token prediction objective",
          "RLHF Alignment: Reinforcement Learning from Human Feedback shifts base model behavior toward human-preferred outputs — the mechanism behind the difference between base models and chat models",
        ],
      },
      examples: [
        {
          title: "GPT-4's Bar Exam Performance",
          context: "AI Research / OpenAI",
          situation: "Researchers wanted to understand whether LLM capabilities represented genuine reasoning or sophisticated pattern matching — and whether scale produced qualitative capability jumps.",
          action: "OpenAI tested GPT-4 on standardised professional exams (bar exam, LSAT, SAT). GPT-3.5 scored in the bottom 10% on the bar exam; GPT-4 scored in the top 10%.",
          outcome: "The dramatic jump demonstrated that scaling produces discontinuous capability improvements — a key reason model selection decisions matter enormously for AI products.",
        },
        {
          title: "Claude's Constitutional AI",
          context: "AI Safety / Anthropic",
          situation: "Anthropic needed a scalable approach to aligning LLM behavior with human values that didn't require rating every single model response with human feedback.",
          action: "They developed Constitutional AI — the model learns to critique and revise its own outputs according to a written set of principles, reducing reliance on human feedback volume while improving consistency.",
          outcome: "Constitutional AI enabled more consistent and explainable model alignment at scale — Anthropic published the approach, influencing alignment research across the industry.",
        },
        {
          title: "Llama's Open-Source Impact",
          context: "AI Research / Meta",
          situation: "Most capable LLMs were proprietary, creating barriers to academic research, fine-tuning for domain applications, and deployment in environments where data privacy prevented API use.",
          action: "Meta released the Llama series of models as open weights, enabling researchers and companies to fine-tune, audit, and deploy LLMs on their own infrastructure.",
          outcome: "Llama spawned an ecosystem of hundreds of fine-tuned variants and domain-specific models — demonstrating that open weights dramatically accelerate applied AI development and reduce the cost of entry for AI products.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Base Model vs. Fine-Tuned vs. RAG",
          scenario: "You're a PM at a healthcare company building an AI assistant for nurses. You have three options: (A) Use a general-purpose LLM via API as-is. (B) Fine-tune a general LLM on your clinical documentation. (C) Use a general LLM with RAG (Retrieval-Augmented Generation) over your clinical database. Budget is limited — you can only do one. Patient safety is the primary constraint.",
          challenge: "Which approach do you recommend and why? What are the key trade-offs you considered?",
          hints: [
            "Think about where each approach is most likely to fail and what the consequence of failure is",
            "Consider data privacy, ongoing maintenance cost, and how frequently the clinical information changes",
          ],
          model_answer: "Recommend RAG (option C) for this context: it grounds responses in verified, current clinical documentation (reducing hallucination risk on clinical facts), keeps sensitive data on-premises, and doesn't require expensive fine-tuning retraining as protocols update. Fine-tuning is the better choice when you need to change how the model reasons, not just what it knows. For patient safety contexts, grounding in verified source material is the priority over general capability improvement.",
        },
        {
          id: "cs2",
          title: "Model Selection for a New Product",
          scenario: "You're launching an AI feature that generates personalised workout plans. Users describe their fitness goals, current fitness level, and available equipment. The feature runs 50,000 times per day. GPT-4 produces noticeably better plans but costs $0.03 per request. A smaller model costs $0.001 per request and produces good-but-not-great plans.",
          challenge: "How do you make the model selection decision? What additional information would change your recommendation?",
          hints: [
            "Calculate the daily and monthly cost difference at 50,000 requests per day",
            "Think about whether the quality difference is perceptible and meaningful to users in this context",
          ],
          model_answer: "At 50,000 daily requests: GPT-4 costs ~$1,500/day ($45K/month); the smaller model costs ~$50/day ($1.5K/month) — a $43.5K monthly difference. Run an A/B test to quantify whether users can detect and care about the quality difference in workout plans. If the quality gap doesn't drive measurably different retention or satisfaction, choose the smaller model and invest savings in other product improvements. Reserve the premium model evaluation for tasks where quality difference is demonstrably meaningful to users.",
        },
      ],
    },
    expert: {
      concept: {
        headline: "Transformer Architecture, Scaling Laws, and Alignment Trade-offs",
        emoji: "🤖",
        core_idea: "LLMs exhibit emergent capabilities at scale, with performance on reasoning tasks following power-law scaling with compute, data, and parameters. RLHF and DPO alignment techniques modify base model behavior toward human preferences while introducing alignment tax trade-offs between capability and safety.",
        why_it_matters: "The key tension here is between capability maximization (larger, more capable models) and deployment practicality (cost, latency, controllability). Production AI PMs must make principled decisions across this trade-off surface without access to the full research context the model builders have.",
        key_insight: "Scaling laws predict capability improvements, but they don't predict alignment quality — a more capable model is not automatically a better-behaved or more deployable model.",
        analogy: "Like semiconductor scaling following Moore's Law — predictable capability improvements along known dimensions, but with qualitatively new failure modes emerging at each scale threshold that require engineering solutions unavailable at previous scales.",
        pillars: [
          "Scaling Laws: Chinchilla-optimal scaling (equal compute allocated to parameters and training tokens) predicts performance, but emergent capabilities appear discontinuously at scale thresholds",
          "Alignment Methods: RLHF, DPO, and Constitutional AI each present different trade-offs between alignment quality, capability preservation, and training cost — with none fully solving the specification problem",
          "Inference Economics: KV cache management, quantization, speculative decoding, and mixture-of-experts architectures determine the cost-quality frontier for production LLM deployment",
        ],
      },
      examples: [
        {
          title: "Chinchilla Scaling and the Model Size Rethink",
          context: "AI Research / DeepMind",
          situation: "Prior to Chinchilla (2022), the field had focused on maximizing parameter count under fixed compute budgets — GPT-3's 175B parameters was the paradigm. DeepMind's research suggested these models were significantly undertrained relative to their parameter count.",
          action: "The Chinchilla paper demonstrated that for a given compute budget, models trained with fewer parameters on more tokens consistently outperformed larger models trained on less data — shifting the field's intuitions about compute-optimal training.",
          outcome: "Subsequent model families (Llama, Mistral) adopted Chinchilla-optimal training ratios, achieving comparable or superior performance at significantly lower parameter counts — directly affecting the cost and deployment feasibility of production AI products.",
        },
        {
          title: "DPO vs. RLHF in Production Alignment",
          context: "AI Research / Applied ML",
          situation: "RLHF (Reinforcement Learning from Human Feedback) requires a separate reward model and complex PPO training loop — expensive, unstable, and requiring significant ML infrastructure to run reliably.",
          action: "Direct Preference Optimization (DPO) was developed as a simplified alternative that achieves comparable alignment from preference data without requiring a separate reward model — treating the language model itself as an implicit reward model.",
          outcome: "DPO adoption grew rapidly for fine-tuning aligned models in production contexts, reducing alignment compute cost by 40–60% and enabling organizations without large RL infrastructure to align domain-specific models effectively.",
        },
        {
          title: "Mixture-of-Experts Inference Economics",
          context: "AI Infrastructure / Efficiency",
          situation: "Scaling dense transformer models to frontier capability levels produces inference costs that are economically unviable for high-frequency production use cases — a single forward pass activates all parameters regardless of query complexity.",
          action: "Mixture-of-Experts (MoE) architectures route each token through a learned subset of expert layers — achieving frontier-level capability with a fraction of the active parameters per inference, as demonstrated by Mixtral and Google's Gemini series.",
          outcome: "MoE architectures shifted the cost-quality frontier for production LLM deployment, enabling capability levels previously only achievable at prohibitive inference cost to become economically viable for high-volume product applications.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Make vs. Buy vs. Fine-Tune Decision",
          scenario: "Your enterprise software company is building an AI feature for contract review. You have three paths: (A) API access to frontier model — $0.015/1K tokens, state-of-the-art capability, no data residency guarantee. (B) Fine-tune Llama-3-70B on your proprietary contract corpus — $120K upfront, self-hosted, full data control. (C) Distill a task-specific model from teacher model outputs — $40K upfront, highly optimized for this task, on-prem. Your customers are Fortune 500 legal departments with strict data residency requirements.",
          challenge: "How do you structure the make-vs-buy-vs-fine-tune decision framework for this context, and what is your recommendation?",
          hints: [
            "Data residency requirements from legal customers likely eliminate option A regardless of capability",
            "Compare total cost of ownership (TCO) over 3 years including retraining cadence and infrastructure costs",
          ],
          model_answer: "Data residency requirements for legal enterprise customers eliminate option A. Between B and C: fine-tuning (B) provides more general capability and easier iteration, while distillation (C) optimizes specifically for contract review at lower cost. Recommend starting with option B (fine-tuned Llama-3-70B): contracts are long-context, nuanced documents where task-specific reasoning matters and general capability has high option value. Plan a distillation path (C) once fine-tuned model behavior is stable and the task distribution is fully characterized — using the fine-tuned model as the teacher. 3-year TCO for B (~$180K including retraining) vs. continued API cost at scale typically favors B at 500K+ monthly requests.",
        },
        {
          id: "cs2",
          title: "Alignment Tax Quantification",
          scenario: "Your coding assistant product uses an aligned (RLHF-trained) model. Analysis shows the aligned model refuses 3.4% of legitimate coding requests due to overcautious safety responses, while the base model completes them with 0.1% refusal rate. The 3.4% refusal rate generates disproportionate negative reviews (30% of 1-star reviews cite false refusals). You are considering deploying a version of the model with reduced safety fine-tuning to decrease refusal rate.",
          challenge: "How do you reason through the alignment tax trade-off, and what is your recommendation?",
          hints: [
            "Quantify the business cost of the 3.4% refusal rate vs. the risk of harmful outputs from reduced alignment",
            "Consider whether the refusal rate problem is better solved by model selection or prompt-level intervention",
          ],
          model_answer: "Do not reduce safety fine-tuning — the liability asymmetry is too severe for a company-level decision. Instead: (1) Analyse the 3.4% false refusals to identify if they cluster around specific request patterns — many can be resolved with prompt-level system instructions that contextualise the coding domain. (2) Request a 'developer mode' system prompt from the model provider, if available, which adjusts refusal calibration for professional developer contexts. (3) If using an open model, consider fine-tuning specifically on false-refusal cases using DPO to teach the model to distinguish legitimate coding requests from harmful ones — a targeted alignment fix rather than a broad safety reduction.",
        },
      ],
    },
  },
};

// ─── WELCOME ──────────────────────────────────────────────────────────────────
const Welcome = memo(function Welcome({ totalSkills, visited }) {
  const modes = [
    { icon: "🌱", name: "Naive", desc: "Zero jargon. Fun analogies. Emoji-rich. Safe for beginners encountering a concept for the first time." },
    { icon: "📚", name: "Learner", desc: "Practical and grounded. Real company examples. Terms explained inline. Ready to apply." },
    { icon: "🎓", name: "Expert", desc: "Precise and peer-level. Trade-offs, architecture decisions, evaluation frameworks. No hand-holding." },
  ];
  return (
    <div className="aa-welcome">
      <span className="aa-welcome-icon">🚀</span>
      <h1>AI Achiever</h1>
      <p className="aa-welcome-sub">
        A self-paced learning hub for AI Product Management. Pick a skill from the sidebar, choose your level, and dive in.
      </p>
      <div className="aa-welcome-modes">
        {modes.map((m, i) => (
          <div className="aa-welcome-mode-card" key={m.name} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="aa-welcome-mode-icon">{m.icon}</span>
            <div className="aa-welcome-mode-name">{m.icon} {m.name}</div>
            <p className="aa-welcome-mode-desc">{m.desc}</p>
          </div>
        ))}
      </div>
      <div className="aa-welcome-stats">
        <div className="aa-stat"><span className="aa-stat-num">{totalSkills}</span><span className="aa-stat-label">Skills</span></div>
        <div className="aa-stat"><span className="aa-stat-num">3</span><span className="aa-stat-label">Modes</span></div>
        <div className="aa-stat"><span className="aa-stat-num">{visited.size}</span><span className="aa-stat-label">Explored</span></div>
      </div>
    </div>
  );
});

// ─── CONCEPT SECTION ──────────────────────────────────────────────────────────
const ConceptSection = memo(function ConceptSection({ data }) {
  const { headline, emoji, core_idea, why_it_matters, key_insight, analogy, pillars } = data;
  return (
    <div className="aa-concept">
      <div className="aa-hero-card">
        <span className="aa-hero-emoji">{emoji}</span>
        <h2 className="aa-hero-headline">{headline}</h2>
      </div>

      <div className="aa-cards-row">
        <div className="aa-card" style={{ animationDelay: "0.08s" }}>
          <div className="aa-card-label">Core Idea</div>
          <p className="aa-card-text">{core_idea}</p>
        </div>
        <div className="aa-card" style={{ animationDelay: "0.16s" }}>
          <div className="aa-card-label">Why It Matters</div>
          <p className="aa-card-text">{why_it_matters}</p>
        </div>
      </div>

      <div className="aa-key-insight" style={{ animationDelay: "0.24s" }}>
        <p>"{key_insight}"</p>
      </div>

      <div className="aa-cards-row">
        <div className="aa-card" style={{ animationDelay: "0.32s" }}>
          <div className="aa-card-label">Analogy</div>
          <p className="aa-card-text">{analogy}</p>
        </div>
        <div className="aa-pillars-card" style={{ animationDelay: "0.40s" }}>
          <div className="aa-pillars-label">Three Pillars</div>
          <ul className="aa-pillars-list">
            {pillars.map((p, i) => (
              <li key={i}><span className="aa-pillar-dot" />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

// ─── EXAMPLES SECTION ─────────────────────────────────────────────────────────
const ExamplesSection = memo(function ExamplesSection({ data }) {
  return (
    <div className="aa-examples">
      {data.map((ex, i) => (
        <div className="aa-example-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="aa-example-header">
            <h3 className="aa-example-title">{ex.title}</h3>
            <span className="aa-context-badge">{ex.context}</span>
          </div>
          <div className="aa-flow">
            <div className="aa-flow-step">
              <span className="aa-flow-label">Situation</span>
              <p className="aa-flow-text">{ex.situation}</p>
            </div>
            <div className="aa-flow-step">
              <span className="aa-flow-label">Action</span>
              <p className="aa-flow-text">{ex.action}</p>
            </div>
            <div className="aa-flow-step">
              <span className="aa-flow-label">Outcome</span>
              <p className="aa-flow-text">{ex.outcome}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

// ─── EXERCISE SECTION ─────────────────────────────────────────────────────────
const ExerciseSection = memo(function ExerciseSection({ data, inputs, setInputs, revealed, setRevealed }) {
  return (
    <div className="aa-exercise">
      {data.map((cs, i) => (
        <div className="aa-case-card" key={cs.id} style={{ animationDelay: `${i * 0.12}s` }}>
          <div className="aa-case-title">{cs.title}</div>
          <p className="aa-case-scenario">{cs.scenario}</p>
          <p className="aa-case-challenge">{cs.challenge}</p>
          <div className="aa-hints">
            {cs.hints.map((h, j) => (
              <span className="aa-hint-chip" key={j}>💡 {h}</span>
            ))}
          </div>
          <textarea
            className="aa-textarea"
            placeholder="Write your answer here…"
            value={inputs[cs.id] || ""}
            onChange={(e) => setInputs(prev => ({ ...prev, [cs.id]: e.target.value }))}
            disabled={revealed[cs.id]}
          />
          <button
            className="aa-submit-btn"
            disabled={revealed[cs.id]}
            onClick={() => setRevealed(prev => ({ ...prev, [cs.id]: true }))}
          >
            {revealed[cs.id] ? "Answer Revealed ✓" : "Submit & See Model Answer"}
          </button>
          {revealed[cs.id] && (
            <div className="aa-model-answer">
              <div className="aa-model-answer-label">Model Answer</div>
              <p className="aa-model-answer-text">{cs.model_answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

// ─── SKILL VIEW ───────────────────────────────────────────────────────────────
const SkillView = memo(function SkillView({ skill, cat, mode, setMode, section, setSection, inputs, setInputs, revealed, setRevealed }) {
  const data = SKILLS_DATA[skill.id];
  const modeData = data ? data[mode] : null;

  const modes = [
    { id: "naive",   label: "🌱 Naive" },
    { id: "learner", label: "📚 Learner" },
    { id: "expert",  label: "🎓 Expert" },
  ];
  const tabs = [
    { id: "concept",  label: "💡 Concept" },
    { id: "examples", label: "🌍 Examples" },
    { id: "exercise", label: "🏋️ Exercise" },
  ];

  const changeMode = (m) => {
    setMode(m);
    setSection("concept");
    setInputs({});
    setRevealed({});
  };

  if (!modeData) {
    return (
      <div className="aa-skill-view">
        <div className="aa-skill-header">
          <span className="aa-skill-cat-badge" style={{ background: cat.color }}>{cat.name}</span>
          <h2 className="aa-skill-name">{skill.name}</h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: 15 }}>Content for this skill is coming soon. More modules are being authored.</p>
      </div>
    );
  }

  return (
    <div className="aa-skill-view">
      <div className="aa-skill-header">
        <span className="aa-skill-cat-badge" style={{ background: cat.color }}>{cat.name}</span>
        <h2 className="aa-skill-name">{skill.name}</h2>
      </div>

      <div className="aa-modes">
        {modes.map((m) => (
          <button
            key={m.id}
            className={`aa-mode-btn${mode === m.id ? " active" : ""}`}
            onClick={() => changeMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="aa-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`aa-tab${section === t.id ? " active" : ""}`}
            onClick={() => setSection(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div key={`${skill.id}-${mode}-${section}`}>
        {section === "concept"  && <ConceptSection  data={modeData.concept} />}
        {section === "examples" && <ExamplesSection data={modeData.examples} />}
        {section === "exercise" && (
          <ExerciseSection
            data={modeData.case_studies}
            inputs={inputs}
            setInputs={setInputs}
            revealed={revealed}
            setRevealed={setRevealed}
          />
        )}
      </div>
    </div>
  );
});

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const AIAchiever = memo(function AIAchiever() {
  const [selected,  setSelected]  = useState(null);
  const [mode,      setMode]      = useState("naive");
  const [section,   setSection]   = useState("concept");
  const [expanded,  setExpanded]  = useState("ai-literacy");
  const [inputs,    setInputs]    = useState({});
  const [revealed,  setRevealed]  = useState({});
  const [visited,   setVisited]   = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("aa-visited") || "[]")); }
    catch { return new Set(); }
  });

  const totalSkills = SKILL_TREE.reduce((n, c) => n + c.skills.length, 0);

  const selectSkill = (skill, cat) => {
    setSelected({ skill, cat });
    setSection("concept");
    setMode("naive");
    setInputs({});
    setRevealed({});
    setVisited(prev => {
      const next = new Set([...prev, skill.id]);
      try { localStorage.setItem("aa-visited", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleCat = (catId) => setExpanded(prev => prev === catId ? null : catId);

  return (
    <main className="aa-page">
      {/* SIDEBAR */}
      <aside className="aa-sidebar">
        <div className="aa-sidebar-head">
          <div className="aa-sidebar-title">Skill Navigator</div>
          <div className="aa-progress-wrap">
            <div className="aa-progress-fill" style={{ width: `${(visited.size / totalSkills) * 100}%` }} />
          </div>
          <div className="aa-progress-label">{visited.size} / {totalSkills} skills explored</div>
        </div>

        {SKILL_TREE.map((cat) => (
          <div className="aa-cat" key={cat.id}>
            <button className="aa-cat-btn" onClick={() => toggleCat(cat.id)}>
              <span className="aa-cat-bar" style={{ background: cat.color }} />
              <span className="aa-cat-icon">{cat.icon}</span>
              <span className="aa-cat-name">{cat.name}</span>
              <span className={`aa-cat-chevron${expanded === cat.id ? " open" : ""}`}>▶</span>
            </button>
            {expanded === cat.id && (
              <div className="aa-skills-list">
                {cat.skills.map((skill) => (
                  <button
                    key={skill.id}
                    className={`aa-skill-btn${selected?.skill.id === skill.id ? " active" : ""}`}
                    onClick={() => selectSkill(skill, cat)}
                  >
                    {visited.has(skill.id) && (
                      <span className="aa-skill-dot" style={{ background: cat.color }} />
                    )}
                    {skill.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <div className="aa-main">
        {!selected ? (
          <Welcome totalSkills={totalSkills} visited={visited} />
        ) : (
          <SkillView
            skill={selected.skill}
            cat={selected.cat}
            mode={mode}
            setMode={setMode}
            section={section}
            setSection={setSection}
            inputs={inputs}
            setInputs={setInputs}
            revealed={revealed}
            setRevealed={setRevealed}
          />
        )}
      </div>
    </main>
  );
});

AIAchiever.displayName = "AIAchiever";
export default AIAchiever;
