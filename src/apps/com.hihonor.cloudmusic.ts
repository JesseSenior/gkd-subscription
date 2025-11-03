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
          matches:
            '[vid="dsl_dialog_root"] >(n) @ImageView[clickable=true][index=parent.childCount.minus(1)]',
        },
      ],
    },
    {
      key: 1,
      name: '其他-“我的”页面自动切换到收藏',
      desc: '切换到收藏',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            '[text="收藏"] < @LinearLayout[desc="收藏"] -(n) LinearLayout[desc="近期"][clickable=false]',
          actionMaximum: 5,
          resetMatch: 'app',
        },
      ],
    },
  ],
});
