<template>
  <div class="bus-window">
    <div class="bus-window-doling">
      <div>
        <p>{{busWin.title}}</p>
        <p>{{busWin.priceOrDes}}</p>
      </div>
      <div @click="closeThis">{{busWin.btnName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    busWin:{}
  },
  data () {
    return {
      isInfo:0
    }
  },
  components: {},
  methods: {
    closeThis(){
      this.$emit('func',this.isInfo)
    }
  },
}
</script>

<style lang="scss" scoped>
  .bus-window{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 19;
    .bus-window-doling{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 8rem;
      background: #fff;
      border-top-left-radius: 0.1rem;
      border-top-right-radius: 0.1rem;
      div{
        width: 100%;
        p{
          width: 100%;
          text-align: center;
          margin-bottom: 0.2rem;
          &:nth-child(1){
            font-size: 0.48rem;
            font-weight: bold;
          }
        }
        &:nth-child(1){
          padding-top: 0.3rem;
        }
        &:nth-child(2){
          width: 100%;
          height: 1rem;
          border-top: 1px solid #ddd;
          margin-top: 0.5rem;
          padding: 0;
          text-align: center;
          line-height: 1rem;
          font-size: 0.4rem;
          color: #f87a7c;
          font-weight: 500;
        }
      }
    }
  }

</style>
