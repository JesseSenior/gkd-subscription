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
      name: '分段广告-相关视频列表广告',
      desc: '点击右下角[菜单]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[vid="more"] -(n) [vid="ad_desc"]',
            '@[vid="more"] -(n) [vid="bottom_container"]',
            '@[vid="more"] -(n) [text="电视剧"||text="纪录片"||text="国创"||text="番剧"||text="电影"||text="课堂"||text="综艺"]',
            '@[vid="more"] -(n) [vid="live_lottie_layout"] > [text="直播"]',
            'ViewGroup[childCount<=5] > @[vid="more"][desc="更多操作"]',
            '@[vid="more"][desc="更多操作"] -(n) [vid="game_button"]',
          ],
        },
        {
          key: 8,
          preKeys: [0],
          matches: '@[clickable=true] > [text="不感兴趣"||text="我不想看"]',
        },
        {
          key: 9,
          preKeys: [8],
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
          matches:
            'RecyclerView >2 [vid="compose_view"] >2 TextView[text*="喜欢"] +(n) @[clickable=true]',
        },
        {
          matches: '[vid="subscribe"] +n @[vid="close"]',
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
          anyMatches: [
            '@[vid="live_more"]',
            '@[vid="more"] -(n) [vid="bottom_layout"][childCount=1]',
            '@[vid="more"] -(n) [vid="live_text_container"] >2 [text="直播"]',
            '@[vid="more"] -(n) [vid="desc_content"] >2 [text*="直播"]',
            '@[vid="more"] -(n) [vid="cover_bottom_info_container"] > [text="电视剧"||text="纪录片"||text="国创"||text="番剧"||text="电影"||text="课堂"||text="综艺"]',
            '@[vid="more"] -(n) [vid="cover_bottom_info_container"] > [vid="ad_tag_v2"]',
            '@[vid="more"] -(n) [vid="desc_content"] >2 [vid="ad_tag"]',
            '@[vid="more"] -(n) [vid="desc_content"] >3 [vid="tag_view"]',
            '@[vid="more"] -(n) [vid="bottom_layout"] > [vid="badge"]',
            '@[vid="more"] -(n) [vid="cover_top_left_badge"]',
            '@[vid="more"] -(n) [vid="bottom_layout"] >2 [text*="竖屏"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@[id="tv.danmaku.bili.adbiz:id/more"||id="tv.danmaku.bili.adbiz:id/inline_more"]',
            '@[vid="inline_more"]',
          ],
        },
        {
          key: 8,
          preKeys: [1],
          matches: '@[clickable=true] > [text="我不想看"]',
        },
        {
          key: 9,
          preKeys: [0, 1, 8],
          matches:
            '@[clickable=true] > [text*="不感兴趣"||text="这个内容"||text="竖屏模式"||text="相似内容过多"]',
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
    {
      key: 5,
      name: '局部广告-视频直播预约',
      desc: '点击关闭',
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      fastQuery: true,
      rules:
        '[text="立即预约"] +(n) [vid="close"][desc="关闭按钮"][clickable=true]',
    },
    {
      key: 6,
      name: '局部广告-你可能感兴趣',
      desc: '点击x',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          matches: '[text="你可能感兴趣"] +1 [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/20684425',
        },
      ],
    },
    {
      key: 7,
      name: '权限提示-关注UP主时通知权限',
      desc: '点击暂不开启',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          matches: ['[text="订阅感兴趣的通知"]', '[text="暂不开启"]'],
          snapshotUrls: 'https://i.gkd.li/i/20684449',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-评论区广告',
      desc: '点击关闭',
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      fastQuery: true,
      rules: '[vid="comment_ad_container"] >(n) ImageView[desc="关闭"]',
    },
    {
      key: 9,
      name: '分段广告-视频播放页广告',
      desc: '点击关闭',
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      fastQuery: true,
      rules: [
        {
          key: 0,
          anyMatches: [
            '[vid="underplayer_container"] >(n) [id="tv.danmaku.bili:id/more"]',
            '[id="tv.danmaku.bili.adbiz:id/more_layout"]',
            '[id="tv.danmaku.bili.adbiz:id/more"]',
            '[id="tv.danmaku.bili:id/more_layout"]',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          matches: '@[clickable=true] > [text*="不感兴趣"]',
        },
      ],
    },
    {
      key: 10,
      name: '其他-（激进慎用！）关闭首页推荐低播放量内容',
      desc: '点击关闭',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@[vid="more"] -(n) [vid="cover_bottom_info_container"] > TextView[id="tv.danmaku.bili:id/cover_left_text1"][text!*="万"]',
        },
        {
          key: 1,
          preKeys: [0],
          matches: '@[clickable=true] > [text="这个内容"]',
        },
      ],
    },
  ],
});
