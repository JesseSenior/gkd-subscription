import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.cloudmusic',
  name: '网易云音乐（荣耀版）',
  groups: [
    {
      key: 0,
      name: '全屏广告-"沉浸环绕声"弹窗',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '[vid="dsl_dialog_root"] >(n) @ImageView[clickable=true][index=parent.childCount.minus(1)]',
        },
      ],
    },
  ],
});
