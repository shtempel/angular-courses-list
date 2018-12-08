import { TestBed } from '@angular/core/testing';

import { CourseItemsService } from './course-items.service';

describe('CourseItemsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CourseItemsService = TestBed.get(CourseItemsService);
        expect(service).toBeTruthy();
    });
});
