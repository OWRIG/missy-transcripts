const data = [
	{
		"姓  名": "徐昊晨",
		"性  别": "男",
		摸底: 56,
		Unit1: 81,
		"9校联考": 86.5,
		"2021阳光测验": 66,
		期中: 71.5,
		期末: 66,
		"2023.3月考（120）": 72.0,
		"7BU3": 42.5,
	},
	{
		"姓  名": "彭雅萱",
		"性  别": "女",
		摸底: 34,
		Unit1: 64,
		"9校联考": 58,
		"2021阳光测验": 30,
		期中: 46,
		期末: 50,
		"2023.3月考（120）": 48.0,
		"7BU3": 31.5,
	},
	{
		"姓  名": "夏涛",
		"性  别": "男",
		摸底: 18,
		Unit1: 13,
		"9校联考": 21,
		"2021阳光测验": 16,
		期中: 26,
		期末: 16,
		"2023.3月考（120）": 16.0,
		"7BU3": 28,
	},
	{
		"姓  名": "赵志勇",
		"性  别": "男",
		摸底: 20,
		Unit1: 14,
		"9校联考": 19,
		"2021阳光测验": "",
		期中: 22,
		期末: 20,
		"2023.3月考（120）": 15.0,
		"7BU3": 20,
	},
	{
		"姓  名": "曹垶洁",
		"性  别": "女",
		摸底: 58,
		Unit1: 86,
		"9校联考": 92,
		"2021阳光测验": 55.5,
		期中: 67,
		期末: 77,
		"2023.3月考（120）": 70.0,
		"7BU3": 47,
	},
	{
		"姓  名": "蔡苏璨",
		"性  别": "男",
		摸底: 59,
		Unit1: 79,
		"9校联考": 88,
		"2021阳光测验": 58,
		期中: 65.5,
		期末: 69,
		"2023.3月考（120）": 63.0,
		"7BU3": 47.5,
	},
	{
		"姓  名": "周鹏",
		"性  别": "男",
		摸底: 16,
		Unit1: 21,
		"9校联考": 32,
		"2021阳光测验": 16,
		期中: 20,
		期末: 28,
		"2023.3月考（120）": 23.0,
		"7BU3": 11,
	},
	{
		"姓  名": "李梓晗",
		"性  别": "女",
		摸底: 70,
		Unit1: 90,
		"9校联考": 98.5,
		"2021阳光测验": 64,
		期中: 78,
		期末: 79,
		"2023.3月考（120）": 72.0,
		"7BU3": 55.5,
	},
	{
		"姓  名": "吴云芳",
		"性  别": "女",
		摸底: 72,
		Unit1: 90,
		"9校联考": 109,
		"2021阳光测验": 79,
		期中: 85,
		期末: 90,
		"2023.3月考（120）": 103.0,
		"7BU3": 75.5,
	},
	{
		"姓  名": "程琳",
		"性  别": "女",
		摸底: 68,
		Unit1: 78,
		"9校联考": 98.5,
		"2021阳光测验": 69.5,
		期中: 68.5,
		期末: 56,
		"2023.3月考（120）": 80.0,
		"7BU3": 52.5,
	},
	{
		"姓  名": "徐含韵",
		"性  别": "女",
		摸底: 73,
		Unit1: 90,
		"9校联考": 111.5,
		"2021阳光测验": 76.5,
		期中: 84,
		期末: 85,
		"2023.3月考（120）": 96.0,
		"7BU3": 74,
	},
	{
		"姓  名": "孙琦",
		"性  别": "女",
		摸底: 66,
		Unit1: 83,
		"9校联考": 106,
		"2021阳光测验": 64,
		期中: 76,
		期末: 81,
		"2023.3月考（120）": 96.0,
		"7BU3": 77,
	},
	{
		"姓  名": "朱冰鑫",
		"性  别": "男",
		摸底: 22,
		Unit1: 68,
		"9校联考": 59.5,
		"2021阳光测验": 43,
		期中: 47.5,
		期末: 53,
		"2023.3月考（120）": 42.0,
		"7BU3": 35,
	},
	{
		"姓  名": "朱士涵",
		"性  别": "男",
		摸底: 42,
		Unit1: 67,
		"9校联考": 83.5,
		"2021阳光测验": 42.5,
		期中: 54.5,
		期末: 56,
		"2023.3月考（120）": 71.0,
		"7BU3": 54,
	},
	{
		"姓  名": "王柏粲",
		"性  别": "男",
		摸底: 40,
		Unit1: 77,
		"9校联考": 54,
		"2021阳光测验": 57,
		期中: 37,
		期末: 46,
		"2023.3月考（120）": 25.0,
		"7BU3": 32,
	},
	{
		"姓  名": "王洁",
		"性  别": "女",
		摸底: 85,
		Unit1: 93,
		"9校联考": 114.5,
		"2021阳光测验": 83,
		期中: 92,
		期末: 101,
		"2023.3月考（120）": 99.0,
		"7BU3": 77.5,
	},
	{
		"姓  名": "张雨欣",
		"性  别": "女",
		摸底: 53,
		Unit1: 79,
		"9校联考": 73,
		"2021阳光测验": 69.5,
		期中: 60.5,
		期末: 48,
		"2023.3月考（120）": 100,
		"7BU3": 54,
	},
	{
		"姓  名": "郭欣怡",
		"性  别": "女",
		摸底: 53,
		Unit1: 82,
		"9校联考": 86.5,
		"2021阳光测验": 62.5,
		期中: 71,
		期末: 63,
		"2023.3月考（120）": 70.0,
		"7BU3": 60.5,
	},
	{
		"姓  名": "郭铭轩",
		"性  别": "男",
		摸底: 23,
		Unit1: 34,
		"9校联考": 29,
		"2021阳光测验": 23.5,
		期中: 29,
		期末: 40,
		"2023.3月考（120）": 25.0,
		"7BU3": 31,
	},
	{
		"姓  名": "薛一一",
		"性  别": "女",
		摸底: 82,
		Unit1: 93,
		"9校联考": 109.5,
		"2021阳光测验": 80,
		期中: 85.5,
		期末: 92,
		"2023.3月考（120）": 104.0,
		"7BU3": 78,
	},
	{
		"姓  名": "陈毅杰",
		"性  别": "男",
		摸底: 17,
		Unit1: 39,
		"9校联考": 35,
		"2021阳光测验": 18.5,
		期中: 32.5,
		期末: 24,
		"2023.3月考（120）": "未上传",
		"7BU3": 27,
	},
	{
		"姓  名": "周晨",
		"性  别": "女",
		摸底: 72,
		Unit1: 86,
		"9校联考": 91,
		"2021阳光测验": 68.5,
		期中: 79,
		期末: 87,
		"2023.3月考（120）": 86.0,
		"7BU3": 65,
	},
	{
		"姓  名": "褚唯笑",
		"性  别": "女",
		摸底: 34,
		Unit1: 58,
		"9校联考": 55,
		"2021阳光测验": 33,
		期中: 39,
		期末: 36,
		"2023.3月考（120）": 31.0,
		"7BU3": 22,
	},
	{
		"姓  名": "李方驰",
		"性  别": "男",
		摸底: 46,
		Unit1: 75,
		"9校联考": 77,
		"2021阳光测验": 42,
		期中: 46.5,
		期末: 58,
		"2023.3月考（120）": 69.0,
		"7BU3": 49,
	},
	{
		"姓  名": "孙鑫杨",
		"性  别": "男",
		摸底: 57,
		Unit1: 78,
		"9校联考": 84,
		"2021阳光测验": 54,
		期中: 64.5,
		期末: 43,
		"2023.3月考（120）": 61.0,
		"7BU3": 43.5,
	},
	{
		"姓  名": "杨静熙",
		"性  别": "女",
		摸底: 65,
		Unit1: 83,
		"9校联考": 94.5,
		"2021阳光测验": 58.5,
		期中: 80.5,
		期末: 82,
		"2023.3月考（120）": 94.0,
		"7BU3": 61,
	},
	{
		"姓  名": "闵诗婕",
		"性  别": "女",
		摸底: 75,
		Unit1: 92,
		"9校联考": 92.5,
		"2021阳光测验": 75.5,
		期中: 74,
		期末: 87,
		"2023.3月考（120）": 80.0,
		"7BU3": 63.5,
	},
	{
		"姓  名": "李婷",
		"性  别": "女",
		摸底: 27,
		Unit1: 43,
		"9校联考": 38.5,
		"2021阳光测验": 33,
		期中: 22,
		期末: 35,
		"2023.3月考（120）": 26.0,
		"7BU3": 29,
	},
	{
		"姓  名": "燕子琪",
		"性  别": "男",
		摸底: 22,
		Unit1: 64,
		"9校联考": 45,
		"2021阳光测验": 50.5,
		期中: 23.5,
		期末: 41,
		"2023.3月考（120）": 26,
		"7BU3": 31,
	},
	{
		"姓  名": "杨耀博",
		"性  别": "男",
		摸底: 61,
		Unit1: 79,
		"9校联考": 74,
		"2021阳光测验": 50,
		期中: 68.5,
		期末: 50,
		"2023.3月考（120）": 58.0,
		"7BU3": 42,
	},
	{
		"姓  名": "刘兴龙",
		"性  别": "男",
		摸底: 19,
		Unit1: 13,
		"9校联考": 15,
		"2021阳光测验": 21,
		期中: 18,
		期末: 22,
		"2023.3月考（120）": 12.0,
		"7BU3": 11,
	},
	{
		"姓  名": "白心悦",
		"性  别": "女",
		摸底: 43,
		Unit1: 79,
		"9校联考": 61,
		"2021阳光测验": 46,
		期中: 57.5,
		期末: 72,
		"2023.3月考（120）": 49.0,
		"7BU3": 35,
	},
	{
		"姓  名": "周晶晶",
		"性  别": "女",
		摸底: 42,
		Unit1: 68,
		"9校联考": 66,
		"2021阳光测验": 55,
		期中: 40.5,
		期末: 51,
		"2023.3月考（120）": 52.0,
		"7BU3": 33,
	},
	{
		"姓  名": "刘夏羿",
		"性  别": "男",
		摸底: 18,
		Unit1: 65,
		"9校联考": 28.5,
		"2021阳光测验": 49,
		期中: 29.5,
		期末: 36,
		"2023.3月考（120）": 42.0,
		"7BU3": 47,
	},
	{
		"姓  名": "胡欣菲",
		"性  别": "女",
		摸底: 72,
		Unit1: 88,
		"9校联考": 86.5,
		"2021阳光测验": 67,
		期中: 78.5,
		期末: 75,
		"2023.3月考（120）": 81.0,
		"7BU3": 62,
	},
	{
		"姓  名": "程宇航",
		"性  别": "男",
		摸底: 33,
		Unit1: 68,
		"9校联考": 52.5,
		"2021阳光测验": 51,
		期中: 50,
		期末: 54,
		"2023.3月考（120）": 46.0,
		"7BU3": 55,
	},
	{
		"姓  名": "杨远航",
		"性  别": "男",
		摸底: 79,
		Unit1: 94,
		"9校联考": 110,
		"2021阳光测验": 83.5,
		期中: 92,
		期末: 99,
		"2023.3月考（120）": 102.0,
		"7BU3": 79.5,
	},
	{
		"姓  名": "梁君豪",
		"性  别": "男",
		摸底: 76,
		Unit1: 88,
		"9校联考": 99.5,
		"2021阳光测验": 72.5,
		期中: 79,
		期末: 87,
		"2023.3月考（120）": 79.0,
		"7BU3": 51,
	},
	{
		"姓  名": "张博怡",
		"性  别": "女",
		摸底: 31,
		Unit1: 49,
		"9校联考": 43.5,
		"2021阳光测验": 47,
		期中: 43,
		期末: 38,
		"2023.3月考（120）": 38.0,
		"7BU3": 13,
	},
	{
		"姓  名": "伏昕睿",
		"性  别": "男",
		摸底: 84,
		Unit1: 91,
		"9校联考": 111.5,
		"2021阳光测验": 84.5,
		期中: 89,
		期末: 97,
		"2023.3月考（120）": 92.0,
		"7BU3": 78,
	},
	{
		"姓  名": "陶文博",
		"性  别": "男",
		摸底: 75,
		Unit1: 96,
		"9校联考": 108.5,
		"2021阳光测验": 70,
		期中: 83,
		期末: 93,
		"2023.3月考（120）": 95.0,
		"7BU3": 75.5,
	},
	{
		"姓  名": "韩旭",
		"性  别": "男",
		摸底: 16,
		Unit1: 32,
		"9校联考": 26,
		"2021阳光测验": 20,
		期中: 31.5,
		期末: 39,
		"2023.3月考（120）": 26.0,
		"7BU3": 15,
	},
	{
		"姓  名": "陈柯",
		"性  别": "男",
		摸底: 49,
		Unit1: 58,
		"9校联考": 62.5,
		"2021阳光测验": 36,
		期中: 42.5,
		期末: 29,
		"2023.3月考（120）": 36.0,
		"7BU3": 14,
	},
	{
		"姓  名": "班级中位数",
		"性  别": "",
		摸底: 53,
		Unit1: 78,
		"9校联考": 77,
		"2021阳光测验": 55,
		期中: 61,
		期末: 56,
		"2023.3月考（120）": 63,
		"7BU3": 47,
	},
	{
		"姓  名": "班级平均数",
		"性  别": "",
		摸底: 49,
		Unit1: 69,
		"9校联考": 72,
		"2021阳光测验": 53,
		期中: 57,
		期末: 59,
		"2023.3月考（120）": 63,
		"7BU3": 46,
	},
];

export default data;
