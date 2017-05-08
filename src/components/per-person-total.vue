<template>
  <div class="per-person-total-wrapper">
    <h1 class="title">Per Person</h1>
    <div class="value">{{ perPersonTotal }}</div>
  </div>
</template>

<script>
export default {
  name: 'per-person-total',
  props: {
    perPersonTotal: String
  }
}
</script>

<style lang="scss">
.per-person-total-wrapper {
  overflow: hidden;
  position: relative;
  background-color: #633E57;
  background: linear-gradient(to top right, rgba(99,62,87,0.5), rgba(99,62,87,1));
  text-align: center;
  padding: 40px 0;

  .title {
    color: #AF9EAA;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .value {
    color: #FAFAFA;
    font-size: 100px;
  }
}
</style>
