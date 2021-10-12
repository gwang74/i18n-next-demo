<template>
    <div class="header" id="header">
        <div class="header-title-flex">
            <div class="header-menu">
                <el-button class="header-button">
                    {{ $t('head.homepage') }}
                </el-button>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{ $t('head.lang') }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="changeLanguage('zh-cn')">
                                {{ $t('head.chinese') }}
                            </el-dropdown-item>
                            <el-dropdown-item @click="changeLanguage('en')">
                                {{ $t('head.english') }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            flag: false
        };
    },
    methods: {
        changeLanguage(val) {
            this.$root.$i18n.locale = val;
            this.$store.commit('setLang', val);
        }
    }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/pc/comp-header.scss';
</style>
