import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '局部广告-【去广告】 今日免广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[text="【去广告】 今日免广告"] +1 [text="关闭"]',
        },
      ],
    },
  ],
});
