export default class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }


    insert(key, value) {
        //if tree is empty this inserts the root node
        if (this.key == null) {
            this.key = key;
            this.value = value;
            //if tree already exists, start at the root and compare to the key you want to insert
            //If new key is less than node's key, the new node lives in the left hand branch
        }
        else if (key < this.key) {
            //If existing node does not have a left child, the pointer is empty
            //then we instantiate and insert the new node as the left child of that node
            //this is passed as the parent
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            //If the node has an existing child, then recursively call the insert method
            //so the node is added further down the tree
            else {
                this.left.insert(key, value);
            }
        }
        //if the new key is greater than the node's key, then you insert on the right side
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }

    }

    find(key) {
        //If item is found at the root, return the item
        if (this.key = key) {
            return this.value;
        }
        //If the item you are looking for is less than the root, follow the left child
        //If the left child already exists, then call recursion to check its left or right child
        //until you find the item
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        //If the item you are looking for is greater than the root, follow right child
        //If right child already exists, then call recursion to check its left or right child
        //until you find the item
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        else {
            throw new Error('Cannot find key')
        }


    }

    preOrder() {

        console.log(this.key)
        if (this.left) {
            this.left.preOrder()
        }

        if (this.right) {
            this.right.preOrder();
        }
        // if (key === this.key) {
        //     console.log(this.value)
        // }
        // if (this.left.key < this.key) {
        //     console.log(this.left.value)
        //     this.preOrder()
        // }



    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }

            //If node only has a left child, then replece the node with its left child
            else if (this.left) {
                this._replaceWith(this.left)
            }
            //If node only has a right child, then replace the node with its right child
            else if (this.right) {
                this._replaceWith(this.right)
            }
            //If node has no children then remove it and references to it
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key not found')
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

}


