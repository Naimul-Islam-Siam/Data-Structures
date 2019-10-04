class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    show() {
        console.log(this.adjacencyList);
    }

    addVertex(vertex) {
        // if vertex is already in the graph, stop! throw error
        if (this.adjacencyList[vertex]) throw `${vertex} is already in the list`;

        //if vertex is not there, proceed to create
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(sourceVertex, destinationVertex, weight) {
        if (!this.adjacencyList[sourceVertex]) this.addVertex(sourceVertex); //if sourceVertex doesn't exist, first create sourceVertex
        if (!this.adjacencyList[destinationVertex]) this.addVertex(destinationVertex); //if destinationVertex doesn't exist, first create destinationVertex

        //if sourceVertex and destinationVertex are already connected, stop! throw an error
        if (this.findEdge(sourceVertex, destinationVertex))
            throw `There's already an edge between ${sourceVertex} and ${destinationVertex} `;

        // if sourceVertex and destinationVertex are not connected, proceed connecting them
        if (!this.findEdge(sourceVertex, destinationVertex)) {
            this.adjacencyList[sourceVertex].push({ node: destinationVertex, weight: weight });
        }
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length !== 0) {
            const adjacentVertices = this.adjacencyList[vertex].pop(); //remove connection from the vertex itself first
            this.removeEdge(adjacentVertices, vertex);  // now remove connection from the adjacentvertex
        }
        delete this.adjacencyList[vertex]; // remove from the graph
    }

    removeEdge(sourceVertex, destinationVertex) {
        if (this.findEdge(sourceVertex, destinationVertex)) { // if there's any edge at first place
            this.adjacencyList[sourceVertex] = this.adjacencyList[sourceVertex].filter((connectedVertices) => {
                return connectedVertices != destinationVertex;
            });
        } else {
            throw `There's no edge connected between ${sourceVertex} and ${destinationVertex}`;
        }
    }

    // find if there's any edges connected between two vertices
    findEdge(sourceVertex, destinationVertex) {
        let inc = this.adjacencyList[sourceVertex].some(check => check.node = destinationVertex);
        return inc;
    }
}