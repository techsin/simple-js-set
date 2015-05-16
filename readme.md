# Simple JS Set

Simple JS Set is a JavaScript implementation of `Set` that can be used to house any type of JavaScript object. It is a simple set with the following API:

#### `new Set(Array || String || Number || Set || Function || Object)`
Constructor. Instantiate a new set with the given `hashFunction` (defaults to `JSON.stringify`).

#### `add(Array || String || Number || Set || Function || Objec)`
Add an item to the set.

#### `remove(item)`
Remove an item from the set.

#### `has(item)`
Return whether or not the item is contained in the set.

#### `update(item, new item)`
Replace the item with new item.

#### `length()`
Return the number of unique items in the set.

#### `each(function(item))`
Execute a function with each item in the set.

#### `toArray()`
Returns an array.

#### `toJson(item)`
Returns set in json formatted form.
