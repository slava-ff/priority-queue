class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left != null && this.right != null) {
			return;
		} else
		if (this.left != null) {
			this.right = node;
		} else {this.left = node;}
		node.parent = this; // ?????????????????????????????
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
		} else 
		if (this.right === node) {
			this.right = null;
		} else {
			throw new Error();
		}
		node.parent = null;
		//console.log('removeChild: ', this);
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		//console.log('this: ', this);
	}

	swapWithParent() {
		if (!this.parent) {
			return;
		}
		
		
	}
}

module.exports = Node;
