const option = {
    theme: 'light',
    padding: [50, 30, 15, 20],
    smooth: true,
    legend: {
        show: true,          // 图例是否显示
        icon: 'line',        // 图例的小图标为小横短线
        position: {          // 图例在容器中的上下左右的位置
            right: 25,
            top: 20
        },
    },
    data: [
        { 'Month': 'Jan', 'Car': 34, 'Bus': 37, 'Aircraft': 41 },
        { 'Month': 'Feb', 'Car': 27, 'Bus': 39, 'Aircraft': 37 },
        { 'Month': 'Mar', 'Car': 31, 'Bus': 20, 'Aircraft': 37 },
        { 'Month': 'Apr', 'Car': 30, 'Bus': 15, 'Aircraft': 37 },
        { 'Month': 'May', 'Car': 37, 'Bus': 14, 'Aircraft': 45 },
        { 'Month': 'Jun', 'Car': 36, 'Bus': 17, 'Aircraft': 40 },
        { 'Month': 'Jul', 'Car': 42, 'Bus': 22, 'Aircraft': 50 },
        { 'Month': 'Aug', 'Car': 22, 'Bus': 12, 'Aircraft': 37 },
        { 'Month': 'Sep', 'Car': 17, 'Bus': 30, 'Aircraft': 12 },
        { 'Month': 'Oct', 'Car': 42, 'Bus': 33, 'Aircraft': 20 },
        { 'Month': 'Nov', 'Car': 41, 'Bus': 22, 'Aircraft': 16 },
        { 'Month': 'Dec', 'Car': 32, 'Bus': 12, 'Aircraft': 14 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Units'
    }
};