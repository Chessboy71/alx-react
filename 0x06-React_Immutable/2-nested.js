import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mpdObj = fromJS(object);

  return mpdObj.getIn(array, undefined);
}
