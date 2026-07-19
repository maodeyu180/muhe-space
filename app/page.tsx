import Image from "next/image";
import { ScrollSpyNav } from "./ScrollSpyNav";

const skillGroups = [
  {
    label: "AI & Platform",
    skills: ["ComfyUI", "Model APIs", "Task Orchestration", "AIGC Workflow"],
  },
  {
    label: "Backend",
    skills: ["Java", "Spring Cloud", "Python", "FastAPI", "MySQL", "Redis"],
  },
  {
    label: "Product & Client",
    skills: ["Vue 3", "TypeScript", "Flutter", "Android", "Payment"],
  },
];

const journey = [
  {
    period: "2021 — NOW",
    company: "北京海誉动想科技",
    role: "AI 平台 · 全栈研发",
    copy: "从云流化与跨端产品，走到 AIGC 平台、模型服务、支付计费与多机房任务链路。",
  },
  {
    period: "2019 — 2021",
    company: "北京视博云科技",
    role: "云流化 · SDK 研发",
    copy: "打磨 Android SDK、音视频解码、虚拟控制与 IPTV 云游戏的稳定交付能力。",
  },
  {
    period: "2015 — 2019",
    company: "北京易百送网络科技",
    role: "Android · 移动端研发",
    copy: "从业务模块到应用架构，完成直播、即时通讯、支付、地图等复杂移动端产品。",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <ScrollSpyNav />

      <section className="hero section-shell" id="home">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR GOOD IDEAS
          </p>
          <h1>
            你好，
            <br />
            我是<span>于木禾</span>。
          </h1>
          <p className="hero-role">AI 全栈开发者 / 产品构建者</p>
          <p className="hero-intro">
            我把模型能力、服务端架构与产品体验连成一条真正可用的链路。
            从 Android 到 AI，持续把复杂技术做成简单、稳定的产品。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              看看我做的产品 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/maodeyu180/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
          <div className="hero-proof" aria-label="核心数据">
            <div>
              <strong>10+</strong>
              <span>年研发经验</span>
            </div>
            <div>
              <strong>10w+</strong>
              <span>日活平台经验</span>
            </div>
            <div>
              <strong>3000+</strong>
              <span>个人产品用户</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="一只挥手的橘白猫咪插画">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="cat-sun" aria-hidden="true" />
          <div className="cat-card">
            <Image
              className="hero-cat"
              src="/cats/hello.png"
              width={720}
              height={720}
              priority
              unoptimized
              alt="一只举起爪子打招呼的橘白猫"
            />
          </div>
          <div className="float-chip chip-code">
            <span aria-hidden="true">⌁</span>
            <div>
              <strong>Code</strong>
              <small>Java · Python</small>
            </div>
          </div>
          <div className="float-chip chip-ai">
            <span aria-hidden="true">✦</span>
            <div>
              <strong>Build</strong>
              <small>AI · Product</small>
            </div>
          </div>
          <p className="cat-caption">我的灵感搭档，也负责监督代码。</p>
        </div>

        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="section-kicker">01 / ABOUT ME</p>
          <h2>
            不只接入模型，
            <br />
            更把<span>整条链路</span>跑通。
          </h2>
          <p>
            我的工作横跨服务端、前端与客户端。比起堆砌技术名词，我更关心任务能不能稳定完成、
            用户愿不愿意用，以及产品能不能长期运转。
          </p>
        </div>

        <div className="about-grid">
          <article className="bento bento-story">
            <div>
              <p className="card-label">MY PATH</p>
              <h3>从移动端出发，走进 AI 产品的深水区。</h3>
              <p>
                早期深耕 Android、SDK 与音视频；现在重点投入 AIGC 平台、模型服务、任务调度、
                支付计费与全栈产品落地。
              </p>
            </div>
            <div className="path-line" aria-label="职业路径">
              <span>Android</span>
              <i />
              <span>Cloud SDK</span>
              <i />
              <span>AI Platform</span>
              <i />
              <span>Full Stack</span>
            </div>
          </article>

          <article className="bento bento-principle">
            <p className="card-label">HOW I WORK</p>
            <blockquote>“把复杂留在系统里，把简单交给用户。”</blockquote>
            <div className="principle-tags">
              <span>可靠</span>
              <span>务实</span>
              <span>长期主义</span>
            </div>
          </article>

          <article className="bento bento-builder">
            <div>
              <p className="card-label">FULL-CYCLE BUILDER</p>
              <h3>从方案到上线，形成闭环。</h3>
            </div>
            <ol>
              <li><span>01</span>产品与技术方案</li>
              <li><span>02</span>全栈开发与联调</li>
              <li><span>03</span>部署、观测与迭代</li>
            </ol>
          </article>

          <article className="bento bento-cat">
            <Image
              src="/cats/jump.png"
              width={720}
              height={720}
              unoptimized
              alt="向前跳跃的橘白猫"
            />
            <p>保持好奇，随时起跳。</p>
          </article>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="section-kicker">02 / SELECTED WORK</p>
            <h2>
              做过的事，
              <br />
              比标签<span>更有说服力</span>。
            </h2>
          </div>
          <p>
            既参与高并发 AI 平台的核心链路，也独立把个人产品从一行代码维护到真实用户手里。
          </p>
        </div>

        <div className="project-stack">
          <article className="project project-catsapi">
            <div className="project-copy">
              <p className="project-index">PROJECT 01 · INDEPENDENT PRODUCT</p>
              <div className="project-title-row">
                <h3>喵的 AI</h3>
                <span className="live-badge"><i /> LIVE</span>
              </div>
              <p className="project-lead">
                一个人完成设计、开发、部署与长期维护的 AI 生图 / 生视频产品。
              </p>
              <div className="project-metrics">
                <div><strong>3000+</strong><span>累计用户</span></div>
                <div><strong>1000+</strong><span>每日 API 调用</span></div>
                <div><strong>35+</strong><span>图片 / 视频模型</span></div>
              </div>
              <ul className="project-tags" aria-label="项目技术栈">
                <li>FastAPI</li>
                <li>Vue 3</li>
                <li>Async Tasks</li>
                <li>Payment</li>
              </ul>
              <a
                className="project-link"
                href="https://catsapi.com"
                target="_blank"
                rel="noreferrer"
              >
                访问产品 <Arrow />
              </a>
            </div>
            <div className="project-cat-wrap">
              <span className="cat-bubble">喵，欢迎来试试！</span>
              <Image
                src="/cats/peek.png"
                width={720}
                height={720}
                unoptimized
                alt="从项目卡片旁边探出头的橘白猫"
              />
            </div>
          </article>

          <article className="project project-runninghub">
            <div className="project-copy">
              <p className="project-index">PROJECT 02 · PLATFORM ENGINEERING</p>
              <h3>RunningHub AIGC Platform</h3>
              <p className="project-lead">
                面向 AI 创作者的云端 ComfyUI 开发与运行平台，参与模型交互、任务链路、支付计费、
                模型资产与多机房部署。
              </p>
              <ul className="project-tags" aria-label="项目技术栈">
                <li>Spring Cloud</li>
                <li>ComfyUI</li>
                <li>Redis</li>
                <li>Multi-region</li>
              </ul>
            </div>
            <div className="system-card" aria-label="AI 任务链路示意">
              <div className="system-node system-user"><span>01</span>提交任务</div>
              <i className="system-line" />
              <div className="system-node system-model"><span>02</span>模型调度</div>
              <i className="system-line" />
              <div className="system-node system-result"><span>03</span>结果交付</div>
              <p>10w+ DAU · 80%—95% 任务成功率</p>
            </div>
          </article>

          <div className="project-minis">
            <article>
              <p className="project-index">CLOUD & SDK</p>
              <h3>云流化 SDK / IPTV 云游戏</h3>
              <p>音视频流化、虚拟控制、低延迟优化与多区域运营商交付。</p>
              <span className="mini-number">06<span>+</span></span>
              <small>YEARS IN MOBILE & SDK</small>
            </article>
            <article>
              <p className="project-index">CROSS-PLATFORM</p>
              <h3>从 Flutter 文旅到 UE 数字人</h3>
              <p>在移动端、跨端与实时互动场景里快速切换，解决真实交付问题。</p>
              <div className="mini-stack">
                <span>Flutter</span><span>Android</span><span>UE / C++</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="journey section-shell" id="journey">
        <div className="section-heading journey-heading">
          <p className="section-kicker">03 / JOURNEY</p>
          <h2>十年不是重复，<br />是<span>不断拓宽边界</span>。</h2>
        </div>
        <div className="journey-list">
          {journey.map((item, index) => (
            <article key={item.period}>
              <p className="journey-no">0{index + 1}</p>
              <p className="journey-period">{item.period}</p>
              <div>
                <h3>{item.company}</h3>
                <span>{item.role}</span>
              </div>
              <p className="journey-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack section-shell" id="stack">
        <div className="section-heading stack-heading">
          <div>
            <p className="section-kicker">04 / TOOLBOX</p>
            <h2>技术是工具，<br /><span>解决问题</span>才是目的。</h2>
          </div>
          <p>能深入一条链路，也能在需要时跨过边界，把服务端、前端和客户端拼成完整产品。</p>
        </div>
        <div className="skill-board">
          {skillGroups.map((group, index) => (
            <article key={group.label}>
              <p><span>0{index + 1}</span>{group.label}</p>
              <div>
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="marquee" aria-hidden="true">
          <div>
            BUILD WITH CARE <span>✦</span> SHIP WITH CONFIDENCE <span>✦</span> STAY CURIOUS <span>✦</span>
            BUILD WITH CARE <span>✦</span> SHIP WITH CONFIDENCE <span>✦</span> STAY CURIOUS <span>✦</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-kicker">05 / SAY HELLO</p>
            <h2>有个好点子？<br />我们一起把它<span>做出来</span>。</h2>
            <p>
              欢迎交流 AI 产品、全栈工程、独立开发，或者单纯聊聊猫。
            </p>
            <a className="contact-email" href="mailto:maodeyu180@gmail.com">
              maodeyu180@gmail.com <Arrow />
            </a>
            <div className="contact-links">
              <a href="https://github.com/maodeyu180/" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="https://blog.csdn.net/a940659387" target="_blank" rel="noreferrer">技术博客 <Arrow /></a>
            </div>
          </div>
          <div className="contact-cat">
            <div className="heart-orbit" aria-hidden="true" />
            <Image
              src="/cats/heart.png"
              width={720}
              height={720}
              unoptimized
              alt="抱着爱心的橘白猫"
            />
            <p>期待你的来信。</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">木禾</span>
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-sub">SPACE</span>
        </a>
        <p>于木禾 · YUMUHE · AI Full-Stack Developer</p>
        <p>© 2026 Built with curiosity & cat hair.</p>
      </footer>
    </main>
  );
}
