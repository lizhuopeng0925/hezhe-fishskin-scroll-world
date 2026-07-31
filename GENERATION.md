# 生成记录

## 原始图像

五张源图来自 `assets/source/`。项目复制件与桌面原文件保持相同内容；页面在“五图传承墙”中完整显示原图下缘的“图片由AI生成”标识。

## Codex Image 章节母图

共同方向：同一条深黑博物馆展廊，墙面 `#0a0806`、阴影 `#1a1410`、暖金聚光 `#c4a15a`、旧铜结构 `#8b6914`、象牙高光 `#d4c8b8`；写实、克制、尊重展品，不出现人物、文字、标志、水印、玄幻、游戏美术或塑料质感。

五个章节分别保持原图中的乌提库与套裤、鱼皮套裤、鱼皮靰鞡、制作工具组、鳞片与回旋纹样。桌面母图保存于 `assets/stills/scene-*-review-v1.png`，严格 16:9 首尾帧保存于 `assets/stills/desktop/1920x1080/`；原生竖版母图保存于 `assets/stills/mobile/*portrait-master.png`，严格 9:16 首尾帧保存于 `assets/stills/mobile/1080x1920/`。

## 可灵 3.0 连续视频

共同参数：`kling-video-v3_0`、720p、单视频、`prefer_multi_shots=false`、`enable_audio=false`、首尾帧过渡。每段提示词均要求摄影机沿同一暗金博物馆中轴缓慢前进，保持展品结构与灯光连续，禁止切镜、形变、新增物件、人物、文字、标志、水印和闪烁。

| 比例 | 连接段 | 时长 | Generation ID | 消耗 |
|---|---|---:|---|---:|
| 9:16 | 乌提库 → 套裤 | 5 秒 | `AVwF8U63w58dpxJpyxNLPoRNqrITggoRnZ3QULnksn2KZbnSOLr4q5RqaCcbvbUr6REQUc8r` | 30 |
| 9:16 | 套裤 → 靰鞡 | 3 秒 | `AbRi39vwl_GkvVZ3NmLQ8JPGIEWgVx72PDpnJT-1G8H-ricbg23sW7bnZXWosZs8Ql8CM6an` | 18 |
| 9:16 | 靰鞡 → 工具组 | 3 秒 | `AbSdI-QHYjXxVgLNZzpzWqtfYMLdmqr7uVDPZNtMHkho6aNPypjnX_zIIPqJezK8bbzPohC1` | 18 |
| 9:16 | 工具组 → 纹样 | 3 秒 | `AQQpJYkuO6RdONu6E2m-cB_AfQYa0KyCjwNGX8gJ64n_qym6vt4-ihi6hCmoPGcnDunRVKlW` | 18 |
| 16:9 | 乌提库 → 套裤 | 3 秒 | `AceuZmdywPkICVl87In0zJEp32tHN51NaZ1J7pJc5dPW8Fi90guU4__O1JDciiXLgHvXhXPG` | 18 |
| 16:9 | 套裤 → 靰鞡 | 3 秒 | `AQN_4-s83YqAnBxgWQKo5WRimBZkN4RWZyB46ejK0Xa56Rqw-xBbmZeBTseR7z2GX4xsoeH4` | 18 |
| 16:9 | 靰鞡 → 工具组 | 3 秒 | `AYk_NTRLZ1s6XPZCM5Zp1iSJ-qmCHEhmcZsXsd7Uw322xTVmZE7GzC-Bt6HBTNLtXZXUhrb6` | 18 |
| 16:9 | 工具组 → 纹样 | 3 秒 | `AWX38i7d7Fjpc-BuXnS6CUs46bHGuCrt8o0YkKyYklP1O6bCj1E5LeZorVrUkplXD94-lpCV` | 18 |

合计消耗 156 灵感值，完成后账户余额 44。没有自动重提失败任务。下载使用可灵返回的无水印地址；网页另行编码为无音轨、`faststart`、桌面 GOP 8、手机 GOP 4 的滚动版本。
