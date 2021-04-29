import { BinaryTree } from "./binary-tree";
import { BinaryTreeNode } from "./definitions";
import { printTree } from "./utils";

export class BinarySearchTree<T> extends BinaryTree<T> {
  protected _root: BinaryTreeNode<T>;

  get root() {
    return this._root;
  }

  insert(data: T) {
    if (!this._root) this._root = new BinaryTreeNode(data);
    else this.insertNode(this._root, data);
  }

  search(data: T) {
      throw new Error('Search method not implemented!');
  }

  protected insertNode(node: BinaryTreeNode<T>, data: T) {
    if (!node.left) node.left = new BinaryTreeNode(data);
    else if (!node.right) node.right = new BinaryTreeNode(data);
    else this.insertNode(node.left, data);
  }

}

export function binaryTreeTest() {
  const tree: BinaryTree<string> = new BinaryTree<string>();

  tree.insert("ROOT");
  tree.insert("A");
  tree.insert("B");
  tree.insert("C");
  tree.insert("D");
  tree.insert("E");
  printTree(tree.root);
  console.log(tree);
}
