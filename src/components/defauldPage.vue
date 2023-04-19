<template>
  <!-- <div class="hello"> -->
    <a-carousel :autoPlay="true" animation-name="card" show-arrow="never" indicator-position="outer" :style="{
      width: '100%',
      height: '350px',
    }">
      <a-carousel-item v-for="image in imgList" :style="{ width: '70%' }" :key="image">
         <img :src="image.url" :style="{
          width: '100%',
        }" />
      </a-carousel-item>
    </a-carousel>
  <!-- </div> -->
</template>
  
<script>
import axios from 'axios'
import { Message } from '@arco-design/web-vue';
import { getCurrentInstance ,ref} from 'vue'
export default {
  name: 'defauldPage',
  props: {
    msg: String
  },
  data(){
    return {
      imgList:[]
    }
  },

  methods:{
    getData() {
      console.log('666')
         this.$http({
          url: 'https://api.oioweb.cn/api/bing'
        }).then(res => {
          this.imgList = res.data.result
          console.log(this.imgList)
        })
      }
  },
  created() {
    const { proxy } = getCurrentInstance()
    this.getData()
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: black
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
  