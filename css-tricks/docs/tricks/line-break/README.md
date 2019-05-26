# 插入换行
::: tip
在 `Unicode` 中，`0x000A` 字符是专门控制换行的。在 CSS 中，我们可以写为 `\000A` 或 `\A` ,我们可以用它来作为 `::after` 伪元素的内容，并将其添加到指定元素的尾部，实现换行效果
:::

<template>
<div class="wrap">
    <div>
        <span class="br">大鹏一日同风起，扶摇直上九万里.</span>
        <span class="br">假令风歇时下来，犹能簸却沧冥水.</span>
        <span class="br">时人见我恒殊调，闻余大言皆冷笑.</span>
        <span class="br">宣父犹能畏后生，丈夫未可轻年少。</span>
    </div>
</div>
</template>

<style>
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
.br::after {
    content: '\A';
    white-space: pre;
}
</style>

```html
<div>
    <span class="br">大鹏一日同风起，扶摇直上九万里.</span>
    <span class="br">假令风歇时下来，犹能簸却沧冥水.</span>
    <span class="br">时人见我恒殊调，闻余大言皆冷笑.</span>
    <span class="br">宣父犹能畏后生，丈夫未可轻年少。</span>
</div>
```
```css
.br::after {
    content: '\A';
    white-space: pre;
}
```
