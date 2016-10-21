/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Hero} from './hero';

describe('Hero', () => {
        let id = 42;
        let name = 'SkyDog';
        let power = 'Fetch any object at any distance';
        let alterEgo = 'Leslie Rollover';

  it('should create an instance', () => {
    expect(new Hero(id, name, power, alterEgo)).toBeTruthy();
  });

  it('has id', () => {
    let hero: Hero = new Hero(id, name, power, alterEgo);
    expect(hero.id).toEqual(id);
  });

  it('has name', () => {
    let hero: Hero = new Hero(id, name, power, alterEgo);
    expect(hero.name).toEqual(name);
  });
});
