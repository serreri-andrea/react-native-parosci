import 'react-native';
import React            from 'react';
import Answers          from "../Answers";

test('Get easy IA answer', () => {
    expect(Answers.answersIAEasy("classic")).toMatch(/rock|paper|scissors/);
    expect(Answers.answersIAEasy("extended")).toMatch(/rock|paper|scissors|lizard|spock/);
    expect(Answers.answersIAEasy("")).toMatch(/rock|paper|scissors/);
    expect(Answers.answersIAEasy()).toMatch(/rock|paper|scissors/);
});

test('Get hard IA answer', () => {
    expect(Answers.answersIACheat('classic', 'scissors')).toBe('rock');
    expect(Answers.answersIACheat('classic', 'paper')).toBe('scissors');
    expect(Answers.answersIACheat('classic', 'rock')).toBe('paper');
    expect(Answers.answersIACheat('extended', 'scissors')).toMatch(/rock|spock/);
    expect(Answers.answersIACheat('extended', 'paper')).toMatch(/scissors|lizard/);
    expect(Answers.answersIACheat('extended', 'rock')).toMatch(/paper|spock/);
    expect(Answers.answersIACheat('extended', 'spock')).toMatch(/paper|lizard/);
    expect(Answers.answersIACheat('extended', 'lizard')).toMatch(/scissors|rock/);
    expect(Answers.answersIACheat()).toMatch(/rock|paper|scissors/);
});

test('Get medium IA answer', () => {
    expect(Answers.answersIAMedium()).toMatch(/rock|paper|scissors/);
    expect(Answers.answersIAMedium("classic", "paper", "paper")).toMatch(/rock|paper|scissors/);
});




