<template>
    <div>
        <div class="block">
            <el-table
                    :data="$store.getters.todoItems"
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
                                @click="handleEdit(scope.$index, scope.row)">

                        </el-button>
                        <el-button
                                size="mini"
                                icon="el-icon-delete"
                                @click="handleDelete(scope.$index, scope.row)">

                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
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
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row)
            },
            handleDelete(index, row) {
                console.log(index, row)
            },
            handleCheck(index, row){
                console.log('index', index)
                console.log('row', row.id)
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