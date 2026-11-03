<template>
  <div class="ytvideo-wrap">
    <div class="ytvideo">
      <iframe
        src="https://www.youtube-nocookie.com/embed/RHyBE3DK73Q"
        title="Celeste Ranked ytvideo"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.ytvideo-wrap {
  padding: 0 24px 48px;
}

.ytvideo {
  max-width: 960px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
}

.ytvideo iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}
</style>
