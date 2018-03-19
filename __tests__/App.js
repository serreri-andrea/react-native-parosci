import 'react-native';
import React            from 'react';
import App              from '../src/index';
import StatusBarManager from "../src/components/header/StatusBarManager";
import HeaderManager    from "../src/components/header/HeaderManager";
import Rules            from "../src/components/rules/Rules";
import About            from "../src/components/about/About";
import GameManager      from "../src/components/game/GameManager";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <StatusBarManager/>
    );
});

it('renders correctly: with props', () => {
    const tree = renderer.create(
        <StatusBarManager barStyle={"cooper"} backgroundColor={"sheldon"} />
    );
});

it('renders correctly: with props number', () => {
    const tree = renderer.create(
        <StatusBarManager barStyle={42} backgroundColor={84} />
    );
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <HeaderManager/>
    );
});

it('renders correctly: with props', () => {
    const tree = renderer.create(
        <HeaderManager callback={"sheldon"}/>
    );
});

it('renders correctly: with props number', () => {
    const tree = renderer.create(
        <HeaderManager callback={42}/>
    );
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <Rules/>
    );
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <About/>
    );
});

it('renders correctly: without props', () => {
    const tree = renderer.create(
        <GameManager/>
    );
});

