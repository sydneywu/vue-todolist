<template>
    <div>
        <div class="block">
            <span class="select-label primary-color">{{label}}</span>

            <el-select
                    :value ="defaultFilter"
                    placeholder="Select"
                    class="select-box"
                    @change="(value)=>$emit('onChange', value)"
            >
                <el-option
                        v-for="item in filterOptions"
                        :key="item"
                        :label="item"
                        :value="item"
                ></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'label',
            'filterOptions',
            'defaultFilter',
        ]
    }
</script>

<style scoped>
    .select-label{
        margin-right: 10px;
    }
    .select-box {
        width: 150px
    }

</style>