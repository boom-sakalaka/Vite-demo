<!--
 * @Author: GZH
 * @Date: 2021-08-26 10:56:36
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-26 11:02:18
 * @FilePath: \Vite-demo\newbee-admin\src\components\Table.vue
 * @Description: 
-->
<template>
  <div>
    <el-table
      :load="loading"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <slot name="column"></slot>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    />
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
import { ElTable, ElPagination } from 'element-plus';
import axios from '@/utils/axios';
export default {
  name: 'Table',
  components: { ElTable, ElPagination },
  props: {
    action: String, // 父组件传入的列表请求地址
  },
  setup(props) {
    const state = reactive({
      loading: false,
      tableData: [], // 数据列表
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      multipleSelection: [], // 多选框
    });
    // 初始化钩子函数
    onMounted(() => {
      getList();
    });
    // 获取列表方法
    const getList = () => {
      state.loading = true;
      axios
        .get(props.action, {
          params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize,
          },
        })
        .then(res => {
          state.tableData = res.list;
          state.total = res.totalCount;
          state.currentPage = res.currPage;
          state.loading = false;
        });
    };
    // 选项
    const handleSelectionChange = val => {
      state.multipleSelection = val;
    };
    // 分页方法
    const changePage = val => {
      state.currentPage = val;
      getList();
    };
    // 这里要注意，需要将 getList return 出去
    return {
      ...toRefs(state),
      changePage,
      handleSelectionChange,
      getList,
    };
  },
};
</script>
