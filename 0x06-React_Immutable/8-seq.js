import { Seq } from 'immutable';
export default function printBestStudents(obj) {
  console.log(
    Seq(obj)
      .filter((x) => x.score > 70)
      .map((x) => ({
        score: x.score,
        firstName: x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1),
        lastName: x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1),
      }))
      .toJS()
  );
}
