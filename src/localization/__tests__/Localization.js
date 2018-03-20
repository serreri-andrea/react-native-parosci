import 'react-native';
import React            from 'react';
import Localization     from "../LocalizedStrings";

test('Get localization', () => {
    expect(Localization.getLocalization()).toMatch(/fr|en/);
});

test('Get string of key', () => {
    expect(Localization.getStringOfKey("zertyuiop^mlkbvgf")).toBe("");
    expect(Localization.getStringOfKey("rock")).toMatch(/rock|pierre/);
});



