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
      <p class="privacy-date">Atjaunināta: 2026. gada 14. oktobrī</p>
      <h3>1. Datu pārzinis</h3>
      <p>Šī politika attiecas uz vietni egvolts.lv. Personas datu pārzinis saziņā par EGVolts pakalpojumiem ir SIA EG Volts, reģistrācijas Nr. 40203784193, juridiskā adrese: Straupes iela 10A, Valmiera, Valmieras nov., LV-4201. Jautājumus un pieprasījumus par personas datiem varat nosūtīt uz šo adresi.</p>
      <h3>2. Vietnes apmeklējums</h3>
      <p>Vietne ir statiska un tiek mitināta GitHub Pages. Tajā nav saziņas veidlapas, lietotāju kontu, analītikas vai reklāmas izsekošanas rīku. Vietnes kods neiestata sīkdatnes un nesaglabā apmeklētāja datus pārlūka lokālajā krātuvē. Galerijas un izvēlnes darbībai atsevišķa izsekošana netiek izmantota.</p>
      <p>GitHub norāda, ka, apmeklējot GitHub Pages vietnes, apmeklētāja IP adrese tiek reģistrēta un glabāta drošības nolūkos. Šo tehnisko datu apstrādi, glabāšanu un iespējamo nosūtīšanu ārpus Eiropas Ekonomikas zonas GitHub apraksta savā <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">privātuma paziņojumā</a>. SIA EG Volts nepārvalda GitHub drošības žurnālu glabāšanas termiņus.</p>
      <h3>3. Saziņa un pakalpojumu pieprasījumi</h3>
      <p>Ja sazināties ar mums, apstrādājam jūsu sniegto vārdu, kontaktinformāciju, ziņas saturu un informāciju par iecerēto darbu, ciktāl tas nepieciešams, lai atbildētu, sagatavotu piedāvājumu vai izpildītu līgumu. Lūdzu, nesūtiet pieprasījuma izskatīšanai nevajadzīgus vai sensitīvus personas datus.</p>
      <p>Apstrādes pamats ir darbības pēc jūsu pieprasījuma pirms līguma noslēgšanas vai līguma izpilde (VDAR 6. panta 1. punkta b) apakšpunkts). Citai saziņai un tiesisko interešu aizsardzībai pamats var būt mūsu leģitīmās intereses atbildēt uz jautājumiem un aizsargāt savas tiesības (f) apakšpunkts); normatīvajos aktos noteikto pienākumu izpildei — juridisks pienākums (c) apakšpunkts).</p>
      <p>Kontaktinformāciju sniedzat brīvprātīgi. Ja nesniedzat atbildei vai piedāvājuma sagatavošanai nepieciešamo informāciju, iespējams, nevarēsim izskatīt pieprasījumu. Automatizēta lēmumu pieņemšana un profilēšana netiek veikta.</p>
      <h3>4. Datu saņēmēji un glabāšana</h3>
      <p>Saziņas dati var būt pieejami pilnvarotām personām un saziņas vai IT pakalpojumu sniedzējiem, ciktāl tas nepieciešams pieprasījuma apstrādei, kā arī kompetentām iestādēm, ja to prasa likums. Šī vietne nenosūta saziņas datus ar veidlapas starpniecību; e-pasta saite atver jūsu izvēlēto e-pasta lietotni.</p>
      <p>Saziņas datus glabājam tik ilgi, cik nepieciešams jautājuma izskatīšanai un ar to saistīto saistību izpildei. Ja saziņa kļūst par līguma, grāmatvedības dokumentu vai tiesiska strīda daļu, glabāšanas ilgumu nosaka attiecīgās juridiskās prasības un nepieciešamība aizsargāt tiesiskās intereses. GitHub apstrādātajiem tehniskajiem datiem piemēro tā privātuma noteikumus.</p>
      <h3>5. Jūsu tiesības</h3>
      <p>Atbilstoši piemērojamajiem nosacījumiem jums ir tiesības pieprasīt piekļuvi saviem datiem, to labošanu, dzēšanu, apstrādes ierobežošanu un datu pārnesamību. Varat iebilst pret apstrādi, kas balstīta leģitīmajās interesēs. Ja apstrāde balstīta piekrišanā, varat to atsaukt, neietekmējot iepriekš veiktās apstrādes likumību.</p>
      <p>Pieprasījumu nosūtiet pārzinim uz iepriekš norādīto adresi. Atbilde parasti tiek sniegta viena mēneša laikā; ja nepieciešams, varam lūgt informāciju identitātes pārbaudei. Jums ir tiesības iesniegt sūdzību <a href="https://www.dvi.gov.lv/lv">Datu valsts inspekcijā</a>.</p>
      <h3>6. Izmaiņas</h3>
      <p>Ja mainās vietnes funkcijas vai datu apstrāde, šo politiku atjauninām. Ja tiks pievienota analītika, mārketinga rīki vai nebūtiskas sīkdatnes, pirms to izmantošanas izvērtēsim informēšanas un piekrišanas prasības.</p>
    </div>
  </dialog>
</template>

<style scoped>
.privacy-trigger { display: inline-flex; align-items: center; gap: 14px; margin-top: 20px; padding: 13px 18px; border: 0; border-radius: 3px; background: var(--lime); color: var(--ink); font: inherit; font-size: 14px; cursor: pointer; }
.privacy-trigger:hover, .privacy-close:hover { background: #c0d45e; }
button:focus-visible, a:focus-visible { outline: 3px solid var(--ink); outline-offset: 4px; }
.privacy-dialog { width: min(780px, calc(100% - 32px)); max-height: calc(100dvh - 32px); padding: 0; border: 0; border-radius: 3px; background: var(--paper); color: var(--ink); }
.privacy-dialog::backdrop { background: #10171ccc; }
.privacy-heading { position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 24px 32px; border-bottom: 1px solid var(--line); background: var(--paper); }
.privacy-heading h2 { font-size: 28px; margin: 0; }
.privacy-close { display: grid; place-items: center; flex-shrink: 0; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 3px; background: var(--lime); color: var(--ink); cursor: pointer; }
.privacy-close svg { width: 24px; height: 24px; }
.privacy-content { padding: 24px 32px 32px; }
.privacy-content h3 { margin: 28px 0 14px; font-size: 21px; }
.privacy-content p { font-size: 16px; }
.privacy-content .privacy-date { font-size: 14px; }
.privacy-content a { text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
@media (max-width: 600px) { .privacy-heading { padding: 16px; }.privacy-heading h2 { font-size: 24px; }.privacy-content { padding: 16px; } }
</style>
