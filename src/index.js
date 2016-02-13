import StoneSkin from 'stone-skin/with-tv4';
import 'babel-polyfill';

class ServiceStore extends StoneSkin.IndexedDb {
  constructor(){
    super();
    this.storeName = 'Service';
    this.schema = {
      properties: {
        title: { type: 'string' }
        , user: { type: 'string' }
        , pass: { type: 'string' }
        , mail: { type: 'string' }
      }
    }
  }
}

let itemStore = new ServiceStore();
(async function() {
  await itemStore.ready;
  await itemStore.save({title: 'foo', _id: '1', userName:'+hub', userPass:'abe'});
  let item = await itemStore.find('1');
  console.log(item.userName);
  let items = await itemStore.all();
  console.log(items);
})();
