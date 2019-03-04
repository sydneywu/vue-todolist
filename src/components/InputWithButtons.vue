import {ElInput} from 'element-ui'

<template>
    <div>
        <div class="block">
            <span class="input-label">{{label}}</span>
            <el-input
                    :placeholder="inputPlaceholder"
                    v-model="inputValue"
                    class="input"
            />
            <el-button @click="onBtnClick"> {{btnText}} </el-button>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            inputPlaceholder: String,
            btnText: String,
            initialValue: String
        },
        data(){
            return {
                inputValue: this.initialValue || "ddd"
            }
        },
        watch: {
            initialValue: function(newVal, oldVal) { // watch it
                this.inputValue = newVal
            }
        },
        methods: {
            onBtnClick(){
                this.$emit('onClick', this.inputValue);
                this.inputValue = ""
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0 20px
    }
    .input-label {
        margin-right: 20px
    }
    .input {
        width: 300px
    }
</style>