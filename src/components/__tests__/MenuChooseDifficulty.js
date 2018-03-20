import 'react-native';
import React                    from 'react';
import MenuDifficulty           from "../menu/MenuChooseDifficulty";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <MenuDifficulty/>
    );
    expect(tree).toMatchSnapshot();
});


it('renders correctly: with', () => {
    const tree = renderer.create(
        <MenuDifficulty mode={"dededede"} type={"dedededede"} difficulty={"dedededed"} updatePreset={"dededee"}/>
    );
    expect(tree).toMatchSnapshot();
});

