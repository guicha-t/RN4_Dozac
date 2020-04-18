/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CocktailCard from '../components/CocktailCard';
import LoadingIcon from '../components/LoadingIcon';
import Cocktails from '../screen/Cocktails';
import Ingredients from '../screen/Ingredients';
import App from '../../App';

it('CocktailCard - renders correctly', () => {
  const tree = renderer.create(<CocktailCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Cocktails - renders correctly', () => {
  const tree = renderer.create(<Cocktails />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Ingredients - renders correctly', () => {
  const tree = renderer.create(<Ingredients />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('LoadingIcon - renders correctly', () => {
  const tree = renderer.create(<LoadingIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('AppJs - renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
