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
      name: '局部广告-你喜欢视频/评论的XX氛围吗',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          matches:
            '[vid="video_area_float_layer_container"] >2 [vid="close_layout"]',
        },
        {
          matches: '[vid="compose_view"] >2 @[clickable=true]',
        },
        {
          matches: '[vid="subscribe"] +n @[vid="close"]',
        },
        {
          matches: '[text*="？"] +(n) @[clickable=true]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭首页推荐非视频内容',
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
          matches:
            '@[vid="more"] -(n) [vid="cover_bottom_info_container"] > [text="电视剧"||text="纪录片"||text="国创"||text="番剧"||text="电影"||text="课堂"||text="综艺"]',
        },
        {
          key: 2,
          matches:
            '@[vid="more"] -(n) [vid="cover_bottom_info_container"] > [vid="ad_tag_v2"]',
        },
        {
          key: 3,
          matches: '@[vid="more"] -(n) [vid="desc_content"] >2 [vid="ad_tag"]',
        },
        {
          key: 4,
          matches: '@[vid="more"] -(n) [vid="desc_content"] >2 [text*="直播"]',
        },
        {
          key: 5,
          matches:
            '@[vid="more"] -(n) [vid="desc_content"] >3 [vid="tag_view"]',
        },
        {
          key: 6,
          matches: '@[vid="more"] -(n) [vid="bottom_layout"] > [vid="badge"]',
        },
        {
          key: 10,
          preKeys: [0, 1, 2, 3, 4, 5, 6],
          matches: '@[clickable=true] > [text*="不感兴趣"||text="这个内容"]',
        },
        {
          key: 11,
          matches: '@[vid="more"] -(n) [vid="bottom_layout"] >2 [text*="竖屏"]',
        },
        {
          key: 20,
          preKeys: [11],
          matches: '@[clickable=true] > [text="竖屏模式"]',
        },
        {
          key: 21,
          matches: '@[vid="inline_more"]',
        },
        {
          key: 22,
          preKeys: [21],
          matches: '@[clickable=true] > [text="我不想看"]',
        },
        {
          key: 23,
          preKeys: [22],
          matches: '@[clickable=true] > [text*="不感兴趣"||text="这个内容"]',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      fastQuery: true,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: '[id="tv.danmaku.bili:id/toast_x"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12892611',
        'https://i.gkd.li/i/13308344',
        'https://i.gkd.li/i/13538048', // activityIds: 'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
    },
  ],
});
