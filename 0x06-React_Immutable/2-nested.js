import { fromJS, getIn } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const mpdObj = fromJS(object);
  return mpdObj.getIn(array, undefined);
}

console.log(
  accessImmutableObject(
    {
      name: {
        first: 'Guillaume',
        last: 'Salva',
      },
    },
    ['name', 'first']
  )
);
