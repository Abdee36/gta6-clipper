# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Abdee36/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Abdee36/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 20-second vertical GTA 6 Short for the make.fun bounty "Clip GTA 6 for the most YouTube views": the hook is Rockstar's official GTA VI Launch Trailer (seconds 63–75 — night crew, helicopter shattering glass, Lucia firing with an explosion behind her), opened with "GTA 6 IS HERE", then a pitch card — "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". Cut and rendered 1080×1920 with ffmpeg in the recorded agent session; the video is the entry, and places go by its YouTube views, the top 20 sharing $500.

## The video

`VIDEO.json` at the repository root names the video's public YouTube address. Its description carries the bounty's line word for word plus the play code `makefun-cascade-ukulele-board`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ztkayn92&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
