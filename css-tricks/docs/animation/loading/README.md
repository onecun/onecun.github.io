# 加载动画

## 加载动画1
<template>
<div class="wrap">
    <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
    </svg>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    background-color: #090821;
    display: flex;
    justify-content: center;
    align-items: center;
}

svg {
  width: 50px;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>

```html
<svg viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20"></circle>
</svg>
```
```css
svg {
  width: 50px;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
```
## 加载动画2
<template>
<div class="wrap-1">
    <div class="box">
        <div class="plane"></div>
    </div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-1 {
    background-color: #090821;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}

.box {
  perspective: 120px;
}

.plane {
  width: 50px;
  height: 50px;
  background-color: #fc2f70;
  transform: rotate(0);
  animation: flip 2s infinite;
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
</style>
```html
<div class="box">
    <div class="plane"></div>
</div>
```

```css
.box {
  perspective: 120px;
}

.plane {
  width: 50px;
  height: 50px;
  background-color: #fc2f70;
  transform: rotate(0);
  animation: flip 2s infinite;
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
```

## 加载动画3
<template>
<div class="wrap-3">
    <div class="loading3"></div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-3 {
    background-color: #090821;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}

.loading3 {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
```html
<div class="loading3"></div>
```

```css
.loading3 {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

## 加载动画4

<template>
<div class="wrap-4">
    <div class="dots">
        <div class="loading4"></div>
        <div class="loading4"></div>
        <div class="loading4"></div>
    </div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-4 {
    background-color: #090821;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
}

.dots {
  width: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dots .loading4 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots .loading4:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots .loading4:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
```html
<div class="dots">
    <div class="loading4"></div>
    <div class="loading4"></div>
    <div class="loading4"></div>
</div>
```
```css
.dots {
  width: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dots .loading4 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots .loading4:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots .loading4:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```
---
[更多动画效果](https://cssfx.dev/)