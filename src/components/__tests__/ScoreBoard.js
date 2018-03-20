import 'react-native';
import React            from 'react';
import ScoreBoard       from "../game/ScoreBoard";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <ScoreBoard/>
    );
    expect(tree).toMatchSnapshot();
});

it('renders correctly: with props', () => {
    const tree = renderer.create(
        <ScoreBoard playerOneCard={"fgyhjuk"} playerTwoCard={"fghjklm"} mode={"fghjklm"} score={"ghjkl"} />
    );
    expect(tree).toMatchSnapshot();
});

it('renders correctly: with props number', () => {
    const tree = renderer.create(
        <ScoreBoard playerOneCard={"paper"} playerTwoCard={"rock"} mode={"classic"} score={{p1Score:0, p2Score:1}} />
    );
    expect(tree).toMatchSnapshot();
});
