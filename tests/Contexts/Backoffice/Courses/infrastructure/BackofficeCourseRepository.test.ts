import container from '../../../../../src/apps/backoffice/backend/dependency-injection';
import { BackofficeCourse } from '../../../../../src/Contexts/Backoffice/Courses/domain/BackofficeCourse';
import { ElasticBackofficeCourseRepository } from '../../../../../src/Contexts/Backoffice/Courses/infrastructure/persistence/ElasticBackofficeCourseRepository';
import { EnvironmentArranger } from '../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { BackofficeCourseCriteriaMother } from '../domain/BackofficeCourseCriteriaMother';
import { BackofficeCourseMother } from '../domain/BackofficeCourseMother';

const repository: ElasticBackofficeCourseRepository = container.get('Backoffice.courses.BackofficeCourseRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Backoffice.Backend.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterEach(async () => {
  await (await environmentArranger).arrange();
});

describe('BackofficeCourseRepository', () => {
  describe('#searchAll', () => {
    it('should return the existing courses', async () => {
      const courses = [BackofficeCourseMother.random(), BackofficeCourseMother.random()];

      await Promise.all(courses.map(async course => repository.save(course)));

      const expectedCourses = await repository.searchAll();

      expect(courses).toHaveLength(expectedCourses.length);
      expect(courses.sort(sort)).toEqual(expectedCourses.sort(sort));
    });
  });

  describe('#searchByCriteria', () => {
    it('should return all courses', async () => {
      const courses = [
        BackofficeCourseMother.withNameAndDuration('DDD in Typescript', '8 days'),
        BackofficeCourseMother.withNameAndDuration('DDD in Golang', '3 days'),
        BackofficeCourseMother.random()
      ];

      await Promise.all(courses.map(async course => repository.save(course)));
      const result = await repository.matching(BackofficeCourseCriteriaMother.whithoutFilter());

      expect(result).toHaveLength(3);
    });

    it('should return courses using a criteria sorting by id', async () => {
      const courses = [
        BackofficeCourseMother.withNameAndDuration('DDD in Typescript', '8 days'),
        BackofficeCourseMother.withNameAndDuration('DDD in Golang', '3 days'),
        BackofficeCourseMother.random()
      ];
      await Promise.all(courses.map(async course => repository.save(course)));
      const result = await repository.matching(
        BackofficeCourseCriteriaMother.nameAndDurationContainsSortAscById('DDD', 'days')
      );

      const expectedCourses = courses.slice(0, 2);
      expect(result).toHaveLength(2);
      expect(expectedCourses.sort(sort)).toEqual(result);
    });
  });
});

function sort(backofficeCourse1: BackofficeCourse, backofficeCourse2: BackofficeCourse): number {
  return backofficeCourse1?.id?.value.localeCompare(backofficeCourse2?.id?.value);
}
