const option = {
    theme: 'light',
    type: 'circle',
    silent: true,
    minAngle: 0,
    stillShowZeroSum: false,
    title: {
        text: '{a|0}\n{b|链路总数}',
        top: '40%',
        textStyle: {
            rich: {
                a: {
                    fontSize: 53,
                },
                b: {
                    fontSize: 19,
                    color: '#999',
                    padding: [45, 0, 0, 0]
                },
            }
        },
    },
    label: {
        show: false,
    },
    legend: {
        show: false
    },
    data: [
        { value: 0, name: 'VPC' },
        { value: 0, name: 'EIP' },
    ],
};
