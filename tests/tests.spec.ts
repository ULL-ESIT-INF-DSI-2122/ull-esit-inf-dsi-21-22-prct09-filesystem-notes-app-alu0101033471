import 'mocha';
import {expect} from 'chai';
import {Add} from '../src/add';
import {List} from '../src/list';
import {Read} from '../src/read';
import {Remove} from '../src/remove';
import {addOpcion, readOpcion, removeOpcion, listOpcion, modifyOpcion} from '../src/index';
import { Modify } from '../src/modify';

describe('Test de la Clase Add',() => {
  it ('addOpcion',() => { 
    expect(addOpcion instanceof Add).to.eql (true);
    expect(addOpcion.addNote()).not.to.equal (null);
  });
});
describe('Test de la Clase List',() => {
  it ('listOpcion',() => { 
    expect(listOpcion instanceof List).to.eql (true);
    expect(listOpcion.listNote()).not.to.equal (null);
  });
});
describe('Test de la Clase Read',() => {
  it ('readOpcion',() => { 
    expect(readOpcion instanceof Read).to.eql (true);
    expect(readOpcion.readNote()).not.to.equal (null);
  });
});
describe('Test de la Clase Remove',() => {
  it ('removeOpcion',() => { 
    expect(removeOpcion instanceof Remove).to.eql (true);
    expect(removeOpcion.removeNote()).not.to.equal (null);
  });
});
describe('Test de la Clase Modify',() => {
  it ('modifyOpcion',() => { 
    expect(modifyOpcion instanceof Modify).to.eql (true);
    expect(modifyOpcion.modifyNote()).not.to.equal (null);
  });
});