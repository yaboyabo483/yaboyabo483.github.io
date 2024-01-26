// 旬首
const xunShouMap = {
    '甲子': '戊',
    '甲戊': '已',
    '甲申': '庚',
    '甲午': '辛',
    '甲辰': '壬',
    '甲寅': '癸',
};

// 地盘
const diPan = {
    '6': '乾',
    '1': '坎',
    '8': '艮',
    '3': '震',
    '4': '巽',
    '9': '离',
    '2': '坤',
    '7': '兑',
};

// 八门
const men = {
    '6': '开门',
    '1': '休门',
    '8': '生门',
    '3': '伤门',
    '4': '杜门',
    '9': '景门',
    '2': '死门',
    '7': '惊门',
};
// 九星
const xing = {
    '6': '天心',
    '1': '天蓬',
    '8': '天任',
    '3': '天冲',
    '4': '天辅',
    '9': '天英',
    '2': '天芮',
    '7': '天柱',
    '5': '天禽',
};

const xingList = [
    '天心',
    '天蓬',
    '天任',
    '天冲',
    '天辅',
    '天英',
    '天芮',
    '天柱',
];
const diPanDiZhiList = ['戊', '己', '庚', '辛', '壬', '癸', '丁', '丙', '乙'];

const liushi花甲子组合 = [
    '甲子', '乙丑', '丙寅', '丁卯', '戊辰',
    '己巳', '庚午', '辛未', '壬申', '癸酉',
    '甲戌', '乙亥', '丙子', '丁丑', '戊寅',
    '己卯', '庚辰', '辛巳', '壬午', '癸未',
    '甲申', '乙酉', '丙戌', '丁亥', '戊子',
    '己丑', '庚寅', '辛卯', '壬辰', '癸巳',
    '甲午', '乙未', '丙申', '丁酉', '戊戌',
    '己亥', '庚子', '辛丑', '壬寅', '癸卯',
    '甲辰', '乙巳', '丙午', '丁未', '戊申',
    '己酉', '庚戌', '辛亥', '壬子', '癸丑',
    '甲寅', '乙卯', '丙辰', '丁巳', '戊午',
    '己未', '庚申', '辛酉', '壬戌', '癸亥'
];

module.exports = {
    xunShouMap,
    diPan,
    men,
    xing,
    xingList,
    diPanDiZhiList,
    liushi花甲子组合
};