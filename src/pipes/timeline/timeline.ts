import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeline',
})
export class TimelinePipe implements PipeTransform {
  transform(time: any, reference: any): string {
    // Convert time to date object if not already
    time = new Date(time);
    let ref: Date = new Date(reference);

    // If not a valid timestamp, return 'Invalid Date'
    if (!time.getTime()) {
      return '';
    }

    // For unit testing, we need to be able to declare a static start time
    // for calculations, or else speed of tests can bork.
    let startTime: number = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
    let diff: number = Math.floor((startTime - time.getTime()) / 1000);


    if (diff < 60) {
      return '刚刚';
    }
    // Minutes
    diff = diff / 60;
    if (diff < 2) {
      return '1分钟前';
    }
    if (diff < 60) {
      return Math.floor(diff) + '分钟前';
    }
    // Hours
    diff = diff / 60;
    if (diff < 2) {
      return '1小时前';
    }
    if (diff < 24) {
      return Math.floor(diff) + '小时前';
    }
    // Days
    diff = diff / 24;
    if (diff < 2) {
      return '1天前';
    }
    if (diff < 30) {
      return Math.floor(diff) + '天前';
    }
    // Months
    diff = diff / 30;
    if (diff < 2) {
      return '1个月前';
    }
    if (diff < 12) {
      return Math.floor(diff) + '个月前';
    }
    // Years
    diff = diff / 12;
    if (diff < 2) {
      return '1年';
    } else {
      return Math.floor(diff) + '年';
    }
  }
}
