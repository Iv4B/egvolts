<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL
const menuOpen = ref(false)
const menuToggle = ref<HTMLButtonElement | null>(null)
const topLink = ref<HTMLAnchorElement | null>(null)
const showBackToTop = ref(false)
const footer = ref<HTMLElement | null>(null)
const footerOverlap = ref(0)
function updateScrollPosition() {
  showBackToTop.value = window.scrollY > 200
  footerOverlap.value = Math.max(0, window.innerHeight - (footer.value?.getBoundingClientRect().top ?? window.innerHeight))
}
onMounted(() => {
  updateScrollPosition()
  window.addEventListener('scroll', updateScrollPosition, { passive: true })
  window.addEventListener('resize', updateScrollPosition)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollPosition)
  window.removeEventListener('resize', updateScrollPosition)
})
function backToTop() {
  topLink.value?.focus({ preventScroll: true })
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}
function closeMenuWithKeyboard() {
  if (!menuOpen.value) return
  menuOpen.value = false
  menuToggle.value?.focus()
}
const skills = [
  { title: 'Elektroinstalācija', text: 'Vadi, kontaktligzdas, slēdži un sadalnes — pārdomāta un vienota sistēma.' },
  { title: 'Apgaismojuma risinājumi', text: 'Ērts ikdienas apgaismojums, akcentu gaismas un energoefektīvi LED risinājumi.' },
  { title: 'Diagnostika un remonts', text: 'Sistemātiska bojājumu diagnostika un remonts, lai atjaunotu uzticamu darbību.' },
  { title: 'Apkalpošana un apkope', text: 'Regulāras pārbaudes un apkope, lai elektroinstalācija darbotos, kā paredzēts.' },
]
</script>

