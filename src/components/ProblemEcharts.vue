<template>
  <div ref="myChart" style="width: 100%;height: 30vh; margin-left: 15px;"/>
</template>

<script>
export default {
  name: "ProblemEcharts",
  props:{
    data:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myChart:null,
      theme: false,
      option: {
        // title: {
        //   text: '数据占比',
        //   left: 'right'
        // },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical', // vertical
          left: 'left'
        },
        series: {
          name: '',
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            {value: 735, name: 'AC', itemStyle: {color: '#91cc75'}},
            {value: 1048, name: 'WA', itemStyle: {color: '#ee6666'}},
            {value: 580, name: 'TLE', itemStyle: {color: '#fac858'}},
            {value: 580, name: 'Mle', itemStyle: {color: '#fc8452'}},
            {value: 484, name: 'RE', itemStyle: {color: '#db93fc'}},
            {value: 300, name: 'CE', itemStyle: {color: '#55a0f1'}}
          ],
          emphasis: {
            // itemStyle: {
            //   shadowBlur: 10,
            //   shadowOffsetX: 0,
            //   shadowColor: 'rgba(0, 0, 0, 0.5)'
            // },
            label: {
              show: true,
              fontSize: '28',
              fontWeight: 'bold'
            }
          }
        },
      },
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(this.$refs.myChart);
    this.myChart.showLoading(); // axios 异步问题 先 loading 一下 等数据拿到了再绘制图表
    this.myChart.hideLoading(); // 获得数据，隐藏 loading
    this.option.series.data[0].value = this.data.ac;
    this.option.series.data[1].value = this.data.wa;
    this.option.series.data[2].value = this.data.tle;
    this.option.series.data[3].value = this.data.mle;
    this.option.series.data[4].value = this.data.re;
    this.option.series.data[5].value = this.data.ce;
    // 绘制图表
    this.myChart.setOption(this.option);
  },
  methods: {
    Change(val) {
      let theme = !val ? '' : 'dark';
      this.myChart.dispose();
      this.myChart = this.$echarts.init(this.$refs.myChart, theme);
      this.myChart.setOption(this.option);
    }
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>