const Bus = require('../bus');
const Person = require('../person');
const Busstop = require('../busstop');

describe('Bus', () => {

  let bus;
  let busstop;
  let passenger1;
  let passenger2;

  beforeEach( () => {
    bus = new Bus("22", 0, "Ocean terminal",[]);
    busstop = new Busstop("Ocean Terminal Stop",[]);
    passenger1 = new Person("Passenger1",35);
    passenger2 = new Person("Passenger2",40);
  })

  test('Bus has route 22', () => {
    expect(bus.route).toBe("22");
  });
  test('Bus has distance 0', () => {
    expect(bus.distance).toBe(0);
  });
  test('Bus has destination Ocean terminal', () => {
    expect(bus.destination).toBe("Ocean terminal");
  });
  test('Bus has driven 10 miles', () => {
    bus.drive();
    expect(bus.distance).toBe(10);
  });
  test('Bus has 0 passengers', () => {
    expect(bus.howManyPassengers()).toBe(0);
  });
  test('Empty the bus.', () => {
    bus.empty();
    expect(bus.howManyPassengers()).toBe(0);
  });
  test('Pickup passenger 1 and 2', () => {
    bus.pickup(passenger1);
    bus.pickup(passenger2);
    expect(bus.howManyPassengers()).toBe(2);
  });
  test('Dropoff passenger 2', () => {
    bus.pickup(passenger1);
    bus.pickup(passenger2);
    bus.dropoff(passenger2);
    expect(bus.howManyPassengers()).toBe(1);
  });
  test('Add to Bus Stop', () => {
    let passengers = ["Freda","Fred"];
    busstop.Formqueue(passengers);
    expect(busstop.howManyPassengers()).toBe(2);
  });
  test('Pickup from Bus Stop add to bus', () => {
    let passengers = ["Freda","Fred","Sally"];
    busstop.Formqueue(passengers);
    bus.pickUpFromStop(bus,busstop);
    expect(bus.howManyPassengers()).toBe(3);
  });
  test('Pickup from Bus Stop remove from queue', () => {
    let passengers = ["Freda","Fred","Sally","Jane"];
    busstop.Formqueue(passengers);
    bus.pickUpFromStop(bus,busstop);
    expect(busstop.howManyPassengers()).toBe(0);
  });
})
