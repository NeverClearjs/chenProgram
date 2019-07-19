<template>
  <div>
    <div class="choose">
      <div class="choose-every">
        <div class="choose-left-list">
          <ul>
            <li @click="goToSearch"><i class="iconfont">&#xe51e;</i></li>
            <li
            v-for="(item,index) in chooseLeftList"
            :key="index"
            :class="chooseLeftListIndex==''?item.chooseActive:(chooseLeftListIndex==index?'choose-avtive':'')"
            @click="chooseListGoPage(item.chooseId,index)"
            >
            <a :href="'#'+ item.chooseId">
              {{item.name}}
            </a>
            </li>
          </ul>
        </div>
        <div class="choose-right-list">
          <ul class="choose-type">
            <li
            class="type-list"
            v-for="(item,index) in chooseLeftList"
            :key="index"
            >
              <h1 :id="item.chooseId">{{item.name}}</h1>
              <ul :class="item.foodList==''?'no-list':''">
                <li
                v-for="(itemFood,index) in item.foodList"
                :key="index"
                @click="showDetails(itemFood)"
                >
                  <img :src="itemFood.img" alt="" class="food-img"/>
                  <div class="p-list">
                    <p class="p1">{{itemFood.name}}</p>
                    <p class="describe" v-if='itemFood.descript'>{{itemFood.descript}}</p>
                    <span class="p2" v-if='itemFood.special'>{{itemFood.special}}</span>
                    <p class="p3">已售<span>{{itemFood.sold}}</span></p>
                    <p class="p4"><span>￥{{itemFood.price}}</span>/{{itemFood.unit}}</p>
                  </div>
                  <div class="food-state" v-if="itemFood.noGoods==1"><i class="iconfont">&#xe622;</i></div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="show-details" v-if='isShowDetails'>
        <div class="show-details-every">
          <div class="close-show-details" @click="closeShowDetails"><i class="iconfont">&#xe678;</i></div>
          <img :src="showDetailsInfo.bigImg" alt="" srcset="">
          <p>{{showDetailsInfo.title}}</p>
          <p>已售 {{showDetailsInfo.sold}}</p>
          <p><span>￥{{showDetailsInfo.price}}</span>/{{showDetailsInfo.unit}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'choose',
  data () {
    return {
      chooseLeftList:[
        {
          name:'解渴饮料',
          chooseId:'1',
          chooseActive:'choose-avtive',
          foodList:[
            {
              id:'1',
              name:'矿泉水下单不得超过6瓶，否则系统自动退款',
              title:'康师傅 茉莉清茶1L 大瓶',
              price:'4.89',
              unit:'瓶',
              special:'特价',
              descript: "",
              img:require('../assets/img/001.jpg'),
              bigImg:require('../assets/img/010.jpg'),
              sold:'10', //已售
              noGoods:'1'  //是否为已售空 0为否，1为是
            },
            {
              id:'1',
              name:'亚弟抱抱粮 蟹黄鲜虾',
              title:'冰露',
              price:'10',
              unit:'袋',
              special:'',
              descript: "",
              img:require('../assets/img/002.jpg'),
              bigImg:require('../assets/img/012.jpg'),
              sold:'1015',
              noGoods:'0'
            },
            {
              id:'1',
              name:'亚弟抱抱粮 蟹黄鲜虾',
              title:'冰露',
              price:'10',
              unit:'袋',
              special:'特价',
              descript: "冰糖葫芦 甜蜜上线 坚果蜜饯区",
              img:require('../assets/img/002.jpg'),
              bigImg:require('../assets/img/012.jpg'),
              sold:'104',
              noGoods:'0'
            },
            {
              id:'1',
              name:'亚弟抱抱粮 蟹黄鲜虾',
              title:'康师傅 茉莉清茶1L 大瓶',
              price:'10',
              unit:'袋',
              special:'特价',
              descript: "",
              img:require('../assets/img/001.jpg'),
              bigImg:require('../assets/img/011.jpg'),
              sold:'10',
              noGoods:'0'
            },
          ]
        },
        {
          name:'aaaddd',
          chooseId:'2',
          foodList:[]
        },
        {
          name:'酒水茶叶类',
          chooseId:'3',
          foodList:[]
        },
        {
          name:'解渴饮料',
          chooseId:'4',
          foodList:[]
        },
        {
          name:'解渴饮料',
          chooseId:'5',
          foodList:[]
        },
        {
          name:'早餐面包饼干',
          chooseId:'6',
          foodList:[]
        },
        {
          name:'ccfff',
          chooseId:'7',
          foodList:[]
        },
        {
          name:'解渴饮料',
          chooseId:'8',
          foodList:[]
        },
        {
          name:'解渴饮料',
          chooseId:'9',
          foodList:[]
        },
        {
          name:'解渴饮料',
          chooseId:'10',
          foodList:[]
        },
        {
          name:'解渴饮料',
          chooseId:'11',
          foodList:[]
        },
      ],
      chooseLeftListIndex:'',
      showDetailsInfo:{
        bigImg:'',
        sold:'',
        price:'',
        unit:'',
        title:''
      },
      isShowDetails:false
    }
  },
  methods: {
    chooseListGoPage(param,index){
      let hType = $('.choose-type li h1')[index].id
      console.log($('#'+ hType).offset().top);
      // $('.choose-right-list').animate({scrollTop:$('#'+ hType).offset().top+'px'},500)
      this.chooseLeftListIndex = index
    },
    goodsListActive(){},
    showDetails(itemFood){
      if(itemFood.noGoods==0){
        this.isShowDetails = true
        this.showDetailsInfo.bigImg=itemFood.bigImg
        this.showDetailsInfo.sold=itemFood.sold
        this.showDetailsInfo.price=itemFood.price
        this.showDetailsInfo.unit=itemFood.unit
        this.showDetailsInfo.title=itemFood.title
      }else{
        this.$toasted.show('该商品已经卖完啦!')
      }
    },
    closeShowDetails(){
      this.isShowDetails = false
    },
    goToSearch(){
      this.$router.push({
        name:'search'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.choose{
  width: 10rem;
  padding-right: 0.3rem;
  height: 100%;
  overflow: hidden;
  .choose-every{
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    .choose-left-list{
      position: absolute;
      top: -2rem;
      left: 0;
      right: 0;
      bottom: 0;
      width: 2.2rem;
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display:none
      }
      ul{
        width: 100%;
        li{
          width: 100%;
          height: 1.5rem;
          background: rgb(243, 242, 242);
          font-size: 0.38rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          a{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
          &:nth-child(1){
            i{
              font-size: 0.78rem;
            }
          }
        }
        .choose-avtive{
          border-left: 5px solid #f87a7c;
          background: #fff;
          color: #f87a7c;
        }
      }
    }
    .choose-right-list{
      position: absolute;
      top: -2rem;
      left: 2.5rem;
      right: 0;
      bottom: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display:none
      }
      ul{
        width: 7.3rem;
        .type-list{
          h1{
            width: 100%;
            height: 0.6rem;
            border-left:5px solid #f87a7c;
            padding-left: 0.2rem;
            font-size: 0.38rem;
            font-weight: bold;
            line-height: 0.6rem;
            margin-top: 0.3rem;
          }
          ul{
            width: 100%;
            li{
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding: 0.3rem 0;
              border-bottom: 1px solid rgb(233, 231, 231);
              position: relative;
              .food-img{
                width: 1.65rem;
                height: 1.65rem;
              }
              .p-list{
                width: 5.5rem;
                .p1{
                  font-size: 0.4rem;
                  font-weight: 600;
                }
                .describe{
                  font-size: 0.3rem;
                  color: #a9a9a9;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .p2{
                  display: inline-block;
                  color: #ff9027;
                  border: 1px solid #ff9027;
                  font-size: 0.34rem;
                  margin-top: 0.08rem;
                }
                .p3{
                  font-size: 0.3rem;
                  margin-top: 0.08rem;
                  color: #999;
                  height: 0.4rem;
                  span{
                    font-size: 0.3rem;
                    margin-left: 0.2rem;
                  }
                }
                .p4{
                  margin-top: 0.08rem;
                  color: #999;
                  span{
                    color: #ff9027;
                  }
                }
              }
              .food-state{
                position: absolute;
                right: 0;
                bottom: 0.2rem;
                i{
                  font-size: 1.88rem;
                }
              }
            }
          }
        }
      }
      .no-list{
        width: 7.3rem;
        height: 2.5rem;
      }
    }
  }
  .show-details{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    .show-details-every{
      width: 8.5rem;
      height: 12rem;
      background: #fff;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 0.3rem;
      .close-show-details{
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
        i{
          font-size: 0.8rem;
          color: #999
        }
      }
      img{
        width: 100%;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
      }
      p{
        margin-left: 0.4rem;
        margin-top: 0.3rem;
        &:nth-child(3){
          font-size: 0.44rem;
          color: #000000;
        }
        &:nth-child(4){
          font-size: 0.3rem;
          color: rgb(150, 148, 148);
        }
        &:nth-child(5){
          font-size: 0.34rem;
          color: #a9a9a9;
          span{
            font-size: 0.44rem;
            color: #df5458;
          }
        }
      }
    }
  }
}
</style>
