import { Record, List, Map } from 'immutable';

export const Test = Record({
  id:          '',
  read:        false,
  write:       false,
  title:       '',
  chapters:    List(),
  description: ''
});
