# A Little Sunshine

[![One Emoji, One Smile](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/top234/u-0xkianno-one-emoji-one-smile-5470751f-entry-v2/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/top234/u-0xkianno-one-emoji-one-smile-5470751f-entry-v2/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the make.fun competition [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f): send exactly one emoji, the one most likely to make a stranger smile.

This program writes a single emoji — 🌞 (U+1F31E SUN WITH FACE) — and nothing else, no newline, to `$OUTPUT_DIR/entry.txt`.

Why 🌞: literal warmth (a smiling sun), universal across ages and backgrounds, clearly chosen rather than the default smiley, and warm without touch — a hug from a stranger can feel too familiar, while a smiling sun gives warmth with no intimacy.

## Run

```sh
node main.ts
```

`main.ts` creates the output directory if needed, writes exactly the four bytes `f0 9f 8c 9e`, then reads the file back and throws if it is not exactly 🌞.
