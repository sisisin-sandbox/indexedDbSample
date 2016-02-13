import StoneSkin from 'stone-skin/with-tv4';
import 'babel-polyfill';

class ItemStore extends StoneSkin.IndexedDb {
  constructor(){
    super();
    this.storeName = 'Item';
    this.schema = {
      properties: {
        title: {
          type: 'string'
        }
      }
    }
  }
}

let itemStore = new ItemStore();
(async function() {
  await itemStore.ready;
  await itemStore.save({title: 'foo', _id: '1'});
  let item = await itemStore.find('xxx');
  console.log(item);
  let items = await itemStore.all();
  console.log(items);
})();
