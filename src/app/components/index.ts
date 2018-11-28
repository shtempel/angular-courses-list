import { coursesListComponents } from './courses-list';
import { AddNewFormComponents } from './add-new-form';
import { BreadcrumbsComponent } from './breadcrumbs';
import { ToolPanelComponent } from './tool-panel';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { IconComponent } from './icon';

export const components = [
    ...coursesListComponents,
    ...AddNewFormComponents,
    BreadcrumbsComponent,
    ToolPanelComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent,
];
