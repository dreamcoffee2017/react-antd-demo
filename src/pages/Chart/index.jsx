import { Chart, LineAdvance, PieChart } from 'bizcharts';

const ChartDemo = () => {

  const data = [
    {
      month: "Jan",
      city: "Tokyo",
      temperature: 7
    },
    {
      month: "Jan",
      city: "London",
      temperature: 3.9
    },
    {
      month: "Feb",
      city: "Tokyo",
      temperature: 6.9
    },
    {
      month: "Feb",
      city: "London",
      temperature: 4.2
    },
    {
      month: "Mar",
      city: "Tokyo",
      temperature: 9.5
    },
    {
      month: "Mar",
      city: "London",
      temperature: 5.7
    },
    {
      month: "Apr",
      city: "Tokyo",
      temperature: 14.5
    },
    {
      month: "Apr",
      city: "London",
      temperature: 8.5
    },
    {
      month: "May",
      city: "Tokyo",
      temperature: 18.4
    },
    {
      month: "May",
      city: "London",
      temperature: 11.9
    },
    {
      month: "Jun",
      city: "Tokyo",
      temperature: 21.5
    },
    {
      month: "Jun",
      city: "London",
      temperature: 15.2
    },
    {
      month: "Jul",
      city: "Tokyo",
      temperature: 25.2
    },
    {
      month: "Jul",
      city: "London",
      temperature: 17
    },
    {
      month: "Aug",
      city: "Tokyo",
      temperature: 26.5
    },
    {
      month: "Aug",
      city: "London",
      temperature: 16.6
    },
    {
      month: "Sep",
      city: "Tokyo",
      temperature: 23.3
    },
    {
      month: "Sep",
      city: "London",
      temperature: 14.2
    },
    {
      month: "Oct",
      city: "Tokyo",
      temperature: 18.3
    },
    {
      month: "Oct",
      city: "London",
      temperature: 10.3
    },
    {
      month: "Nov",
      city: "Tokyo",
      temperature: 13.9
    },
    {
      month: "Nov",
      city: "London",
      temperature: 6.6
    },
    {
      month: "Dec",
      city: "Tokyo",
      temperature: 9.6
    },
    {
      month: "Dec",
      city: "London",
      temperature: 4.8
    }
  ];

  const data2 = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  return (
    <div>
      <Chart autoFit height={300} data={data} >
        <LineAdvance
          shape="smooth"
          point
          position="month*temperature"
        />
      </Chart>
      <Chart autoFit height={300} data={data} >
        <LineAdvance
          shape="smooth"
          point
          position="month*temperature"
          color="city"
        />
      </Chart>
      <PieChart
        data={data2}
        title={{
          text: '门店Top10',
        }}
        angleField='value'
        colorField='type'
        label={{
          type: 'outer',
        }}
        meta={{
          value: {
            formatter: (v) => { return `${v}%` }
          }
        }}
      />
    </div>
  );
};

export default ChartDemo;
