<template>
  <div class="business">
    <div class="business-every b-margin">
      <div class="b-one">
        <div class="business-info">
          <div class="business-border-bottom">
            <div>
              <img src="../assets/img/003.png" alt="" srcset="">
              <p>{{businessInfo.address}}</p>
            </div>
            <img src="../assets/img/008.png" alt="" srcset="">
          </div>
        </div>
        <div class="business-info b-margin info-number">
          <div class="business-border-bottom">
            <a href="tel:businessInfo.telephone">
              <div>
                <img src="../assets/img/004.png" alt="" srcset="">
                <p>{{businessInfo.telephone}}</p>
              </div>
            </a>
            <img src="../assets/img/009.png" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="b-one">
        <div class="business-info">
          <div class="business-border-bottom" @click="showWindow('营业时间',businessInfo.businessHours,'确定')">
            <div>
              <img src="../assets/img/005.png" alt="" srcset="">
              <p>营业时间：{{businessInfo.businessHours}} </p>
            </div>
            <img src="../assets/img/008.png" alt="" srcset="">
          </div>
        </div>
        <div class="business-info b-margin">
          <div class="business-border-bottom">
            <div>
              <img src="../assets/img/003.png" alt="" srcset="">
              <p>服务区域：点此查看有效区域</p>
            </div>
            <img src="../assets/img/008.png" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="b-one">
        <div class="business-info">
          <div class="business-border-bottom" @click="showWindow('起送价',businessInfo.goPrice,'确定')">
            <div>
              <img src="../assets/img/006.png" alt="" srcset="">
              <p>起送价：{{businessInfo.goPrice}}</p>
            </div>
            <img src="../assets/img/008.png" alt="" srcset="">
          </div>
        </div>
        <div class="business-info b-margin">
          <div class="business-border-bottom" @click="showWindow('配送费',businessInfo.distributionFee,'好的')">
            <div>
              <img src="../assets/img/007.png" alt="" srcset="">
              <p>配送费：{{businessInfo.distributionFee}}</p>
            </div>
            <img src="../assets/img/008.png" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
    <BusWindow :busWin='info' v-if='isInfo==1' @func='closeBusWindow'></BusWindow>
  </div>
</template>

<script>
import BusWindow from './bus-window'
export default {
  name: 'business',
  data () {
    return {
      businessInfo:{
        address:'辽宁工程技术大学主校区',
        telephone:'18221633319',
        businessHours:'09:00:00-22:31:00',
        goPrice:'6.0元',
        distributionFee:'0.0元'
      },
      info:{
        title:'',
        priceOrDes:'',
        btnName:''
      },
      isInfo:0 ///显示弹窗
    }
  },
  components: {
    BusWindow
  },
  methods: {
    showWindow(title,priceOrDes,btnName){
      this.info.title = title
      this.info.priceOrDes = priceOrDes
      this.info.btnName = btnName
      this.isInfo = 1
    },
    closeBusWindow(data){
      this.isInfo = data
    }
  },
}
</script>

<style lang="scss" scoped>
  .business{
    height: 100%;
    background: #f5f5f5;
    .business-every{
      height: 100%;
      background: #f5f5f5;
      .business-info{
        width: 10rem;
        height: 1.3rem;
        background: #fff;
        padding-left: 0.5rem;
        .business-border-bottom{
          width: 9.5rem;
          height: 1.3rem;
          display: flex;
          justify-content: space-between;
          border-bottom: #f5f5f5 1px solid;
          div{
            display: flex;
            img{
              width: 0.5rem;
              height: 0.45rem;
              margin-top: 0.42rem;
              margin-right: 0.35rem
            }
            p{
              line-height: 1.3rem;
              font-size: 0.38rem;
              font-weight: 500;
            }
          }
          img{
            width: 0.2rem;
            height: 0.4rem;
            margin-top: 0.44rem;
            margin-right: 0.4rem;
          }
        }
      }
      .info-number{
        .business-border-bottom{
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
          div{
            img{
              width: 0.45rem;
              height: 0.5rem;
            }
          }
        }
      }
    }
    .b-one{
      .b-margin{
        margin-bottom: 0.2rem
      }
    }
  }
</style>
