# 三栏布局
::: tip
别说了，flex 一把梭！
:::

## flex
> 简单强大，一把梭

<template>
<div class="wrap-3">
    <div class="left">左</div>
    <div class="main">主内容</div>
    <div class="right">右</div>
</div>
</template>

 <style lang='scss' rel='stylesheet/scss' scoped>
.wrap-3 {
    display: flex;
    width: 100%;
    height: 100px;
    .main {
        flex: 1;
        background-color: #3eaf7c;
    }
    .left, .right {
        width: 100px;
        background-color: orange;
    }
}
</style>
```html
<div class="wrap-3">
    <div class="left">左</div>
    <div class="main">主内容</div>
    <div class="right">右</div>
</div>
```
```scss
.wrap-3 {
    display: flex;
    width: 100%;
    height: 100px;
    .main {
        flex: 1;
        background-color: #3eaf7c;
    }
    .left, .right {
        width: 100px;
        background-color: orange;
    }
}
```
## grid
> 强大好用，兼容性差一些

<template>
<div class="wrap-6">
    <div class="left">左</div>
    <div class="main">主内容</div>
    <div class="right">右</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-6 {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 100px;
    .main {
        height: 100px;
        background-color: #3eaf7c;
    }
    .left {
        height: 100px;
        background-color: orange;
    }
    .right {
        height: 100px;
        background-color: orange;
    }
}
</style>
```html
<div class="wrap-6">
    <div class="left">左</div>
    <div class="main">主内容</div>
    <div class="right">右</div>
</div>
```
```scss
.wrap-6 {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 100px;
    .main {
        height: 100px;
        background-color: #3eaf7c;
    }
    .left {
        height: 100px;
        background-color: orange;
    }
    .right {
        height: 100px;
        background-color: orange;
    }
}
```

## position
> 简单实用，并且主要内容可以优先加载。

<template>
<div class="wrap-4">
    <div class="main">主内容</div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
    .wrap-4 {
        width: 100%;
        position: relative;
        .main {
            height: 100px;
            margin: 0 100px;
            background-color: #3eaf7c;
        }
        .left {
            width: 100px;
            position: absolute;
            height: 100px;
            top: 0;
            left: 0;
            background-color: orange;
        }
        .right {
            width: 100px;
            position: absolute;
            height: 100px;
            top: 0;
            right: 0;
            background-color: orange;
        } 
    }
</style>
```html
<div class="wrap-4">
    <div class="main">主内容</div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
```
```scss
.wrap-4 {
    width: 100%;
    position: relative;
    .main {
        height: 100px;
        margin: 0 100px;
        background-color: #3eaf7c;
    }
    .left {
        width: 100px;
        position: absolute;
        height: 100px;
        top: 0;
        left: 0;
        background-color: orange;
    }
    .right {
        width: 100px;
        position: absolute;
        height: 100px;
        top: 0;
        right: 0;
        background-color: orange;
    } 
}
```

## 圣杯布局
> 在屏幕宽度小于 wrap 宽度时，页面会错乱

> HTML 结构相对简单，样式定义就稍微复杂，优先加载内容主体

<template>
<div class="wrap-1">
    <div class="main">主内容</div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-1 {
   margin: 0 120px;
   &:after {
        content:'';
        display: block;
        overflow: hidden;
        clear: both;
   }
    .left,.right,.main {
        height: 100px;
    }
    .main {
        float: left;
        width: 100%;
        background-color: #3eaf7c;
    }
    .left {
        float: left;
        width: 120px;
        background-color: orange;
        margin-left: -100%;
        position: relative;
        left: -120px;
    }
    .right {
        width: 120px;
        float: left;
        background-color: orange;
        margin-left: -120px;
        position: relative;
        right: -120px;
    }
}
</style>

```html
<div class="wrap">
    <div class="main">主内容</div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
```
```scss
.wrap {
   margin: 0 120px;
   &:after {
        content:'';
        display: block;
        overflow: hidden;
        clear: both;
   }
    .left,.right,.main {
        height: 100px;
    }
    .main {
        float: left;
        width: 100%;
        background-color: #3eaf7c;
    }
    .left {
        float: left;
        width: 120px;
        background-color: orange;
        margin-left: -100%;
        position: relative;
        left: -120px;
    }
    .right {
        width: 120px;
        float: left;
        background-color: orange;
        margin-left: -120px;
        position: relative;
        right: -120px;
    }
}
```

## 双飞翼布局
> 相比 `圣杯布局` 修复了在屏幕宽度小于 `wrap` 宽度时，页面会错乱 的问题

> 主体内容可以优先加载，HTML 代码结构稍微复杂点。

双飞翼布局和圣杯布局原理差不多，只是在 `<div.main>` 多包了层 `<div>`
<template>
<div class="wrap-2">
    <div class="main-content">
        <div class="main">主内容</div>
    </div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-2 {
    width: 100%;
    &::after {
        display: block;
        content: '';
        font-size: 0;
        height: 0;
        clear: both;
    }
    .main-content {
        float: left;
        width: 100%;
        .main {
            height: 100px;
            background-color: #3eaf7c;
            margin-left: 100px;
            margin-right: 100px;
        }
    }
    .left {
        float: left;
        width: 100px;
        height: 100px;
        background-color: orange;
        margin-left: -100%;
    }
    .right {
        float: left;
        width: 100px;
        height: 100px;
        background-color: orange;
        margin-left: -100px;
    }
}
</style>
```html
<div class="wrap-2">
    <div class="main-content">
        <div class="main">主内容</div>
    </div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
```
```scss
.wrap-2 {
    width: 100%;
    &::after {
        display: block;
        content: '';
        font-size: 0;
        height: 0;
        clear: both;
    }
    .main-content {
        float: left;
        width: 100%;
        .main {
            height: 100px;
            background-color: #3eaf7c;
            margin-left: 100px;
            margin-right: 100px;
        }
    }
    .left {
        float: left;
        width: 100px;
        height: 100px;
        background-color: orange;
        margin-left: -100%;
    }
    .right {
        float: left;
        width: 100px;
        height: 100px;
        background-color: orange;
        margin-left: -100px;
    }
}
```
## 利用 BFC 布局
> BFC 规则有这样的描述：BFC 区域，不会与浮动元素重叠。因此我们可以利用这一点来实现 3 列布局。

> 内容模块无法最先加载，当页面中内容较多时会影响用户体验 

<template>
<div class="wrap-5">
    <div class="left">左</div>
    <div class="right">右</div>
    <div class="main">主内容</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-5 {
    .left {
        float: left;
        height: 100px;
        width: 100px;
        background-color: orange;
	}
    .right {
	    width: 100px;
	    height: 100px;
	    float: right;
	    background-color: orange;
	}	
	.main {
	    height: 100px;
	    overflow: hidden;
	    background-color: #3eaf7c;
	}
}
</style>
```html
<div class="wrap-5">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
<div>
```
```scss
.wrap-5 {
    .left {
        float: left;
        height: 100px;
        width: 100px;
        background-color: orange;
	}
    .right {
	    width: 100px;
	    height: 100px;
	    float: right;
	    background-color: orange;
	}	
	.main {
	    height: 100px;
	    overflow: hidden;
	    background-color: #3eaf7c;
	}
}
```

### 其他 Table 布局等，没什么意思，就不写了