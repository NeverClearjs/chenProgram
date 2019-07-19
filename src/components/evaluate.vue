<template>
  <div class="evaluate">
    <div class="no-evaluate">该商家暂未开启评论功能~</div>
  </div>
</template>

<script>
export default {
  name: 'evaluate',
  data () {
    return {

    }
  },
  components: {},
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  .no-evaluate{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
</style>
