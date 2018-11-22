import { searchResultListComponents } from './search-result-list';
import { coursesListComponents } from './courses-list';
import { BreadcrumbsComponent } from './breadcrumbs';
import { ToolPanelComponent } from './tool-panel';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { IconComponent } from './icon';

export const components = [
    ...searchResultListComponents,
    ...coursesListComponents,
    BreadcrumbsComponent,
    ToolPanelComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent
];
