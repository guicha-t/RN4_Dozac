import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CocktailCard from '../components/CocktailCard';
import Header from '../components/Header';
import LoadingIcon from '../components/LoadingIcon';

it('CocktailCard - renders correctly', () => {
  const tree = renderer.create(<CocktailCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Header - renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('LoadingIcon - renders correctly', () => {
  const tree = renderer.create(<LoadingIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
