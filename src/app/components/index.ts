import { coursesListComponents } from './courses-list';
import { BreadcrumbsComponent } from './breadcrumbs';
import { ToolPanelComponent } from './tool-panel';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { IconComponent } from './icon';
import { Forms } from './forms';

export const components = [
    ...coursesListComponents,
    BreadcrumbsComponent,
    ToolPanelComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent,
    ...Forms,
];
