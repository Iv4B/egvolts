<template>
  <main>
    <p class="eyebrow">EG VOLTS</p>
    <h1>A fresh start.</h1>
    <p>Your next idea starts here.</p>
    <a href="https://github.com/Iv4B/egvolts">View on GitHub <span aria-hidden="true">↗</span></a>
  </main>
</template>

<style>
:root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, sans-serif; background: #101714; color: #f1f7ef; }
body { margin: 0; }
main { box-sizing: border-box; min-height: 100svh; max-width: 1100px; margin: auto; padding: clamp(32px, 8vw, 100px); display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
.eyebrow { color: #b7ee81; font-size: .8rem; letter-spacing: .22em; font-weight: 700; }
h1 { font-size: clamp(3rem, 10vw, 7rem); line-height: 1.05; letter-spacing: -.06em; margin: 24px 0; }
p { color: #b5c3b9; font-size: 1.2rem; }
a { display: inline-block; margin-top: 32px; padding: 16px 24px; background: #b7ee81; color: #101714; border-radius: 100px; font-weight: 650; text-decoration: none; }
a:hover { background: #d1ffab; }
a:focus-visible { outline: 3px solid #f1f7ef; outline-offset: 5px; }
</style>
