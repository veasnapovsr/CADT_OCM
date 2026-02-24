<template>
  <div class="frame-4-corner">
    <div class="corner top-left"></div>
    <div class="corner top-right"></div>
    <div class="corner bottom-left"></div>
    <div class="corner bottom-right"></div>
  </div>
</template>

<script setup>
// No props needed for decorative corners
</script>

<style scoped>
.frame-4-corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.corner {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 3px solid #FFD600;
  border-radius: 4px;
}
.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}
.top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}
.bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}
.bottom-right {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}
</style>
