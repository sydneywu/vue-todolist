<template>
    <div>
        <div class="block">
            <span class="input-label">{{label}}</span>
            <el-input
                    :placeholder="inputPlaceholder"
                    v-model="inputValue"
                    class="input"
            />
            <el-button @click="$emit('onClick', inputValue)"> {{btnText}} </el-button>

        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'label',
            'inputPlaceholder',
            'btnText'
        ],
        data(){
            return {
                inputValue: ''
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