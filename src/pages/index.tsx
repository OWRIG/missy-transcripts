import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

const Home: NextPage = () => {
	const router = useRouter();
	const [input, setInput] = useState<string>("徐昊晨");
	const onClick = () => {
		void router.push({
			pathname: "/grades",
			query: { name: input },
		});
	};
	return (
		<>
			<Head>
				<title>云龙学生数据展示</title>
				<meta name="description" content="云龙学生数据展示" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hi</h1>
						<input
							type="text"
							placeholder="请完整输入你的名字"
							className="input w-full max-w-xs my-6"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button
							className="btn btn-primary"
							onClick={onClick}
							disabled={!input?.trim()}
						>
							查询成绩
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
