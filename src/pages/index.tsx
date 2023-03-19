import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

const Home: NextPage = () => {
	const router = useRouter();
	const [input, setInput] = useState<string>("");
	const onClick = () => {
		void router.push({
			pathname: "/grades",
			query: { name: input },
		});
	};
	return (
		<>
			<Head>
				<title>英语成绩单</title>
				<meta name="description" content="英语成绩单" />
			</Head>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">{`For Miss Yang's students`}</h1>
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
