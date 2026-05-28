import { useState, memo } from "react";
import "../styles/variables.css";
import "../styles/base.css";
import "../styles/ai-achiever.css";
import { WELCOME_CONFIG, SKILL_TREE, SKILLS_DATA } from "../data/aiAchieverData";
import greenLogo from "../assets/ATIcon-Green.png";

// ─── WELCOME ──────────────────────────────────────────────────────────────────
const Welcome = memo(function Welcome({ totalSkills, visited }) {
  return (
    <div className="aa-welcome">
      <img src={greenLogo} alt="Achiever Thoughts" className="aa-welcome-logo" />
      <h1>{WELCOME_CONFIG.title}</h1>
      <p className="aa-welcome-sub">{WELCOME_CONFIG.subtitle}</p>

      <div className="aa-welcome-modes">
        {WELCOME_CONFIG.modes.map((m, i) => (
          <div
            className="aa-welcome-mode-card"
            key={m.name}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="aa-welcome-mode-icon">{m.icon}</span>
            <div className="aa-welcome-mode-name">{m.icon} {m.name}</div>
            <p className="aa-welcome-mode-desc">{m.description}</p>
          </div>
        ))}
      </div>

      <div className="aa-welcome-stats">
        <div className="aa-stat">
          <span className="aa-stat-num">{totalSkills}</span>
          <span className="aa-stat-label">{WELCOME_CONFIG.statsLabels.skills}</span>
        </div>
        <div className="aa-stat">
          <span className="aa-stat-num">3</span>
          <span className="aa-stat-label">{WELCOME_CONFIG.statsLabels.modes}</span>
        </div>
        <div className="aa-stat">
          <span className="aa-stat-num">{visited.size}</span>
          <span className="aa-stat-label">{WELCOME_CONFIG.statsLabels.explored}</span>
        </div>
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
const MODES = [
  { id: "naive",   label: "🌱 Naive" },
  { id: "learner", label: "📚 Learner" },
  { id: "expert",  label: "🎓 Expert" },
];
const TABS = [
  { id: "concept",  label: "💡 Concept" },
  { id: "examples", label: "🌍 Examples" },
  { id: "exercise", label: "🏋️ Exercise" },
];

const SkillView = memo(function SkillView({
  skill, cat, mode, setMode, section, setSection, inputs, setInputs, revealed, setRevealed,
}) {
  const modeData = SKILLS_DATA[skill.id]?.[mode];

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
        <p style={{ color: "var(--text-muted)", fontSize: 15, padding: "24px 0" }}>
          Content for this skill is being authored. Check back soon.
        </p>
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
        {MODES.map((m) => (
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
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`aa-tab${section === t.id ? " active" : ""}`}
            onClick={() => setSection(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div key={`${skill.id}-${mode}`}>
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
    <main>
      <div className="aa-page">
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
      </div>
    </main>
  );
});

AIAchiever.displayName = "AIAchiever";
export default AIAchiever;
