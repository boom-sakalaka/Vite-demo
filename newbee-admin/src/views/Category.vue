<!--
 * @Author: GZH
 * @Date: 2021-08-24 10:56:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-24 11:37:26
 * @FilePath: \Vite-demo\newbee-admin\src\views\Category.vue
 * @Description: 
-->
<template>
  <el-card class="category-container">
    <el-table
      :data="tableData"
      :load="loading"
      ref="multipleTable"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="categoryName" label="分类名称"></el-table-column>
      <el-table-column prop="categoryRank" label="排序值" width="120"></el-table-column>
      <el-table-column prop="createTime" label="添加时间" width="200"></el-table-column>
      <el-table-column label="操作" width="220">
        <template #default="scope">
          <a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.categoryId)">修改</a>
          <a style="cursor: pointer; margin-right: 10px" @click="handleNext(scope.row)">下级分类</a>
          <el-popconfirm title="确定删除吗？" @confirm="handleDeleteOne(scope.row.categoryId)">
            <template #reference>
              <a style="cursor: pointer">删除</a>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    />
  </el-card>
</template>

<script>
import { ElCard, ElTable, ElTableColumn, ElPopconfirm, ElPagination, ElMessage } from 'element-plus';
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from '@/utils/axios';

export default {
  name: 'Category',
  components: {
    ElCard,
    ElTable,
    ElTableColumn,
    ElPopconfirm,
    ElPagination,
  },
  setup() {
    const router = useRouter(); // 声明路由实例
    const route = useRoute(); // 获取路由参数

    const state = reactive({
      loading: false,
      tableData: [], // 数据列表
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      type: 'add', // 操作类型
      level: 1,
      parent_id: 0,
    });

    const unwatch = router.afterEach(to => {
      console.warn(to.name);
      // 每次路由变化的时候，都会触发监听时间，重新获取列表数据
      if (['category', 'level2', 'level3'].includes(to.name)) {
        getCategory();
      }
    });

    onMounted(() => {
      getCategory();
    });

    onUnmounted(() => {
      unwatch();
    });
    const getCategory = () => {
      const { level = 1, parent_id = 0 } = route.query;
      state.loading = true;
      axios
        .get('/categories', {
          params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize,
            categoryLevel: level,
            parentId: parent_id,
          },
        })
        .then(res => {
          state.tableData = res.list;
          state.total = res.totalCount;
          state.currentPage = res.currPage;
          state.loading = false;
          state.level = level;
          state.parent_id = parent_id;
        });
    };
    const changePage = val => {
      state.currentPage = val;
      getCategory();
    };
    return { ...toRefs(state), getCategory, changePage };
  },
};
</script>

<style lang="scss" scoped></style>
