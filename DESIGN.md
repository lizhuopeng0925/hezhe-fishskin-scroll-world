# Design System

## Direction

以 Industrial 为结构锚点：黑色固定舞台、单一旧金信号色、直角控制和清晰的档案式层级。用户指定的暗金博物馆色谱与鱼皮影像是视觉主角；滚动穿越展廊是唯一主导性动效。

## Tokens

- Museum dark: `#0a0806`
- Museum brown: `#1a1410`
- Antique gold: `#c4a15a`
- Aged brass: `#8b6914`
- Label ivory: `#d4c8b8`
- Primary text: `#f3eadb`
- Muted text: `#c5b79f`
- Display and body: system monospace with Chinese system fallback

## Layout

Scroll World 使用固定全屏舞台和普通文档滚动轨道。五个静态章节之间插入四个可拖动视频连接段；桌面文字位于左侧暗场，手机文字位于底部安全区。终章之后进入独立的五图传承墙。

## Components

- Scroll stage: 全屏、无圆角、影像铺满。
- Chapter copy: 限制正文行长，以金色强调章节名称。
- Route navigation: 右侧五节点中轴，支持点击跳转。
- Heritage wall: 非等宽编排的五张原始竖图，保留完整下缘来源标识。
- Provenance note: 明确区分用户提供原图与 AI 衍生场景。

## Motion

只使用可灵生成的连续镜头作为章节连接。滚动进度直接映射视频时间，允许反向回放；文字跟随章节淡入淡出。减少动态模式只保留静态图像。
