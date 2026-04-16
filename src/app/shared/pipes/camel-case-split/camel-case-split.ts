import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelCaseSplit', standalone: true })
export class CamelCaseSplit implements PipeTransform {
  transform(value: string): string {
    return value.split(/(?=[A-Z])/).join(' ');
  }
}
