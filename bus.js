const Bus = function(route,distance,destination,passenger=[]){
  this.route = route;
  this.distance = distance;
  this.passenger = passenger;
  this.destination = destination;
}

Bus.prototype.drive = function (bus) {
  this.distance += 10;
};

Bus.prototype.howManyPassengers = function (bus) {
   return this.passenger.length;
};

Bus.prototype.pickup = function (bus,person) {
   this.passenger.push(person);
};

Bus.prototype.dropoff = function (bus,person) {
   this.passenger.pop(person);
};

Bus.prototype.empty = function (bus) {
   this.passenger =[];
};
Bus.prototype.pickUpFromStop = function(bus,busstop){
  this.passenger = busstop.queue;
  busstop.queue = [];
}

module.exports = Bus;
