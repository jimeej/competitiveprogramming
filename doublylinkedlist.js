function addNode(data, previousNode) {
    newNode = {data:data};
    if(previousNode != null) {
        newNode.previous = previousNode;
        previousNode.next = newNode;
    }
    return newNode;
}

function createLinkedList(dataArr) {
    previousNode = {};
    head = previousNode;
    for(i=0;i<dataArr.length;i++) {
        previousNode = addNode(dataArr[i], previousNode);
    }
    return head;
}

head = createLinkedList([5,10,7,9,12]);
console.log(head);