# cil-tab

> A Angular plugins

tab组件，解决多项目跳转公用一个底部tab

## 接受参数
#### zIndex
> zIndex 层级默认99999， 可自己设置
#### background
>background 默认白色背景
#### location
>location 跳转方式；接收字符串格式，默认有历史记录(push)；可以接收 push(有历史记录)以及replace(无历史记录)两种方式
#### defaultSelected
>defaultSelected tab选择了第几个，默认选择1，接收number，1，2，3，4，5
#### baseUrl
> baseUrl 数组格式，为底部tab
```js
// baseUrl默认为：
[
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
      name: 'Home'
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
      name: 'Coupon'
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
      name: 'Point Mall'
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
      name: 'Delivery'
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
      name: 'Membership'
    }
  ];
// 支持传入以下数组：
['https://www.baidu.com','https://www.baidu.com','https://www.baidu.com','https://www.baidu.com','https://www.baidu.com']
[
    {
      url: 'https://www.baidu.com',
      name: 'Home'
    },
    {
      url: 'https://www.baidu.com',
      name: 'Coupon'
    },
    {
      url: 'https://www.baidu.com',
      name: 'Point Mall'
    },
    {
      url: 'https://www.baidu.com',
      name: 'Delivery'
    },
    {
      url: 'https://www.baidu.com',
      name: 'Membership'
    }
 ]
[
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
    },
    {
      icon: 'CDN链接',
      url: 'https://www.baidu.com',
    }
];
```
### 注意baseUrl至少要传递跳转链接！！！！

