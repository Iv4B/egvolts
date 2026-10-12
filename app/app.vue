<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL
const projects = [
  { number: '01', type: 'RESIDENTIAL', title: 'A brighter home.', text: 'A sample apartment renovation: thoughtful lighting, new wiring, and a tidy distribution board.', detail: 'Full installation · Apartment', className: 'home' },
  { number: '02', type: 'COMMERCIAL', title: 'Ready for business.', text: 'An illustrative workspace fit-out with practical power points and lighting designed around the working day.', detail: 'Lighting & power · Workspace', className: 'work' },
  { number: '03', type: 'MAINTENANCE', title: 'Back to reliable.', text: 'A sample maintenance project covering fault finding, component replacement, and installation checks.', detail: 'Inspection & service · Property', className: 'service' },
]
const skills = [
  { title: 'Electrical installations', text: 'Wiring, sockets, switches, and distribution boards — planned as one complete system.' },
  { title: 'Lighting solutions', text: 'Comfortable everyday lighting, accent lighting, and efficient LED upgrades.' },
  { title: 'Fault finding & repairs', text: 'A methodical approach to understanding problems and restoring dependable operation.' },
  { title: 'Care & maintenance', text: 'Routine checks and practical upkeep to help installations work as intended.' },
]
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="#" aria-label="EGVolts home"><img :src="`${baseURL}egvolts-logo.svg`" alt="EGVolts" width="180" height="100"></a>
    <nav aria-label="Main navigation">
      <a href="#about">About me</a><a href="#projects">Past projects</a><a href="#skills">Skills</a>
      <a class="nav-contact" href="#contact">Let’s talk <span aria-hidden="true"><ArrowIcon /></span></a>
    </nav>
  </header>

  <main id="main">
    <section class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" /> ELECTRICAL INSTALLATION & SERVICE</p>
        <h1 id="hero-title">Good work.<br>Great connections<span class="lime">.</span></h1>
        <p class="hero-description">Thoughtful electrical work for the spaces you live and work in. From the first wire to the final detail.</p>
        <div class="hero-actions"><a class="button" href="#projects">Explore my work <span aria-hidden="true"><ArrowIcon /></span></a><a class="text-link" href="#contact">Get in touch <span aria-hidden="true">→</span></a></div>
        <p class="hero-caption">ELEKTROINSTALĀCIJA UN APKALPOŠANA</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-grid" />
        <svg class="circuit" viewBox="0 0 500 550" fill="none"><path d="M0 120H110V220H200M500 410H400V320H300M80 550V420H165M425 0V115H335" stroke="currentColor" stroke-width="2"/><circle cx="110" cy="120" r="5"/><circle cx="400" cy="410" r="5"/><circle cx="165" cy="420" r="5"/><circle cx="335" cy="115" r="5"/></svg>
        <img class="hero-symbol" :src="`${baseURL}egvolts-mark.svg`" alt="" width="340" height="180">
        <span class="art-label">PRECISION IN EVERY CONNECTION</span><span class="art-coordinate">EG / 01</span>
        <div class="art-note"><span class="note-icon"><ArrowIcon /></span><div>Built with care.<small>Connected with purpose.</small></div></div>
      </div>
    </section>

    <div class="service-strip"><div class="container"><span>INSTALLATION</span><span class="strip-bolt" aria-hidden="true">ϟ</span><span>LIGHTING</span><span class="strip-bolt" aria-hidden="true">ϟ</span><span>MAINTENANCE</span><span class="strip-bolt" aria-hidden="true">ϟ</span><span>REPAIRS</span></div></div>

    <section id="about" class="about container section" aria-labelledby="about-title">
      <div class="section-label"><span>01 / ABOUT ME</span><span class="label-line" /></div>
      <div class="about-layout"><div><p class="eyebrow">THE PERSON BEHIND THE CONNECTIONS</p><h2 id="about-title">A practical mind.<br>A personal approach.</h2></div><div class="about-copy"><p class="lead">Hello, I’m the person behind EGVolts. I believe good electrical work starts with listening — and finishes with details you can depend on.</p><p>This is sample introduction copy. Use this space to share your story, your experience, and the places you work. Tell people what matters to you and how you approach each project.</p><a class="text-link" href="#contact">Let’s discuss your project <span aria-hidden="true"><ArrowIcon /></span></a></div></div>
      <div class="principles"><span><b>01</b> Clear communication</span><span><b>02</b> Thoughtful planning</span><span><b>03</b> Care in the details</span></div>
    </section>

    <section id="projects" class="projects section" aria-labelledby="projects-title"><div class="container">
      <div class="section-label"><span>02 / PAST PROJECTS</span><span class="label-line" /></div>
      <div class="section-heading"><h2 id="projects-title">From plan to power.</h2><p>A few examples of what a project could look like.<br>Illustrative projects — ready for your real work.</p></div>
      <div class="project-grid"><article v-for="project in projects" :key="project.number" class="project">
        <div class="project-visual" :class="project.className" aria-hidden="true"><span class="project-number">{{ project.number }}</span>
          <svg v-if="project.className === 'home'" viewBox="0 0 320 230" fill="none"><path d="M45 190V90L160 28L275 90V190H45ZM90 190V115H140V190M180 115H230V155H180Z"/><path class="accent-stroke" d="M160 28V75M145 75H175L185 95H135Z"/><path d="M32 200H288"/></svg>
          <svg v-else-if="project.className === 'work'" viewBox="0 0 320 230" fill="none"><path d="M55 190V40H265V190M35 190H285M90 70H125V100H90ZM145 70H180V100H145ZM200 70H235V100H200ZM90 120H125V150H90ZM145 120H180V150H145ZM200 120H235V150H200Z"/><path class="accent-stroke" d="M145 190V170H180V190"/></svg>
          <svg v-else viewBox="0 0 320 230" fill="none"><path d="M85 40H235V190H85ZM105 60H215V100H105ZM110 125V150M140 125V150M180 125V150M210 125V150M110 165H140M180 165H210"/><path class="accent-stroke" d="M160 65L150 81H168L158 95"/></svg>
          <span class="visual-caption">EGVOLTS / PROJECT STUDY</span>
        </div><div class="project-meta"><span>{{ project.type }}</span><span aria-hidden="true"><ArrowIcon /></span></div><h3>{{ project.title }}</h3><p>{{ project.text }}</p><p class="project-detail">{{ project.detail }}</p>
      </article></div>
    </div></section>

    <section id="skills" class="skills container section" aria-labelledby="skills-title"><div class="section-label"><span>03 / SKILLS</span><span class="label-line" /></div>
      <div class="skills-layout"><div><p class="eyebrow">PRACTICAL EXPERTISE</p><h2 id="skills-title">The right skills.<br>For every detail.</h2><p class="skills-intro">From a small improvement to a complete installation, a careful approach makes all the difference.</p><span class="skills-note">Sample service descriptions</span></div><div class="skill-list"><article v-for="(skill, index) in skills" :key="skill.title"><span class="skill-index">0{{ index + 1 }}</span><div><h3>{{ skill.title }}</h3><p>{{ skill.text }}</p></div><span class="skill-plus" aria-hidden="true"><ArrowIcon /></span></article></div></div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title"><div class="container contact-layout"><div><p class="eyebrow">04 / CONTACTS</p><h2 id="contact-title">Let’s make a<br>good connection<span class="lime">.</span></h2><p>Have a project in mind? Start with a conversation.</p></div><div class="contact-details"><p class="contact-note">Sample contact details — replace before publishing.</p><a href="mailto:hello@egvolts.example"><small>EMAIL</small><span>hello@egvolts.example <b aria-hidden="true"><ArrowIcon /></b></span></a><div class="contact-location"><small>LOCATION</small><span>Your city, Latvia</span></div><p>No forms. Just a direct conversation.</p></div></div></section>
  </main>

  <footer class="container site-footer"><a href="#" aria-label="Back to top"><img :src="`${baseURL}egvolts-logo.svg`" alt="EGVolts" width="140" height="78"></a><p>Electrical installation & service</p><a class="text-link" href="#">Back to top ↑</a></footer>
</template>
