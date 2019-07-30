<template>
    <el-row>
        <el-col :span="12" class="leftMenu">
            <el-menu default-active="2" class="el-menu-vertical-demo addS" text-color="#fff" active-text-color="#ffd04b" background-color="#5c5364">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>EL导航</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">嵌套测试</template>
                        <el-menu-item index="1-1">
                            <router-link to="/test/">Main</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <router-link to="/test/other">Other</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                       
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col class="mainContent">
            <router-view v-if="isRouterActive"></router-view>
        </el-col>
    </el-row>
</template>

<script>
/**
 * import Vue from 'vue'

import {Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class TestIndex extends Vue{
    @Watch($route(to,from))
    onChanged(){this.$router.go(0)}

}
 */
export default{
    data() {
        return {
            isRouterActive: true
        }
    },
    provide() {
        return {
            reload: this.reload
        }
    },
    methods:{
        reload() {
            this.isRouterActive = false
            this.$nextTick(() => (this.isRouterActive = true))
        }
    }
}
</script>

<style lang='less' scoped>
body{
    margin: 0;
    padding: 0;
}
.leftMenu{
    width: 300px;
    height: 500px;
    background-color: #5c5364;
    .addS{
        width: 300px;
    }
    a{
        color:#fff;
        text-decoration: none;
        &:active{
            color:#ffd04b;
        }
    }
}
//手机
@media screen and (max-width: 767px){
    
}
//平板
@media screen and (min-width: 768px){
    
}
//小屏幕pc端
@media screen and (min-width: 992px){

}
//大屏幕pc端
@media screen and (min-width: 1200px){
    
}
.mainContent{
    width: calc(100% - 300px);
    height: 500px;
}
</style>
