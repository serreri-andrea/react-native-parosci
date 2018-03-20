import 'react-native';
import React            from 'react';
import CardBoard        from '../game/CardBoard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <CardBoard/>
    );
    expect(tree).toMatchSnapshot();
});

it('renders correctly: with props', () => {
    const tree = renderer.create(
        <CardBoard cards={"ghjk"} callback={"fghjkl"}/>
    );
    expect(tree).toMatchSnapshot();
});

