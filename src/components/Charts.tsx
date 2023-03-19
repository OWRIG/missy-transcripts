import React from "react";
import ReactECharts from "echarts-for-react";
import data from "../utils/data";

interface IStuData {
	"姓  名": string;
	"性  别": string;
	摸底: number;
	Unit1: number;
	"9校联考": number;
	"2021阳光测验": number | string;
	期中: number;
	期末: number;
	"2023.3月考（120）": number | string;
	"7BU3": number;
}

interface Props {
	stuData: IStuData | undefined;
}

const Charts = (props: Props) => {
	const { stuData } = props;
	const medianData = Object.values(data[data.length - 2]).splice(2);
	const averageData = Object.values(data[data.length - 1]).splice(2);

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
