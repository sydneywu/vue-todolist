<template>
    <div>
        <div class="block">
            <el-table
                    :data="tableData"
                    style="width: 100%">

                    <el-table-column
                            width="40"
                            label=""
                    >
                        <template slot-scope="scope">

                            <el-checkbox
                                    v-model="scope.row.isCompleted"
                                    @change="handleCheck(scope.$index, scope.row)"
                            ></el-checkbox>

                        </template>
                    </el-table-column>

                <el-table-column
                        prop="title"
                        label="Task"
                        >
                </el-table-column>

                <el-table-column
                        label=""
                        width="120"
                >
                    <template slot-scope="scope">

                        <el-button
                                size="mini"
                                icon="el-icon-edit"
                                @click="handleEdit(scope.$index, scope.row)"
                                class="primary-color"
                        ></el-button>
                        <el-button
                                size="mini"
                                icon="el-icon-delete"
                                @click="handleDelete(scope.$index, scope.row)"
                                class="primary-color"
                        ></el-button>

                    </template>
                </el-table-column>

            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'tableData'
        ],
        data(){
            return {
                inputValue: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                this.$emit('onEdit', row)
            },
            handleDelete(index, row) {
                this.$emit('onDelete', row)
            },
            handleCheck(index, row){
                console.log(row)
                this.$emit('onCheck', row)
            }
        },
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