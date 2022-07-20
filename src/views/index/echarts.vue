<template>
  <div>
    <el-row :gutter="20" class="top_3">
      <!--      左侧-->
      <el-col :span="12" class="left_1">
        <el-card>
          <template #header>
            <span class="title">订单统计</span>
            <div class="check-tag">
              <el-check-tag
                :checked="echartType === 'month'"
                @click="changeEchartType('month')"
                >近1个月</el-check-tag
              >
              <el-check-tag
                :checked="echartType === 'week'"
                @click="changeEchartType('week')"
                >近1周</el-check-tag
              >
              <el-check-tag
                :checked="echartType === 'hour'"
                @click="changeEchartType('hour')"
                >近24小时</el-check-tag
              >
            </div>
          </template>
          <div id="echarts"></div>
        </el-card>
      </el-col>
      <!--      右侧-->
      <el-col :span="12" class="right_1">
        <!--        上-->
        <el-card>
          <template #header>
            <span class="title">店铺及商品提示</span>
            <el-tag effect="plain" type="danger">店铺及商品提示</el-tag>
          </template>
          <el-row :gutter="20" class="top_1">
            <el-col v-for="(item, i) in goodsList" :key="i" :span="6">
              <el-card
                :body-style="{ background: '#f6f6f6', border: 'none' }"
                shadow="hover"
              >
                <div class="card-div">
                  <span>{{ item.value }}</span>
                  <span style="margin-top: 10px">{{ item.label }}</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
        <!--      下-->
        <el-card style="margin-top: 10px">
          <template #header>
            <span class="title">交易提示</span>
            <el-tag effect="plain" type="danger">需要立即处理的交易订单</el-tag>
          </template>
          <el-row :gutter="20" class="top_1">
            <el-col v-for="(item, i) in orderList" :key="i" :span="6">
              <el-card
                :body-style="{ background: '#f6f6f6', border: 'none' }"
                shadow="hover"
              >
                <div class="card-div">
                  <span>{{ item.value }}</span>
                  <span style="margin-top: 10px">{{ item.label }}</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, nextTick } from 'vue'
import { statistics3API, statistics2API } from '@/api/user'
const echartLoading = ref(null)
const echartType = ref('week')
const goodsList = ref([])
const orderList = ref([])
const skeletonLoading = ref(true)
const getStatistics = async () => {
  try {
    const { goods, order } = await statistics2API()
    const { x, y } = await statistics3API({ type: echartType.value })
    goodsList.value = goods
    orderList.value = order
    skeletonLoading.value = false
    nextTick(() => {
      generateEcharts(x, y)
    })
  } catch (e) {
    console.log(e)
  }
}
getStatistics()

// 柱状图
const generateEcharts = (x, y) => {
  const chartDom = document.querySelector('#echarts')
  const myChart = echarts.init(chartDom)
  echartLoading.value = myChart
  const option = {
    xAxis: {
      type: 'category',
      data: x
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: y,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
  option && myChart.setOption(option)
}
// 切换图表
const changeEchartType = async (type) => {
  try {
    echartLoading.value.showLoading()
    echartType.value = type
    await getStatistics()
  } catch (e) {
    console.log(e)
  }
  echartLoading.value.hideLoading()
}
</script>

<style lang="scss" scoped>
.top_3 {
  .left_1 {
    ::v-deep(.el-card) {
      .el-card__header {
        display: flex;
        justify-content: space-between;
        background: #f9fafb;
        height: 50px;
        align-items: center;
        .title {
          font-size: 15px;
        }
        .check-tag {
          .el-check-tag {
            margin-right: 8px;
          }
        }
      }
    }
  }
  .right_1 {
    ::v-deep(.el-card) {
      .el-card__header {
        display: flex;
        justify-content: space-between;
        background: #f9fafb;
        height: 40px;
        align-items: center;
        .title {
          font-size: 15px;
        }
      }
      .top_1 {
        .card-div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }
}

#echarts {
  width: 600px;
  height: 300px;
}
</style>
