<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL
const photos = [
  { file: 'project-01.jpg', width: 1080, height: 1920, title: 'Sadalnes interjerā', alt: 'Divas baltas slēgtas sadalnes uz pelēkas sienas' },
  { file: 'project-02.jpg', width: 1536, height: 2048, title: 'Elektroinstalācijas izbūve', alt: 'Atvērta sadalne ar pievienotiem kabeļiem tehniskajā telpā' },
  { file: 'project-03.jpg', width: 1536, height: 2048, title: 'Sadalnes montāža', alt: 'Sienā iebūvēta sadalne ar automātslēdžiem un marķējumu' },
  { file: 'project-04.jpg', width: 1536, height: 2048, title: 'Kabeļu pieslēgumi', alt: 'Liela atvērta sadalne ar vairākām automātslēdžu rindām' },
  { file: 'project-05.jpg', width: 1080, height: 1920, title: 'Sadalne ar aizsargpaneļiem', alt: 'Balta sadalne ar uzstādītiem aizsargpaneļiem un skaitītāju' },
  { file: 'project-06.jpg', width: 1080, height: 1920, title: 'Sadalnes iekšējais izvietojums', alt: 'Atvērta sadalne ar sakārtotiem vadiem un elektroiekārtām' },
]
const active = ref(0)
const current = computed(() => photos[active.value]!)
const dialog = ref<HTMLDialogElement | null>(null)
const opener = ref<HTMLElement | null>(null)
let previousOverflow = ''
let touchStartX = 0
let touchStartY = 0
let lastSwipe = 0
function src(photo: typeof photos[number]) { return `${baseURL}projects/${photo.file}` }
function step(direction: number) { active.value = (active.value + direction + photos.length) % photos.length }
function openLightbox(event: MouseEvent) {
  if (Date.now() - lastSwipe < 400) return
  opener.value = event.currentTarget as HTMLElement
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  dialog.value?.showModal()
}
function restorePage() {
  document.body.style.overflow = previousOverflow
  opener.value?.focus({ preventScroll: true })
}
function keyboard(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault()
    step(event.key === 'ArrowLeft' ? -1 : 1)
  }
}
function touchStart(event: TouchEvent) {
  touchStartX = event.changedTouches[0]!.clientX
  touchStartY = event.changedTouches[0]!.clientY
}
function touchEnd(event: TouchEvent) {
  const dx = event.changedTouches[0]!.clientX - touchStartX
  const dy = event.changedTouches[0]!.clientY - touchStartY
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    lastSwipe = Date.now()
    step(dx < 0 ? 1 : -1)
  }
}
function backdropClick(event: MouseEvent) {
  if (event.target !== dialog.value) return
  const bounds = dialog.value.getBoundingClientRect()
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.value.close()
}
onBeforeUnmount(() => { if (dialog.value?.open) document.body.style.overflow = previousOverflow })
</script>

