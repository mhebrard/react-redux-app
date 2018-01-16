import * as t from './action-types';

// Pick a random color in the list below
const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
export function switchColor() {
  return {
    type: t.SWITCH_COLOR,
    payload: colors[Math.floor(Math.random() * colors.length)]
  };
}

// Action template
export function other() {
  return {
    type: t.OTHER,
    payload: {}
  };
}
