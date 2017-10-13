import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';



describe('Welcome', () => {
  it('should render correctly and match the snapshot', () => {
    const wrapper = shallow(<Welcome movie={ {
      EpisodeId: 6,
      openingCrawl:"hi",
      releaseDate: "10/12/17",
      title: "title"
    } }/>);

    expect(wrapper).toMatchSnapshot();
  });
});