<template>
  <div class="photo-gallery" aria-label="Paveikto darbu fotogalerija" @keydown="keyboard">
    <div class="gallery-stage" @touchstart.passive="touchStart" @touchend.passive="touchEnd">
      <button class="gallery-image-button" type="button" :aria-label="`Atvērt attēlu: ${current.title}`" @click="openLightbox">
        <img :src="src(current)" :alt="current.alt" :width="current.width" :height="current.height" loading="lazy">
        <span class="gallery-expand">Apskatīt tuvāk <ArrowIcon /></span>
      </button>
      <button class="gallery-arrow gallery-prev" type="button" aria-label="Iepriekšējais attēls" @click="step(-1)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg></button>
      <button class="gallery-arrow gallery-next" type="button" aria-label="Nākamais attēls" @click="step(1)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg></button>
    </div>
    <div class="gallery-caption" aria-live="polite" aria-atomic="true"><h3>{{ current.title }}</h3><span>{{ active + 1 }} / {{ photos.length }}</span></div>
    <div class="gallery-thumbnails" aria-label="Izvēlēties attēlu">
      <button v-for="(photo, index) in photos" :key="photo.file" type="button" :aria-label="`Attēls ${index + 1}: ${photo.title}`" :aria-pressed="active === index" @click="active = index"><img :src="src(photo)" :alt="photo.alt" :width="photo.width" :height="photo.height" loading="lazy"></button>
    </div>
  </div>
  <dialog ref="dialog" class="gallery-lightbox" aria-label="Paveikto darbu attēlu galerija" @keydown="keyboard" @close="restorePage" @click="backdropClick">
    <div class="lightbox-toolbar"><span aria-live="polite">{{ active + 1 }} / {{ photos.length }}</span><button type="button" aria-label="Aizvērt galeriju" autofocus @click="dialog?.close()"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg></button></div>
    <div class="lightbox-stage" @touchstart.passive="touchStart" @touchend.passive="touchEnd"><img :src="src(current)" :alt="current.alt"><button class="gallery-arrow gallery-prev" type="button" aria-label="Iepriekšējais attēls" @click="step(-1)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg></button><button class="gallery-arrow gallery-next" type="button" aria-label="Nākamais attēls" @click="step(1)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg></button></div>
    <p class="lightbox-caption" aria-live="polite">{{ current.title }}</p>
  </dialog>
</template>

<style scoped>
.gallery-stage { position: relative; background: #dfe3dd; }
.gallery-image-button { display: block; width: 100%; border: 0; padding: 0; background: transparent; cursor: zoom-in; }
.gallery-image-button > img { width: 100%; height: 520px; object-fit: contain; }
.gallery-expand { position: absolute; bottom: 20px; right: 20px; display: inline-flex; align-items: center; gap: 15px; padding: 12px 16px; background: var(--lime); color: var(--ink); font-size: 14px; border-radius: 3px; }
.gallery-arrow { position: absolute; top: 50%; transform: translateY(-50%); display: grid; place-items: center; width: 48px; height: 48px; padding: 0; border: 0; border-radius: 3px; background: var(--lime); color: var(--ink); cursor: pointer; }
.gallery-prev { left: 20px; }.gallery-next { right: 20px; }
.gallery-arrow svg, .lightbox-toolbar svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.75; stroke-linecap: round; }
button:focus-visible { outline: 3px solid var(--ink); outline-offset: 4px; }
.gallery-caption { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding-block: 24px; }
.gallery-caption h3 { margin: 0; }.gallery-caption span { white-space: nowrap; font-size: 16px; }
.gallery-thumbnails { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; }
.gallery-thumbnails button { padding: 0; background: #dfe3dd; border: 3px solid transparent; cursor: pointer; }
.gallery-thumbnails button[aria-pressed=true] { border-color: var(--lime); }
.gallery-thumbnails img { width: 100%; height: 120px; object-fit: cover; }
.gallery-lightbox { width: min(1100px, calc(100% - 32px)); max-height: calc(100dvh - 32px); padding: 16px; border: 0; border-radius: 3px; background: #202b31; color: #fafbf8; }
.gallery-lightbox::backdrop { background: #10171cee; }
.lightbox-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; font-size: 16px; }
.lightbox-toolbar button { display: grid; place-items: center; width: 44px; height: 44px; border: 0; border-radius: 3px; background: var(--lime); color: var(--ink); cursor: pointer; }
.lightbox-stage { position: relative; }.lightbox-stage > img { height: calc(100dvh - 190px); width: 100%; object-fit: contain; }
.lightbox-caption { margin: 16px 0 0; text-align: center; font-size: 16px; }
.gallery-lightbox button:focus-visible { outline-color: white; }
@media (max-width: 600px) {
  .gallery-image-button > img { height: 420px; }
  .gallery-prev { left: 10px; }.gallery-next { right: 10px; }
  .gallery-thumbnails { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .gallery-thumbnails img { height: 95px; }
  .gallery-expand { right: 10px; bottom: 10px; }
  .gallery-lightbox { padding: 12px; }
}
</style>
