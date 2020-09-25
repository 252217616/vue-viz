import {get, post}from './http'

export default  {
    
        mallCategoryRank : p => post('saleStat/mall/categoryRank', p),//商城品类占比排名
        mallMonthlyStat : p => post('saleStat/mall/monthlyStat', p),//商城数据月度表格
        userStatCount : p => post('saleStat/user/count', p),//用户数据接口
        mallOrderStat : p => post('saleStat/mall', p),//电商数据接口
        unicomOrderStat : p => post('saleStat/unicom', p),//用户数据接口
        unicomDistributed : p => post('saleStat/unicom/distributed', p),//用户数据接口
        unicomDayStat : p => post('saleStat/unicom/dayStat', p),//用户数据接口
        unicomMonthlyStat : p => post('saleStat/unicom/monthlyStat', p),//用户数据接口
    
    // export const mallCategoryRank = p => post('saleStat/mall/categoryRank', p) ,//商城品类占比排名
    // export const mallCategoryRank = p => post('saleStat/mall/categoryRank', p) //商城品类占比排名
}
