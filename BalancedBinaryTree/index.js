class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

let testCase = new BinaryTreeNode(10);
testCase.insertLeft(9);
testCase.insertRight(10);

const checkTree = (rootNode) =>{
  if(!rootNode.left && !rootNode.right){
    return true
  }
  if(checkTree(rootNode.left) && checkTree(rootNode.right) ){
    return true
  }
  return false
}
console.log(checkTree(testCase));