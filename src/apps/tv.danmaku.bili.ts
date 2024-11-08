import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '局部广告-Ta刚刚发布了一条新评论',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          matches: '@[vid="delete_insert"] -1 [text="Ta刚刚发布了一条新评论"]',
          exampleUrls: 'https://e.gkd.li/2dd07741-af9c-4f27-b297-0401c2259b1b',
          snapshotUrls: 'https://i.gkd.li/i/17330179',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-搜索结果广告',
      desc: '点击右下角[菜单]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[vid="more"] -(n) [text="电视剧"||text="纪录片"||text="国创"||text="番剧"||text="电影"||text="课堂"||text="综艺"]',
        },
        {
          key: 1,
          matches:
            '@[vid="more"] -(n) [vid="live_lottie_layout"] > [text="直播"]',
        },
        {
          key: 2,
          matches: 'ViewGroup[childCount<=5] > @[vid="more"][desc="更多操作"]',
        },
        {
          key: 3,
          matches: '@[vid="more"][desc="更多操作"] -(n) [vid="game_button"]',
        },
        {
          key: 10,
          preKeys: [0, 1, 2, 3],
          matches: '@[clickable=true] > [text="不感兴趣"||text="我不想看"]',
        },
        {
          preKeys: [10],
          matches: '[clickable=true][text="关闭"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-你喜欢视频的弹幕氛围吗',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          matches:
            '[vid="video_area_float_layer_container"] >2 [vid="close_layout"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭直播内容',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 0,
          matches:
            '@[vid="more"] -(n) [vid="live_text_container"] >2 [text="直播"]',
        },
        {
          key: 1,
          preKeys: [0],
          matches: '@[clickable=true] > [text="不感兴趣"]',
        },
      ],
    },
  ],
});
