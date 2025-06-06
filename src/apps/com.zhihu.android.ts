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
  ],
});
