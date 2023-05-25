import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() popoverTitle!: string;
  @Input() popoverContent!: any;
  @Input() buttonColor!: string;

  ngOnInit(): void {
    
  }

  getContentValueForPopover(_values: any) {
    return _values.join(' <br> ')
  }

  cutString(entry: string, limit: number, byte: string) {
    if (limit < 4) {
      return 'Insert a limit higher than 4'
    }

    let result
    result = entry.substring(0, limit)

    if (result.length < limit) {
      for (let i = 0; i < (limit - result.length); i++) {
        result += byte;
      }
    } else {
      console.log(result[limit])
      result = result.substring(0, limit - 3) + '...'
    }
    
    return result
  }
}
