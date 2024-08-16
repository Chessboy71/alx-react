import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('making sure the Year is correct', () => {
  expect(getFullYear()).toBe(2024);
});

test('Testing the FooterCopy return values.', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('Testing the FooterCopy return values.', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('Testing the getLatestNotification return values.', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
