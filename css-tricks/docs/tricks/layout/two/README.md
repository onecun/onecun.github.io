# 两栏布局

::: tip
和三栏布局差不多， flex 一把梭
:::

## flex
> 简单强大，一把梭

<template>
<div class="wrap-3">
    <div class="left">左</div>
    <div class="main">主内容</div>
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
    .left {
        width: 100px;
        background-color: orange;
    }
}
</style>
```html
<div class="wrap-3">
    <div class="left">左</div>
    <div class="main">主内容</div>
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
    .left {
        width: 100px;
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
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
    .wrap-4 {
        width: 100%;
        position: relative;
        .main {
            height: 100px;
            margin-left: 100px;
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
    }
</style>
```html
<div class="wrap-4">
    <div class="main">主内容</div>
    <div class="left">左</div>
</div>
```
```scss
.wrap-4 {
    width: 100%;
    position: relative;
    .main {
        height: 100px;
        margin-left: 100px;
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
}
```
## 利用 BFC 布局
> BFC 规则有这样的描述：BFC 区域，不会与浮动元素重叠。因此我们可以利用这一点来实现 2 列布局。

> 内容模块无法最先加载，当页面中内容较多时会影响用户体验 

<template>
<div class="wrap-5">
    <div class="left">左</div>
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
	.main {
	    height: 100px;
	    overflow: hidden;
	    background-color: #3eaf7c;
	}
}
```
## grid
> 强大好用，兼容性差一些

<template>
<div class="wrap-6">
    <div class="left">左</div>
    <div class="main">主内容</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-6 {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100px;
    .main {
        height: 100px;
        background-color: #3eaf7c;
    }
    .left {
        height: 100px;
        background-color: orange;
    }
}
</style>
```html
<div class="wrap-6">
    <div class="left">左</div>
    <div class="main">主内容</div>
</div>
```
```scss
.wrap-6 {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100px;
    .main {
        height: 100px;
        background-color: #3eaf7c;
    }
    .left {
        height: 100px;
        background-color: orange;
    }
}
```

### 其他 Table 布局等，没什么意思，就不写了