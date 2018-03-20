import 'react-native';
import React            from 'react';
import IAManager        from '../game/IAManager';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <IAManager/>
    );
    expect(tree).toMatchSnapshot();
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <IAManager cards={"frghjkl"} mode={"fghjklm"} callback={"dfghjukilm"} score={"fghjklm"}/>
    );
    expect(tree).toMatchSnapshot();
});


