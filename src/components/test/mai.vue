<template>
    <div class="mai" @success="successHandle">
        
        <div class="inf">
            
            <router-view/>
        </div>
        
    </div>
</template>

<script>
/**
 * import Vue from 'vue'
import component from 'vue-class-component'

@component
export default class mai extends Vue{

}
 */
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
.mai{
    background-color:antiquewhite; 
    height: 500PX;
    .inf{
        width: calc(100% - 100px);
        height: 400PX;
        padding: 50px;
    }
}
</style>
