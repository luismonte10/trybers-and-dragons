import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  _energyType: EnergyType;
  
  static numArchetype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';

    Warrior.numArchetype += 1;
  }

  static createdArchetypeInstances() {
    return Warrior.numArchetype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Warrior;