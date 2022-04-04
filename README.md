```javascript
Describe List()

Test: "Creates an empty Object"
Code: const list = new List()
console.log(list)
Expected Output: {}

Describe Item()

Test: "Creates an item object"
Code: const item = new Item("Take dog on walk")
console.log(item);
Expected Output:{task: "Take dog on walk", isCompleted: false}

Describe List.prototype.addItem()

Test: "Adds an Item object to the List object"
Code: const list = new List();
const item = new Item("Take dog on walk")
list.addItem(item);
console.log(list)
Expected Output:{{task: "Take dog on walk", isCompleted: false}}

Describe List.prototype.assignId()

Test: "Assigns an id to an item object"
Code: const list = new List();
const item = new Item("Take dog on walk")
list.addItem(item);
console.log(list)
Expected Output:{{task: "Take dog on walk", isCompleted: false, id:1}}

Describe List.prototype.deleteItem()

Test: "Deletes an item object by id"
Code: const list = new List();
const item = new Item("Take dog on walk")
list.addItem(item);
list.deleteItem(1);
console.log(list)
Expected Output:{}
```
