import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  _energyType: EnergyType;
  
  static numArchetype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';

    Ranger.numArchetype += 1;
  }

  static createdArchetypeInstances() {
    return Ranger.numArchetype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Ranger;