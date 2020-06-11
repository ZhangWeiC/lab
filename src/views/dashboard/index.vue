<template>
  <div class="project-container">
    <div class="form-contain">
      <el-form :inline="true" class="form-inline">
        <el-form-item label="区域：" class="pro-form-item">
          <el-select v-model="zq" placeholder="活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="种类：" class="pro-form-item">
          <el-select v-model="jbz" placeholder="活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="方向：" class="pro-form-item">
          <el-select v-model="zl" placeholder="活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="pro-form-item">
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-card class="project-card">
      <div slot="header" class="project-card-header">
        <span>项目列表</span>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        max-height="500"
        stripe
      >
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="name" label="项目名称" />
        <el-table-column prop="area" label="区域" />
        <el-table-column prop="jbzName" label="种类" />
        <el-table-column prop="direction" label="方向" />
        <el-table-column prop="operation" label="操作">
          <template>
            <el-button size="mini">查看拓扑</el-button>
            <el-button size="mini" type="primary">评估</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="project-card-pagination">
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      zq: "",
      jbz: "",
      zl: "",
      tableData: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await axios.get("/security/v1/projects/selectProjects.json");
      let resData = res.data;

      // console.log(resData);
      if (resData.respCode !== 200) {
        this.$message.error(`请求错误, 错误码${resData.respCode}`);
        return;
      }

      this.tableData = resData.data.data;
      console.log(this.tableData);
    }
  }
};
</script>

<style lang="scss" scoped>
.project-container {
  .form-contain {
    min-height: 80px;
    margin-top: 2px;
    background-color: #fff;
    .form-inline {
      margin-left: 50px;
      .pro-form-item {
        margin-left: 10px;
        margin-top: 15px;
      }
    }
  }
  .project-card {
    margin: 15px 20px;
    &-header {
      span {
        font-size: 18px;
        font-weight: 700;
      }
    }
    &-pagination {
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>
