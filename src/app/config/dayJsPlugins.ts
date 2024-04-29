import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(relativeTime);
dayjs.extend(quarterOfYear);
dayjs.extend(updateLocale);

// * Necessary for the correct display of weeks and other dates elements.
dayjs.updateLocale('en', {
  weekStart: 1,
});
