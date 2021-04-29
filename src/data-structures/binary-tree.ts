import { BinaryTreeNode } from "./definitions";
import { printTree } from "./utils";

export default class BinaryTree<T> {
  protected _root: BinaryTreeNode<T>;

  get root() {
    return this._root;
  }

  insert(data: T) {
    if (!this._root) this._root = new BinaryTreeNode(data);
    else this.insertNode(this._root, data);
  }

  protected insertNode(node: BinaryTreeNode<T>, data: T) {
    console.log("inserting ", node.data);
    if (!node.left) node.left = new BinaryTreeNode(data);
    else if (!node.right) node.right = new BinaryTreeNode(data);
    else this.insertNode(node.left, data);
    console.log(this);
  }

  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this._root, callback);
  }

  private inOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.data);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this._root, callback);
  }

  private preOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function) {
    if (node != null) {
      callback(node.data);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this._root, callback);
  }

  private postOrderTraverseNode(node: BinaryTreeNode<T>, callback: Function) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.data);
    }
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
