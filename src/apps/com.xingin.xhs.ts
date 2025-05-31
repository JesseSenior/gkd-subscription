import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '局部广告-搜索区域广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.xingin.alioth.search.GlobalSearchActivity',
      rules: [
        {
          key: 0,
          action: 'longClick',
          matches: '@[longClickable=true] > [text="广告"]',
        },
        {
          key: 1,
          preKeys: [0],
          matches: '@[clickable=true] > [text="不感兴趣"]',
        },
      ],
    },
    {
      key: 1,
      name: '通知提示-打开通知',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
      rules: 'ImageView[clickable=true]',
    },
  ],
});
