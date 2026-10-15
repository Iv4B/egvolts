<script setup lang="ts">
const dialog = ref<HTMLDialogElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
let previousOverflow = ''
function open() {
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  dialog.value?.showModal()
}
function restore() {
  document.body.style.overflow = previousOverflow
  trigger.value?.focus({ preventScroll: true })
}
function backdrop(event: MouseEvent) {
  if (event.target !== dialog.value) return
  const bounds = dialog.value.getBoundingClientRect()
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.value.close()
}
onBeforeUnmount(() => { if (dialog.value?.open) document.body.style.overflow = previousOverflow })
</script>

<template>
  <button ref="trigger" class="privacy-trigger" type="button" aria-haspopup="dialog" @click="open">Privātuma politika <ArrowIcon /></button>
  <dialog ref="dialog" class="privacy-dialog" aria-labelledby="privacy-title" @close="restore" @click="backdrop">
    <div class="privacy-heading"><h2 id="privacy-title">Privātuma politika</h2><button class="privacy-close" type="button" aria-label="Aizvērt privātuma politiku" autofocus @click="dialog?.close()"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" /></svg></button></div>
    <div class="privacy-content">
      <p class="privacy-date">Pēdējo reizi atjaunināta: 2026. gada 15. oktobrī</p>
      <h3>1. Datu pārzinis</h3>
      <p>Tīmekļa vietni egvolts.lv pārvalda SIA EG Volts, reģistrācijas Nr. 40203784193, juridiskā adrese: Straupes iela 10A, Valmiera, Valmieras nov., LV-4201.</p>
      <p>Jautājumos par personas datu apstrādi varat sazināties ar mums, rakstot uz e-pastu: <a href="mailto:info@egvolts.lv">info@egvolts.lv</a>.</p>
      <h3>2. Personas datu apstrāde</h3>
      <p>Apmeklējot mūsu tīmekļa vietni, varat iepazīties ar informāciju par EGVolts pakalpojumiem un paveiktajiem darbiem.</p>
      <p>Vietnē nav lietotāju kontu vai saziņas veidlapu. Vietnes darbību nodrošina GitHub Pages. Lai nodrošinātu vietnes darbību un drošību, GitHub var apstrādāt tehniskos datus, piemēram, IP adresi, informāciju par pārlūkprogrammu un servera pieprasījumu žurnālus.</p>
      <p>Plašāka informācija par datu apstrādi pieejama <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub privātuma paziņojumā</a>.</p>
      <h3>3. Saziņa ar mums</h3>
      <p>Ja sazināties ar mums pa e-pastu vai tālruni, mēs apstrādājam jūsu sniegto informāciju, piemēram, vārdu, kontaktinformāciju un ziņas saturu, lai atbildētu uz jautājumiem, sagatavotu piedāvājumu vai vienotos par pakalpojuma sniegšanu.</p>
      <h3>4. Personas datu glabāšana</h3>
      <p>Personas datus glabājam tikai tik ilgi, cik nepieciešams attiecīgajam mērķim, piemēram, saziņai, pakalpojuma sniegšanai vai normatīvajos aktos noteikto pienākumu izpildei. GitHub apstrādātos tehniskos datus glabā saskaņā ar saviem noteikumiem.</p>
      <h3>5. Personas datu nodošana</h3>
      <p>Personas dati var tikt nodoti pakalpojumu sniedzējiem, ja tas nepieciešams vietnes darbības nodrošināšanai vai pakalpojumu sniegšanai, kā arī valsts iestādēm normatīvajos aktos paredzētajos gadījumos.</p>
      <h3>6. Jūsu tiesības</h3>
      <p>Saskaņā ar piemērojamajiem datu aizsardzības noteikumiem jums ir tiesības:</p>
      <ul>
        <li>pieprasīt informāciju par savu personas datu apstrādi;</li>
        <li>pieprasīt neprecīzu datu labošanu;</li>
        <li>noteiktos gadījumos pieprasīt datu dzēšanu vai apstrādes ierobežošanu;</li>
        <li>iebilst pret personas datu apstrādi, ja tam ir tiesisks pamats;</li>
        <li>noteiktos gadījumos pieprasīt datu kopiju un to pārsūtīšanu;</li>
        <li>iesniegt sūdzību Datu valsts inspekcijā, ja uzskatāt, ka jūsu tiesības ir pārkāptas.</li>
      </ul>
      <p>Lai izmantotu savas tiesības, sazinieties ar mums, rakstot uz <a href="mailto:info@egvolts.lv">info@egvolts.lv</a>.</p>
      <h3>7. Privātuma politikas izmaiņas</h3>
      <p>Mēs varam atjaunināt šo privātuma politiku, ja mainās vietnes darbība vai personas datu apstrādes kārtība. Jaunākā versija būs pieejama vietnē egvolts.lv.</p>
    </div>
  </dialog>
</template>

<style scoped>
.privacy-trigger { display: inline-flex; align-items: center; gap: 14px; margin-top: 20px; padding: 13px 18px; border: 0; border-radius: 3px; background: var(--lime); color: var(--ink); font: inherit; font-size: 14px; cursor: pointer; }
.privacy-trigger:hover, .privacy-close:hover { background: #c0d45e; }
button:focus-visible, a:focus-visible { outline: 3px solid var(--ink); outline-offset: 4px; }
.privacy-dialog { width: min(780px, calc(100% - 32px)); max-height: calc(100dvh - 32px); padding: 0; border: 0; border-radius: 3px; background: var(--paper); color: var(--ink); text-align: left; }
.privacy-dialog::backdrop { background: #10171ccc; }
.privacy-heading { position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 24px 32px; border-bottom: 1px solid var(--line); background: var(--paper); }
.privacy-heading h2 { font-size: 28px; margin: 0; }
.privacy-close { display: grid; place-items: center; flex-shrink: 0; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 3px; background: var(--lime); color: var(--ink); cursor: pointer; }
.privacy-close svg { width: 24px; height: 24px; }
.privacy-content { padding: 24px 32px 32px; }
.privacy-content h3 { margin: 28px 0 14px; font-size: 21px; }
.privacy-content p, .privacy-content li { font-size: 16px; line-height: 1.7; }
.privacy-content ul { padding-left: 24px; }
.privacy-content li { margin-bottom: 8px; }
.privacy-content .privacy-date { font-size: 14px; }
.privacy-content a { text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
@media (max-width: 600px) { .privacy-heading { padding: 16px; }.privacy-heading h2 { font-size: 24px; }.privacy-content { padding: 16px; } }
</style>
