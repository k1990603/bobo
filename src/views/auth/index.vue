<template>
  <div id="main">
    <a-layout-header>
      <a-form layout="inline" :form="form">
        <a-form-item>
          <a-input placeholder="用户编号"></a-input>
        </a-form-item>
        <a-form-item class="fright">
          <a-button icon="plus" @click="addUser">新增</a-button>
        </a-form-item>
        <a-form-item class="fright">
          <a-button type="primary" icon="search">搜索</a-button>
        </a-form-item>
        <a-form-item class="fright">
          <a-button>清除条件</a-button>
        </a-form-item>
      </a-form>
    </a-layout-header>
    <a-layout-content>
      <a-table
        :columns="columns"
        :dataSource="dataTable"
        :rowKey="record => record.userId"
        :pagination="false"
        bordered
      >
        <template slot="action">
          <a-button type="primary" size="small" class="marginBtn" @click="editUser">编辑</a-button>
          <a-button type="danger" size="small" class="marginBtn">删除</a-button>
        </template>
      </a-table>
    </a-layout-content>
    <a-layout-footer>
      <a-pagination
        :pageSizeOptions="pageSizeOptions"
        :total="totalPage"
        :current="page.page"
        showSizeChanger
        showQuickJumper
        @change="paginationChange"
        @showSizeChange="onShowSizeChange"
      ></a-pagination>
    </a-layout-footer>
    <modalWin
      :visible="visible"
      :confirmLoading="false"
      :title="title"
      @addAction="addAction"
      @addCancel="addCancel"
    ></modalWin>
  </div>
</template>

<script>
import * as API from "../../api/one";
import modalWin from "./commponent/editAuth.vue";
import { setTimeout } from "timers";

export default {
  components: {
    modalWin
  },
  data() {
    return {
      form: this.$form.createForm(this),
      pageSizeOptions: ["10", "20", "50"],
      totalPage: undefined,
      page: {
        page: 1,
        size: 10
      },
      visible: false,
      confirmLoading: false,
      title: "新增",
      columns: [
        {
          title: "用户编号",
          dataIndex: "userId",
          width: "9%",
          align: "center",
          scopedSlots: { customRender: "userId" }
        },
        {
          title: "用户昵称",
          dataIndex: "userName",
          width: "9%",
          align: "center",
          scopedSlots: { customRender: "userName" }
        },
        {
          title: "手机号",
          dataIndex: "userMobile",
          width: "9%",
          align: "center",
          scopedSlots: { customRender: "userMobile" }
        },
        {
          title: "角色名称",
          dataIndex: "groupName",
          width: "9%",
          align: "center",
          scopedSlots: { customRender: "groupName" }
        },
        {
          title: "关联业务线",
          dataIndex: "businessLine",
          width: "9%",
          align: "center",
          scopedSlots: { customRender: "businessLine" }
        },
        {
          title: "服务范围",
          dataIndex: "serverRange",
          width: "9%",
          align: "center",
          scopedSlots: { customRender: "serverRange" }
        },
        {
          title: "创建时间",
          dataIndex: "createAt",
          width: "11%",
          align: "center",
          scopedSlots: { customRender: "createAt" }
        },
        {
          title: "上次修改时间",
          dataIndex: "editAt",
          width: "11%",
          align: "center",
          scopedSlots: { customRender: "editAt" }
        },
        {
          title: "操作",
          dataIndex: "action",
          width: "15%",
          align: "center",
          scopedSlots: { customRender: "action" }
        }
      ],
      dataTable: [
        {
          userId: "5201314",
          userName: "bobo",
          userMobile: "15768369257",
          groupName: "CEO",
          businessLine: "用户名",
          serverRange: "服务范围",
          createAt: "1991-01-07 17:55:55",
          editAt: "1991-01-07 17:55:55"
        },
        {
          userId: "133",
          userName: "bobo",
          userMobile: "15768369257",
          groupName: "CEO",
          businessLine: "用户名",
          serverRange: "服务范围",
          createAt: "1991-01-07 17:55:55",
          editAt: "1991-01-07 17:55:55"
        },
        {
          userId: "434",
          userName: "bobo",
          userMobile: "15768369257",
          groupName: "CEO",
          businessLine: "用户名",
          serverRange: "服务范围",
          createAt: "1991-01-07 17:55:55",
          editAt: "1991-01-07 17:55:55"
        },
        {
          userId: "5233",
          userName: "bobo",
          userMobile: "15768369257",
          groupName: "CEO",
          businessLine: "用户名",
          serverRange: "服务范围",
          createAt: "1991-01-07 17:55:55",
          editAt: "1991-01-07 17:55:55"
        },
        {
          userId: "5201331314",
          userName: "bobo",
          userMobile: "15768369257",
          groupName: "CEO",
          businessLine: "用户名",
          serverRange: "服务范围",
          createAt: "1991-01-07 17:55:55",
          editAt: "1991-01-07 17:55:55"
        },
        {
          userId: "4314",
          userName: "bobo",
          userMobile: "15768369257",
          groupName: "CEO",
          businessLine: "用户名",
          serverRange: "服务范围",
          createAt: "1991-01-07 17:55:55",
          editAt: "1991-01-07 17:55:55"
        }
      ]
    };
  },
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    getList() {
      this.totalPage = 20;
    },
    onShowSizeChange(value, pageSize) {
      this.page.page = 1;
      this.page.size = pageSize;
      this.getList();
    },
    paginationChange(value) {
      this.page.page = value;
      this.getList();
    },
    editUser() {
      this.title = "编辑";
      this.visible = true;
    },
    addUser() {
      this.title = "新增";
      this.visible = true;
    },
    addAction() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.confirmLoading = false;
        this.visible = false;
      }, 1000);
    },
    addCancel() {
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
#main {
}
</style>
