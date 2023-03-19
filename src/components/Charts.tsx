import React from "react";
import ReactECharts from "echarts-for-react";
import data from "../utils/data";

interface IStuData {
	"姓  名": string;
	"性  别": string;
	摸底?: number | string | undefined;
	Unit1?: number | string | undefined;
	"9校联考"?: number | string | undefined;
	"2021阳光测验"?: number | string | undefined;
	期中?: number | string | undefined;
	期末?: number | string | undefined;
	"2023.3月考（120）"?: number | string | undefined;
	"7BU3"?: number | string | undefined;
}

interface Props {
	stuData: IStuData | undefined;
}

const Charts = (props: Props) => {
	const { stuData } = props;
	if (!stuData) return null;
	const idx = data.findIndex((item) => item["姓  名"] === stuData["姓  名"]);
	const cls = idx > 43 ? 1 : 0;
	console.log(cls);
	const medianData = Object.values(
		data[data.length - 2 - cls * 2] as IStuData,
	).splice(2);
	const averageData = Object.values(
		data[data.length - 1 - cls * 2] as IStuData,
	).splice(2);

	console.log(medianData, averageData, stuData);

	const xAxisOptions = Object.keys(stuData).splice(2);
	const grades = Object.values(stuData).splice(2);

	const option = {
		xAxis: {
			type: "category",
			data: xAxisOptions,
			axiosLabel: {
				interval: 0,
			},
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: grades,
				type: "line",
				name: "学生成绩",
				smooth: true,
			},
			{
				data: medianData,
				type: "line",
				name: "班级中位数",
				smooth: true,
			},
			{
				data: averageData,
				type: "line",
				name: "班级平均数",
				smooth: true,
			},
		],
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow",
			},
		},
	};
	return <ReactECharts option={option} />;
};

export default Charts;
