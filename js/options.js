var funnel = {
	 title : {
        text: '北京市AQI(空气质量)天数',        
        x:'center',
        textStyle:{
        	fontSize:8,
        	color:'#777'
        }
    },
	tooltip: {
		show: true
	},
	legend: {
		data: ['比例']
	},
	
	calculable: true,
	legend: {
		orient: 'horizontal',
		x: 'center',
		y:'bottom',
		data: ['AQI<100', '100<AQI<200','AQI>200']
	},
	series: [{
		"name": "aqi",
		"type": "pie",
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				label: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			}
		},
		"data": [{
			value: 186,
			name: 'AQI<100'
		}, {
			value: 132,
			name: '100<AQI<200'
		}, {
			value: 44,
			name: 'AQI>200'
		}]
	}]
};

var bar = {
	
	tooltip: {
		show: true,
		formatter:"AQI {c}<br/>{b}月平均值"
	},
	
	xAxis: [{
		type: 'category',
		data: ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
		name:'月（时间）'
	}],
	grid:{
		x:'50',
		y:'20',
		x2:'62',
		y2:'25'
	},
	yAxis: [{
		type: 'value',
		name:'空气质量（AQI）'
	}],
	series: [{
		"name": "AQI",
		"type": "bar",
		'itemStyle': {                                
			normal: {                                    
				// color: 'tomato',
				color:function  (params) {					
				   var colorList = [ '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                       '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                       '#D7504B', '#C6E579'];
                   if (colorList[params.dataIndex]) {
                   	return colorList[params.dataIndex];
                   }
                   else
                   	{return 'tomato' ;}
				},
				barBorderColor: 'tomato',
				barBorderWidth: 1,
				barBorderRadius: 5			                                
			}                            
		},
		"data": aqiPerMonthBJ
	}]
};
var pie =  {
    title : {
        text: '北京市AQI(空气质量)天数',        
        x:'center',
        textStyle:{
        	fontSize:8,
        	color:'#777'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },    
    calculable : true,
    series : [
        {
            name:'AQI比例',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: [
            {name: 'AQI<100',value: 186},
            {name: '100<AQI<200',value: 132},
            {name: 'AQI>200',value: 44}
            ]
        }
    ]
};

var line = {
	
	tooltip: {
		show: true,
		formatter:"AQI {c}<br/>{b}月平均值"
	},
	
	xAxis: [{
		type: 'category',
		data: ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
		name:'月（时间）'
	}],
	yAxis: [{
		type: 'value',
		name:'空气质量（AQI）'
	}],
	grid:{
		x:'50',
		y:'20',
		x2:'62',
		y2:'25'
	},
	series: [{
		"name": "AQI",
		"type": "line",
		"smooth":true,
		"data": aqiPerMonthBJ
	}]
};


