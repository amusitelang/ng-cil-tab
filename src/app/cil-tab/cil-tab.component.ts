import { Component, Input, OnChanges } from '@angular/core';
import { coupon, couponed,  pointMall, pointMalled, home, homeed, delivery, deliveryed, menbership, menbershiped } from './cil-tab.data';


@Component({
  selector: 'cil-tab',
  templateUrl: './cil-tab.component.html',
  styleUrls: ['./cil-tab.component.scss']
})
export class CilLxTabComponent implements OnChanges {
  @Input() zIndex: number = 99999;
  @Input() background: string = '#ffffff';
  @Input() defaultSelected: number = 1;
  @Input() baseUrl: any = [];
  @Input() location: 'push' | 'replace' = 'push';
  urlList: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.defaultData();
  }


  defaultData() {
    let arr = this.baseUrl;
    let arr1 = [
      {
        icon: home,
        url: 'https://www.baidu.com',
        name: 'Home'
      },
      {
        icon: coupon,
        url: 'https://www.baidu.com',
        name: 'Coupon'
      },
      {
        icon: pointMall,
        url: 'https://www.baidu.com',
        name: 'Point Mall'
      },
      {
        icon: delivery,
        url: 'https://www.baidu.com',
        name: 'Delivery'
      },
      {
        icon: menbership,
        url: 'https://www.baidu.com',
        name: 'Membership'
      }
    ];
    let iconArr = [home, coupon, pointMall, delivery, menbership];
    switch (this.defaultSelected - 1) {
      case 0:
        iconArr = [homeed, coupon, pointMall, delivery, menbership];
        break;
      case 1:
        iconArr = [home, couponed, pointMall, delivery, menbership];
        break;
      case 2:
        iconArr = [home, coupon, pointMalled, delivery, menbership];
        break;
      case 3:
        iconArr = [home, coupon, pointMall, deliveryed, menbership];
        break;
      case 4:
        iconArr = [home, coupon, pointMall, delivery, menbershiped];
        break;
    }
    for (var i  = 0; i< arr.length; i++) {
      if (typeof arr[i] === 'string') {
        arr1[i]['url'] = arr[i];
        arr1[i]['icon'] = iconArr[i];
      } else if (typeof arr[i] === 'object') {
        if (arr[i]['url']) {
          arr1[i]['url'] = arr[i]['url'];
        }

        if (arr[i]['icon']) {
          arr1[i]['icon'] = arr[i]['icon'];
          iconArr[i] = arr[i]['icon'];
        } else {
          arr1[i]['icon'] = iconArr[i];
        }

        if (arr[i]['name']) {
          arr1[i]['name'] = arr[i]['name'];
        }
      } else {
        arr1[i] = arr[i];
      }
    }
    this.urlList = arr1;
  }

  handleGo(item) {
    if (location.href === item.url) {
      location.reload(true)
      return;
    }
    if (this.location === 'push') {
      location.href = item.url;
    } else if (this.location === 'replace') {
      location.replace(item.url);
    }

  }

}
