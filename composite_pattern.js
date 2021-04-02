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

class Part extends Item {
	constructor(description, cost) {
		super(description, cost);
	}
}

class Assembly extends Item{
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
	
	getItems() {
		return this.items;
	}
	
	getCost() {
		if(this.items.length !== 0 && this.items.length !== 'undefined') {
			let total = 0;
			for(let i = 0; i < this.items.length; i++) {
				total += this.items[i].getCost();
			}
			
			return total;
		}
	}
}

const nut = new Part('Nut', 5);
const bolt = new Part('Bolt', 9);
const panel = new Part('Panel', 35);

const gizmo = new Assembly('Gizmo');

gizmo.addItem(nut);
gizmo.addItem(bolt);
gizmo.addItem(panel);
gizmo.cost = gizmo.getCost();

const widget = new Assembly('Widget');
widget.addItem(gizmo);
widget.addItem(nut);
widget.cost = widget.getCost();

console.log(widget);