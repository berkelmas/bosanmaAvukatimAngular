import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'convertHtmlToText'})
export class convertHtmlToText implements PipeTransform {
  transform(value: string): string {
    return value ? value.replace(/<\/?[^>]+>/ig, '') : '';
  }
}
