import { Record, List, Map } from 'immutable';

export const Story = Record({
  id:     '',
  read:   false,
  write:  false,
  title:  '',
  author: '',
  owner:  '',
  sections: List(),
  chapters: false
});

export const Section = Record({
  id:          '',
  read:        false,
  write:       false,
  title:       '',
  chapters:    List(),
  description: ''
});

export const Paragraph = Record({
  text: '',
  font: Map({
    size: 'inherit'
  }),
  alignment: 'inherit'
});
