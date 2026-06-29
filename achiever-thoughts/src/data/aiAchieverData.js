/**
 * aiAchieverData.js
 * ─────────────────────────────────────────────────────────────────
 * Single source of truth for the AI Achiever learning platform.
 * Edit this file to update any text, add new skills, or extend modules.
 *
 * Structure
 * ─────────
 * WELCOME_CONFIG   → Welcome screen text, mode cards, stats label
 * SKILL_TREE       → 7 categories × N skills (id, name, color)
 * SKILLS_DATA      → 28 skills × 3 modes (concept + examples + case_studies)
 * ─────────────────────────────────────────────────────────────────
 */

// ─────────────────────────────────────────────
// WELCOME SCREEN CONFIG
// ─────────────────────────────────────────────
export const WELCOME_CONFIG = {
  title: "AI Achiever",
  tagline: "AI Product Management Workshop",
  subtitle:
    "Your interactive learning hub for building AI fluency. Pick a skill from the navigator, choose your learning depth, and start mastering the tools and thinking that define the AI era.",
  modes: [
    {
      number: "01",
      name: "Naive",
      description:
        "Zero jargon. Clear analogies. Perfect for your first encounter with any concept.",
    },
    {
      number: "02",
      name: "Learner",
      description:
        "Practical and grounded. Real company examples with context explained inline.",
    },
    {
      number: "03",
      name: "Expert",
      description:
        "Precise and peer-level. Trade-offs, frameworks, and full technical depth.",
    },
  ],
  statsLabels: {
    skills: "Total Skills",
    modes: "Learning Modes",
    explored: "Skills Explored",
  },
};

// ─────────────────────────────────────────────
// SKILL TREE  (7 modules, 28 skills total)
// ─────────────────────────────────────────────
export const SKILL_TREE = [
  {
    id: "ai-literacy",
    name: "AI Literacy",
    color: "#7c3aed",
    skills: [
      { id: "prompting",         name: "Prompting Mastery" },
      { id: "ai-workflows",      name: "AI Workflows" },
      { id: "ai-limitations",    name: "AI Limitations" },
      { id: "llm-understanding", name: "LLM Understanding" },
    ],
  },
  {
    id: "systems-thinking",
    name: "Systems Thinking",
    color: "#0369a1",
    skills: [
      { id: "apis",          name: "APIs" },
      { id: "automation",    name: "Automation" },
      { id: "orchestration", name: "Orchestration" },
      { id: "ecosystems",    name: "Ecosystems" },
    ],
  },
  {
    id: "product-business",
    name: "Product & Business",
    color: "#d97706",
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
    skills: [
      { id: "leading-self",       name: "Leading Self" },
      { id: "leading-others",     name: "Leading Others" },
      { id: "leading-innovation", name: "Leading Innovation" },
    ],
  },
  {
    id: "new-ai-roles",
    name: "New AI Roles",
    color: "#7c3aed",
    skills: [
      { id: "generative-ai-pm",  name: "Generative AI PM" },
      { id: "predictive-ai-pm",  name: "Predictive AI PM" },
      { id: "agents-pm",         name: "AI Agents PM" },
      { id: "business-engineer", name: "Business Engineer" },
      { id: "gtm-engineer",      name: "GTM Engineer" },
    ],
  },
  {
    id: "ai-tech-stack",
    name: "AI Tech Stack",
    color: "#0f766e",
    skills: [
      { id: "compute-cloud",     name: "Compute & Cloud" },
      { id: "foundation-models", name: "Foundation Models" },
      { id: "ai-frameworks",     name: "AI Frameworks" },
      { id: "data-vector",       name: "Data & Vector DBs" },
    ],
  },
];

// ─────────────────────────────────────────────
// HELPER — stub entry for modules not yet authored
// ─────────────────────────────────────────────
const stub = (skillName) => ({
  naive:   makeStubMode(skillName),
  learner: makeStubMode(skillName),
  expert:  makeStubMode(skillName),
});

