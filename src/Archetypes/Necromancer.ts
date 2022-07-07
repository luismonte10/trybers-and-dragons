import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  _energyType: EnergyType;
  
  static numArchetype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';

    Necromancer.numArchetype += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer.numArchetype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Necromancer;