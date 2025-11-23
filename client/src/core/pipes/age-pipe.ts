import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    const today = new Date();
    const dateOfbirth = new Date(value);
    
    let age = today.getFullYear() - dateOfbirth.getFullYear();
    const monthDiff = today.getMonth() - dateOfbirth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfbirth.getDate())) {
      age--;
    }

    return age;
  }

}