function makeStubMode(name) {
  return {
    concept: {
      headline: `${name} — Coming Soon`,
      subtitle: "This skill module is currently being prepared for you.",
      core_idea: "Content for this skill is being authored. Check back soon.",
      why_it_matters: "This skill is part of the full AI PM workshop curriculum.",
      key_insight: "Great content takes care — this one is on its way.",
      analogy: "Think of this as a placeholder — the real content will be here shortly.",
      pillars: [
        "Pillar 1: Content coming soon",
        "Pillar 2: Content coming soon",
        "Pillar 3: Content coming soon",
      ],
    },
    examples: [
      { title: "Example coming soon", context: "TBD", situation: "—", action: "—", outcome: "—" },
      { title: "Example coming soon", context: "TBD", situation: "—", action: "—", outcome: "—" },
      { title: "Example coming soon", context: "TBD", situation: "—", action: "—", outcome: "—" },
    ],
    case_studies: [
      {
        id: "cs1", title: "Case study coming soon",
        scenario: "Scenario content is being authored.",
        challenge: "Challenge will appear here.",
        hints: ["Hint 1", "Hint 2"],
        model_answer: "Model answer will appear here after submission.",
      },
      {
        id: "cs2", title: "Case study coming soon",
        scenario: "Scenario content is being authored.",
        challenge: "Challenge will appear here.",
        hints: ["Hint 1", "Hint 2"],
        model_answer: "Model answer will appear here after submission.",
      },
    ],
  };
}

