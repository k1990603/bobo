<template>
  <a-modal :title="title + '用户'" :visible="visible" :confirmLoading="confirmLoading">
    <a-form :form="form">
      <a-form-item label="名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="名称"
          v-decorator="['user', { rules: [{required:true, message: '请输入用户ID'}] }]"
        ></a-input>
      </a-form-item>
      <a-form-item label="简称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="简称"
          v-decorator="['name', { rules: [{required:true, message: '请输入用户昵称'}] }]"
        ></a-input>
      </a-form-item>
    </a-form>
    <template slot="footer">
      <a-button type="primary" class="marginBtn" @click="addAction">{{ title }}</a-button>
      <a-button class="marginBtn" @click="cancel">取消</a-button>
    </template>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  props: {
    visible: {
      type: Boolean,
      detail: false
    },
    title: {
      type: String,
      detail: ""
    },
    confirmLoading: {
      type: Boolean,
      detail: false
    }
  },
  methods: {
    addAction() {
      this.form.validateFields((err, value) => {
        if (!err) {
          this.$emit("addAction");
        }
      });
    },
    cancel() {
      this.$emit("addCancel");
    }
  }
};
</script>  