<template>
  <!-- <div class="layout-box" flex flex-items-center>
    <div class="layout-box-wrapper" flex flex-col flex-1>
      <slot />
    </div>
  </div> -->
  <div class="layout-box" >
    <div class="layout-box-wrapper" flex flex-col flex-1>
      <slot />
    </div>
  </div>
</template>
<script scoped setup></script>
<style scoped lang="scss">
.layout-box {
  // background-color: #0d2347;
  background: url('@/assets/images/bg.jpg') no-repeat center;
  background-size: cover;
  width: auto;
  min-height: 100%;
  // min-width: 1200px;
  :deep(.border-box-content) {
    padding: 0 15px;
  }
}
</style>
