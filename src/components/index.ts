import Vue from 'vue'

const componentContext: any = require.context('./global', true, /\.ts$/)

componentContext.keys().forEach((component: any) => {
    const componentConfig: any = componentContext(component)
    const ctrl: Function = componentConfig.default || componentConfig
    Vue.component(ctrl.name, ctrl)
})