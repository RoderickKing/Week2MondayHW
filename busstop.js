const Busstop = function(name,queue =[]){
  this.name = name;
  this.queue = queue;
}

Busstop.prototype.Formqueue = function (queue = []) {
   this.queue = queue;
};
Busstop.prototype.howManyPassengers = function (Busstop) {
   return this.queue.length;
}

module.exports = Busstop;
