# fork项目并尝试开发的童鞋务必阅读此文档

因为项目使用了`flow`，在开发中可能会遇到一些莫名其妙的问题  
这里有一个灵丹妙药，添加如下注释后，会`disabled`下边一行代码的`flowtype`检查：
```
// #FlowIgnoreAsset
```

> 感谢[@hilu luke](https://github.com/wszgxa)帮忙解决的问题  
> 一些`flowtype`类型的大小写不统一，导致`babel`编译一直失败，后来发现是关键字的原因  
> [docs here](https://flow.org/en/docs/types/functions/)  