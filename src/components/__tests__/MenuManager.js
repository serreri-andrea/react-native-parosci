import 'react-native';
import React            from 'react';
import MenuManager      from '../menu/MenuManager';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <MenuManager/>
    );
    expect(tree).toMatchSnapshot();
});


it('renders correctly: with', () => {
    const tree = renderer.create(
        <MenuManager callback={"rftgyhjukiolp"}/>
    );
    expect(tree).toMatchSnapshot();
});

