import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  _energyType: EnergyType;
  
  static numArchetype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';

    Mage.numArchetype += 1;
  }

  static createdArchetypeInstances() {
    return Mage.numArchetype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Mage;
