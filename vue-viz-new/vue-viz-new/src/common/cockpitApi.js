import {get, post}from './http'
/**
 * 销售驾驶舱API
 */
export default  {
    
        mallCategoryRank : p => post('saleStat/mall/categoryRank', p),//商城品类占比排名
        mallMonthlyStat : p => post('saleStat/mall/monthlyStat', p),//商城数据月度表格
        userStatCount : p => post('saleStat/user/count', p),//用户数据接口
        mallOrderStat : p => post('saleStat/mall', p),//电商数据接口
        unicomOrderStat : p => post('saleStat/unicom', p),//联通数据接口
        unicomDistributed : p => post('saleStat/unicom/distributed', p),//套餐今日分布数据接口
        unicomDayStat : p => post('saleStat/unicom/dayStat', p),//套餐本月数据接口
        unicomMonthlyStat : p => post('saleStat/unicom/monthlyStat', p),//套餐年度数据接口
        updateByTimeStat : p => post('saleStat/timeStat', p),//刷新数据数据接口
        getAllcategory : p => post('saleStat/category', p),//获取全部分类

}
