# LocalStorage.js

Little wrapper to avoid adding stringify and parse method on each store call.

## functions

### save(key, value)

Save the value at the specified key. value is stringified before saving.

_Exemple :_

	localStorage.save('foo', {foo: bar});

	console.log(localStorage.get('foo'));

	/* Console outpout
	{
	  foo: bar
	}
	*/

### get(key)

Get the value stored at the specified key. value is parsed to get javascript objects.

_Exemple :_

	localStorage.save('foo', {foo: bar});

	console.log(localStorage.get('foo'));

	/* Console outpout
	{
	  foo: bar
	}
	*/