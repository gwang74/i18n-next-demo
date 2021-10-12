<template>
    <div id="nav">
        <el-config-provider :locale="locale">
            <el-container>
                <el-header><Head></Head></el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-config-provider>
    </div>
</template>
<script>
import Head from './components/Head.vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
export default {
    components: {
        Head
    },
    data() {
        return {
            flushTimer: 0
        };
    },
    computed: {
        locale() {
            return this.$root.$i18n.locale === 'zh-cn' ? zhCn : en;
        }
    }
};
</script>
<style lang="scss">
@import './assets/css/pc/app.scss';
</style>
