import 'react-native';
import React            from 'react';
import GameManager      from '../game/GameManager';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <GameManager/>
    );
    expect(tree).toMatchSnapshot();
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <GameManager type={"hytgdefesefre"} mode={"fregfregregregre"} difficulty={"dedededede"} updateGame={42}/>
    );
    expect(tree).toMatchSnapshot();
});



