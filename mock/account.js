// eslint-disable-next-line import/no-extraneous-dependencies
const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

function queryList(req, res) {
  const params = req.query;
  const count = params.count * 1 || 20;
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      team1: user[i % 10],
    });
  }
  return res.json({ data: list });
}

export default {
  'GET /api/mock/account/123456': queryList,
};
