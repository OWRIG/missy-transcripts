import React from "react";
import { useRouter } from "next/router";
import data from "../utils/data";
import Empty from "../components/Empty";
import Charts from "~/components/Charts";

const Grades = () => {
	const router = useRouter();
	const stuName = router.query.name;

	if (!stuName) return <Empty>请重新输入姓名</Empty>;
	if (!data.some((item) => item["姓  名"] === stuName))
		return <Empty>没有找到该学生，请重新输入</Empty>;

	const stuData = data.find((item) => item["姓  名"] === stuName);

	return (
		<div className="p-8 md:p-12 lg:px-16 lg:py-24">
			<div className="text-xl font-bold text-center">{stuName}</div>
			<Charts stuData={stuData} />
		</div>
	);
};

export default Grades;