// ─────────────────────────────────────────────
// SKILLS DATA
// Module 1: AI Literacy  — FULLY AUTHORED
// Modules 2–7            — Stubs (author next)
// ─────────────────────────────────────────────
export const SKILLS_DATA = {

  // ════════════════════════════════════════════
  // MODULE 1: AI Literacy
  // ════════════════════════════════════════════
  "prompting": {
    naive: {
      concept: {
        headline: "Talk Better, Get Better Answers",
        subtitle: "The beginner's guide to getting what you want from AI.",
        core_idea:
          "Prompting means communicating clearly with AI. Imagine asking a friend: 'Help me.' That's confusing. But saying: 'Help me write a fun birthday invitation for kids' gives much better results. AI works the same way — better instructions create better outcomes.",
        why_it_matters:
          "You don't need coding skills to use AI effectively. Good prompting helps you save time, learn faster, create better content, and solve problems more easily.",
        key_insight:
          "AI wants to help — your clarity becomes its direction.",
        analogy:
          "Prompting AI is like ordering food. Saying 'Give me something' may give random results. Saying 'Give me a spicy veg pizza with extra cheese' gets exactly what you want.",
        pillars: [
          "Clarity: Clearly explain what you want",
          "Context: Give AI useful background information",
          "Format: Tell AI how you want the answer structured",
        ],
      },
      examples: [
        {
          title: "Homework Helper",
          context: "Education",
          situation:
            "A student typed: 'Explain science.' The answer was huge and confusing.",
          action:
            "The student changed the prompt to: 'Explain gravity to a 10-year-old using simple examples.'",
          outcome:
            "The AI gave a simple, clear explanation the student could easily understand.",
        },
        {
          title: "Travel Planner",
          context: "Lifestyle",
          situation:
            "A user asked: 'Plan a trip for me.' The AI returned generic suggestions.",
          action:
            "The user added details: 'Plan a 3-day budget-friendly Hyderabad trip for a family with kids.'",
          outcome:
            "The AI generated a detailed travel plan with places, food, and estimated costs.",
        },
        {
          title: "Professional Email",
          context: "Workplace",
          situation:
            "An employee asked AI to write an email and received a very formal message.",
          action:
            "They updated the prompt: 'Write a short friendly email requesting leave from my manager.'",
          outcome:
            "The AI generated a warm and professional email matching the workplace tone.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "The Confusing Chatbot",
          scenario:
            "A company chatbot keeps giving unclear answers to customers because its instructions are vague.",
          challenge:
            "How would you improve the chatbot responses?",
          hints: [
            "Think about what information the AI needs",
            "Think about how the ideal response should sound",
          ],
          model_answer:
            "Give the chatbot clear instructions about company details, response tone, and what to do when it doesn't know an answer. Add examples of good responses.",
        },
        {
          id: "cs2",
          title: "Better Essay Feedback",
          scenario:
            "Students say the AI essay feedback is too generic and not useful.",
          challenge:
            "How can you make the AI feedback more specific?",
          hints: [
            "Think like a teacher",
            "Tell AI exactly what to review",
          ],
          model_answer:
            "Update the prompt to ask AI to comment on clarity, grammar, evidence, and improvements separately for each paragraph.",
        },
      ],
    },

    learner: {
      concept: {
        headline: "Prompt Like a Smart Communicator",
        subtitle: "Building structured communication for reliable AI output.",
        core_idea:
          "A strong prompt is a combination of instruction, context, objective, constraints, and output format. Good prompting reduces ambiguity and improves AI reliability.",
        why_it_matters:
          "Prompting is the foundation of AI fluency. It helps professionals brainstorm, automate work, generate content, analyze data, and prototype ideas faster.",
        key_insight:
          "The quality of AI output often reflects the quality of human input.",
        analogy:
          "AI behaves like a highly intelligent intern. If your instructions are vague, results vary. Clear direction creates high-quality work.",
        pillars: [
          "Goal: Define exactly what you want",
          "Context: Give background information",
          "Tone: Specify writing or speaking style",
          "Format: Define how output should appear",
        ],
      },
      examples: [
        {
          title: "Marketing Content Generation",
          context: "Marketing",
          situation:
            "A marketing team used AI for campaigns but got inconsistent content quality.",
          action:
            "They added audience details, tone instructions, and sample outputs into prompts.",
          outcome:
            "Content became more aligned with brand voice and required less editing.",
        },
        {
          title: "Resume Optimization",
          context: "Career",
          situation:
            "A job seeker used AI to improve a resume but received generic suggestions.",
          action:
            "They specified the target role, experience level, and ATS optimization requirement.",
          outcome:
            "The AI generated a focused and professional resume tailored to the job.",
        },
        {
          title: "AI Study Assistant",
          context: "Education",
          situation:
            "A learner asked AI broad questions and became overwhelmed by long answers.",
          action:
            "The learner requested step-by-step explanations with bullet points and examples.",
          outcome:
            "The AI delivered structured learning content that was easier to understand.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Inconsistent Brand Voice",
          scenario:
            "An AI content tool generates emails with inconsistent tone across teams.",
          challenge:
            "How would you redesign prompts to maintain a consistent brand voice?",
          hints: [
            "Define brand personality clearly",
            "Provide examples of preferred writing style",
          ],
          model_answer:
            "Create reusable brand templates with tone guidelines, audience definition, forbidden phrases, and sample outputs.",
        },
        {
          id: "cs2",
          title: "Hallucinating AI Assistant",
          scenario:
            "An AI support assistant sometimes invents incorrect product details.",
          challenge:
            "How can prompting reduce hallucinations?",
          hints: [
            "Force grounding using provided data",
            "Add fallback instructions",
          ],
          model_answer:
            "Update prompts to instruct the AI to answer only using approved data sources and clearly say when information is unavailable.",
        },
      ],
    },

    expert: {
      concept: {
        headline: "Design High-Leverage AI Instructions",
        subtitle: "Engineering precise AI behavior at production scale.",
        core_idea:
          "Expert prompting involves behavioral steering, context engineering, reasoning guidance, workflow orchestration, and reusable prompt systems.",
        why_it_matters:
          "Advanced prompting powers AI products, agents, automation systems, multi-step reasoning workflows, and scalable enterprise AI platforms.",
        key_insight:
          "Prompting is becoming a new programming interface for human-AI collaboration.",
        analogy:
          "Expert prompting is similar to software architecture — structure, constraints, and system design determine performance quality at scale.",
        pillars: [
          "Context Engineering: Curate and structure information intentionally",
          "Constraint Design: Reduce ambiguity through boundaries",
          "Stepwise Reasoning: Guide AI thinking process explicitly",
          "Iterative Refinement: Improve prompts through evaluation loops",
        ],
      },
      examples: [
        {
          title: "AI Product Strategy Assistant",
          context: "AI Product Management",
          situation:
            "A PM team struggled to generate structured product roadmaps using AI.",
          action:
            "They created reusable expert prompts defining business goals, user personas, constraints, KPIs, and output structure.",
          outcome:
            "Roadmap creation became significantly faster and more consistent across teams.",
        },
        {
          title: "Multi-Step AI Research Workflow",
          context: "Research",
          situation:
            "Researchers manually analyzed multiple reports and datasets.",
          action:
            "An expert prompt workflow was designed for summarization, comparison, risk analysis, and insight generation.",
          outcome:
            "Research synthesis time reduced dramatically while maintaining quality.",
        },
        {
          title: "AI Agent Orchestration",
          context: "Automation",
          situation:
            "A company wanted AI agents to handle customer onboarding workflows.",
          action:
            "Experts designed prompts with memory rules, role delegation, validation steps, and escalation logic.",
          outcome:
            "The workflow automated onboarding while maintaining reliability and compliance.",
        },
      ],
      case_studies: [
        {
          id: "cs1",
          title: "Production Prompt Failure",
          scenario:
            "An enterprise AI workflow fails in production because prompts behave inconsistently across different user inputs.",
          challenge:
            "How do you stabilize the prompt system?",
          hints: [
            "Use evaluation datasets",
            "Test edge cases systematically",
          ],
          model_answer:
            "Create structured prompt templates, validation layers, and regression testing workflows to measure reliability before deployment.",
        },
        {
          id: "cs2",
          title: "Context Window Optimization",
          scenario:
            "A long-running AI assistant consumes too much context memory, reducing answer quality.",
          challenge:
            "How would you optimize context usage?",
          hints: [
            "Prioritize relevant information",
            "Use summarization for older interactions",
          ],
          model_answer:
            "Implement context compression, dynamic memory allocation, and retrieval-based context injection to preserve relevant information efficiently.",
        },
      ],
    },
  },

  "ai-workflows":      stub("AI Workflows"),
  "ai-limitations":    stub("AI Limitations"),
  "llm-understanding": stub("LLM Understanding"),

  // ════════════════════════════════════════════
  // MODULES 2–7: Stubs — author in subsequent releases
  // ════════════════════════════════════════════
  "apis":                   stub("APIs"),
  "automation":             stub("Automation"),
  "orchestration":          stub("Orchestration"),
  "ecosystems":             stub("Ecosystems"),
  "product-strategy":       stub("Product Strategy"),
  "customer-understanding": stub("Customer Understanding"),
  "prioritization":         stub("Prioritization"),
  "monetization":           stub("Monetization"),
  "agentic-workflows":      stub("Agentic Workflows"),
  "multi-agent":            stub("Multi-Agent Systems"),
  "evaluation-guardrails":  stub("Evaluation & Guardrails"),
  "memory-systems":         stub("Memory Systems"),
  "leading-self":           stub("Leading Self"),
  "leading-others":         stub("Leading Others"),
  "leading-innovation":     stub("Leading Innovation"),
  "generative-ai-pm":       stub("Generative AI PM"),
  "predictive-ai-pm":       stub("Predictive AI PM"),
  "agents-pm":              stub("AI Agents PM"),
  "business-engineer":      stub("Business Engineer"),
  "gtm-engineer":           stub("GTM Engineer"),
  "compute-cloud":          stub("Compute & Cloud"),
  "foundation-models":      stub("Foundation Models"),
  "ai-frameworks":          stub("AI Frameworks"),
  "data-vector":            stub("Data & Vector DBs"),
};
