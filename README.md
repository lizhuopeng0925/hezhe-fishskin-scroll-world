# 鱼皮成境

基于 `scroll-world` 的赫哲族鱼皮主题滚动式数字展陈。页面包含五个静态章节、四段桌面 16:9 连接视频、四段手机 9:16 连接视频，以及完整保留来源标识的五图传承墙。

## 本地运行

最简单的方式：双击项目根目录中的 `打开鱼皮成境.command`。启动器会用 macOS `launchctl` 保持本地服务运行，并自动打开浏览器。

也可以在终端临时运行：

```bash
python3 -m http.server 4173
```

浏览器访问 `http://127.0.0.1:4173/`。不要直接双击 `index.html`，滚动引擎需要通过 HTTP 获取视频 Blob。

## 资产说明

- `assets/source/`：用户提供的五张原始 AI 生成图像，未经修改。
- `assets/stills/`：Codex Image 生成的章节场景及双比例首尾帧。
- `assets/video/*/segments/`：可灵 3.0 返回的无水印原始片段。
- `assets/video/*/web/`：用于滚动拖动的短 GOP、无音轨网页编码。
- `assets/video/*/*preview.mp4`：顺序拼接的长片预览，不作为网页 scrub 数据源。
