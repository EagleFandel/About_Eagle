# about_me

基于 Next.js 构建的个人作品集网站，包含叙事式首页与可切换模式的双语简历页。

## 项目特点

- 叙事式单页首页：聚合个人介绍、项目精选、能力体系、获奖与社区角色等模块。
- 双语内容支持：核心内容支持中英切换（`zh` / `en`）。
- 动效驱动体验：使用 GSAP 滚动触发动画、Lenis 平滑滚动与粒子背景增强表现力。
- 简历双模式：`Editorial`（视觉展示）与 `ATS`（机器可读）两种简历输出模式。
- 一键导出：简历页支持打印 / 导出 PDF。

## 技术栈

- `Next.js 16`
- `React 19`
- `TypeScript`
- `GSAP`
- `Lenis`
- `Three.js` + `@react-three/fiber` + `@react-three/drei`

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址：

- 首页：`http://localhost:3000/`
- 简历页：`http://localhost:3000/resume`

## 常用脚本

```bash
npm run dev        # 启动开发服务器
npm run build      # 生产构建
npm run start      # 启动生产服务
npm run lint       # 代码检查
npm run typecheck  # TypeScript 类型检查
```

## 简历页参数

`/resume` 支持 query 参数切换语言与展示模式：

- `lang=zh|en`
- `mode=editorial|ats`

示例：

- `http://localhost:3000/resume?lang=en&mode=editorial`
- `http://localhost:3000/resume?lang=zh&mode=ats`

## 项目结构

```text
src/
  app/                  # Next.js 路由与页面
  components/           # 页面与动效组件
  content/              # 个人资料、项目、简历等内容数据
  i18n/                 # 界面文案与多语言消息
  lib/                  # 音频与设备能力相关工具
  types/                # TypeScript 类型定义
public/
  audio/                # 背景音频资源
  images/               # 图片资源
```
