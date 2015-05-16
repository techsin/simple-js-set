var Set = function(){
	this.arr = [];
	var args = [], len = arguments.length;
	if (len<=0) return this;
	for (var i =0; i<len; i++) this.add(arguments[i]);
};

Set.prototype._addIfNotPresent = function (ele) {
	if(this.arr.indexOf(ele)<0) {
		this.arr.push(ele);
	}
};

Set.prototype.add = function(){
	var args = [], len = arguments.length;

	if (len==0) return this;

	for (var i =0; i<len; i++) args.push(arguments[i]);
	
	args.forEach(function(ele){
		if (ele instanceof Set) ele.each(this._addIfNotPresent.bind(this));
		else if (ele instanceof Array) ele.forEach(function(v){ this._addIfNotPresent(v);},this);
		else this._addIfNotPresent(ele);
	}, this);
	
	return this;
};

Set.prototype.remove = function(ele){
	var i = this.arr.indexOf(ele);
	this.arr.splice(i,1);
};

Set.prototype.update = function(ele, newEle){
	this.remove(ele);
	this.add(newEle);
};

Set.prototype.each =  function(func){
	this.arr.forEach(function(v,i){
		func(v,i);
	},this);
};

Set.prototype.has = function(ele) {
	return this.arr.indexOf(ele)>-1?true:false;
};

Set.prototype.length = function(ele) {
	return this.arr.length;
};


Set.prototype.toArray = function(){
	return this.arr;
};

Set.prototype.toJson =  function(){
	return JSON.stringify(this.arr);
};
