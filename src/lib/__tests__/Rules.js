import 'react-native';
import React            from 'react';
import Rules            from "../Rules";

test('Get cards from mode', () => {
    expect(Rules.getCards("classic")).toBeDefined();
    expect(Rules.getCards("extended")).toBeDefined();
    expect(Rules.getCards()).toBeDefined();
    expect(Rules.getCards("zzzzzzzz")).toBeDefined();
});

test('Get victory', () => {
    expect(Rules.getVictory('classic', 'scissors', 'paper')).toBe(1);
    expect(Rules.getVictory('classic', 'paper', 'rock')).toBe(1);
    expect(Rules.getVictory('classic', 'rock', 'scissors')).toBe(1);
    expect(Rules.getVictory('classic', 'paper', 'scissors')).toBe(2);
    expect(Rules.getVictory('classic', 'rock', 'paper')).toBe(2);
    expect(Rules.getVictory('classic', 'scissors', 'rock')).toBe(2);
    expect(Rules.getVictory('classic', 'paper', 'paper')).toBe(0);
    expect(Rules.getVictory('classic', 'rock', 'rock')).toBe(0);
    expect(Rules.getVictory('classic', 'scissors', 'scissors')).toBe(0);
    expect(Rules.getVictory('extended', 'scissors', 'paper')).toBe(1);
    expect(Rules.getVictory('extended', 'scissors', 'lizard')).toBe(1);
    expect(Rules.getVictory('extended', 'paper', 'rock')).toBe(1);
    expect(Rules.getVictory('extended', 'paper', 'spock')).toBe(1);
    expect(Rules.getVictory('extended', 'rock', 'scissors')).toBe(1);
    expect(Rules.getVictory('extended', 'rock', 'lizard')).toBe(1);
    expect(Rules.getVictory('extended', 'paper', 'scissors')).toBe(2);
    expect(Rules.getVictory('extended', 'lizard', 'scissors')).toBe(2);
    expect(Rules.getVictory('extended', 'rock', 'paper')).toBe(2);
    expect(Rules.getVictory('extended', 'spock', 'paper')).toBe(2);
    expect(Rules.getVictory('extended', 'scissors', 'rock')).toBe(2);
    expect(Rules.getVictory('extended', 'lizard', 'rock')).toBe(2);
    expect(Rules.getVictory('extended', 'paper', 'paper')).toBe(0);
    expect(Rules.getVictory('extended', 'rock', 'rock')).toBe(0);
    expect(Rules.getVictory('extended', 'scissors', 'scissors')).toBe(0);
    expect(Rules.getVictory('extended', 'spock', 'spock')).toBe(0);
    expect(Rules.getVictory('extended', 'lizard', 'lizard')).toBe(0);
});




