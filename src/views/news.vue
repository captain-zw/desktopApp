<template>
    <p>666</p>
    <!-- <a href=""></a> -->
    <!-- <a href="https://www.toutiao.com"  id="news"></a> -->
    <!-- <iframe src="https://www.toutiao.com" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:64px;left: 240px;right:0px;bottom:100px;"></iframe> -->
</template>

<script>

export default {
    name: 'App',
    // components: {
    //     HomePage
    // }
    data(){
        return{
            musicList:[]
        }
    },
    methods:{
        getData() {
            console.log('666')
            this.$http({
                url: 'https://ml.v.api.aa1.cn/music/music-api.php?msg=稻香&type=json&n=1'
            }).then(res => {
                this.musicList = res.data.result
                console.log(this.imgList)
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
a{
    color: black;
}
p{
    color: black;
}
</style>
  