export default class Node {
  constructor(obj) {
    this.tag = obj.tag;
    this.classes = obj.classes;
    this.id = obj.id;
    this.child = obj.child;
  }

  static create(obj) {
    const config = {
      tag: 'div',
      classes: [],
      id: '',
      child: null,
      ...obj
    };

    // Create childNode for all nesting level
    if (config.child) {
      config.child = config.child.map(el => Node.create(el));
    }
    return new Node(config);
  }
}


