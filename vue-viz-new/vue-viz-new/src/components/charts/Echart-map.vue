<style >
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div :id="id" class="o-echarts"></div>
</template>

<script>

import echarts from 'echarts';
import JSON from '../../../node_modules/echarts/map/json/province/heilongjiang.json';

export default {
    name: 'Echart-map',
    data() {
        return {
            id: 'echarts_' + new Date().getTime() + Math.floor(Math.random() * 1000),
            echartObj: null,
            radioList: {
                A: ''
               
            },
            radioActive: 'A',
            option: {
                
                tooltip: {
                    padding: 0,
                    backgroundColor: 'transparent',
                    formatter: params => {
                        // params.data
                        // return `<table class="map__tooltip o_font20">
                        //             <thead>
                        //                <tr>
                        //                    <th>总购买人数</th>
                        //                    <th>本年度总购买人数</th>
                        //                    <th>本月度总购买人数</th>
                        //                    <th>总完成人数</th>
                        //                 </tr>
                        //             </thead>
                        //             <tbody>
                        //                 <tr>
                        //                     <th>${params.data.obj.a}</th>
                        //                     <th>${params.data.obj.b}</th>
                        //                     <th>${params.data.obj.c}</th>
                        //                     <th>${params.data.obj.d}</th>
                        //                  </tr>
                        //             </tbody>
                        //         </table>`;
                    }
                },
                
               
                geo: {
                    map: '黑龙江',
                    label: {
                        normal: {
                            show: true,
                            color: '#6367AD'
                        },
                        emphasis: {
                            show: true,
                            color: '#fff'
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#8db200',
                            borderColor: '#6367ad',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#FF8C00' // hover效果
                        }
                    },
                    left: '5%',
                    right: '5%',
                    top: '5%',
                    bottom: '5%'
                },
                series: [{
                     name:'上规企业',
                     type: 'effectScatter',
                     coordinateSystem: 'geo',
                     geoIndex: 0,
                     data: [{name:"哈尔滨",value:[127.83,45.55,100]}] , //slice里面的数可以是0 ，意思是全部显示  0,1000 意思是显示这组数据中最大前1000组
                     showEffectOn: 'render',
                     rippleEffect: {
                         brushType: 'stroke'
                     },
                     hoverAnimation: true,
                     label: {
                         normal: {
                             formatter: '{b}',
                             position: 'right',
                             show: false
                         },
                         emphasis: {
                             show: true
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: '#f4e925',
                             shadowBlur: 10,
                             shadowColor: '#333'
                         }
                     }
                },
                 {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: [{name: "哈尔滨",
                value:[127.83,45.55,10000]}] ,
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    encode: {
                        value: 2
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    itemStyle: {
                        color: 'purple',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                    zlevel: 1
        }
                ]
            }
            
        };
    },
    mounted() {
        console.log(JSON)
        this.echartObj = this.$echarts.init(document.getElementById(this.id));
        JSON.features[0].properties.cp = [127.83,45.25];//哈尔滨
        JSON.features[1].properties.cp = [124.97,47.83];//"齐齐哈尔市"
        JSON.features[2].properties.cp = [132.37,45.5];//"鸡西市"
        JSON.features[3].properties.cp = [130.4,47.63];//"鹤岗市"
        JSON.features[4].properties.cp = [131.97,46.45];//"双鸭山市"
        JSON.features[5].properties.cp = [124.63,46.58	];//"大庆市"
        JSON.features[6].properties.cp = [128.92,47.73	];//"伊春市"
        JSON.features[10].properties.cp = [127.53,49.22	];//"黑河市"
        JSON.features[11].properties.cp = [127,46.93];//"绥化市"
        this.$echarts.registerMap('黑龙江', JSON);
        // this.echartObj.setOption(this.getOptions(), true);
        // this.echartObj.on('legendselectchanged', params => {
        //     this.radioActive = Object.keys(this.radioList).filter(item => this.radioList[item] === params.name)[0];
        //     this.echartObj.clear();
        //     this.echartObj.setOption(this.getOptions());
        // });
        var geoCoordMap = {
            ' ': [127.83,45.85],
        }
        var data = [
            {name:' ', value: 1800}
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        let option = {
            // backgroundColor: '#020933',
            title: {
                top:20,
                // text: ' 吉林省',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    // if(typeof(params.value)[2] == "undefined"){
                    //     return params.name + ' : ' + params.value;
                    // }else{
                    //     return params.name + ' : ' + params.value[2];
                    // }
                }
            },
            geo: {
                map: '黑龙江',
                label: {
                    normal: {
                        show: true,
                        color: '#6367AD'
                    },
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        // areaColor: '#0F2C6B',
                        // borderColor: '#065676',
                        // borderWidth: 1

                        areaColor: '#0F2C6B',
                        borderColor: '#065676',
                        borderWidth: 1,
                        shadowColor: 'rgba(0,0,0, 0.5)',
                        shadowBlur: 50
                       
                    },
                     emphasis: {
                        areaColor: '#2B91B7',
                    }
                },
                left: '5%',
                right: '5%',
                top: '5%',
                bottom: '5%'
            },
            series : [
                
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return 25;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'red',
                            shadowBlur: 10,
                            shadowColor: 'red'
                        }
                    },
                    zlevel: 1
                },

            ]
        };
        this.echartObj.setOption(option);

        window.addEventListener('resize', () => {
            if (this.echartObj && this.echartObj.resize) {
                this.echartObj.resize();
            }
        });
    },
    methods: {
        getOptions() {
            this.setOptions('legend', {
                data: Object.values(this.radioList),
                // selected: (list => {
                //     const obj = {};
                //     Object.keys(list).map((item, index) => {
                //         obj[list[item]] = item === this.radioActive;
                //     });
                //     return obj;
                // })(this.radioList)
            });
            this.setOptions('series', (() => {
                const arr = [];
                Object.values(this.radioList)
                    .map((item, index) => {
                        arr[this.radioList[this.radioActive] === item ? 'unshift' : 'push']({
                            name: item,
                            type: 'map',
                            geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                            data: this.getSeriesData(item)
                        });
                    });
                return arr;
            })());
            return this.option;
        },
        getSeriesData(item) {
            return this.radioList[this.radioActive] === item ? JSON.features.map(item => {
                // console.log(item.properties)
                return {
                    name: item.properties.name,
                    value: 1,
                    obj: {
                        a: 1,
                        b: 1,
                        c: 1,
                        d: 1
                    }
                };
            }) : [];
        },
        setOptions(objKey, objVal) {
            if (this.option[objKey] && typeof this.option[objKey] === 'object' && !Array.isArray(this.option[objKey])) {
                this.option[objKey] = Object.assign(this.option[objKey], objVal);
            } else {
                this.option[objKey] = objVal;
            }
            this.$set(this.option, objKey, this.option[objKey]);
        },
        
    }
};
</script>