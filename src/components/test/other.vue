<template>
    <div class="main" @success="successHandle">
        
        <div class="info">
            
            <router-view/>
        </div>
        
    </div>
</template>

<script>
export default{
    inject: ['reload'],
    methods: {
        async successHandle() {
            this.reload()
        }
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.main{
    background-color: aquamarine;
    height: 500PX; 
    .info{
        width: calc(100% - 100px);
        height: 400PX;
        padding: 50px;
    }
}
</style>
