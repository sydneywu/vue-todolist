<template>
    <div class="container">

        <el-dialog :visible="modalOpen" @close="onClose">
            <slot></slot>
            <span slot="footer" class="dialog-footer">
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: [
            "modalOpen",
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