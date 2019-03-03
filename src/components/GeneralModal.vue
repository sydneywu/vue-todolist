<template>
    <div class="container">

        <el-dialog :visible="modalOpen" @close="onClose">
            <slot></slot>
            <span slot="footer" class="dialog-footer">
                <el-button v-if="cancelBtn"  @click="dialogFormVisible = false">Cancel</el-button>
                <el-button v-if="confirmBtn" type="primary" @click="dialogFormVisible = false">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: [
            "modalOpen",
            "cancelBtn",
            "confirmBtn"
        ],
        data() {
            return {};
        },
        methods:{
            onClose(){
                this.$emit("onCloseModal", '')
            }
        }

    };
</script>