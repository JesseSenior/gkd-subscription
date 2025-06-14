import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '局部广告-评论区广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.zhihu.android.comment.ui.activity.CommentListActivity',
      rules: '[text="广告"] +(n) ViewGroup[clickable=true][desc=""]',
    },
    {
      key: 1,
      name: '分段广告-首页卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: '.app.ui.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ViewGroup[clickable=true] -n * < ViewGroup[index=parent.childCount.minus(1)] -n ViewGroup >2 TextView[text*="广告"]',
        },
        {
          key: 10,
          preKeys: [0],
          matches: '[text="虚假广告"]',
        },
      ],
    },
    //{
    //  key: 9,
    //  name: '局部广告-相关搜索下方广告-激进策略',
    //  desc: '点击关闭',
    //  fastQuery: true,
    //  activityIds: 'com.zhihu.android.mix.activity.ContentMixProfileActivity',
    //  rules: [
    //    {
    //      key: 0,
    //      matches: 'TextView[text="相关搜索"] < View[childCount=7][width<height] +(n) TextView[text^="评论"]',
    //      matchRoot: true,
    //      position: {
    //        right: 'width * 0.066',
    //        top: '- height * 1.736',
    //      }
    //    },
    //  ],
    //},
  ],
});
