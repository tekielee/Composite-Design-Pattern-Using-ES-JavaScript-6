class Item {
	constructor(description, cost) {
		this.description = description;
		this.cost = cost;
	}
	
	getDescription() {
		return this.description;
	}
	
	getCost() {
		return this.cost;
	}
}

class Assembly extends Item {
	constructor(description) {
		super(description, 0);
		this.items = [];
	}
	
	addItem(item) {
		this.items.push(item);
	}
	
	removeItem(item) {
		let index = this.items.indexOf(item);
		this.items.splice(index, 1);
	}
	
	getCost() {
		let total = 0;
		for(let i = 0; i < this.items.length; i++) {
			total += this.items[i].getCost();
		}
		
		this.cost = total;
		return this.cost;
	}
}

const nut = new Item('Nut', 5);
const bolt = new Item('Bolt', 9)
const panel = new Item('Panel', 35)

const gizmo = new Assembly('gizmo');

gizmo.addItem(nut);
gizmo.addItem(bolt);
gizmo.addItem(panel);
gizmo.getCost();
console.log(gizmo.cost);
gizmo.removeItem(bolt);
gizmo.getCost();
console.log(gizmo.cost);

const widget = new Assembly('widget');
widget.addItem(gizmo);
widget.addItem(nut);
widget.getCost();

console.log(widget);
console.log(widget.cost);