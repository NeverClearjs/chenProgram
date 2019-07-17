<template>
  <div class="hello">
    <div class="tribe-every">
      <div class="tribe-top">
        <div class="tribe-top-top">
          <div class="tribe-top-left">
            <div><i class="iconfont">&#xe68d;</i></div>
            <div>
              <p>工大生活部落（主校区）</p>
              <p>
                <i class="iconfont">&#xe51b;</i>
                周一~周五 营业时间:17:30-22:30。
                周六~周日 营业时间：08:00-22:30。
                感谢您一路以来的支持！我们为您保证最好的服务质量。
              </p>
            </div>
          </div>
          <div class="tribe-top-right">
            <p><i class="iconfont">&#xe644;</i></p>
            <p>收藏</p>
          </div>
        </div>
      </div>
      <div class="tribe-title-list">
        <ul>
          <li
          v-for="(item,index) in tribeList"
          :key="index"
          @click='tribeListToPage(item.pageNumber,index)'
          :class="tribeIndex==''?item.tribePageActive:(tribeIndex==index?'list-active':'')"
          >
          {{item.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="choose-view">
      <Choose v-if="isPageNumber==''|| isPageNumber==1"></Choose>
      <Evaluate v-if="isPageNumber==2"></Evaluate>
      <Business v-if="isPageNumber==3"></Business>
    </div>
  </div>
</template>

<script>
import Choose from './choose.vue'
import Evaluate from './evaluate.vue'
import Business from './business.vue'
export default {
  name: 'index',
  data () {
    return {
      tribeList:[
        {
          name:'选购',
          pageNumber:'1',
          tribePageActive:'list-active'
        },
        {
          name:'评价',
          pageNumber:'2'
        },
        {
          name:'商家',
          pageNumber:'3'
        },
      ],
      tribeIndex:'',
      isPageNumber:'',
    }
  },
  components: {
    Choose,
    Evaluate,
    Business
  },
  methods: {
    tribeListToPage(param,index){
      this.isPageNumber = param
      this.tribeIndex = index
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tribe-every{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.tribe-top{
  width: 10rem;
  background: rgb(201, 200, 200);
  padding-bottom: 0.7rem;
  .tribe-top-top{
    margin: 0 auto;
    width: 94%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.3rem;
    padding-left: 0.2rem;
    padding-bottom: 0.2rem;
    border-bottom: 2px dashed #fff;
    .tribe-top-left{
      width: 7rem;
      display: flex;
      justify-content: space-between;
      div{
        &:nth-child(1){
          width: 1.2rem;
          height: 1.2rem;
          background: #fff;
          border-radius: 50%;
          line-height: 1.2rem;
          text-align: center;
          i{
            width: 0.5rem;
            height: 0.5rem;
            font-size: 0.9rem;
            color: rgb(201, 200, 200);
          }
        }
        &:nth-child(2){
          width: 5.3rem;
          p{
            &:nth-child(1){
              font-size: 0.44rem;
              color: #fff;
            }
            &:nth-child(2){
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #fff;
              font-size: 0.34rem;
              margin-top: 0.07rem;
              i{
                color: red;
                font-size: 0.34rem;
              }
            }
          }
        }
      }
    }
    .tribe-top-right{
      height: 1.2rem;
      border-left: 1px solid #fff;
        width: 1.8rem;
        text-align: center;
      p{
        &:nth-child(1){
          i{
            font-size: 0.54rem;
            font-weight: 500;
            color: #fff;
          }
        }
        &:nth-child(2){
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
}
.tribe-title-list{
  width: 10rem;
  background: #fff;
  border-bottom: 1px #ccc solid;
  ul{
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: space-around;
    li{
      width:1.3rem;
      height: 100%;
      line-height: 1.1rem;
      font-size: 0.48rem;
      text-align: center;
    }
    .list-active{
      color: #000;
      font-weight: bold;
      border-bottom: 1px solid rgb(255, 0, 0);
    }
  }
}
.choose-view{
  position: absolute;
  left: 0;
  top: 3.55rem;
  right: 0;
  bottom: 0;
}
</style>
