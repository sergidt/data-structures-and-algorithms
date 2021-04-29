export class BinaryTreeNode<K = any> {
    left: BinaryTreeNode<K>;
    right: BinaryTreeNode<K>;
  
    constructor(public data: K) {}
  
      toString(): string {
          return this.data.toString();
      }
  }