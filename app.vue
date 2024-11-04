<template>
  <div class="container">
    <transition name="introduction">
      <div v-if="step > 1" class="introduction-text">Hej, {{ name }}</div>
    </transition>
    <transition name="introduction">
      <div v-if="step > 2" class="introduction-text">Pozivam te na svoj</div>
    </transition>
    <transition name="birthday">
      <div class="birthday-title" v-if="step > 3">30.</div>
    </transition>
    <transition name="top">
      <div class="birthday-subtitle" v-if="step > 4">Rodjendan</div>
    </transition>
    <div v-if="step > 4" class="dress-code-container">
      <transition name="left">
        <div v-if="step > 5" class="dress-text">DRESS</div>
      </transition>
      <transition name="right">
        <div v-if="step > 5" class="code-text">CODE</div>
      </transition>
    </div>
    <div v-if="step > 5" class="bw-container">
      <transition name="left">
        <div v-if="step > 6" class="bw-text">BLACK</div>
      </transition>
      <transition name="top">
        <div v-if="step > 7" class="bw-text">&</div>
      </transition>
      <transition name="right">
        <div v-if="step > 8" class="bw-text">WHITE</div>
      </transition>
    </div>
    <transition name="mask">
      <div v-if="step > 9" class="mask"></div>
    </transition>
    <div v-if="step > 8" class="half-container">
      <transition name="left">
        <div v-if="step > 10" class="left-text">KADA?</div>
      </transition>
      <transition name="right">
        <div v-if="step > 11" class="when-text">23.11.2024.<br />20h</div>
      </transition>
    </div>
    <div v-if="step > 8" class="half-container">
      <transition name="left">
        <div v-if="step > 12" class="left-text">GDE?</div>
      </transition>
      <transition name="right">
        <div v-if="step > 13" class="restaurant-text">Restoran<br />Pasha</div>
      </transition>
    </div>
    <div v-if="step > 8" class="maps-container">
      <transition name="top">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.6553318340757!2d19.847627676345073!3d45.25476207107138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b106f3ba26483%3A0xd6d58b691d047e4d!2sRestoran%20Pasha!5e0!3m2!1sen!2sus!4v1730747370090!5m2!1sen!2sus"
          width="280"
          height="160"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="maps"
          v-if="step > 14"
        ></iframe>
      </transition>
    </div>
    <div v-if="step > 8 && !accept" class="half-container">
      <transition name="left">
        <div v-if="step > 15" class="left-text">DOLAZIŠ?</div>
      </transition>
      <transition name="right">
        <button
          class="comming-button"
          v-if="step > 16"
          v-on:click="accept = true"
        >
          DOLAZIM
        </button>
      </transition>
    </div>
    <transition name="top">
      <div v-if="accept" class="half-container">
        <div style="margin-right: -15px; align-self: center" class="dress-text">
          VIDIMO
        </div>
        <div style="justify-self: start; margin-left: -10px" class="code-text">
          SE<span class="heart">♥️</span>
        </div>
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="step > 16" class="glitter"></div>
    </transition>
  </div>
</template>

<script setup>
const step = ref(0);
const accept = ref(false);
const name = ref("");

onMounted(() => {
  name.value = window.location.pathname.replace(/^\/+/, "");
  document.body.style.overflow = "hidden";
  const interval = setInterval(() => {
    step.value++;
    if (step.value > 11 && step.value <= 16) {
      window.scrollBy(0, 100);
    } else if (step.value > 16) {
      document.body.style.overflow = "scroll";
    }
  }, 1250);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: whitesmoke;
  margin: 0;
}

.container {
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 40px 20px 40px 20px;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  background: #191919;
  height: 100%;
  min-height: 100vh;
  z-index: 10;
  filter: invert(1);
  mix-blend-mode: difference;
  pointer-events: none;
}

.glitter {
  position: absolute;
  animation-play-state: running;
  backface-visibility: hidden;
  top: 0;
  z-index: -1;
  width: 100%;
  opacity: 1;
  height: 100%;
  min-height: 100vh;
  background-image: url(/public/glitter.webp);
  background-size: contain;
  background-repeat: repeat;
  left: 0;
  pointer-events: none;
  filter: invert(1);
}

.introduction-text {
  font-family: "Cookie";
  text-align: center;
  color: #191919;
  line-height: 50px;
  font-size: 60px;
}

.maps-container {
  margin-top: 40px;
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
}

.maps {
  border-radius: 50px;
  filter: invert(1);
  z-index: 30;
}

.comming-button {
  all: unset;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 24px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  border-radius: 50px;
  border: solid 1px black;
}

.birthday-title {
  font-family: "Roboto";
  font-weight: 700;
  text-align: center;
  color: #191919;
  font-size: 160px;
  margin-top: -25px;
  margin-right: -33px;
  letter-spacing: -8px;
}

.birthday-subtitle {
  font-family: "Cookie";
  color: #191919;
  text-align: center;
  font-size: 60px;
  margin-top: -40px;
  margin-left: -15px;
}

.dress-code-container {
  margin-top: 40px;
  display: grid;
  column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  align-content: center;
}

.dress-text {
  font-family: "Roboto";
  font-size: 26px;
  font-weight: 700;
  justify-self: end;
}

.code-text {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 26px;
}

.bw-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 6fr minmax(40px, 40px) 6fr;
  justify-items: center;
  align-content: center;
}

.bw-text {
  font-family: "Roboto";
  font-size: 32px;
  margin-top: 5px;
  font-weight: 700;
}

.half-container {
  display: grid;
  column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  min-height: 80px;
  margin-top: 50px;
}

.heart {
  display: inline-block;
  margin-left: 10px;
  z-index: 40;
  filter: invert(1);
}

.left-text {
  font-family: "Roboto";
  font-weight: 700;
  color: #191919;
  align-self: center;
  font-size: 32px;
}

.when-text {
  text-align: center;
  font-family: "Cookie";
  font-size: 36px;
}

.restaurant-text {
  text-align: center;
  font-family: "Cookie";
  font-size: 46px;
  line-height: 36px;
}

.introduction-enter-active,
.birthday-enter-active,
.top-enter-active,
.left-enter-active,
.right-enter-active,
.mask-enter-active {
  transition: all 1.5s ease;
}

.opacity-enter-active {
  transition: all 1.5s ease 1s;
}

.introduction-enter-from {
  opacity: 0;
  transform: translateY(-200px);
}

.birthday-enter-from {
  opacity: 0;
  transform: scale(0);
}

.top-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.left-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.right-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.opacity-enter-from {
  opacity: 0;
}

.mask-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
}
</style>
