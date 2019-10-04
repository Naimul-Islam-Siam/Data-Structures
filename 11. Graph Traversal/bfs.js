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

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1); //if vertex1 doesn't exist, first create vertex1
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2); //if vertex2 doesn't exist, first create vertex2

        //if vertex1 and vertex2 are already connected, stop! throw an error
        if (this.adjacencyList[vertex1].includes(vertex2) || this.adjacencyList[vertex2].includes(vertex1))
            throw `There's already an edge between ${vertex1} and ${vertex2} `;

        // if vertex1 and vertex2 are not connected, proceed connecting them
        if (!this.adjacencyList[vertex1].includes(vertex2) || !this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length !== 0) {
            const adjacentVertices = this.adjacencyList[vertex].pop(); //remove connection from the vertex itself first
            this.removeEdge(adjacentVertices, vertex);  // now remove connection from the adjacentvertex
        }
        delete this.adjacencyList[vertex]; // remove from the graph
    }

    removeEdge(vertex1, vertex2) {
        if (this.findEdge(vertex1, vertex2)) { // if there's any edge at first place
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((connectedVertices) => {
                return connectedVertices !== vertex2;
            });
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((connectedVertices) => {
                return connectedVertices !== vertex1;
            });
        } else {
            throw `There's no edge connected between ${vertex1} and ${vertex2}`;
        }
    }

    // find if there's any edges connected between two vertices
    findEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1].indexOf(vertex2) !== -1) return true;
        else return false;
    }

    //traverse graph using bfs
    bfs(startVertex) {
        let result = [];
        let visited = {};
        let queue = [startVertex];

        let currentVertex;
        visited[startVertex] = true;

        while (queue.length > 0) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    queue.push(neighbour);
                    visited[neighbour] = true;
                }
            });
        }

        return result;
    }
}