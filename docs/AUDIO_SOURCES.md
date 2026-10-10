# 示范音来源与核验表

核对日期：2026 年 10 月 10 日。默认状态：**示范音待核验**。

## 实际读取的版本和许可

- [Plain Pinyin](https://github.com/digglesby/plain-pinyin/tree/e467f850e5f2fd63848a7e416a8dc45a8a0e5211)：commit `e467f850e5f2fd63848a7e416a8dc45a8a0e5211`，commit 时间 `2023-08-27T17:23:31Z`。README 的 License 段声明项目除另有说明外使用 MIT；这个固定版本未提供单独的 MIT LICENSE 文件。保留原 README，不虚构版权年份或额外许可文本。
- [音频上游](https://github.com/davinfifield/mp3-chinese-pinyin-sound/tree/aa25ecce7b7fb02757b2c2b8e3c01aa975812edc)：commit `aa25ecce7b7fb02757b2c2b8e3c01aa975812edc`，commit 时间 `2014-04-11T19:46:44Z`。固定版本的 `LICENSE` 是完整 Unlicense，适用于本次直接取得的 14 个原始 MP3。
- 只复用音节映射信息、声调转换参考和 14 个完整音节录音。本项目没有复用 Next.js、Firebase 或原界面组件。录音没有裁剪、拼接或 TTS 替换。
- `vendor/plain-pinyin/` 保留原 README、映射构建和格式参考、About 原文及抽取映射；`vendor/mp3-chinese-pinyin-sound/` 保留原 README 和 LICENSE。`audio-manifest.json` 保存来源路径、Git blob SHA-1、SHA-256、大小、时长和各项核验状态。

## 发音准确性限制

[原项目 About 文件](https://github.com/digglesby/plain-pinyin/blob/e467f850e5f2fd63848a7e416a8dc45a8a0e5211/components/about/about.tsx) 明示作者不是母语者，不能教授普通话，并明确不保证图表准确性。音频上游 README 只有项目名称和简短说明，未提供录音者姓名、资质或逐项审听记录。本次未获得可靠的真人听核，**14 个音节的录音者身份和发音准确性全部待家长确认**。

本次完整性检查只说明下载与指定版本对应、文件可解码；浏览器播放检查只说明浏览器能播放。两者不能证明声母、韵母、声调正确，也不能替代家长或具备拼音教学经验者的试听。

请通过页面「家长设置 → 逐项核对示范音」逐项试听，特别核对 `fǔ` 是第三声。确认是家长人工判断，应用不会判定音准。若有疑点可为该音节选择有权使用的本地替代音频；在确认前不把候选示范音当成孩子正式练习依据。

## 预置音频逐项技术检查

下面每个源文件同时存在于 Plain Pinyin 的 `public/sounds/<编号>/davinfifield.mp3` 和上游的 `mp3/<编号>.mp3`，两处 Git blob SHA-1 完全相同。下载后重新计算 Git blob SHA-1 和字节数，均与上游 Git tree 一致；`ffprobe` 均读出 MP3 音频流；`ffmpeg -v error -xerror -i 文件 -f null -` 均退出 0 且无错误输出。Mac Chrome 已通过页面逐项点击播放 14 项，并在 DevTools 离线模拟中重新加载页面及播放 14 项（网络请求 ERR_INTERNET_DISCONNECTED，由 ServiceWorker 本地缓存响应）。浏览器媒体元素 readyState=4、paused=false、有限时长。没有进行可信发音听核；播放技术结果不能证明发音正确。详见 TEST_RESULTS.md。

| 音节 | 本地文件 | 字节数 | 时长（秒） | 完整性 / 解码 | 发音核验 |
| --- | --- | ---: | ---: | --- | --- |
| bǔ | `audio/bu3.mp3` | 18916 | 1.175 | 通过 / 通过 | 待家长确认 |
| mù | `audio/mu4.mp3` | 20170 | 1.254 | 通过 / 通过 | 待家长确认 |
| pō | `audio/po1.mp3` | 13900 | 0.862 | 通过 / 通过 | 待家长确认 |
| fǎ | `audio/fa3.mp3` | 14736 | 0.914 | 通过 / 通过 | 待家长确认 |
| mǐ | `audio/mi3.mp3` | 26857 | 1.672 | 通过 / 通过 | 待家长确认 |
| pù | `audio/pu4.mp3` | 22259 | 1.384 | 通过 / 通过 | 待家长确认 |
| bó | `audio/bo2.mp3` | 20170 | 1.254 | 通过 / 通过 | 待家长确认 |
| fù | `audio/fu4.mp3` | 24767 | 1.541 | 通过 / 通过 | 待家长确认 |
| mó | `audio/mo2.mp3` | 23095 | 1.437 | 通过 / 通过 | 待家长确认 |
| pà | `audio/pa4.mp3` | 21005 | 1.306 | 通过 / 通过 | 待家长确认 |
| bá | `audio/ba2.mp3` | 15154 | 0.940 | 通过 / 通过 | 待家长确认 |
| fǔ | `audio/fu3.mp3` | 19334 | 1.202 | 通过 / 通过 | 待家长确认 |
| bǐ | `audio/bi3.mp3` | 19334 | 1.202 | 通过 / 通过 | 待家长确认 |
| fā | `audio/fa1.mp3` | 14736 | 0.914 | 通过 / 通过 | 待家长确认 |

## SHA-256 记录

| 音节 | SHA-256 |
| --- | --- |
| bǔ | `9cca0c951f94e59e9aa44a50265da4525c70222e577da4a49791e5e38dd8555e` |
| mù | `bcfac8335833194e057f5529e813a58a84df32d93e8e4c293164ab6394b0131c` |
| pō | `3984808352975c1dca1f5ba4d3e857918cf6e249f9656cea9a574c71e77ced26` |
| fǎ | `866d80f5d3eaeeda13be01e0d5601765932e6a3062a820c02183e7f415bddcbd` |
| mǐ | `71404fd53150a1a12baac1ebe63a1ff23500b94dde7a1f22193feff83e64346f` |
| pù | `8aa41445148b0b8dd766393585119fae2bae6f8c6193668561c8e0e3cf28b596` |
| bó | `7501947141aacfeeec8d6f8c46abc0c9307338b5a2f8f2732e5ea00c8d91dbbf` |
| fù | `d20ac236b2f04b6c5319f06ecdd167223d3c5b5fccd56cff6273e9bcde010bd7` |
| mó | `c9169166bd9830eabd8978cb5feff8d888f1e76ec9010a5687207edd4f57b669` |
| pà | `32d5c86602c6d16855ea0948ef0767e2464e8b27d87809e4ce34a59f799fa5af` |
| bá | `50bd89c4e46ea477797e1f6f3487618c410d8838b8d5ab92b25538dc12d44b75` |
| fǔ | `9e964a1c47a9e50375f1bcf90b390dbc90378b841a3e4e25e6e7785a328d6f5c` |
| bǐ | `a8912d15db57afc5f6a982fc7aac184db9b2a9b277237bf6e87545c3afcfc05d` |
| fā | `ac897661fe2f1d0924ef5a08e768b03afb91b7a56a6215aaf68c60d2063c4e13` |

## 输入字典的边界

`knownSyllables` 是从固定版本音频目录提取、采用标准声调标记生成的白名单，共 1,620 个带第一至第四声标记的条目。它不是经过语言学或教学专家审定的权威全量字典，不能证明对应声音准确。本次排除源目录中的无调条目 `de0`、`dei0`、`le0`、`ne0`，以及不标准的 `luun`、`luun2`、`luun3`、`luun4`；`uu` 转成 `ü` 后按声调标记位置处理。本次预置的 14 个条目不涉及这些修正。

应用以这个白名单识别已知带调拼写；它只有 14 个默认本地音频。添加例如 `mā` 时，应明确提示该具体项「缺音频」，可由家长补充本地音频；白名单以外的带调输入应提示未知音节，而不自动猜读。

## 核验工具

- `ffprobe version 9.0.1 Copyright (c) 2007-2026 the FFmpeg developers`
- `ffmpeg version 9.0.1 Copyright (c) 2000-2026 the FFmpeg developers`
