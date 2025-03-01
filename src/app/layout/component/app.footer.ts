import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Created by
        <a  target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Ibrahim Mansour</a>
    </div>`
})
export class AppFooter {}