<template>
  <a class="skip-link" href="#main">Pāriet uz saturu</a>
  <header class="site-header" @keydown.esc="closeMenuWithKeyboard">
    <a ref="topLink" class="brand" href="#" aria-label="EGVolts sākumlapa"><img :src="`${baseURL}egvolts-logo.svg`" alt="EGVolts" width="180" height="100"></a>
    <button ref="menuToggle" class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" :aria-label="menuOpen ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'" @click="menuOpen = !menuOpen">
      <span>{{ menuOpen ? 'Aizvērt' : 'Izvēlne' }}</span>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path v-if="menuOpen" d="m6 6 12 12M6 18 18 6" /><path v-else d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
    <nav id="main-navigation" :class="{ 'is-open': menuOpen }" aria-label="Galvenā navigācija" @click="menuOpen = false">
      <a href="#about">Par mani</a><a href="#projects">Paveiktie projekti</a><a href="#skills">Prasmes</a>
      <a class="nav-contact" href="#contact">Sazināties <span aria-hidden="true"><ArrowIcon /></span></a>
    </nav>
  </header>

  <main id="main">
    <section class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" /> ELEKTROINSTALĀCIJA UN APKALPOŠANA</p>
        <h1 id="hero-title">Kvalitatīvs darbs.<br>Uzticami savienojumi<span class="lime">.</span></h1>
        <p class="hero-description">Pārdomāti elektrodarbi jūsu mājoklim un darba telpām. No pirmā vada līdz pēdējai detaļai.</p>
        <div class="hero-actions"><a class="button" href="#projects">Apskatīt projektus <span aria-hidden="true"><ArrowIcon /></span></a><a class="text-link" href="#contact">Sazināties <span aria-hidden="true"><ArrowIcon /></span></a></div>
        <p class="hero-caption">ELEKTROINSTALĀCIJA UN APKALPOŠANA</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-grid" />
        <svg class="circuit" viewBox="0 0 500 550" fill="none"><path d="M0 120H110V220H200M500 410H400V320H300M80 550V420H165M425 0V115H335" stroke="currentColor" stroke-width="2"/><circle cx="110" cy="120" r="5"/><circle cx="400" cy="410" r="5"/><circle cx="165" cy="420" r="5"/><circle cx="335" cy="115" r="5"/></svg>
        <img class="hero-symbol" :src="`${baseURL}egvolts-mark.svg`" alt="" width="340" height="180">
        <span class="art-label">PRECIZITĀTE KATRĀ SAVIENOJUMĀ</span><span class="art-coordinate">EG / 01</span>
      </div>
    </section>

    <div class="service-strip"><div class="container"><span>UZSTĀDĪŠANA</span><span class="strip-bolt" aria-hidden="true">ϟ</span><span>APGAISMOJUMS</span><span class="strip-bolt" aria-hidden="true">ϟ</span><span>APKOPE</span><span class="strip-bolt" aria-hidden="true">ϟ</span><span>REMONTS</span></div></div>

    <section id="about" class="about container section" aria-labelledby="about-title">
      <div class="section-label"><span>01 / PAR MANI</span><span class="label-line" /></div>
      <div class="about-layout"><div><p class="eyebrow">CILVĒKS AIZ PAVEIKTĀ DARBA</p><h2 id="about-title">Praktiska domāšana.<br>Personīga pieeja.</h2></div><div class="about-copy"><p class="lead">Sveiki! Es esmu cilvēks aiz EGVolts. Manuprāt, kvalitatīvi elektrodarbi sākas ar ieklausīšanos un noslēdzas ar rūpīgi paveiktām detaļām.</p><p>Šis ir iepazīstināšanas teksta paraugs. Šeit pastāstiet par sevi, savu pieredzi un vietām, kur strādājat. Dalieties ar to, kas jums ir svarīgs un kāda ir jūsu pieeja katram projektam.</p><a class="text-link" href="#contact">Pārrunāsim jūsu projektu <span aria-hidden="true"><ArrowIcon /></span></a></div></div>
      <div class="principles"><span><b>01</b> Skaidra saziņa</span><span><b>02</b> Pārdomāta plānošana</span><span><b>03</b> Uzmanība detaļām</span></div>
    </section>

    <section id="projects" class="projects section" aria-labelledby="projects-title"><div class="container">
      <div class="section-label"><span>02 / PAVEIKTIE PROJEKTI</span><span class="label-line" /></div>
      <div class="section-heading"><h2 id="projects-title">Darbi tuvplānā.</h2><p>Elektroinstalācijas un sadalņu fotogalerija.<br>Izvēlieties attēlu, lai apskatītu to tuvāk.</p></div>
      <ProjectGallery />
    </div></section>

    <section id="skills" class="skills container section" aria-labelledby="skills-title"><div class="section-label"><span>03 / PRASMES</span><span class="label-line" /></div>
      <div class="skills-layout"><div><p class="eyebrow">PRAKTISKAS ZINĀŠANAS</p><h2 id="skills-title">Piemērotas prasmes.<br>Katrai detaļai.</h2><p class="skills-intro">No neliela uzlabojuma līdz pilnai elektroinstalācijai — rūpīga pieeja ir svarīga katrā darbā.</p><span class="skills-note">Pakalpojumu aprakstu paraugi</span></div><div class="skill-list"><article v-for="(skill, index) in skills" :key="skill.title"><span class="skill-index">0{{ index + 1 }}</span><div><h3>{{ skill.title }}</h3><p>{{ skill.text }}</p></div></article></div></div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title"><div class="container contact-layout"><div><p class="eyebrow">04 / KONTAKTI</p><h2 id="contact-title">Veidosim<br>labu sadarbību<span class="lime">.</span></h2><p>Ir iecere? Sāksim ar sarunu.</p></div><div class="contact-details"><p class="contact-note">Kontaktinformācijas paraugs — aizstājiet pirms publicēšanas.</p><a href="mailto:hello@egvolts.example"><small>E-PASTS</small><span>hello@egvolts.example <b aria-hidden="true"><ArrowIcon diagonal /></b></span></a><div class="contact-location"><small>ATRAŠANĀS VIETA</small><span>Jūsu pilsēta, Latvija</span></div><p>Bez veidlapām. Vienkārši sazinieties tieši.</p></div></div></section>
  </main>

  <footer ref="footer" class="container site-footer">
    <a class="footer-logo" href="#" aria-label="EGVolts sākumlapa"><img :src="`${baseURL}egvolts-logo.svg`" alt="EGVolts" width="240" height="134"></a>
    <div class="company-details">
      <h3>SIA EG Volts</h3>
      <p>Reģistrācijas Nr.: 40203784193</p>
      <address>Straupes iela 10A, Valmiera, Valmieras nov., LV-4201</address>
    </div>
  </footer>
  <button v-if="showBackToTop" class="back-to-top" :style="{ transform: `translateY(-${footerOverlap}px)` }" type="button" aria-label="Atgriezties augšā" title="Atgriezties augšā" @click="backToTop">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-7 7 7-7 7 7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </button>
</template>
